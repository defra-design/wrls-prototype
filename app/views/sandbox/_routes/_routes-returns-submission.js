const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line

const fs = require('fs')
const path = require('path');

///-----------------------------------------CONSTANTS------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////



//get today's date
let date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;

const yyyy = date.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}

const todayNoFormat = `${yyyy}${mm}${dd}`;


//change the month into a name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
mm = monthNames[mm - 1]

const today = `${dd} ${mm} ${yyyy}`;


////function to change an date array in to the govuk date format. ["dd", "mm", "yyyy"]
function govukDateFormat(x) {
  let dd = x[0];
  dd = parseInt(dd, 10);
  let mm = x[1]
  mm = parseInt(mm, 10);
  let yyyy = x[2]
  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]
  return `${dd} ${mm} ${yyyy}`;
}


//Send a water abstraction alert
const folder = "sandbox/licence/returns-current/submission"


///Success messages///
//////////////////////
const successMessage = {
  "dynamicContent": "",
  "multipleVolumeUpdate": 'daily volumes have been updated</h3>',
  "singleVolumeUpdate": 'A daily volume has been updated</h3>',
  "noteUpdate": '<h3 class="govuk-notification-banner__heading">Note updated</h3>',
  "noteCreate": '<h3 class="govuk-notification-banner__heading">Note created</h3>',
  "noteDelete": '<h3 class="govuk-notification-banner__heading">Note deleted</h3>',
  "returnChanged": '<h3 class="govuk-notification-banner__heading">Return details changed</h3>',
}
let notificationTitle = ""

///-----------------------------------------FUNCTIONS------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////
///Create lines daily
function createDailyObjects(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const dateObjects = [];

  while (startDate <= endDate) {
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2,
      '0');
    const dateStr = `${year}${month}${day}`;
    
    dateObjects.push({ date: dateStr, reading: "", volume: "" });
    startDate.setDate(startDate.getDate() + 1);
  }
//console.log(dateObjects);
  return dateObjects;
}

//add readings
function populateReadings(array, objectofarrays) {
  array.forEach((reading, index) => {
    if (reading) {
      objectofarrays[index].reading = reading;
    }
  });
  return objectofarrays;
}

//add volumes
function populateVolumes(array, objectofarrays) {
  array.forEach((volume, index) => {
    if (volume) {
      objectofarrays[index].volume = volume;
    }
  });
  return objectofarrays;
}


//add volumes

function calculateVolumes(data, startReading) {
  let previousReading = startReading

  return data.map(obj => {
    const currentReading = parseInt(obj.reading, 10);
    const volume = currentReading && previousReading !== null
      ? currentReading - previousReading
      : '';

    if (currentReading) {
      previousReading = currentReading;
    }

    return {
      ...obj,
      volume: volume.toString()
    };
  });
}

//reformat strings to iso date format
function reformatDate(dateStr) {
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6);
  return `${year}-${month}-${day}`;
}


//reformat strings to gov date format
function reformatDateGov(dateStr) {
  const year = dateStr.slice(0, 4);
  let month = dateStr.slice(4, 6);
  const day = dateStr.slice(6);

  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  month = monthNames[month - 1]
  return `${day} ${month} ${year}`;
}


////convert string to array
function convertStringToNumberArray(string) {
  // Split the string into an array based on new line characters
  const lines = string.split('\n');

  // Convert each line to a number and store it in a new array
  const numberArray = lines.map(line => {
    // Remove commas and convert the string to a number
    return Number(line.replace(',', ''));
  });

  return numberArray;
}

//////////////////////
//CREATE RETURNS VERSION

function createReturnVersion(req, res) {

  //get the return

  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex

  // console.log(req.session.data.returnLines);

  let id = req.session.data.licences[licence].returns[returnID].versions.length
  let units = req.session.data.units
  let readingsOrVolumes = req.session.data.readingsOrVolumes
  let nilReturn = false;
  let lines = req.session.data.returnLines || req.session.data.lines || [];
  let submittedBy = "testuser@gov.uk";
  let submittedDate = todayNoFormat;
  let make = "";
  let serialNumber = "";
  let x10 = "";
  let startReading = "";
  let endReading = "";
  let notes = req.session.data.note;

  if (req.session.data.meterDetailsProvided == "yes") {
    make = req.session.data.make,
      serialNumber = req.session.data.serialNumber,
      x10 = req.session.data.x10
  };

  if (req.session.data.readingsOrVolumes == "readings") {
    startReading = req.session.data.startReading

    for (const [i, v] of lines.entries()) {
      //console.log(v)
      if (v.reading !== '') {
        endReading = v.reading
      }
      //console.log(endReading)
    }

  };


  let meterDetails = {
    make,
    serialNumber,
    x10,
    startReading,
    endReading,
  };

  let newReturnVersion = {
    id,
    submittedBy,
    submittedDate,
    notes,
    units,
    readingsOrVolumes,
    nilReturn,
    meterDetails,
    lines
  };

  req.session.data.licences[licence].returns[returnID].versions.unshift(newReturnVersion)

};

/////batch by month
function batchByMonth(data) {
  const groupedData = data.reduce((acc, item) => {
    const year = item.date.substring(0, 4);
    const month = item.date.substring(4, 6);
    const monthName = new Date(year, month - 1, 1).toLocaleString('en-UK', { month: 'long' });

    const key = `${month}-${year}`;

    if (!acc[key]) {
      acc[key] = { month: monthName, year, total: 0 };
    }

    acc[key].total += parseInt(item.volume);
    return acc;
  }, {});

  return Object.values(groupedData);
}


//CSV to JSON
function arrToObjectData(arrHeader, arrBody) {
  const data = arrHeader.reduce((prevValue, curValue, curIndex,
    arr) => {
    return { ...prevValue, [curValue]: arrBody[curIndex] };
  }, {});

  return data;
}


///-----------------------------------------PAGE ROUTES------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////


////download CSV


router.get('/generate-csv', (req, res) => {

  //get the return start and end dates for the period
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex

  let returnReference = req.session.data.licences[licence].returns[returnID].id

  console.log(req.session.data.licences[licence].returns[returnID].versions[0])

  const lines = req.session.data.licences[licence].returns[returnID].versions[0].lines

  let header = ""
  let dataRows = {}

  // Create a header row
  if (req.session.data.licences[licence].returns[returnID].versions[0].readingsOrVolumes == "volumes") {
    header = 'Date,Volume\n';


    dataRows = lines.map((row) => {

      // Format the date as ISO string
      let govDate = reformatDateGov(row.date)

      return `${govDate},${row.volume}\n`;
    });

  } else {
    header = 'Date,Reading,Volume\n';


    dataRows = lines.map((row) => {

      // Format the date as ISO string
      let govDate = reformatDateGov(row.date)

      return `${govDate},${row.reading},${row.volume}\n`;
    });

  }


  // Combine the header and data rows
  const csvContent = header + dataRows.join('');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=return-' + returnReference + '.csv');
  res.send(csvContent);

  res.redirect('return');

});


//What to do with the return
router.post('/returnStatus', function (req, res) {

  req.session.data.edit = "false"

  //if user only wants to mark as received and not enter data route accordingly (this is internal only)
  if (req.session.data.returnStatus == "received") {
    res.redirect('received');
  } else if (req.session.data.returnStatus == "nil") {
    res.redirect('nil-return');
  } else if (req.session.data.returnStatus == "new") {

    //get the return start and end dates for the period
    let licence = req.session.data.ID
    let returnID = req.session.data.returnIndex

    // reformat the dates to iso
    const startDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodStart);
    const endDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodEnd);

    console.log(startDate + " " + endDate);






    //copy existing return details to be edited
    if (typeof req.session.data.licences[licence].returns[returnID].versions[0] === "undefined") {
      console.log("new");
      req.session.data.make = ""
      req.session.data.serialNumber = ""
     // console.log(startDate + " " + endDate);
      req.session.data.lines = createDailyObjects(startDate, endDate);
      //console.log(req.session.data.lines);
      req.session.data.readingsOrVolumes = "volumes"
      req.session.data.units = "cm3"
      req.session.data.monthTotals = batchByMonth(req.session.data.lines)
    } else {
      console.log("edit");
      req.session.data.make = req.session.data.licences[licence].returns[returnID].versions[0].meterDetails.make
      req.session.data.serialNumber = req.session.data.licences[licence].returns[returnID].versions[0].meterDetails.serialNumber
      req.session.data.x10 = req.session.data.licences[licence].returns[returnID].versions[0].meterDetails.x10
      req.session.data.startReading = req.session.data.licences[licence].returns[returnID].versions[0].meterDetails.startReading
      req.session.data.endReading = req.session.data.licences[licence].returns[returnID].versions[0].meterDetails.endReading
      req.session.data.lines = req.session.data.licences[licence].returns[returnID].versions[0].lines
      req.session.data.readingsOrVolumes = req.session.data.licences[licence].returns[returnID].versions[0].readingsOrVolumes
      req.session.data.units = req.session.data.licences[licence].returns[returnID].versions[0].units
      req.session.data.monthTotals = req.session.data.licences[licence].returns[returnID].versions[0].monthTotals
      req.session.data.meterDetailsProvided = "yes"
    }






    res.redirect('edit/new-volumes-or-readings');
  } else {
    res.redirect('date-received');
  }


});

///enter new volumes or readings

router.get('/edit/new-volumes-or-readings', function (req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.success = 0
  req.session.data.change = "false"

  res.render(folder + '/edit/new-volumes-or-readings');
});


router.post('/edit/new-volumes-or-readings', function (req, res) {
  req.session.data.back = req.headers.referer


  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex

  req.session.data.licences[licence].returns[returnID].status = "complete"
  createReturnVersion(req, res);


  console.log(req.session.data.licences[licence].returns[returnID].versions[0].lines)

  req.session.data.licences[licence].returns[returnID].versions[0].monthTotals = batchByMonth(req.session.data.licences[licence].returns[returnID].versions[0].lines)

  console.log(req.session.data.licences[licence].returns[returnID].versions[0].monthTotals)



    //blank flow data
    req.session.data.amountsToReport = ""
    req.session.data.dateReturnReceived = ""
    req.session.data.customDateReturnReceived = ""
    req.session.data.meterDetailsProvided = ""
    req.session.data.make = ""
    req.session.data.serialNumber = ""
    req.session.data.x10 = ""
    req.session.data.line = ""
    req.session.data.lines = ""
    req.session.data.multipleMeters = ""
    req.session.data.underQuery = ""
    req.session.data.readingsOrVolumes = ""
    req.session.data.returnReceivedDate = ""
    req.session.data.customAbsStartReceived = ""
    req.session.data.customAbsEnd = ""
    req.session.data.singleVolume = ""
    req.session.data.units = ""
    req.session.data.note = ""
    req.session.data.edit = ""

  console.log("return confirmed")

  res.redirect('../return-confirmation');
});

///enter new start reading
router.get('/edit/water-abstracted-start-reading', function (req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.success = 0
  req.session.data.change = "false"

  res.render(folder + '/edit/water-abstracted-start-reading');
});


router.post('/edit/water-abstracted-start-reading', function (req, res) {
  res.redirect('new-volumes-or-readings');
});


//enter multiple readings
router.get('/edit/multiple', function (req, res) {
  req.session.data.back = req.headers.referer

  res.render(folder + '/edit/multiple');
});

router.post('/edit/multiple', function (req, res) {
  req.session.data.back = req.headers.referer


  //get the return start and end dates for the period
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex


  // reformat the dates to iso
  const startDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodStart);
  const endDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodEnd);

  //console.log(startDate + " " + endDate);


  // generate the lines
  req.session.data.returnLines = createDailyObjects(startDate, endDate);
  //console.log(req.session.data.returnLines);


  //get the multiple entries and reformat to array
  // console.log('multiple');
  // console.log(req.session.data.multiple);
  req.session.data.line = convertStringToNumberArray(req.session.data.multiple);


  //add the new readings to the return lines
  req.session.data.lines = populateVolumes(req.session.data.line, req.session.data.returnLines);

  // console.log(req.session.data.returnLines);

  //batch the return lines into monthly totals
  req.session.data.monthTotals = batchByMonth(req.session.data.lines)

  console.log(req.session.data.monthTotals);

  req.session.data.success = 1

  // successMessage.dynamicContent = req.session.data.reasonNewRequirements + "</p>"
  req.session.data.successMessage = '<h3 class="govuk-notification-banner__heading">' + req.session.data.returnLines.length + ' ' + successMessage.multipleVolumeUpdate
  notificationTitle = "Updated"
  req.session.data.notificationTitle = notificationTitle
  console.log("success message")

  res.redirect('new-volumes-or-readings');
});

/////////////////
///enter new individual volumes
router.get('/edit/water-abstracted-volumes', function (req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.success = 0

  res.render(folder + '/edit/water-abstracted-volumes');
});

router.post('/edit/water-abstracted-volumes', function (req, res) {
  req.session.data.back = req.headers.referer

  //add readings from form array
  //console.log(req.session.data.line);
  //req.session.data.returnLines = populateVolumes(req.session.data.line, req.session.data.returnLines);
  //console.log(req.session.data.returnLines);

  req.session.data.success = 1

  // successMessage.dynamicContent = req.session.data.reasonNewRequirements + "</p>"
  req.session.data.successMessage = '<h3 class="govuk-notification-banner__heading">' + successMessage.singleVolumeUpdate
  notificationTitle = "Updated"
  req.session.data.notificationTitle = notificationTitle
  console.log("success message")

  res.redirect('new-volumes-or-readings');
});

/////Edit return through uploading a new version

router.get('/edit/upload', function (req, res) {
  req.session.data.back = req.headers.referer


  res.render(folder + '/edit/upload');
});






router.post('/edit/upload', function (req, res) {

  ///I think the prototype kit has a bug where it doesn't handle uploaded files currently



  /*
  
    const userDataReadStream = fs.createReadStream(`${process.cwd()}/app/assets/files/uploads/return772318.csv`);
  
  // ...
  let rawData = ``;
  
  userDataReadStream.on("data", (data) => {
     rawData += data;
  });
  
  // ...
  userDataReadStream.on("end", () => {
    const arrayData = rawData.split("\n");
    const [stringHeadData, ...arrayBodyData] = arrayData;
    const arrayHeadData = stringHeadData.split(",");
    const bodyDatas = arrayBodyData.map((body) => body.split(","));
  
      // Create empty array to put all our data object
      const userData = [];
  
      // Loop through the BODY array and pass the array at each index to our arrToObjectData method then push it back to our userData empty array variable
      for (let i = 0; i < bodyDatas.length; i++) {
        userData.push(arrToObjectData(arrayHeadData, bodyDatas[i]));
      }
   
      req.session.data.returnLines = userData
  
      // log the array out
      console.log(req.session.data.returnLines);
  });
  
  */


  res.redirect('../check-your-answers');
});

/////Marking it as received but not adding readings

router.get('/received', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/received');
});

router.post('/received', function (req, res) {

  //Mark the return as received
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex
  req.session.data.licences[licence].returns[returnID].status = "received"

  req.session.data.returnSubmissionStatus = "received"

  res.redirect('return-confirmation');
});


///confirmation return has been received 
router.get('/return-confirmation', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/return-confirmation');
});


/////////////Submitting a return

////This is quite a confusing flow with routing, see mural for a map of the flow

/// Get the date when the return was received
router.get('/date-received', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/date-received');
});

router.post('/date-received', function (req, res) {
  res.redirect('amounts-to-report');
});


/// Is this a nill return?
router.get('/amounts-to-report', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/amounts-to-report');
});

router.post('/amounts-to-report', function (req, res) {

  //If nill return route accordingly
  if (req.session.data.amountsToReport == "no") {
    res.redirect('nil-return');
  } else {
    res.redirect('readings-or-volumes');
  }

});

/// submit nill return
router.get('/nil-return', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/nil-return');
});

router.post('/nil-return', function (req, res) {

  //get the return start and end dates for the period
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex

  req.session.data.licences[licence].returns[returnID].status = "complete"
  createReturnVersion(req, res);

  req.session.data.licences[licence].returns[returnID].versions[0].nilReturn = true
  console.log(req.session.data.licences[licence].returns[returnID].versions);

  res.redirect('return-confirmation');
});


/// Are readings or volumes being reported?
router.get('/readings-or-volumes', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/readings-or-volumes');
});

router.post('/readings-or-volumes', function (req, res) {
  if (req.session.data.change == "true") {
    //updating success banner
    req.session.data.success = 1
    //create the success banner
    req.session.data.successMessage = successMessage.returnChanged
    notificationTitle = "Changed"
    req.session.data.notificationTitle = notificationTitle

    res.redirect('edit/new-volumes-or-readings');
  } else {
    res.redirect('units');
  }
});

/// Units used?
router.get('/units', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/units');
});

router.post('/units', function (req, res) {
  if (req.session.data.change == "true") {
    //updating success banner
    req.session.data.success = 1
    //create the success banner
    req.session.data.successMessage = successMessage.returnChanged
    notificationTitle = "Changed"
    req.session.data.notificationTitle = notificationTitle

    res.redirect('edit/new-volumes-or-readings');
  } else {
    res.redirect('meter-details-provided');
  }
});


//Have meter details been provided?
router.get('/meter-details-provided', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/meter-details-provided');
});

router.post('/meter-details-provided', function (req, res) {

  //if meter details provided route accordingly
  if (req.session.data.meterDetailsProvided == "yes") {
    res.redirect('meter-details');
  } else if (req.session.data.readingsOrVolumes == "volumes") {
    res.redirect('multiple-meters');
  } else {
    //get the return start and end dates for the period
    let licence = req.session.data.ID
    let returnID = req.session.data.returnIndex


    // reformat the dates to iso
    const startDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodStart);
    const endDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodEnd);

    console.log(startDate + " " + endDate);


    // generate the lines
    req.session.data.returnLines = createDailyObjects(startDate, endDate);
    console.log(req.session.data.returnLines);


    res.redirect('meter-readings');
  }



});

//Have multiple meters been used in this return period?
router.get('/multiple-meters', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/multiple-meters');
});

router.post('/multiple-meters', function (req, res) {
  res.redirect('single-volume');
});

//Is it a single volume?
router.get('/single-volume', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/single-volume');
});

router.post('/single-volume', function (req, res) {

  if (req.session.data.singleVolume == "yes") {
    res.redirect('single-volume-period');
  } else {

    //get the return start and end dates for the period
    let licence = req.session.data.ID
    let returnID = req.session.data.returnIndex


    // reformat the dates to iso
    const startDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodStart);
    const endDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodEnd);

    console.log(startDate + " " + endDate);


    // generate the lines
    req.session.data.returnLines = createDailyObjects(startDate, endDate);
    console.log(req.session.data.returnLines);


    res.redirect('volumes');
  }
});

//What period was used for the single volume?
router.get('/single-volume-period', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/single-volume-period');
});

router.post('/single-volume-period', function (req, res) {
  //get the return start and end dates for the period
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex


  // reformat the dates to iso
  const startDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodStart);
  const endDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodEnd);

  console.log(startDate + " " + endDate);


  // generate the lines
  req.session.data.returnLines = createDailyObjects(startDate, endDate);
  console.log(req.session.data.returnLines);


  res.redirect('volumes');
});


//volumes
router.get('/volumes', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/volumes');
});

router.post('/volumes', function (req, res) {

  //add readings from form array
  //console.log(req.session.data.line);
  req.session.data.returnLines = populateVolumes(req.session.data.line, req.session.data.returnLines);
  //console.log(req.session.data.returnLines);

  res.redirect('check-your-answers');
});

/// meter details
router.get('/meter-details', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/meter-details');
});

router.post('/meter-details', function (req, res) {

  if (req.session.data.change == "true") {
    //updating success banner
    req.session.data.success = 1
    //create the success banner
    req.session.data.successMessage = successMessage.returnChanged
    notificationTitle = "Changed"
    req.session.data.notificationTitle = notificationTitle

    res.redirect('edit/new-volumes-or-readings');
  } else {

    //meter readings routes differently for volumes and readings  
    if (req.session.data.readingsOrVolumes == "readings") {


      //get the return start and end dates for the period
      let licence = req.session.data.ID
      let returnID = req.session.data.returnIndex


      // reformat the dates to iso
      const startDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodStart);
      const endDate = reformatDate(req.session.data.licences[licence].returns[returnID].returnsPeriodEnd);

      console.log(startDate + " " + endDate);


      // generate the lines
      req.session.data.returnLines = createDailyObjects(startDate, endDate);
      console.log(req.session.data.returnLines);


      res.redirect('meter-readings');
    } else {

      res.redirect('single-volume');

    }
  }

});

/// meter readings
router.get('/meter-readings', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/meter-readings');
});

router.post('/meter-readings', function (req, res) {

  console.log(req.session.data.line);

  //add readings from form array
  req.session.data.returnLines = populateReadings(req.session.data.line, req.session.data.returnLines);
  console.log(req.session.data.returnLines);


  let startReading = req.session.data.startReading
  //calculate volumes
  req.session.data.returnLines = calculateVolumes(req.session.data.returnLines, startReading);


  console.log(req.session.data.returnLines);

  res.redirect('check-your-answers');
});


/// meter readings
router.get('/check-your-answers', function (req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/check-your-answers');
});

router.post('/check-your-answers', function (req, res) {


  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex

  req.session.data.licences[licence].returns[returnID].status = "complete"
  createReturnVersion(req, res);


  console.log(req.session.data.licences[licence].returns[returnID].versions[0].lines)

  req.session.data.licences[licence].returns[returnID].versions[0].monthTotals = batchByMonth(req.session.data.licences[licence].returns[returnID].versions[0].lines)

  console.log(req.session.data.licences[licence].returns[returnID].versions[0].monthTotals)


  //blank flow data
  req.session.data.amountsToReport = ""
  req.session.data.dateReturnReceived = ""
  req.session.data.customDateReturnReceived = ""
  req.session.data.meterDetailsProvided = ""
  req.session.data.make = ""
  req.session.data.serialNumber = ""
  req.session.data.x10 = ""
  req.session.data.line = ""
  req.session.data.lines = ""
  req.session.data.multipleMeters = ""
  req.session.data.underQuery = ""
  req.session.data.readingsOrVolumes = ""
  req.session.data.returnReceivedDate = ""
  req.session.data.customAbsStartReceived = ""
  req.session.data.customAbsEnd = ""
  req.session.data.singleVolume = ""
  req.session.data.units = ""
  req.session.data.note = ""
  req.session.data.edit = ""



  res.redirect('return-confirmation');
});


///ADD A NOTE

/// Enter a note
router.get('/edit/add-a-note', function (req, res) {
  req.session.data.back = req.headers.referer

  if (req.session.data.note == "") {
    req.session.data.newNote = true
  } else {
    req.session.data.newNote = false
  }

  res.render(folder + '/edit/add-a-note');
});

router.post('/edit/add-a-note', function (req, res) {




  //get the licence info
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex





  //updating success banner
  req.session.data.success = 1

  //console.log(req.session.data.newNote)

  if (req.session.data.newNote == false) {
    //If there is already a note success banner says updated
    req.session.data.successMessage = successMessage.noteUpdate
    notificationTitle = "Updated"
    req.session.data.notificationTitle = notificationTitle


  } else {
    //create the success banner
    req.session.data.successMessage = successMessage.noteCreate
    notificationTitle = "Added"
    req.session.data.notificationTitle = notificationTitle
  }


  res.redirect('/' + folder + '/edit/new-volumes-or-readings');


});

/////Delete a note
router.get('/edit/delete-note', function (req, res) {
  req.session.data.back = req.headers.referer

  //get the licence info
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex

  //updating success banner -- This is originally done through the URL for deleting a note
  req.session.data.success = 1
  req.session.data.successMessage = successMessage.noteDelete
  req.session.data.notificationTitle = "Deleted"
  //create the success banner - This is set in the URL params for deleting a note, see notes include line 31
  req.session.data.note = ""

  res.redirect('/' + folder + '/edit/new-volumes-or-readings');
});


module.exports = router
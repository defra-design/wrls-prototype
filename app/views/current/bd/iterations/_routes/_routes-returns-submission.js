const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line


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
 function govukDateFormat (x){
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
   "dynamicContent":      "",
   "reasonUpdate":        '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
   "startDateUpdate":     '<h3 class="govuk-notification-banner__heading">Changes updated</h3>',
   "additionalSubmissionOptions":     '<h3 class="govuk-notification-banner__heading">Changes updated</h3>',
   "requirementUpdate":   '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
   "requirementCreate":   '<h3 class="govuk-notification-banner__heading">New requirement added</h3>',
   "requirementRemove":   '<h3 class="govuk-notification-banner__heading">Requirement removed</h3>',
   "noteUpdate":          '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
   "noteCreate":          '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
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

//////////////////////
//CREATE RETURNS VERSION

function createReturnVersion(req,res) {

  //get the return
  
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex


  let id = req.session.data.licences[licence].returns[returnID].versions.length
  let nilReturn = false;
  let lines = req.session.data.returnLines || [];
  let submittedBy = "testuser@gov.uk";
  let submittedDate = todayNoFormat;
 let make = "";
 let serialNumber = "";
 let x10 = "";
  
  if (req.session.data.meterDetailsProvided == "yes" ) {
       make = req.session.data.make,
       serialNumber = req.session.data.serialNumber,
       x10 = req.session.data.x10
  };

  let meterDetails = {
       make,
       serialNumber,
       x10,
  };

  let newReturnVersion = {
    id,
    submittedBy,
    submittedDate,
    nilReturn,
    meterDetails,
    lines
  };

  req.session.data.licences[licence].returns[returnID].versions.unshift(newReturnVersion)

};




///-----------------------------------------PAGE ROUTES------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////


//What to do with the return
router.post('/returnStatus', function(req, res) {

  req.session.data.edit = "false"

  //if user only wants to mark as received and not enter data route accordingly (this is internal only)
  if(req.session.data.returnStatus == "received"){
    res.redirect('received');
  } else {
    res.redirect('date-received');
  }
  

});


/////Marking it as received but not adding readings

router.get('/received', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/received');
});

router.post('/received', function(req, res) {

   //Mark the return as received
   let licence = req.session.data.ID
   let returnID = req.session.data.returnIndex
   req.session.data.licences[licence].returns[returnID].status = "received" 

   req.session.data.returnSubmissionStatus = "received"

  res.redirect('return-confirmation');
});


///confirmation return has been received 
router.get('/return-confirmation', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/return-confirmation');
});


/////////////Submitting a return

////This is quite a confusing flow with routing, see mural for a map of the flow

/// Get the date when the return was received
router.get('/date-received', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/date-received');
});

router.post('/date-received', function(req, res) {
 res.redirect('amounts-to-report');
});


/// Is this a nill return?
router.get('/amounts-to-report', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/amounts-to-report');
});

router.post('/amounts-to-report', function(req, res) {

  //If nill return route accordingly
  if(req.session.data.amountsToReport == "no"){
    res.redirect('nil-return');
  } else {
    res.redirect('readings-or-volumes');
  }
 
});

/// submit nill return
router.get('/nil-return', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/nil-return');
});

router.post('/nil-return', function(req, res) {

//get the return start and end dates for the period
let licence = req.session.data.ID
let returnID = req.session.data.returnIndex

req.session.data.licences[licence].returns[returnID].status = "complete"
createReturnVersion(req,res);


 let versionIndex = req.session.data.licences[licence].returns[returnID].versions.length - 1
 console.log( req.session.data.licences[licence].returns[returnID].versions);
 req.session.data.licences[licence].returns[returnID].versions[versionIndex].nilReturn = true


    res.redirect('return-confirmation');
});


/// Are readings or volumes being reported?
router.get('/readings-or-volumes', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/readings-or-volumes');
});

router.post('/readings-or-volumes', function(req, res) {
 res.redirect('units');
});

/// Units used?
router.get('/units', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/units');
});

router.post('/units', function(req, res) {
 res.redirect('meter-details-provided');
});


//Have meter details been provided?
router.get('/meter-details-provided', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/meter-details-provided');
});

router.post('/meter-details-provided', function(req, res) {

  //if meter details provided route accordingly
  if (req.session.data.meterDetailsProvided == "yes"){
    res.redirect('meter-details');
  } else if ( req.session.data.readingsOrVolumes == "volumes") {
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
router.get('/multiple-meters', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/multiple-meters');
});

router.post('/multiple-meters', function(req, res) {
    res.redirect('single-volume');
});

//Is it a single volume?
router.get('/single-volume', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/single-volume');
});

router.post('/single-volume', function(req, res) {

  if ( req.session.data.singleVolume == "yes") {
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
router.get('/single-volume-period', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/single-volume-period');
});

router.post('/single-volume-period', function(req, res) {
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
router.get('/volumes', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/volumes');
});

router.post('/volumes', function(req, res) {

   //add readings from form array
   req.session.data.returnLines = populateVolumes(req.session.data.line, req.session.data.returnLines);
   console.log(req.session.data.returnLines);

    res.redirect('check-your-answers');
});

/// meter details
router.get('/meter-details', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/meter-details');
});

router.post('/meter-details', function(req, res) {

//meter readings routes differently for volumes and readings  
if ( req.session.data.readingsOrVolumes == "readings") {


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


});

/// meter readings
router.get('/meter-readings', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/meter-readings');
});

router.post('/meter-readings', function(req, res) {

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
router.get('/check-your-answers', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/check-your-answers');
});

router.post('/check-your-answers', function(req, res) {

   
  let licence = req.session.data.ID
  let returnID = req.session.data.returnIndex

  req.session.data.licences[licence].returns[returnID].status = "complete"
  createReturnVersion(req,res);

 res.redirect('return-confirmation');
});


module.exports = router
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line

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

//change the month into a name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
mm = monthNames[mm - 1]

const today = `${dd} ${mm} ${yyyy}`;


//Function to create the data
function createData(req,res){
  //create SRoC bill data
 // req.session.data.chargeInfoWorkflow = require('../_data/chargeInfoWorkflow-data.js').chargeInfoWorkflow
  //create returns version data
 // req.session.data.returnRequirements = require('../_data/returns-requirements.js').returnsRequirements;
  //create charge information data
 // req.session.data.srocChargeInformation = require('../_data/sroc-charge-information.js').srocChargeInformation;
  //create bill run data
//  req.session.data.billRunData = require('../_data/billRunData.js').billRunData;
  //create TPT bill run data
  //req.session.data.billRunDataTpTReview = require('../_data/billRunDataTpTReview.js').billRunDataTpTReview;
  req.session.data.billRunDataTpTReview = require('../current/bd/iterations/_data/TpT.js').billRunDataTpTReview;

  //redirect
  req.session.data.sprint = req.originalUrl.split('/')[1]
  res.redirect(req.originalUrl)
};

//Create Sprint data if not already created
router.use('/', (req, res, next) => {
  if (req.session.data.sprint !== req.originalUrl.split('/')[1]) {
    console.log(req.originalUrl)
  createData(req,res);
} else {
  next();
  }
});

//----------------------------------------------------------------
////RETURNS ROUTES
//View a requirement
router.use('/bd/licence/returns', require('./_routes/_routes-returns-requirements-current'));

//----------------------------------------------------------------
////BILL RUN ROUTES
//CREATE BILL RUN

router.use('/bd/iterations/bill-runs', require('./bd/iterations/_routes/_routes-bill-runs'));

///MANUALL BILLING ROUTE
router.use('/bd/iterations/manual-billing', require('./bd/iterations/_routes/_routes-manual-billing'));


///RETURN SUBMISSIONS ROUTE
router.use('/bd/licence/returns/submission', require('./bd/iterations/_routes/_routes-returns-submission'));

///SROC ROUTE
router.use('/bd/iterations/sroc', require('./bd/iterations/_routes/_routes-sroc'));


///NOTICES ROUTE
router.use('/bd/iterations/licence-notices', require('./bd/iterations/_routes/_routes-notices'));


/////create bill runs

//Create Supplementary
router.get('/bd/charges-2020/supplementary-charges-load', function(req, res) {

  req.session.data.back = req.headers.referer

  //create a bill run
  function createBillRun(){

    let billRuns = req.session.data.billRuns
    let date = today
    let createdYear = yyyy
    let region = req.originalUrl.split(/(?<==)(.*?)(?=&)/g, )[1].replace("%20", " ")
    let runType = "supplementary"


    let newBillrun = {
      sroc,
      date,
      createdYear,
      number,
      region,
      runType,
      bills,
      value,
      status
    };
    billRuns.unshift(newBillrun);
  }


  //create two bill runs together and on refresh amend the second bill run to ready
  let suppRefresh = req.session.data.suppRefresh

  if (suppRefresh == 1) {
    req.session.data.suppRefresh = 0
    req.session.data.billRuns[0].status = "ready"
    req.session.data.billRuns[0].bills = "7"
    req.session.data.billRuns[0].value = "6,537.75"
    } else {
      req.session.data.suppRefresh = 1
      createBillRun(status = "ready", number = Math.floor(100000 + Math.random() * 900000), bills = "5", value = "11,537.75", sroc = false)
      createBillRun(status = "building", number = number + 1, bills = "-", value = "-", sroc = true)
    }

  //create SRoC bill data
  req.session.data.allBills = require('../current/includes/bd/data/bills-data.js').allBills;


  res.render('current/bd/charges-2020/supplementary-charges-load');

});

//Create Annual
router.get('/bd/charges-2020/annual-charges-load', function(req, res) {

  req.session.data.back = req.headers.referer

  let date = today
  let createdYear = yyyy
  let number = Math.floor(100000 + Math.random() * 900000)
  req.session.data.billRunNumber = number
  let region = req.originalUrl.split(/(?<==)(.*?)(?=&)/g, )[1].replace("%20", " ")
  let runType = "annual"
  let bills = "857"
  let value = "512,468.00"
  let status = "ready"

  let newBillrun = {
    date,
    createdYear,
    number,
    region,
    runType,
    bills,
    value,
    status
  };

  let billRuns = req.session.data.billRuns
  billRuns.unshift(newBillrun);

  res.render('current/bd/charges-2020/annual-charges-load');

});


//Create Two-part tariff
router.get('/bd/charges-2020/two-part-charges-load', function(req, res) {

  req.session.data.back = req.headers.referer

  let date = today

  let createdYear = yyyy
  if(req.session.data.chargeScheme == "old"){ createdYear = "2020" }
  let number = Math.floor(100000 + Math.random() * 900000)
  req.session.data.billRunNumber = number
  let region = req.originalUrl.split(/(?<==)(.*?)(?=&)/g, )[1].replace("%20", " ")
  let runType = "two-part tariff"
  let bills = "-"
  let value = "-"
  let status = "review"

  let newBillrun = {
    date,
    createdYear,
    number,
    region,
    runType,
    bills,
    value,
    status
  };

  let billRuns = req.session.data.billRuns
  billRuns.unshift(newBillrun);

  res.render('current/bd/charges-2020/two-part-charges-load');

});

//Create Two-part tariff SRoC

router.get('/bd/charges-2020/sroc-two-part-charges-load', function(req, res) {

  req.session.data.back = req.headers.referer

  let date = today
  let createdYear = yyyy
  let number = Math.floor(100000 + Math.random() * 900000)
  req.session.data.billRunNumber = number
  let region = "wales"
  let runType = "two-part tariff"
  let bills = "-"
  let value = "-"
  let status = "review"

  let newBillrun = {
    date,
    createdYear,
    number,
    region,
    runType,
    bills,
    value,
    status
  };

  let billRuns = req.session.data.billRuns
  billRuns.unshift(newBillrun);

  res.redirect('/current/bd/charges-2020/bill-runs');

});


//Move Two-part tariff into Ready
router.get('/bd/charges-2020/two-part-charges-create-load', function(req, res) {

  req.session.data.back = req.headers.referer



  function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

let billRunIndex = parseInt(req.session.data.billRunIndex)
let billRun = req.session.data.billRuns[billRunIndex]

billRun.bills = "977"
billRun.value = "512,460.00"
billRun.status = "ready"


  res.render('current/bd/charges-2020/two-part-charges-create-load');

});




///SENDING BILL RUN
router.get('/bd/charges-2020/sending-bill-run', function(req, res) {

  billRunIndex = parseInt(req.session.data.billRunIndex)

  billRuns = req.session.data.billRuns

  billRuns[billRunIndex].status = "sent"

  res.render('current/bd/charges-2020/sending-bill-run');

});




///CANCELLING BILL RUN
router.get('/bd/charges-2020/cancelling-bill-run', function(req, res) {

  billRunIndex = parseInt(req.session.data.billRunIndex)

  billRuns = req.session.data.billRuns

  billRuns[billRunIndex].status = "error"

  res.render('current/bd/charges-2020/cancelling-bill-run');

});


/////////////////////////Bill runs
  ///Apply  filters

  router.post('/bd/charges-2020/bill-runs/apply-filters', function(req, res) {

    //check to see if the user is clearing filters
    if (req.session.data.clearFilters == "true") {

      req.session.data.runType = ""
      req.session.data.region = ""
      req.session.data.status = ""
      req.session.data.createdYear = ""
      req.session.data.filteredResults = ""
      req.session.data.openDetails = true
      //reset the table caption if the list is cleared
      req.session.data.filterCaption = "Showing all bill runs."
  //    req.session.data.focus="alert"

    } else {


    //get the list of bill runs
    let  billRuns = req.session.data.billRuns


  //set global scope of filteredResults
  let filteredResults = ""

  //set the type filter
  let typeFilters = ""
   typeFilters = req.session.data.runType

   if (typeof typeFilters === 'undefined') {
     typeFilters= ""
   }

   if (typeof typeFilters.length) {
     filteredResults = billRuns.filter(el => ( typeFilters.indexOf(el.runType) >= 0 ))
   }

   //set the region filter
   let regionFilters = ""
    regionFilters = req.session.data.region
    if (typeof regionFilters === 'undefined') {
      regionFilters= ""
    }

   if ((regionFilters.length) && (filteredResults.length)) {
      filteredResults = filteredResults.filter(el => ( regionFilters.indexOf(el.region) >= 0 ))

    } else if (regionFilters.length) {
      filteredResults = billRuns.filter(el => ( regionFilters.indexOf(el.region) >= 0 ))
    }


    //set the status filter
    let statusFilters = ""
     statusFilters = req.session.data.status
     if (typeof statusFilters === 'undefined') {
       statusFilters= ""
     }

    if ((regionFilters.length || typeFilters.length) && (!filteredResults.length))
   { } else {

    if ((statusFilters.length) && (filteredResults.length)) {
       filteredResults = filteredResults.filter(el => ( statusFilters.indexOf(el.status) >= 0 ))
     } else if (statusFilters.length) {
       filteredResults = billRuns.filter(el => ( statusFilters.indexOf(el.status) >= 0 ))
     }
    }

     //set the created year filter
      let createdYearFilter = ""
       createdYearFilter = req.session.data.createdYear
      if (createdYearFilter === 'undefined') {
         createdYearFilter = ""
       }

      if ((createdYearFilter.length) && (filteredResults.length)) {
        filteredResults = filteredResults.filter(el => (createdYearFilter.indexOf(el.createdYear) >=0 ) );
      } else if (createdYearFilter.length) {
        filteredResults = billRuns.filter(el => (createdYearFilter.indexOf(el.createdYear) >=0 ) );
      }


    //set filtered results to empty if filters doesn't return anything
      if (!Array.isArray(filteredResults) || !filteredResults.length){
        filteredResults = "empty"
      }


  req.session.data.openDetails = true
  //req.session.data.focus="alert"

  //Create a list formatter
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

  //Create the list depending on what filters are selected
  let list = []
  if (typeFilters.length){
    list.push(typeFilters)
  }
  if (regionFilters.length){
    list.push(regionFilters.replace(/\b(\w)/g, s => s.toUpperCase()))
  }
  if (statusFilters.length){
    list.push(statusFilters)
  }
  if (createdYearFilter.length) {
    list.push(createdYearFilter)
  }

  //set the dynamic caption for the table
  if (list.length) {
  req.session.data.filterCaption = "Showing bill runs filtered by " + formatter.format(list) + "."
  } else {
    req.session.data.filterCaption = "Showing all bill runs."
  }

  req.session.data.filteredResults = filteredResults

  }

    req.session.data.clearFilters = ""
    res.redirect('../bill-runs#caption');

  });


  ///clear filters

  router.post('/bill-runs-filtered/clear-filters', function(req, res) {


    //reset the table caption if the list is cleared
    req.session.data.filterCaption = "Showing all sent notices."


    res.redirect('/bd/charges-2020/bill-runs-filtered/apply-filters#focus');
  });




/////Reason for new charge version
//Setting the change element route back
router.get('/current/bd/charges-2020/add-new-reason', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('current/bd/charges-2020/add-new-reason');

});




router.post('/bd/charges-2020/add-new-reason', function(req, res) {

  let chargeNew = req.session.data['createElement']
  let change = req.session.data['change']
  let noCharge = req.session.data['reasonNewCharge']
  //if statement for creating the new chargeversion
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else if (noCharge == "Make this licence non-chargeable") {
    res.redirect('/bd/charges-2020/add-reason');
  } else {
    req.session.data['reasonNewSet'] = "true"
    res.redirect('/bd/charges-2020/charge-version/set-charge-start-date');
  }

});



//Charge start date
//This triggers the creation of a charge version
router.post('/bd/charges-2020/charge-version/set-charge-start-date', function(req, res) {

  //setting the date of charge start incorporating the radio buttons
  let chargeDateConditional = req.session.data['chargeDateConditional'];
  if (chargeDateConditional == "licenceStart") {
    req.session.data['chargeStart-day'] = 1
    req.session.data['chargeStart-month'] = 4
    req.session.data['chargeStart-year'] = 2022
  }

  else if (chargeDateConditional != "other") {

    let d = new Date();
    let m = new Date();
    let y = new Date();
    req.session.data['chargeStart-day'] = d.getDate();
    req.session.data['chargeStart-month'] = m.getMonth() + 1;
    req.session.data['chargeStart-year'] = y.getFullYear();
  }

  // date fields
  let chargeStartDay = req.session.data['chargeStart-day'];
  let chargeStartMonth = req.session.data['chargeStart-month'];
  let chargeStartYear = req.session.data['chargeStart-year'];

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthNumber = chargeStartMonth
  let month = monthNames[monthNumber - 1]

  //set the charge start date
  let chargeStart = chargeStartDay + " " + month + " " + chargeStartYear

  let change = req.session.data['change']

  if (change == "true") {

    req.session.data.chargeVersions[0]['chargeStart'] = chargeStart

    req.session.data['chargeStartSet'] = "true"
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);


  } else {



    //trigger for new element
    let chargeNew = req.session.data['createElement']


    let chargeEnd = ""
    let chargeStatus = "DRAFT"
    let chargeBilledDate = ""
    let free = "false"
    let reasonNewCharge = req.session.data['reasonNewCharge']

    let newCharge = {
      chargeStart,
      chargeEnd,
      chargeStatus,
      chargeBilledDate,
      free,
      reasonNewCharge
    };
    let chargeVersions = req.session.data['chargeVersions']
    chargeVersions.unshift(newCharge);


    //if statement for creating the new chargeversion
    //  if (chargeNew == "true") {
    //    res.redirect('/bd/charges-2020/charge-version/how-to-create-element');
    //  } else {
    //    req.session.data['chargeStartSet']  = "true"
    //    res.redirect('charge-data-create');
    //  }

    req.session.data['chargeStartSet'] = "true"
    res.redirect('/bd/contacts/select-billing-account?existingContact=false');
  }



});



//Purpose
//Setting the change element route back
router.get('/current/bd/charges-2020/add-element-purpose', function(req, res) {

  req.session.data.back = req.headers.referer


  res.render('bd/charges-2020/add-element-purpose');

});

//Purpose
//This triggers the creation of a charge element
router.post('/bd/charges-2020/add-element-purpose', function(req, res) {

  let elementNew = req.session.data['elementNew']
  let purpose = req.session.data['purpose']
  let elementNumber = req.session.data['elementNumber']

  if (elementNew == "true" && elementNumber > "0") {
    let newElement = {
      purpose
    };
    let elements = req.session.data['elements']
    elements.push(newElement);
  }

  let change = req.session.data['change']

  if (change == "true") {
    req.session.data.elements[elementNumber]['purpose'] = purpose
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-element-description');
  }

});


//description
//Setting the change element route back
router.get('/bd/charges-2020/add-element-description', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('current/bd/charges-2020/add-element-description');

});

//Description
router.post('/bd/charges-2020/add-element-description', function(req, res) {

  let description = req.session.data['description']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['description'] = description

  let change = req.session.data['change']
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-abstraction-period');
  }

});

//Abstraction period
//Setting the change element route back
router.get('/current/bd/charges-2020/add-abstraction-period', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-abstraction-period');

});

//Abstraction period
router.post('/bd/charges-2020/add-abstraction-period', function(req, res) {

  let abstractionStartDay = req.session.data['abstractionStartDay'];
  let abstractionStartMonth = req.session.data['abstractionStartMonth'];
  let abstractionEndDay = req.session.data['abstractionEndDay'];
  let abstractionEndMonth = req.session.data['abstractionEndMonth'];

  let elementNumber = req.session.data['elementNumber']

  req.session.data.elements[elementNumber]['abstractionStartDay'] = abstractionStartDay
  req.session.data.elements[elementNumber]['abstractionStartMonth'] = abstractionStartMonth
  req.session.data.elements[elementNumber]['abstractionEndDay'] = abstractionEndDay
  req.session.data.elements[elementNumber]['abstractionEndMonth'] = abstractionEndMonth


  let change = req.session.data['change']
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-authorised-quantity');
  }

});


//Authorised quantity
//Setting the change element route back
router.get('/current/bd/charges-2020/add-authorised-quantity', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-authorised-quantity');

});

//Authorised quantity
router.post('/bd/charges-2020/add-authorised-quantity', function(req, res) {

  let authorisedQuantity = req.session.data['authorisedQuantity']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['authorisedQuantity'] = authorisedQuantity

  let billableQuantity = req.session.data['billableQuantity']
  req.session.data.elements[elementNumber]['billableQuantity'] = billableQuantity

  if (billableQuantity > "0" ) {
  req.session.data.elements[elementNumber]['billableQuantityNeeded'] = "yes"
  } else {
  req.session.data.elements[elementNumber]['billableQuantityNeeded'] = "no"
  }

  let change = req.session.data['change']
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-time-limit');
  }

});

/* THIS PAGE ISN'T USED ANYMORE - incorporated in to the authorised page above
//Billable quantity
//Setting the change element route back
router.get('/current/bd/charges-2020/add-billable-quantity', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-billable-quantity');

});

//Billable quantity
router.post('/bd/charges-2020/add-billable-quantity', function(req, res) {

  let billableQuantity = req.session.data['billableQuantity']
  let billableQuantityNeeded = req.session.data['billableQuantityNeeded']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['billableQuantity'] = billableQuantity
  req.session.data.elements[elementNumber]['billableQuantityNeeded'] = billableQuantityNeeded

  let change = req.session.data['change']
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-time-limit');
  }

});
*/

//Time limit
//Setting the change element route back
router.get('/current/bd/charges-2020/add-time-limit', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('current/bd/charges-2020/add-time-limit');

});


//Time limit
router.post('/bd/charges-2020/add-time-limit', function(req, res) {

  let timeLimit = req.session.data['timeLimit']

  let timeLimitStartDay = req.session.data['timeLimitStart-day'];
  let timeLimitStartMonth = req.session.data['timeLimitStart-month'];
  let timeLimitStartYear = req.session.data['timeLimitStart-year'];

  let timeLimitDay = req.session.data['timeLimit-day'];
  let timeLimitMonth = req.session.data['timeLimit-month'];
  let timeLimitYear = req.session.data['timeLimit-year'];

  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['timeLimit'] = timeLimit
  req.session.data.elements[elementNumber]['timeLimitStartDay'] = timeLimitStartDay;
  req.session.data.elements[elementNumber]['timeLimitStartMonth'] = timeLimitStartMonth;
  req.session.data.elements[elementNumber]['timeLimitStartYear'] = timeLimitStartYear;
  req.session.data.elements[elementNumber]['timeLimitDay'] = timeLimitDay;
  req.session.data.elements[elementNumber]['timeLimitMonth'] = timeLimitMonth;
  req.session.data.elements[elementNumber]['timeLimitYear'] = timeLimitYear;

  let change = req.session.data['change']
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-source');
  }

});


//Source
//Setting the change element route back
router.get('/current/bd/charges-2020/add-source', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-source');

});



//Source
router.post('/bd/charges-2020/add-source', function(req, res) {

  let source = req.session.data['source']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['source'] = source

  let change = req.session.data['change']
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-season');
  }

});

//Season
//Setting the change element route back
router.get('/current/bd/charges-2020/add-season', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-season');

});



//Season
router.post('/bd/charges-2020/add-season', function(req, res) {

  let season = req.session.data['season']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['season'] = season

  let change = req.session.data['change']
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else {
    res.redirect('add-loss');
  }

});


//Loss
//Setting the change element route back
router.get('/current/bd/charges-2020/add-loss', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-loss');

});


//Loss
router.post('/bd/charges-2020/add-loss', function(req, res) {

  let loss = req.session.data['loss']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['loss'] = loss


  let change = req.session.data['change']
  let chargeStatus = req.session.data.chargeVersions[0]['chargeStatus']
  let sroc = req.session.data['sroc']

  if (sroc == "true") {
    res.redirect('/bd/iterations/sroc/create-charge-information/charge-data-check?change=false');
  } else {

  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  } else if (chargeStatus == "DRAFT") {
    res.redirect('/bd/charges-2020/charge-version/charge-data-check?change=false');
  } else {
    res.redirect('/bd/charges-2020/charge-version?chargeInfoNumber=0&change=false');
  }

  }

});

//Copy element
router.get('/current/bd/charges-2020/charge-version/confirm-copy-element', function(req, res) {


  let elementCopy = req.session.data['elementCopy']
  let elementNumber = req.session.data['elementNumber']

  let purpose = req.session.data.elements[elementNumber]['purpose']
  let description = req.session.data.elements[elementNumber]['description']
  let abstractionStartDay = req.session.data.elements[elementNumber]['abstractionStartDay']
  let abstractionStartMonth = req.session.data.elements[elementNumber]['abstractionStartMonth']
  let abstractionEndDay = req.session.data.elements[elementNumber]['abstractionEndDay']
  let abstractionEndMonth = req.session.data.elements[elementNumber]['abstractionEndMonth']
  let billableQuantity = req.session.data.elements[elementNumber]['billableQuantity']
  let authorisedQuantity = req.session.data.elements[elementNumber]['authorisedQuantity']
  let timeLimit = req.session.data.elements[elementNumber]['timeLimit']
  let timeLimitStartDay = req.session.data['timeLimitStart-day'];
  let timeLimitStartMonth = req.session.data['timeLimitStart-month'];
  let timeLimitStartYear = req.session.data['timeLimitStart-year'];
  let timeLimitDay = req.session.data['timeLimit-day'];
  let timeLimitMonth = req.session.data['timeLimit-month'];
  let timeLimitYear = req.session.data['timeLimit-year'];
  let source = req.session.data.elements[elementNumber]['source']
  let season = req.session.data.elements[elementNumber]['season']
  let loss = req.session.data.elements[elementNumber]['loss']

  elementNumber = req.session.data['elements'].length


  if (elementCopy == "true" && elementNumber > "0") {
    let newElement = {
      purpose,
      description,
      abstractionStartDay,
      abstractionStartMonth,
      abstractionEndDay,
      abstractionEndMonth,
      billableQuantity,
      authorisedQuantity,
      timeLimit,
      timeLimitStartDay,
      timeLimitStartMonth,
      timeLimitStartYear,
      timeLimitDay,
      timeLimitMonth,
      timeLimitYear,
      source,
      season,
      loss
    };
    let elements = req.session.data['elements']
    elements.push(newElement);
  }

  let newElementNumber = elementNumber + 1;

  req.session.data.back = req.headers.referer
  back = req.session.data['back'];
  res.redirect(back + '#element' + elementNumber);

  //res.redirect('/bd/charges-2020/charge-version/charge-data-check?change=#element' + newElementNumber);
});


//Remove element
router.get('/bd/charges-2020/charge-version/confirm-remove-element', function(req, res) {


  let elementNumber = req.session.data['elementNumber']
  let elements = req.session.data['elements']

  elements.splice(elementNumber, 1);
  req.session.data['elements'] = elements

  req.session.data.back = req.headers.referer
  back = req.session.data['back'];
  res.redirect(back + '#element' + elementNumber);

  // res.redirect('/bd/charges-2020/charge-version/charge-data-check?change=false#element' + elementNumber);
});






//Create Element
router.post('/bd/charges-2020/charge-version/create-element', function(req, res) {

  let createElement = req.session.data['createElement']

  if (createElement == "true") {
    res.redirect('charge-data-check');
  } else {
    res.redirect('charge-data-create?elementNew=true');
  }

});




//Charge data check
router.post('/bd/charges-2020/charge-version/charge-data-check', function(req, res) {


  req.session.data.chargeVersions[0]['chargeStatus'] = "NOT APPROVED"
  //reset all the completed flags for the task list
  req.session.data['reasonNewSet'] = "false"
  req.session.data['chargeStartSet'] = "false"
  req.session.data['elementNew'] = "false"
  req.session.data['createNewContact'] = "false"
  req.session.data['existingContact'] = "false"


  res.redirect('charge-data-confirmation');

});

//Charge data changes made
router.post('/bd/charges-2020/changes-made', function(req, res) {


  req.session.data.chargeVersions[0]['chargeStatus'] = "NOT APPROVED"
  //reset all the completed flags for the task list
  req.session.data['reasonNewSet'] = "false"
  req.session.data['chargeStartSet'] = "false"
  req.session.data['elementNew'] = "false"
  req.session.data['createNewContact'] = "false"
  req.session.data['existingContact'] = "false"
  req.session.data['changesMade'] = "true"


  res.redirect('charge-version/charge-data-confirmation');

});


///////////CHARGE INFORMATION APPROVAL
router.get('/bd/charges-2020/confirm-approve-charge-information', function(req, res) {

  //update the element statuses
  req.session.data.chargeVersions[0]['chargeStatus'] = "CHARGEABLE"
  req.session.data.chargeVersions[1]['chargeStatus'] = "REPLACED"

  // date fields
  let chargeStartDay = req.session.data['chargeStart-day'] - 1;
  let chargeStartMonth = req.session.data['chargeStart-month'];
  let chargeStartYear = req.session.data['chargeStart-year'];

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthNumber = chargeStartMonth
  let month = monthNames[monthNumber - 1]

  //set the charge end date
  let chargeEnd = chargeStartDay + " " + month + " " + chargeStartYear


  //set the old charge informations end date
  req.session.data.chargeVersions[1]['chargeEnd'] = chargeEnd


  //console.log(req.session.data.chargeVersions[0])

  res.redirect('/bd/licence-summary#charge');

});


///chargeVersions - approve or request changes
router.post('/bd/charges-2020/approve', function(req, res) {

  const approve = req.session.data['approve-charge-information']

  if (approve === 'approve') {
    req.session.data['changesMade'] = "false"
    res.redirect('confirm-approve-charge-information')
  } else {
    res.redirect('confirm-request-changes')
  }

});


///////////CHARGE INFORMATION NOT APPROVED REASON
router.post('/bd/charges-2020/request-changes', function(req, res) {

  res.redirect('confirm-request-changes');

});

///////////CHARGE INFORMATION NOT APPROVED CONFIRMATION
router.post('/bd/charges-2020/confirm-request-changes', function(req, res) {

  //update the element status
  req.session.data.chargeVersions[0]['chargeStatus'] = "CHANGES"

  res.redirect('/bd/licence-summary#charge');

});



//REMOVE CHARGE VERSION
router.post('/bd/charges-2020/charge-version/confirm-remove-charge-information', function(req, res) {


  let chargeVersions = req.session.data['chargeVersions']

  chargeVersions.splice(0, 1);
  req.session.data['chargeVersions'] = chargeVersions


  res.redirect('/bd/licence-summary#charge');
});






/////////CHARGE INFORMATION EDIT

router.get('/bd/charges-2020/charge-version-correct', function(req, res) {

  let elementNew = req.session.data['elementNew']

  if (elementNew == "true"){

  //trigger for new element
  let chargeNew = req.session.data['createElement']

  // date fields
  let chargeStartDate = req.session.data.chargeVersions[0]['chargeStart'];



  //set the charge start date
  let chargeStart = chargeStartDate
  let chargeEnd = ""
  let chargeStatus = "DRAFT"
  let chargeBilledDate = ""
  let free = "false"
  let reasonNewCharge = req.session.data['reasonNewCharge']

  let newCharge = {
    chargeStart,
    chargeEnd,
    chargeStatus,
    chargeBilledDate,
    free,
    reasonNewCharge
  };
  let chargeVersions = req.session.data['chargeVersions']
  chargeVersions.unshift(newCharge);

  req.session.data['chargeStartSet'] = "true"
  req.session.data['elementNew'] = "false"

}

res.redirect('/current/bd/charges-2020/charge-version-edit');
});

//REMOVE CHARGE VERSION
router.get('/bd/charges-2020/charge-version/cancel-corrections', function(req, res) {


  let chargeVersions = req.session.data['chargeVersions']

  chargeVersions.splice(0, 1);
  req.session.data['chargeVersions'] = chargeVersions


  res.redirect('/bd/licence-summary#charge');
});

router.post('/bd/charges-2020/charge-version-edit', function(req, res) {


/*

  //trigger for new element
  let chargeNew = req.session.data['createElement']

  // date fields
  let chargeStartDate = req.session.data.chargeVersions[0]['chargeStart'];



  //set the charge start date
  let chargeStart = chargeStartDate
  let chargeEnd = ""
  let chargeStatus = "DRAFT"
  let chargeBilledDate = ""
  let free = "false"
  let reasonNewCharge = req.session.data['reasonNewCharge']

  let newCharge = {
    chargeStart,
    chargeEnd,
    chargeStatus,
    chargeBilledDate,
    free,
    reasonNewCharge
  };
  let chargeVersions = req.session.data['chargeVersions']
  chargeVersions.unshift(newCharge);

*/

// date fields
let chargeStartDate = req.session.data.chargeVersions[0]['chargeStart'];

  req.session.data['chargeStartSet'] = "true"


  //update the element statuses
  req.session.data.chargeVersions[0]['chargeStatus'] = "CHARGEABLE"


  //set the charge end date
  chargeEnd = chargeStartDate


  //set the old charge informations end date
  req.session.data.chargeVersions[1]['chargeEnd'] = chargeEnd

  //comparing start date and end date to determine if it is invalid or replaced
  let cvStart = new Date(req.session.data.chargeVersions[1]['chargeStart']);
  let cvEnd = new Date(req.session.data.chargeVersions[1]['chargeEnd']);

  console.log(cvStart)
  console.log(cvEnd)

  if ( cvStart.getTime() > cvEnd.getTime() ){
  req.session.data.chargeVersions[1]['chargeStatus'] = "INVALID"
} else {
  req.session.data.chargeVersions[1]['chargeStatus'] = "REPLACED"
}







  res.redirect('/bd/licence-summary#charge');

});




/////////////NON_CHARGEABLE

//Reason
router.post('/bd/charges-2020/add-reason', function(req, res) {


  res.redirect('/bd/charges-2020/add-nonchargeable-date');
});

//DATE
router.post('/bd/charges-2020/add-nonchargeable-date', function(req, res) {

  let nonChargeableDate = req.session.data['nonchargeableDateConditional'];
  if (nonChargeableDate != "other") {

    let d = new Date();
    let m = new Date();
    let y = new Date();
    req.session.data['chargeStart-day'] = d.getDate();
    req.session.data['chargeStart-month'] = m.getMonth() + 1;
    req.session.data['chargeStart-year'] = y.getFullYear();
  }

  res.redirect('/bd/charges-2020/nonchargeable-check');
});



//NON-CHARGEABLE-CREATE
router.post('/bd/charges-2020/nonchargeable-check', function(req, res) {

  //aproval route check
  let free = req.session.data.chargeVersions[0]['free'];

  // date fields
  let chargeStartDay = req.session.data['chargeStart-day'];
  let chargeStartMonth = req.session.data['chargeStart-month'];
  let chargeStartYear = req.session.data['chargeStart-year'];

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthNumber = chargeStartMonth
  let month = monthNames[monthNumber - 1]

  if (free === "false") {

    //set the charge start date
    let chargeStart = chargeStartDay + " " + month + " " + chargeStartYear
    let chargeEnd = ""
    let chargeStatus = "NOT APPROVED"
    let chargeBilledDate = "non-chargeable"
    let free = "true"
    let reasonNewCharge = "Non-chargeable - " + req.session.data['reason'];

    let newCharge = {
      chargeStart,
      chargeEnd,
      chargeStatus,
      chargeBilledDate,
      free,
      reasonNewCharge
    };
    let chargeVersions = req.session.data['chargeVersions']
    chargeVersions.unshift(newCharge);

    res.redirect('/bd/charges-2020/charge-version/charge-data-confirmation');

  }
});


router.get('/bd/charges-2020/nonchargeable-approve', function(req, res) {


  // date fields
  let chargeStartDay = req.session.data['chargeStart-day'];
  let chargeStartMonth = req.session.data['chargeStart-month'];
  let chargeStartYear = req.session.data['chargeStart-year'];

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthNumber = chargeStartMonth
  let month = monthNames[monthNumber - 1]

  //Mark the approved charge version as chargeable
  req.session.data.chargeVersions[0]['chargeStatus'] = "CHARGEABLE"

  //Mark the old charge version as replaced and set the end date
  req.session.data.chargeVersions[1]['chargeStatus'] = "REPLACED"

  //set the charge end date
  chargeStartDay = chargeStartDay - 1;
  chargeEnd = chargeStartDay + " " + month + " " + chargeStartYear
  //set the old charge informations end date
  req.session.data.chargeVersions[1]['chargeEnd'] = chargeEnd

  /*
  //Set an agreement for Abatement
  let reason = req.session.data['reason']
  if (reason = "Abatement") {
    req.session.data['agreement'] = "Abatement (S126)"
    req.session.data['agreementNew'] = "true"
    req.session.data['agreementEnded'] = "true"
  }*/

  res.redirect('/bd/licence-summary#charge');

});



//////AGREEMENTS///////


//Add agreement
router.post('/bd/charges-2020/add-agreement', function(req, res) {

  res.redirect('add-agreement-signed-date');
});



//add agreeement signed date
router.post('/bd/charges-2020/add-agreement-signed-date', function(req, res) {

  //set the date the different or the same as the start date depending on option chosen
  /*  let agreementSignedDateConditional = req.session.data['agreementSignedDateConditional']
    if (agreementSignedDateConditional === "yes") {
      req.session.data['agreementSignedStartDay'] = req.session.data['agreementSignedStart-day'];
      req.session.data['agreementSignedStartMonth'] = req.session.data['agreementSignedStart-month'];
      req.session.data['agreementSignedStartYear'] = req.session.data['agreementSignedStart-year'];
    } else {
      req.session.data['agreementSignedStartDay'] = req.session.data['agreementStartDay'];
      req.session.data['agreementSignedStartMonth'] = req.session.data['agreementStartMonth'];
      req.session.data['agreementSignedStartYear'] = req.session.data['agreementStartYear'];
    } */

    let agreementDateConditional = req.session.data['agreementSignedDateConditional'];
    if (agreementDateConditional === "no") {
    req.session.data['agreementSignedStartDay'] = "Not known"
    req.session.data['agreementSignedStartMonth'] = ""
    req.session.data['agreementSignedStartYear'] = ""
  } else {
  req.session.data['agreementSignedStartDay'] = req.session.data['agreementSignedStart-day'];
  req.session.data['agreementSignedStartMonth'] = req.session.data['agreementSignedStart-month'];
  req.session.data['agreementSignedStartYear'] = req.session.data['agreementSignedStart-year'];
}

  res.redirect('add-agreement-date');
});

//Add agreement date
router.post('/bd/charges-2020/add-agreement-date', function(req, res) {

  let agreementDateConditional = req.session.data['agreementDateConditional'];
  if (agreementDateConditional === "yes") {
    req.session.data['agreementStartDay'] = req.session.data['agreementStart-day'];
    req.session.data['agreementStartMonth'] = req.session.data['agreementStart-month'];
    req.session.data['agreementStartYear'] = req.session.data['agreementStart-year'];
  } else {
    req.session.data['agreementStartDay'] = "1";
    req.session.data['agreementStartMonth'] = "4";
    req.session.data['agreementStartYear'] = req.session.data['agreementSignedStartYear'];
  }

  /*  if (agreementDateConditional === "other") {
      req.session.data['agreementStartDay'] = req.session.data['agreementStart-day'];
      req.session.data['agreementStartMonth'] = req.session.data['agreementStart-month'];
      req.session.data['agreementStartYear'] = req.session.data['agreementStart-year'];
    } else {
      let d = new Date();
      req.session.data['agreementStartDay'] = d.getDate();
      req.session.data['agreementStartMonth'] = d.getMonth() + 1;
      req.session.data['agreementStartYear'] = d.getFullYear();

    };*/

  res.redirect('add-agreement-check');
});


//add agreement
router.post('/bd/charges-2020/add-agreement-check', function(req, res) {

  //create the new agreement
  //set the charge start date
  let agreement = req.session.data['agreement'];
  let agreementStartDay = req.session.data['agreementStartDay'];
  let agreementStartMonth = req.session.data['agreementStartMonth'];
  let agreementStartYear = req.session.data['agreementStartYear'];
  let agreementSignedStartDay = req.session.data['agreementSignedStartDay'];
  let agreementSignedStartMonth = req.session.data['agreementSignedStartMonth'];
  let agreementSignedStartYear = req.session.data['agreementSignedStartYear'];
  let agreementEnded = "false";
  let agreementEndDay = "";
  let agreementEndMonth = "";
  let agreementEndYear = "";

  let newAgreement = {
    agreement,
    agreementStartDay,
    agreementStartMonth,
    agreementStartYear,
    agreementSignedStartDay,
    agreementSignedStartMonth,
    agreementSignedStartYear,
    agreementEnded,
    agreementEndDay,
    agreementEndMonth,
    agreementEndYear
  };

  let agreements = req.session.data['agreements']
  agreements.unshift(newAgreement);

  res.redirect('/bd/licence-summary#charge');
});

//END AGREEENT

//end agreement date
router.post('/bd/charges-2020/remove-agreement-date', function(req, res) {

  let agreementNumber = req.session.data['agreementNumber'];

  req.session.data.agreements[agreementNumber]['agreementEndDay'] = req.session.data['agreementEnd-day'];
  req.session.data.agreements[agreementNumber]['agreementEndMonth'] = req.session.data['agreementEnd-month'];
  req.session.data.agreements[agreementNumber]['agreementEndYear'] = req.session.data['agreementEnd-year'];

  res.redirect('confirm-remove-agreement');
});

//end agreement
router.post('/bd/charges-2020/confirm-remove-agreement', function(req, res) {

  let agreementNumber = req.session.data['agreementNumber'];

  req.session.data.agreements[agreementNumber]['agreementEnded'] = "true";

  res.redirect('/bd/licence-summary#charge');
});

//remove agreement
router.post('/bd/charges-2020/remove-agreement', function(req, res) {


  let agreements = req.session.data['agreements']
  let agreementNumber = req.session.data['agreementNumber']

  agreements.splice(agreementNumber, 1);
  req.session.data['agreements'] = agreements

  res.redirect('/bd/licence-summary#charge');
});

//-----------------
//////////SEND PAPER FORMS routes


//get
router.get('/bd/manage/send-paper', function(req, res) {

  //Clear the returns array
  req.session.data['returns'] = []

  res.render('current/bd/manage/send-paper');
});

//Post the licence list
router.post('/bd/manage/send-paper', function(req, res) {



  //split the licenec numbers from the text input
  let licences = [];
  licences = req.session.data['licenceList'].replace(/\s/g, '').split(/\,|\n/g)
  console.log(licences);

  //Address data
  let addressList = ["15 Ward Road, Bath, BA1 5EH",
    "15 Osborne Road, Bath, BA1 5AH",
    "22 Finsbury Road, Bristol, BS1 6BT",
    "115 Basingstoke Road, Reading, RG15 5PP",
    "2002b London Street, Norwich, EN1 9TP",
    "16 Finsbury Road, Sheffield, S1 8DF",
    "11 Jorvik Lane, York, Y10 1GK",
  ];

  //Licence holder data
  let licenceHolderList = [
    "Bottled Water Plc",
    "Bidbod Foods Ltd",
    "Janine Trader",
    "Daphney Coleman",
    "Peter Frost",
    "Percy Whitaker"
  ];

  //Loop through each licence and add the reference numbers
  licences.forEach(function(licences, index) {

    let licence = licences;

    //Random number of references
  //  let refIndex = Math.floor(Math.random() * 2) + 2;

    //fixed number of refs
    let refIndex = 2;

    let year = 2019

    //Random numbers for the references
    let refNumber = [...Array(refIndex)].map(() => Math.floor(Math.random() * 9999999) + 1000000);
    refNumber = refNumber.map(i => i + ' - Due 28 October ' + year--);

    //Convert to a string
    ref = refNumber.toString();

    //choose random address form the list
  //  let address = addressList[Math.floor(Math.random() * addressList.length)];

  //choose addresses in order
  let address = addressList[0];

    //remove address from the array so that is doesn't get used twice.
    var index = addressList.indexOf(address);
    if (index > -1) {
      addressList.splice(index, 1);
    }

    //choose random licenceholder form the list
    //let licenceHolder = licenceHolderList[Math.floor(Math.random() * licenceHolderList.length)];

    //choose licenceHolder in order
    let licenceHolder = licenceHolderList[0];

    //remove licenceHolder from the array so that is doesn't get used twice.
    var index = licenceHolderList.indexOf(licenceHolder);
    if (index > -1) {
      licenceHolderList.splice(index, 1);
    }

    //Flags for changes
    let change = "false"
    let returnAddressFlag = "false"
    let singleUseAddressFlag = "false"

    //create object and add it to the returns array
    let newReturn = {
      licence,
      licenceHolder,
      ref,
      address,
      change,
      returnAddressFlag,
      singleUseAddressFlag

    };

    returns = req.session.data['returns']
    returns.push(newReturn);
  });

  var index = licences.indexOf("AN/546/234/234");
  if (index > -1) {
    res.redirect('/bd/manage/send-paper-changed-ownership');
  } else {
    res.redirect('/bd/manage/send-paper-confirm');
  }


});

//get
router.get('/bd/manage/send-paper', function(req, res) {

  //Clear the selection from the array
  let returns = req.session.data.returns
  var index = returns.findIndex(x => x.licenceHolder === "Mountain Water Plc");
  if (index > -1) {
    returns.splice(index, 1);
  }

  let returns1 = req.session.data.returns
    var index1 = returns1.findIndex(x => x.licenceHolder === "Spring Time Water Limited");
    if (index1 > -1) {
      returns1.splice(index1, 1);
    }

  res.render('current/bd/manage/send-paper-changed-ownership');
});


////changed ownwership
router.post('/bd/manage/send-paper-changed-ownership', function(req, res) {

  let returns = req.session.data.returns
  var index = returns.findIndex(x => x.licence === "AN/546/234/234");
  if (index > -1) {
    returns.splice(index, 1);

    let licenceChangedOwner = req.session.data['licenceChangedOwner'];

    //Address data
    let addressList = ["Goodison Rd, Liverpool, L4 4EL",
      "Anfield Rd, Liverpool, L4 0TH"
    ];

    //Loop through each licence and add the reference numbers
    licenceChangedOwner.forEach(function(licenceChangedOwner, index) {





      let licence = "AN/546/234/234";

      //Random number of references
    //  let refIndex = Math.floor(Math.random() * 2) + 2;

      //fixed number of refs
      let refIndex = 3;

      let year = 2019

      //Random numbers for the references
      let refNumber = [...Array(refIndex)].map(() => Math.floor(Math.random() * 9999999) + 1000000);
      refNumber = refNumber.map(i => i + ' - Due 28 October ' + year--);

      //Convert to a string
      ref = refNumber.toString();

      //choose random address form the list
    //  let address = addressList[Math.floor(Math.random() * addressList.length)];

      //choose addresses in order
      let address = addressList[0];

      //remove address from the array so that is doesn't get used twice.
      var index = addressList.indexOf(address);
      if (index > -1) {
        addressList.splice(index, 1);
      }


      //choose random licenceholder form the list
      let licenceHolder = licenceChangedOwner


      //Flags for changes
      let change = "false"
      let returnAddressFlag = "false"
      let singleUseAddressFlag = "false"

      //create object and add it to the returns array
      let newReturn = {
        licence,
        licenceHolder,
        ref,
        address,
        change,
        returnAddressFlag,
        singleUseAddressFlag
      };

      returns = req.session.data['returns']
      returns.push(newReturn);

    });
  };

  res.redirect('/bd/manage/send-paper-confirm');
});

//Post the licence address change
router.post('/bd/manage/send-paper-select-address', function(req, res) {

  let index = req.session.data['returnIndex']

  if (req.session.data['returnsAddress'] === "singleUseAddress") {

    req.session.data.returns[index]['singleUseAddressFlag'] = "true"
    res.redirect('/bd/manage/send-paper-name');

  } else if
  //check if return address was selected
  (req.session.data['returnsAddress'] === "returnAddress") {

    //set return address flag to true
    req.session.data.returns[index]['returnAddressFlag'] = "true"


      //add return address
      req.session.data.returns[index]['returnAddress'] = "Geoffrey Billington, Unit 4, Finkley Crescent, London, N5 1FE"


    res.redirect('/bd/manage/send-paper-confirm');

  } else {

    //set return address flag to false
    req.session.data.returns[index]['returnAddressFlag'] = "false"
    res.redirect('/bd/manage/send-paper-confirm');
  }

});


//post  paper forms returns selection
router.post('/bd/manage/send-paper-address-check', function(req, res) {

  let index = req.session.data['returnIndex']
  //set return address flag to true
  req.session.data.returns[index]['returnAddressFlag'] = "true"

  //add return address
  req.session.data.returns[index]['returnAddress'] = req.session.data['returnName'] + ", " + req.session.data['address']

res.redirect('/bd/manage/send-paper-confirm');
});

//post  paper forms returns selection
router.post('/bd/manage/send-paper-which-returns', function(req, res) {


  let index = req.session.data['returnIndex']
  returnsRef = req.session.data['returnsRef']


  req.session.data.returns[index]['change'] = "true"
  req.session.data.returns[index]['refChange'] = returnsRef.toString()



  res.redirect('/bd/manage/send-paper-confirm');
});

//Remove element from charge info workflow:


const url = require('url');

router.get('/bd/charges-2020/licences-with-new-charge-information', function(req, res) {

  req.session.data.classes = ""

  res.render('current/bd/charges-2020/licences-with-new-charge-information');

});

/*
router.get('/current/bd/charges-2020/charge-version/create-element', function (req, res) {


   req.session.data['elementCopy'] = "false"

  res.render('bd/charges-2020/charge-version/create-element')
});


//Create Element
router.('', function (req, res) {


  let elementNew = req.session.data['elementNew']
  let purpose = req.session.data['purpose']
  let elementNumber = req.session.data['elementNumber']

  if (elementNew == "true" && elementNumber > "0"){
  let newElement = {purpose};
  let elements = req.session.data['elements']
  elements.push(newElement);
  }

  let change = req.session.data['change']


  res.redirect('/bd/charges-2020/charge-version/create-element');
}


});*/



////////////////////////////////////////////////////
//////REMOVE A FINANCIAL YEAR FROM THE REVIEW///////
////////////////////////////////////////////////////


//post  paper forms returns selection
router.post('/bd/iterations/manual-billing/bill-run/remove-financial-year', function(req, res) {

  //choose addresses in order

  let fys = req.session.data['suppManBillRun'][0].fys;
  let fyIndex = req.session.data['fyIndex']
  console.log(fyIndex)

  if (fyIndex > -1) {
    fys.splice(fyIndex, 1);
  }

res.render('current/bd/iterations/manual-billing/bill-run/reviewLicence');
});

module.exports = router

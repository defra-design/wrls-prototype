const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//Request module for the station data
//const request = require('request');




// Add your routes here - above the module.exports line

////SET USER TYPE
router.post('/set-user-type', function(req, res) {

res.redirect('/sandbox/');

});

//UPLOAD CHARGE INFORMATION
//router.post('sandbox/upload/upload-charge-information-load', function(req, res) {

 // res.redirect('sandbox/upload/upload-charge-information-load');

//});

//Function to create the data
function createData(req,res){
  //create SRoC bill data
  req.session.data.chargeInfoWorkflow = require('../_data/chargeInfoWorkflow-data.js').chargeInfoWorkflow
  //create returns version data
  req.session.data.returnRequirements = require('../_data/returns-requirements.js').returnsRequirements;
  //create charge information data
  req.session.data.srocChargeInformation = require('../_data/sroc-charge-information.js').srocChargeInformation;
  //create bill run data
  req.session.data.billRunData = require('../_data/billRunData.js').billRunData;
  //create TPT bill run data
  //req.session.data.billRunDataTpTReview = require('../_data/billRunDataTpTReview.js').billRunDataTpTReview;
  req.session.data.billRunDataTpTReview = require('../_data/TpT.js').billRunDataTpTReview;
  //redirect
  req.session.data.sprint = req.originalUrl.split('/')[1]
  res.redirect(req.originalUrl)
};

//Create Sprint data if not already created
router.use('/', (req, res, next) => {
  if (req.session.data.sprint !== req.originalUrl.split('/')[1]) {
  createData(req,res);
} else {
  next();
  }
});

//Empty table filters
function emptyFilters(req,res){
//console.log("emptying filters")

  //empty filters TpT
req.session.data.status = ""
req.session.data.issue = ""
req.session.data.licenceHolder = ""

//Bill runs
//req.session.data.runType = ""
//req.session.data.region = ""
//req.session.data.status = ""
//req.session.data.createdYear = ""

//generic
req.session.data.filteredResults = ""
req.session.data.openDetails = false
}


////SEARCH RESULTS
router.get('/search', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/search');

});

router.post('/search', function(req, res) {
/*
//get the search term
let term = req.session.data['search']

search = (function() {
//Check to see if the results should be a billing account or a licence based on the search term entered
//In the proto all billing accounts begin with BA
if ( term.startsWith("BA") ){
  req.session.data.resultsTable = "sandbox/_includes/billing-accounts-table.html"
} else if ( term.includes("@") ) {
  req.session.data.resultsTable = "sandbox/_includes/users-table.html"
} else if ( term.includes("/") ) {
  req.session.data.resultsTable = "sandbox/_includes/licences-table.html"
} else if ( term.includes("*") ) {
  req.session.data.resultsTable = "sandbox/_includes/customers-table.html"
} else {
  req.session.data.resultsTable = "sandbox/_includes/stations-table.html"
}

res.redirect('search');

});

search()
*/

res.redirect('search');

});

// 
router.get('/sandbox', function(req, res) {
emptyFilters(req,res)
res.render('sandbox/index');
});

//----------------------------------------------------------------
////RETURNS ROUTES
//View a requirement

router.use('/licence/returns', require('./_routes-returns-requirements'));
router.use('/licence/returns-current', require('./_routes-returns-requirements-current'));
router.use('/licence/returns-current/submission', require('./_routes-returns-submission'));

//----------------------------------------------------------------
////NOTICES ROUTES
//SEND A WATER ABSTRACTION ALERT
//TAG A LICENCE
//REMOVE A TAG
router.use('/licence-notices', require('./_routes-notices'));



//----------------------------------------------------------------

////CUSTOMER ROUTES
//ADD A CONTACT FOR A CUSTOMER
//REMOVE A CONTACT FOR A CUSTOMER
router.use('/customer', require('./_routes-customer'));


//---------------------ARCHIVED-------------------------------------------
////CONTACT ROUTES
//REMOVE CUSTOMER FROM A CONTACT
//CHANGE NAME
//CHANGE EMAIL ADDRESS
//router.use('/contact', require('./_routes-contact'));


//----------------------------------------------------------------
////BILL RUN ROUTES
//CREATE BILL RUN

router.use('/bill-runs', require('./_routes-bill-runs'));


//----------------------------------------------------------------
////CHARGE INFO WORKFLOW ROUTES
//SET UP NEW CHARGE, REVIEW, REQUEST CHANGES

router.use('/charge-information-workflow', require('./_routes-chargeInfoWorkflow'));
//create SRoC bill data

router.use('/licence-setup-workflow', require('./_routes-licenceSetupWorkflow'));


//----------------------------------------------------------------
////UPLOAD CHARGE INFORMATION
router.get('/upload/upload-charge-information', function(req, res) {

  //blank banner on refresh
  req.session.data.banner = ""

  res.render('sandbox/upload/upload-charge-information');
});


router.post('/upload/upload-charge-information', function(req, res) {

  //set upload route
  let route = req.session.data['uploadRoute']

  //check which route for upload
  if (route == "error") {
    req.session.data.banner = "error"
  } else if  (route == "inlineError") {
    req.session.data.banner = "inlineError"
    res.redirect('upload-charge-information');
  } else  {
    req.session.data.banner = "success"
  }

  res.redirect('upload-charge-information-load');
});


///////----------------------------------------
//Licence map

router.get('/licence/points/map', function(req, res) {
  res.render('sandbox/licence/points/map');
});


//////-----------------------------------------
//Licence Settings



//Confidentiality
router.get('/licence/settings/confidentiality', function(req, res) {
  res.render('sandbox/licence/settings/confidentiality');
});


router.post('/licence/settings/confidentiality', function(req, res) {
  let id = req.session.data.ID
  req.session.data.licences[id].confidentiality = req.session.data.confidentiality
  res.redirect('/sandbox/licence/settings');
});

//Bulk upload
router.get('/licence/settings/multiple-upload', function(req, res) {
  res.render('sandbox/licence/settings/multiple-upload');
});


router.post('/licence/settings/multiple-upload', function(req, res) {
  let id = req.session.data.ID
  req.session.data.licences[id].multipleUpload = req.session.data.multipleUpload
  res.redirect('/sandbox/licence/settings');
});


///////////////compare


//Function for comparing original and new, this changes the the copy not sure that is the right thing to do. Might be better to put in another array and keep the copy the same
function compare(original, copy) {
  for (let [k, v] of Object.entries(original)) {
    if (typeof v === "object" && v !== null) {
      if (!copy.hasOwnProperty(k)) {
        copy[k] = v; // 2
      } else {
        compare(v, copy?.[k]);
      }
    } else {
      if (Object.is(v, copy?.[k])) {
        delete copy?.[k]; // 1
      }
    }
  }
  return [copy];
}



router.get('/compare', function(req, res) {

  let ID = req.session.data.ID
  let replacement = req.session.data.licences[ID].chargeInformation[0]
  let original = req.session.data.licences[ID].chargeInformation[1]

  console.log(req.session.data.srocChargeInformation)

    req.session.data.differences = compare(original, replacement)
    req.session.data.differencesKeys = Object.keys(replacement)
    req.session.data.differencesValues = Object.values(replacement)

  res.render('sandbox/compare');
});

module.exports = router

const express = require('express')
const router = express.Router()

//Request module for the station data
const request = require('request');




// Add your routes here - above the module.exports line

////SET USER TYPE
router.post('/set-user-type', function(req, res) {

res.redirect('/sandbox/');

});

//UPLOAD CHARGE INFORMATION
//router.post('sandbox/upload/upload-charge-information-load', function(req, res) {

 // res.redirect('sandbox/upload/upload-charge-information-load');

//});





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
  } else if (route == "success") {
    req.session.data.banner = "success"
  }

  res.redirect('upload-charge-information-load');
});


module.exports = router

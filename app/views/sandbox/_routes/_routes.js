const express = require('express')
const router = express.Router()

//Request module for the station data
const request = require('request');




// Add your routes here - above the module.exports line

////SET USER TYPE
router.post('/set-user-type', function(req, res) {

res.redirect('/sandbox/');

});

////SEARCH RESULTS
router.get('sandbox/search', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/search');

});

router.post('/search', function(req, res) {

//get the search term
let term = req.session.data['search']


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

//----------------------------------------------------------------
////NOTICES ROUTES
//SEND A WATER ABSTRACTION ALERT
router.use('/licence-notices', require('./_routes-notices'));



//----------------------------------------------------------------

////CUSTOMER ROUTES
//ADD A CONTACT FOR A CUSTOMER
router.use('/customer', require('./_routes-customer'));

//----------------------------------------------------------------
////CONTACT ROUTES
//REMOVE CUSTOMER FROM A CONTACT
//CHANGE NAME
//CHANGE EMAIL ADDRESS
router.use('/contact', require('./_routes-contact'));



//----------------------------------------------------------------

///CREATE BILL RUN


/// Bill run type
router.get('/bill-runs/select-bill-run-type', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/bill-runs/select-bill-run-type');

});

router.post('/bill-runs/select-bill-run-type', function(req, res) {

res.redirect('select-the-region');

});


//Region
router.get('/bill-runs/select-the-region', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/bill-runs/select-the-region');

});

router.post('/bill-runs/select-the-region', function(req, res) {


      //Date
      let today = new Date();
      let dd = today.getDate();

      let mm = today.getMonth();
      let months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
      const yyyy = today.getFullYear();
      if(dd<10)
      {
    dd=`0${dd}`;
      }

        if(mm<10)
        {
          mm=`0${mm}`;
          }
          let  monthName =  months[mm];
        today = `${dd} ${monthName} ${yyyy}`;

        //TPT tptSeason

        let billRunType = req.session.data['billRunType']

       if(req.session.data['billRunType'] === "two-part tariff"){
         let billRunType = req.session.data['billRunType'] + req.session.data['tptSeason']
       }


      //add new bill run to the list
      let date = today
      let region = req.session.data['region']
      let runType = billRunType
      let bills = "5"
      let value = "£7,460.00"
      let status = "ready"

      let newBillRun= {
        date,
        region,
        runType,
        bills,
        value,
        status
      };

      let billRuns= req.session.data['billRuns']
      billRuns.unshift(newBillRun);

res.redirect('../bill-runs');

});


module.exports = router

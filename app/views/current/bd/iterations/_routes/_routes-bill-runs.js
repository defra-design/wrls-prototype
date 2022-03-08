const express = require('express')
const router = express.Router()

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



//Send a water abstraction alert
const folder = "current/bd/iterations/bill-runs/"




///---------------------------------------------------------

///CREATE BILL RUN


/// Bill run type
router.get('/select-bill-run-type', function(req, res) {

  req.session.data.back = req.headers.referer


  res.render(folder + 'select-bill-run-type');

});

router.post('/select-bill-run-type', function(req, res) {

res.redirect('select-the-region');

});


//Region
router.get('/select-the-region', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'select-the-region');

});

router.post('/select-the-region', function(req, res) {


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

res.redirect("../bill-runs");

});

/////////--------------------------------------------------
//TPT REVIEW


//Review the list of data issues
router.get('/two-part-tariff/review', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'two-part-tariff/review');
});

//Review the issues for a licence
router.get('/two-part-tariff/reviewLicence', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'two-part-tariff/reviewLicence');
});


//Set the billable returns quantity
router.get('/two-part-tariff/set-the-returns-quantity', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'two-part-tariff/set-the-returns-quantity');
});


router.post('/two-part-tariff/set-the-returns-quantity', function(req, res) {

   //get the licence number of the issue that is being edited
   let licenceNumber = req.session.data['licence']

   //get the index of the element that is being edited (at time of writing this will always be 0)
   let elementNumber  = req.session.data['element']

   //get the new value for the returns billable quantity
   let billableReturns = req.session.data['billable-returns-quantity']
   if (billableReturns === "custom" ){
      billableReturns = req.session.data['customQuantity']
   }

   //get the list of licences in the tptBillRun
   let tptBillRun = req.session.data['tptBillRun']

   //loop through the items in the tptBillRun
   for (var [itemIndex, item] of tptBillRun.entries()) {
   //find the matching licence
   if (item.licence === licenceNumber){
      //set the billable returns
      item.elements[elementNumber].billableReturns = billableReturns
      //set the edited flag for the element
      item.elements[elementNumber].edited = "edited"
      //set the element to ready
      item.elements[elementNumber].ready= "yes"
      //set the licence edited flag
      item.edited = "yes"
      //set the element to ready
      item.ready= "yes"
    }
   }


    res.redirect('reviewLicence');
  });

  //Create the transactions for the bill run
  router.post('/two-part-tariff/create-transactions', function(req, res) {
    res.redirect('/current/bd/charges-2020/confirm-create-bill-run');
  });

  //Cancel the bill run
  router.post('/two-part-tariff/cancel-bill-run', function(req, res) {
    res.redirect('/current/bd/charges-2020/confirm-cancel-bills?type=Two-part%20tariff');
  });

  //Download licence review report
  router.post('/two-part-tariff/download-licence-review-report', function(req, res) {
    res.redirect('/public/files/licenceReviewReport.csv');
  });


module.exports = router

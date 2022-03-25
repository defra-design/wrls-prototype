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
const folder = "sandbox/bill-runs/"




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

  //Region
  router.get('/split-bills/bill-runs-filtered', function(req, res) {

    req.session.data.runType = ""
    req.session.data.region = ""
    req.session.data.status = ""
    req.session.data.createdYear = ""

    res.render(folder + 'split-bills/bill-runs-filtered');

  });


/////////////////////////Bill runs
  ///Apply  filters

  router.post('/split-bills/bill-runs-filtered/apply-filters', function(req, res) {

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
  if (typeFilters.length && regionFilters.length && statusFilters.length){
  list = typeFilters.concat(regionFilters,statusFilters);
  } else if (typeFilters.length && regionFilters.length){
    list = typeFilters.concat(regionFilters);
  } else if (typeFilters.length && statusFilters.length){
    list = typeFilters.concat(statusFilters);
  } else if (regionFilters.length && statusFilters.length){
    list = regionFilters.concat(statusFilters);
  } else if (regionFilters.length){
    list = regionFilters
  } else if (typeFilters.length){
    list = typeFilters
  } else if (statusFilters.length){
    list = statusFilters
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
    res.redirect('../bill-runs-filtered#caption');

  });


  ///clear filters

  router.post('/bill-runs-filtered/clear-filters', function(req, res) {


    //reset the table caption if the list is cleared
    req.session.data.filterCaption = "Showing all sent notices."


    res.redirect('/split-bills/bill-runs-filtered/apply-filters#captions');
  });


module.exports = router

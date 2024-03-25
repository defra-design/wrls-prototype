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



//Send a water abstraction alert
const folder = "current/bd/iterations/bill-runs/"


  
//check for issues in the returns data
function checkForTPTIssues(data, req) {
  data.forEach((item, index) => {
    req.session.data.billRunDataTpTReview[index].issues = [];
    item.chargeVersions.forEach((chargeVersion) => {
      chargeVersion.chargeReferences.forEach((chargeReference) => {
        chargeReference.chargeElements.forEach((chargeElement) => {
         chargeElement.issues.forEach((issue) => {
         // console.log(issue)
          if (issue !== null){

          req.session.data.billRunDataTpTReview[index].issues.push(issue);
          }; 
         });
        });
      });
    });
  });
}

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

      /* if(req.session.data['billRunType'] === "two-part tariff"){
         let billRunType = req.session.data['billRunType'] + req.session.data['tptSeason']
       }
*/
console.log(req.session.data['region'])
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

//TPT REVIEW (SROC) Oct 2023


//Review the list of data issues
router.get('/tpt/review', function(req, res) {
  // createTpTData(req,res);
   req.session.data.back = req.headers.referer
   res.render(folder + 'tpt/review');
 });

 ///TPT PROGRESS UPDATE FEATURE
router.post('/tpt/progress-update', function(req, res) {
  req.session.data.statusBanner = "show"
  if (req.session.data.billRunDataTpTReview[req.session.data.ID].progress == "&#10003;") {
    req.session.data.billRunDataTpTReview[req.session.data.ID].progress = "" 
  } else {
  req.session.data.billRunDataTpTReview[req.session.data.ID].progress = "&#10003;" }
  res.redirect('licence-review');
});

router.get('/tpt/licence-review', function(req, res) {
  req.session.data.statusBanner = "hide"
  req.session.data.licenceBanner = "hide"
  res.render(folder + 'tpt/licence-review');
});

///TPT COMPLETE REVIEW FEATURE
router.post('/tpt/complete-review', function(req, res) {
  req.session.data.licenceBanner = "show"


 //This code is no longer needed as complete-review just switches the licence status and nothing else
 /* 
  let chargeReferences = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences
  req.session.data.updateCount = 0
  chargeReferences.forEach((chargeReference, chargeReferenceIndex) => {
    chargeReference.chargeElements.forEach((chargeElement, chargeElementIndex) => {
      chargeElement.issues.forEach((issue, issueIndex) => {
         if (issue.issue !== null){
        req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences[chargeReferenceIndex].chargeElements[chargeElementIndex].issues.push("ready");
        req.session.data.updateCount = req.session.data.updateCount + 1
      }
   });
  });
});

*/
  let issues = req.session.data.billRunDataTpTReview[req.session.data.ID].issues
  issues.forEach((issue, index) => { 
    req.session.data.billRunDataTpTReview[req.session.data.ID].issues[index] = ""
    req.session.data.status = "ready"
  });

req.session.data.status = "ready"
  res.redirect('/' +folder + 'tpt/licence-review');
});
 
//undo route
router.get('/tpt/undo-review', function(req, res) {
  req.session.data.licenceBanner = "show"

  //code not needed for review switcher as it only changes the licence status rather than each element
  /*
  let chargeReferences = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences
  req.session.data.updateCount = 0
  chargeReferences.forEach((chargeReference, chargeReferenceIndex) => {
    chargeReference.chargeElements.forEach((chargeElement, chargeElementIndex) => {
      chargeElement.issues.forEach((issue, issueIndex) => {
        console.log(issue + " " + issueIndex)
         if (issue == "ready"){
          
        req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences[chargeReferenceIndex].chargeElements[chargeElementIndex].issues.splice(issueIndex, 1);
        req.session.data.updateCount = req.session.data.updateCount + 1
      }
   });
  });
});
*/

req.session.data.status = "review"
checkForTPTIssues(req.session.data.billRunDataTpTReview, req);
console.log('undone');
res.redirect('/' + folder + 'tpt/licence-review');
});

///TPT REMOVE LICENCE FEATURE
router.post('/tpt/remove-licence', function(req, res) {
  res.redirect('confirm-remove-licence');
});

router.get('/tpt/confirm-remove-licence', function(req, res) {
  req.session.data.statusBanner = "hide"
  res.render(folder + 'tpt/confirm-remove-licence');
});

router.post('/tpt/confirm-remove-licence', function(req, res) {

console.log("licence removed")
req.session.data.removedLicence = req.session.data.billRunDataTpTReview[req.session.data.ID].licenceRef

req.session.data.billRunDataTpTReview.splice(req.session.data.ID, 1)
req.session.data.statusBanner = "show"
  res.redirect('/tpt/review');
});



////TPT EDIT THE BILLABLE RETURNS
router.post(folder + '/tpt/edit-the-billable-returns', function(req, res) {
  res.redirect(folder + '/tpt/edit-the-billable-returns');
});

router.get(folder +'/tpt/edit-the-billable-returns', function(req, res) {
  res.render(folder + 'tpt/edit-the-billable-returns');
});

router.post('/current/bd/iterations/bill-runs/tpt/set-billable-returns', function(req, res) {
  
  //update the authorised volume on the element
  if (req.session.data.customQuantity.length){
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements[req.session.data.elementID].allocatedQuantity = parseInt(req.session.data.customQuantity);
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements[req.session.data.elementID].edited = true
  } else {
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements[req.session.data.elementID].allocatedQuantity =  parseInt(req.session.data.billableReturnsQuantity);
  }

  //recalculate the overall returns for the charge reg
  req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns = 0
  req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements.forEach((chargeElement, chargeElementIndex) => {
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns = parseInt(req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns) + parseInt(chargeElement.allocatedQuantity)
   })

  //tidy up
  req.session.data.customQuantity = ""

  //show the notification banner
  req.session.data.statusBanner = "show" 

  res.redirect('/'+ folder + '/tpt/element-review');
});

router.get('/tpt/element-review', function(req, res) {
  req.session.data.statusBanner = "hide"
  res.render(folder + 'tpt/element-review');
});

////TPT EDIT THE AGGREGATE FACTOR
router.post('/current/bd/iterations/bill-runs/tpt/set-aggregate-factor', function(req, res) {

   //Set the aggregate factor
   req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].aggregateFactor = req.session.data.aggregateFactor
   req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].edited = true

   //Show the notification banner
   req.session.data.statusBanner = "show"
   req.session.data.aggregateUpdate = true 
  res.redirect('/'+ folder + '/tpt/licence-review');
});







////TpT REVIEW FILTER LICENCE LIST



/////////////////////////Bill runs
///Apply  filters

router.post('/tpt/review/apply-filters', function(req, res) {

  //check to see if the user is clearing filters
  if (req.session.data.clearFilters == "true") {

    req.session.data.TpTReviewStatus = ""
   req.session.data.issue = ""
   req.session.data.licenceHolder = ""
   req.session.data.filteredResults = ""
    req.session.data.openDetails = true
    //reset the table caption if the list is cleared
    req.session.data.TpTfilterCaption = "Showing all licences."
//    req.session.data.focus="alert"

  } else {
    console.log("filtering");

  //get the list of bill runs
  let  licences = req.session.data.billRunDataTpTReview

//set global scope of filteredResults
let filteredResults = ""

//set the type filter
let licenceHolderFilters = ""
licenceHolderFilters = req.session.data.licenceHolder


//console.log(licenceHolderFilters.length);

 if (typeof licenceHolderFilters === 'undefined') {
  licenceHolderFilters= ""
 }

 if (typeof licenceHolderFilters.length) {
  console.log('Filtering by licence holder')
   filteredResults = licences.filter(el => ( licenceHolderFilters.indexOf(el.licenceHolder) >= 0 ))
 }



 //set the region filter
 let issueFilters = ""
 issueFilters = req.session.data.issue
  if (typeof issueFilters === 'undefined') {
    issueFilters= ""
  }
//console.log(issueFilters);
 if ((issueFilters.length) && (filteredResults.length)) {
  console.log('Filtering by licence holder and issues')
/* filter by string
 filteredResults = filteredResults.filter(licence =>
    licence.issues.some(issueObj => issueObj.issue === issueFilters)
  );
*/
filteredResults = filteredResults.filter(licence =>
  licence.issues.some(issueObj => issueFilters.some(filter => filter === issueObj.issue))
);

  } else if (issueFilters.length) {
    console.log('Filtering by issues')
    filteredResults = licences.filter(licence =>
      licence.issues.some(issueObj => issueFilters.some(filter => filter === issueObj.issue))
  );

  }
//console.log(filteredResults)

  //set the status filter
  let statusFilters = ""
   statusFilters = req.session.data.TpTReviewStatus
   if (typeof statusFilters === 'undefined') {
     statusFilters= ""
   }

  if ((issueFilters.length || licenceHolderFilters.length ) && (!filteredResults.length))
 { } else {

  if ((statusFilters.length ) && (filteredResults.length)) {
    console.log('Filtering by either issue or licence holder and status '+ statusFilters)
    if ( statusFilters == "review" ) {
      filteredResults = filteredResults.filter(licence =>
        licence.issues.some(issueObj => issueObj.issue && issueObj )
      );
    } else if ( statusFilters == "ready" ) {
      filteredResults = filteredResults.filter(licence =>
        licence.issues.every(issueObj => issueObj.issue === null && issueObj)
      );
    }
   
    } else if (statusFilters.length) {

      console.log('filtering by status ' + statusFilters)
     
     if ( statusFilters == "review" ) {
      filteredResults = licences.filter(licence =>
        licence.issues.some(issueObj => issueObj.issue && issueObj )
      );
    } else if ( statusFilters == "ready" ) {
      filteredResults = licences.filter(licence =>
        licence.issues.every(issueObj => issueObj.issue === null && issueObj)
      );
    }

   }
  }

   
// console.log("Filtered results = " + filteredResults)

  //set filtered results to empty if filters doesn't return anything
    if (!Array.isArray(filteredResults) || !filteredResults.length){
      filteredResults = "empty"
    }

 //   console.log("Filtered results = " + filteredResults)
req.session.data.openDetails = true
//req.session.data.focus="alert"

//Create a list formatter
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

//lower case all the issue filters
if (issueFilters.length){
issueFilters = issueFilters.map(issue => issue.toLowerCase());
}

//Create the list depending on what filters are selected
let list = []
if (licenceHolderFilters.length && issueFilters.length && statusFilters.length){
list.push(licenceHolderFilters, ...issueFilters, statusFilters.toLowerCase());
} else if (licenceHolderFilters.length && issueFilters.length){
  list.push(licenceHolderFilters, ...issueFilters);
} else if (licenceHolderFilters.length && statusFilters.length){
  list.push(licenceHolderFilters, statusFilters.toLowerCase());
} else if (issueFilters.length && statusFilters.length){
  list.push(...issueFilters, statusFilters.toLowerCase());
} else if (issueFilters.length){
  list.push(...issueFilters)
} else if (licenceHolderFilters.length){
  list.push(licenceHolderFilters)
} else if (statusFilters.length){
  list.push(statusFilters.toLowerCase())
}

console.log(list)


//set the dynamic caption for the table
if (list.length) {
req.session.data.TpTfilterCaption = "Showing licences filtered by " + formatter.format(list) + "."
} else {
  req.session.data.TpTfilterCaption = "Showing all licences."
}

console.log(req.session.data.TpTfilterCaption)

req.session.data.filteredResults = filteredResults

}

  req.session.data.clearFilters = ""
  res.redirect('/current/bd/iterations/bill-runs/tpt/review#caption');

});

  //Cancel the bill run
  router.post('/tpt/review/cancel-bill-run', function(req, res) {
    res.redirect('/current/bd/charges-2020/confirm-cancel-bills?type=Two-part%20tariff');
  });

 ////////////////////


//Review the list of data issues
router.get('/two-part-tariff/review', function(req, res) {
  req.session.data.back = req.headers.referer

  if (req.session.data.billRunIndex == undefined){
  req.session.data.billRunIndex = req.originalUrl.split(/(?<==)/g, )[1]
  }
  console.log(req.session.data.billRunIndex)
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


  /////////--------------------------------------------------
  //Supplementary




module.exports = router

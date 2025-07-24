const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line

const fs = require('fs')
const path = require('path');




///////Show and hide table filters
router.get('/licence', function(req, res) {
  req.session.data.openDetails = ""
req.session.data.back = req.headers.referer
  res.render(folder + 'returns');
});


router.post('/returns', function(req, res) {

  let showFilters = req.session.data.showFilters

if (showFilters == "true" ) {

   req.session.data.filters = "govuk-grid-column-two-thirds"
  // req.session.data.table = "govuk-grid-column-two-thirds"
  // req.session.data.fixTableWidth = "width:960px"
  // req.session.data.overFlow = "overflow-x: auto"

 } else {

   req.session.data.filters = "hide"
   req.session.data.table = "govuk-grid-column-full"
   req.session.data.fixTableWidth = ""
   req.session.data.overFlow = ""

 }

  res.redirect('returns#focus');
});


///Apply  filters

router.post('/returns/apply-filters', function(req, res) {



  //check to see if the user is clearing filters
  if (req.session.data.clearFilters == "true") {

    req.session.data.returnReference = ""
    req.session.data.returnStatus = ""
    req.session.data.filteredResults = ""
    req.session.data.openDetails = true
    //reset the table caption if the list is cleared
    req.session.data.returnsFilterCaption = "Showing all returns."
//    req.session.data.focus="alert"

  } else {

  //get the licence returns
  let id = req.session.data.ID
  let licences = req.session.data.licences
  let returns = licences[id].returns


//  console.log(returns)


 


//set global scope of filteredResults
let filteredResults = ""

 console.log(filteredResults)

//set the type filter
let statusFilters = ""
 statusFilters = req.session.data.returnStatus
 if (typeof statusFilters === 'undefined') {
   statusFilters= ""
 }

 if (typeof statusFilters.length) {
   filteredResults = returns.filter(el => ( statusFilters.indexOf(el.status) >= 0 ))
 }


 console.log(filteredResults.length)


 //set the sent by filter
  let referenceFilter = ""
   referenceFilter = req.session.data.returnReference

   console.log("referenceFilter ="+referenceFilter)

  if (referenceFilter === 'undefined'|'') {
     referenceFilter = ""
   }

  if ((referenceFilter.length) && (filteredResults.length)) {
    console.log("option 1")
    filteredResults = filteredResults.filter(el => (referenceFilter.indexOf(el.id) >=0 ) );
  } else if (referenceFilter.length) {
    console.log("option 2")
    filteredResults = returns.filter(el => (referenceFilter.indexOf(el.id) >=0 ) );
  }  else if ((!referenceFilter.length) && (!filteredResults.length) && (!statusFilters.length)) {
    console.log("option 3")
    filteredResults = returns
  }



 console.log(filteredResults)


//set filtered results to empty if filters don't return anything
  if (!filteredResults.length){
    filteredResults = "empty"
  }

  console.log(filteredResults)

req.session.data.openDetails = true


//Create a list formatter
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

//Create the list

let rawList = [referenceFilter, ...statusFilters ]



let list =  rawList.filter(string => string !== "");

////console.log(list);

//set the dynamic caption for the table
if (list.length) {
req.session.data.returnsFilterCaption = "Showing returns filtered by " + formatter.format(list) + "."
} else {
  req.session.data.returnsFilterCaption = "Showing all returns."
}

req.session.data.filteredResults = filteredResults

}

  req.session.data.clearFilters = ""


 
  res.redirect('../../licence#returns');


});







module.exports = router
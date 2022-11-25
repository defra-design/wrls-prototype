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
const folder = "sandbox/licence-setup-workflow/"




///////Show and hide table filters
router.get('/to-set-up', function(req, res) {
  req.session.data.openDetails = ""
req.session.data.back = req.headers.referer
  res.render(folder + 'to-set-up');
});


router.post('/to-set-up', function(req, res) {
  res.redirect('to-set-up#focus');
});


///Apply  filters

router.post('/to-set-up/apply-filters', function(req, res) {


  //check to see if the user is clearing filters
  if (req.session.data.clearFilters == "true") {

    req.session.data.region = ""
    req.session.data.filteredResults = ""
    req.session.data.openDetails = true
    //reset the table caption if the list is cleared
    req.session.data.filterCaption = "Showing all licences to set up."
//    req.session.data.focus="alert"

  } else {


  //get the list of notifications
  let licences = req.session.data.chargeInfoWorkflow
 // console.log(licences);


//set global scope of filteredResults
let filteredResults = ""

//set the regione filter
let regionFilters = ""
 regionFilters = req.session.data.region
 if (typeof regionFilters === 'undefined') {
   regionFilters= ""
 }

 if (typeof regionFilters.length) {
   filteredResults = licences.filter(el => ( regionFilters.indexOf(el.region) >= 0 ))
 }





  //set filtered results to empty if filters don't return anything
    if (!filteredResults.length){
      filteredResults = "empty"
    }




req.session.data.openDetails = true
//req.session.data.focus="alert"

//Create a list formatter
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

//Create the list depending on what filters are selected
let list = []
if (regionFilters.length) {
  
  //captialise values
  let arr = regionFilters.split(" ");
//loop through each element of the array and capitalize the first letter.
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
//Join all the elements of the array back into a string 
//using a blankspace as a separator 
regionFilters = arr.join(" ");
list.push(regionFilters);
}

//set the dynamic caption for the table
if (list.length) {
req.session.data.filterCaption = "Showing licences to set up filtered by " + formatter.format(list) + "."
} else {
  req.session.data.filterCaption = "Showing all licences to setup."
}

req.session.data.filteredResults = filteredResults

}

  req.session.data.clearFilters = ""
  res.redirect('../to-set-up#focus');

});


///clear filters

router.post('/to-set-up/clear-filters', function(req, res) {


  //reset the table caption if the list is cleared
  req.session.data.filterCaption = "Showing all licences to set up."

  res.redirect('../to-set-up#focus');
});










module.exports = router

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


///APPLY FILTERS FUNCTION

function applyFilters(req,res){

 //check to see if the user is clearing filters
 if (req.session.data.clearFilters == "true") {

  req.session.data.region = ""
  req.session.data.type = ""
  req.session.data.filteredResults = ""
  req.session.data.openDetails = true
  //reset the table caption if the list is cleared
  req.session.data.filterCaption = "Showing all licences to set up."
//    req.session.data.focus="alert"
req.session.data.clearFilters = ""

} else {


//get the list of notifications
let licences = req.session.data.chargeInfoWorkflow
// console.log(licences);


//set global scope of filteredResults
let filteredResults = licences



//set the region filter
let regionFilters = ""
regionFilters = req.session.data.region

//set the type filter
let typeFilters = ""
typeFilters = req.session.data.type



//if all filters blank empty the filtered results and skip below
if ((!typeFilters.length && !regionFilters.length)){
  filteredResults = ""

} else {

//Filter the results
if (regionFilters.length) {
 filteredResults = filteredResults.filter(el => ( regionFilters.indexOf(el.region) >= 0 ))
}

if (typeFilters.length) {
  filteredResults = filteredResults.filter(el => ( el.type.includes(typeFilters)))
 }

 //set filtered results to empty if filters don't return anything
 if (!filteredResults.length){
  filteredResults = "empty"
}

}




req.session.data.openDetails = true
//req.session.data.focus="alert"

//Create a list formatter
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

//Create the list depending on what filters are selected
let list = []

//If region filters used
if (regionFilters.length) {
//captialise values
let arr = regionFilters.split(" ");
//loop through each element of the array and capitalize the first letter because they are regions.
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
//Join all the elements of the array back into a string 
//using a blankspace as a separator 
regionFilters = arr.join(" ");
list.push(regionFilters);
}

if (typeFilters.length) {
//no need to capitalise these, so just add them to the list
list.push(typeFilters);
}

//set the dynamic caption for the table
if (list.length) {
req.session.data.filterCaption = "Showing licences to set up filtered by " + formatter.format(list) + "."
} else {
req.session.data.filterCaption = "Showing all licences to setup."
}

//push data back into the session
req.session.data.filteredResults = filteredResults

}


//res.redirect('../to-set-up#focus');

}
/////////////////////////////////////
//End of apply filters function





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

router.get('/to-set-up/apply-filters', function(req, res) {
  applyFilters(req,res);
  //you can pass filter parameters though the URL ?region=anglian#focus
  //res.render(folder + 'to-set-up');
  res.redirect('../to-set-up#focus');
});

router.post('/to-set-up/apply-filters', function(req, res) {
  applyFilters(req,res);
  res.redirect('../to-set-up#focus');
});











module.exports = router

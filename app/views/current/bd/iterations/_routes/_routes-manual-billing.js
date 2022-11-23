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



//manual billing folders
const folder = "current/bd/iterations/manual-billing/bill-run"




/////////--------------------------------------------------
//TPT REVIEW



//Set the billable returns quantity
 router.get('bill-run/set-the-returns-quantity', function(req, res) {
  req.session.data.back = req.headers.referer

  console.log('something')
  res.render(folder + 'set-the-returns-quantity');
});


router.post('/bill-run/set-the-returns-quantity', function(req, res) {

   //get the licence number of the issue that is being edited
   let licenceNumber = req.session.data['licence']

   //get the index of the FY that is being edited
   let fyIndex  = req.session.data['fyIndex']


   //get the index of the element that is being edited (at time of writing this will always be 0)
   let elementNumber  = req.session.data['element']




   //get the new value for the returns billable quantity
   let billableReturns = req.session.data['billable-returns-quantity']
   if (billableReturns === "custom" ){
      billableReturns = req.session.data['customQuantity']
   }

   //get the list of licences in the tptBillRun
   let suppManBillRun = req.session.data['suppManBillRun']

   //loop through the items in the tptBillRun
   for (var [itemIndex, item] of suppManBillRun.entries()) {
   //find the matching licence
   if (item.licence === licenceNumber){

      //set the billable returns
      item.fys[fyIndex].elements[elementNumber].billableReturns = billableReturns
      //set the edited flag for the element
      item.fys[fyIndex].elements[elementNumber].edited = "edited"
      //set the element to ready
      item.fys[fyIndex].elements[elementNumber].ready= "yes"
      //set the licence edited flag
      item.fys[fyIndex].edited = "yes"
      //set the element to ready
      item.fys[fyIndex].ready= "yes"

    }
   }


    res.redirect('reviewLicence');
  });



module.exports = router

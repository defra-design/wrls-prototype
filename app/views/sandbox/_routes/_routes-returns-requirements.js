const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


//get all of the return requirements data
const returnRequirements = require('../_data/returns-requirements.js').returnsRequirements;



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
const folder = "sandbox/returns/"


///---------------------------------------------------------
//Functions


 ///Remove charge function
 function removeCharge(req, res) {

   //delete the object in the array
   req.session.data.chargeReferences.splice(req.session.data.chargeReferenceIndex ,1);

}



/// Select the water availability
router.get('/requirements', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.returnRequirements = returnRequirements
  res.render(folder + 'requirements');
});

router.post('/create-charge-information/charge-reference/water-restrictions', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    updateChargeReference(req, res)
    res.redirect('../charge-data-check');
  } else {
      res.redirect('additional-charges');
  }
});





module.exports = router

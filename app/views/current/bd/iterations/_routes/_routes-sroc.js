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
const folder = "current/bd/iterations/sroc/"




///---------------------------------------------------------

///CREATE CHARGE INFORMATION

/// Enter a description for the charge reference
router.get('/create-charge-information/charge-reference/enter-description', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/enter-description');
});

router.post('/create-charge-information/charge-reference/enter-description', function(req, res) {
res.redirect('select-source');
});

/// Select the source
router.get('/create-charge-information/charge-reference/select-source', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/select-source');
});

router.post('/create-charge-information/charge-reference/select-source', function(req, res) {
res.redirect('select-loss');
});

/// Select the loss
router.get('/create-charge-information/charge-reference/select-loss', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/select-loss');
});

router.post('/create-charge-information/charge-reference/select-loss', function(req, res) {
res.redirect('enter-quantity');
});

/// Enter a volume
router.get('/create-charge-information/charge-reference/enter-quantity', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/enter-quantity');
});

router.post('/create-charge-information/charge-reference/enter-quantity', function(req, res) {
res.redirect('water-availability');
});


/// Select the water availability
router.get('/create-charge-information/charge-reference/water-availability', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/water-availability');
});

router.post('/create-charge-information/charge-reference/water-availability', function(req, res) {
res.redirect('water-restrictions');
});

/// Select the water availability
router.get('/create-charge-information/charge-reference/water-restrictions', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/water-restrictions');
});

router.post('/create-charge-information/charge-reference/water-restrictions', function(req, res) {
res.redirect('additional-charges');
});

/// Do additional charges apply?
router.get('/create-charge-information/charge-reference/additional-charges', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/additional-charges');
});

router.post('/create-charge-information/charge-reference/additional-charges', function(req, res) {

  let addCharges = req.session.data.addCharges

  if (addCharges == "no") {

  //get the element number to assign the charge reference against
  let elementNumber = req.session.data.elementNumber


  //get all of the data that will go into a charge Reference
  let appliesTo = "element 1"
  let lineDescription = req.session.data.lineDescription
  let chargeLoss = req.session.data.chargeLoss
  let chargeSource = req.session.data.chargeSource
  let chargeQuantity = req.session.data.chargeQuantity
  let chargeWaterAvailability = req.session.data.chargeWaterAvailability
  let chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
  let addCharges = req.session.data.addCharges
  let chargeRefNumber = "3.20.23"
  let chargeDescription = chargeLoss + " loss, " + chargeSource + " abstraction, below " + (parseInt(chargeQuantity)+1)   + " megalitres per year"
  let eiucRegion = "Anglian"
  let aggregateFactor = "1"

  let newChargeReference = {

    appliesTo,
    lineDescription,
    chargeLoss,
    chargeSource,
    chargeQuantity,
    chargeWaterAvailability,
    chargeWaterRestrictions,
    addCharges,
    chargeRefNumber,
    chargeDescription,
    eiucRegion,
    aggregateFactor

  };


  //get the sroc element
  let srocElement = req.session.data.srocElements[elementNumber]

  //push the charge ref data
  srocElement['chargeReference'].push(newChargeReference);

  //set variable to say that the charge has been assigned
  req.session.data.chargeAssigned = "true"


res.redirect('../charge-data-check');
} else {

  res.redirect('supported-source');

}



});

/// Select the water availability
router.get('/create-charge-information/charge-reference/supported-source', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/supported-source');
});

router.post('/create-charge-information/charge-reference/supported-source', function(req, res) {

  let suppSourceCharge = req.session.data.suppSourceCharge

  if (suppSourceCharge == "yes") {
    res.redirect('supported-source-name');
  } else {
    res.redirect('public-water-supply');
  }


});




module.exports = router

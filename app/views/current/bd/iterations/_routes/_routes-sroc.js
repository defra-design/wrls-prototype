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
///Create charge function
function createCharge(req, res) {

  //get the element number to assign the charge reference against
  //let elementNumber = req.session.data.elementNumber

  //get all of the data that will go into a charge Reference


  let srocElementsAssigned = req.session.data.assignElements
  let appliesTo = []
  //check to see which elements are part of the charge category
  if (srocElementsAssigned == undefined ){
    srocElementsAssigned = [0]
    appliesTo = ["Element 1"]
    req.session.data.srocElements[0].chargeReference = 0
} else if (srocElementsAssigned.length == 1) {
    let elementName = "Element " + (parseInt(srocElementsAssigned) + 1)
    appliesTo.push(elementName)
    req.session.data.srocElements[(parseInt(srocElementsAssigned))].chargeReference = 0
} else {
  srocElementsAssigned.forEach((srocElementsAssigned, index) => {
    let elementName = "Element " + (parseInt(index) + 1)
    appliesTo.push(elementName)
    req.session.data.srocElements[index].chargeReference = 0
    }
  );
}

  let lineDescription = req.session.data.lineDescription
  let chargeLoss = req.session.data.chargeLoss
  let chargeSource = req.session.data.chargeSource
  let chargeQuantity = req.session.data.chargeQuantity
  let chargeWaterAvailability = req.session.data.chargeWaterAvailability
  let chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
  let addCharges = req.session.data.addCharges
  let supSourceCharge = req.session.data.supSourceCharge
  let supSourceName = req.session.data.supSourceName
  let supPublicWater = req.session.data.supPublicWater
  let adjustmentsApply = req.session.data.adjustmentsApply
  let chargeRefNumber = "3.20.23"
  let chargeDescription = chargeLoss + " loss, " + chargeSource + " abstraction, below " + (parseInt(chargeQuantity) + 1) + "ML per year"
  let eiucRegion = "Anglian"
  let adjustments = ""
  if (adjustmentsApply == "yes"){
    adjustments = req.session.data.adjustments
  }
  /*
  adjustments: _unchecked
  adjustments: aggregate
  aggregateFactor: 1
  adjustments: charge adjustment
  chargeAdjustmentFactor: 1
  adjustments: winter discount
  adjustments: two part tariff agreement applies
  adjustments: abatement agreement applies
  adjustments: canal and river trust agreement applies
  */
  let aggregateFactor = ""
  if (adjustments.includes("aggregate")) {
     aggregateFactor = req.session.data.aggregateFactor
  }
  let chargeAdjustmentFactor = ""
  if (adjustments.includes("charge adjustment")) {
       chargeAdjustmentFactor = req.session.data.chargeAdjustmentFactor
  }


  let newChargeReference = {

    srocElementsAssigned,
    appliesTo,
    lineDescription,
    chargeLoss,
    chargeSource,
    chargeQuantity,
    chargeWaterAvailability,
    chargeWaterRestrictions,
    addCharges,
    supSourceCharge,
    supSourceName,
    supPublicWater,
    adjustmentsApply,
    chargeRefNumber,
    chargeDescription,
    eiucRegion,
    adjustments,
    aggregateFactor,
    chargeAdjustmentFactor,

  };


  //get the sroc element
  //let srocElement = req.session.data.srocElements[elementNumber]

  //push the charge ref data
  //srocElement['chargeReference'].push(newChargeReference);


  //push reference data
  req.session.data.chargeReferences.push(newChargeReference);

  //set variable to say that the charge has been assigned
  req.session.data.chargeAssigned = "true"
  //console.log("charge created" + req.session.data.chargeReferences)

};

 ///Remove charge function
 function removeCharge(req, res) {

   //get the element number to assign the charge reference against
  // let elementNumber = req.session.data.elementNumber

   //get the sroc element
   //let srocElement = req.session.data.srocElements[elementNumber]

   //delete the object in the array
  // srocElement['chargeReference'].splice(0 ,1);
   req.session.data.chargeReferences.splice(0 ,1);

  // console.log("charge removed" + req.session.data.chargeReferences)
}


/// Enter a description for the charge reference
router.get('/create-charge-information/charge-reference/which-elements', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/which-elements');
});

router.post('/create-charge-information/charge-reference/which-elements', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].assignElements = req.session.data.assignElements
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
    res.redirect('enter-description');
  }

});

/// Enter a description for the charge reference
router.get('/create-charge-information/charge-reference/enter-description', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/enter-description');
});

router.post('/create-charge-information/charge-reference/enter-description', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].lineDescription = req.session.data.lineDescription
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
    res.redirect('select-source');
  }

});

/// Select the source
router.get('/create-charge-information/charge-reference/select-source', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/select-source');
});

router.post('/create-charge-information/charge-reference/select-source', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].chargeSource = req.session.data.chargeSource
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
    res.redirect('select-loss');
  }
});

/// Select the loss
router.get('/create-charge-information/charge-reference/select-loss', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/select-loss');
});

router.post('/create-charge-information/charge-reference/select-loss', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].chargeLoss = req.session.data.chargeLoss
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
    res.redirect('enter-quantity');
  }
});

/// Enter a volume
router.get('/create-charge-information/charge-reference/enter-quantity', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/enter-quantity');
});

router.post('/create-charge-information/charge-reference/enter-quantity', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].chargeQuantity = req.session.data.chargeQuantity
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
      res.redirect('water-availability');
  }
});


/// Select the water availability
router.get('/create-charge-information/charge-reference/water-availability', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/water-availability');
});

router.post('/create-charge-information/charge-reference/water-availability', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].chargeWaterAvailability = req.session.data.chargeWaterAvailability
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
      res.redirect('water-restrictions');
  }
});

/// Select the water availability
router.get('/create-charge-information/charge-reference/water-restrictions', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/water-restrictions');
});

router.post('/create-charge-information/charge-reference/water-restrictions', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
      res.redirect('additional-charges');
  }
});

/// Do additional charges apply?
router.get('/create-charge-information/charge-reference/additional-charges', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/additional-charges');
});

router.post('/create-charge-information/charge-reference/additional-charges', function(req, res) {

  let addCharges = req.session.data.addCharges
  //check for additional charges, if not then redirect to adjustments question
  if (addCharges == "no") {
    //check if the route is from changing existing data or not
    let change = req.session.data.change
    if (change == "true"){
      let elementNumber = req.session.data.elementNumber
      req.session.data.chargeReferences[0].addCharges = req.session.data.addCharges
      req.session.data.change = false
      res.redirect('../charge-data-check');
    } else {
        res.redirect('do-adjustments-apply');
    }
  } else {

    //check to see if answers already exist for sup Source
    let supSourceCharge = req.session.data.supSourceCharge
    if (supSourceCharge == undefined){
    req.session.data.change = false
    res.redirect('supported-source');
  } else if (supSourceCharge.length){
    req.session.data.change = false
    //update charge information
    removeCharge(req, res);
    createCharge(req, res);
    res.redirect('../charge-data-check');
  }
  }
});

/// Select if the supported source charge applies
router.get('/create-charge-information/charge-reference/supported-source', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/supported-source');
});

router.post('/create-charge-information/charge-reference/supported-source', function(req, res) {

  let supSourceCharge = req.session.data.supSourceCharge

  if (supSourceCharge == "yes") {
    //if yes redirect to choose the name
    req.session.data.change = false
    res.redirect('supported-source-name');
  } else {
    //if no skip the supported source name question

    //check if the route is from changing existing data or not
    let change = req.session.data.change
    if (change == "true"){
      let elementNumber = req.session.data.elementNumber
      req.session.data.chargeReferences[0].supSourceCharge = req.session.data.supSourceCharge
      req.session.data.change = false
      res.redirect('../charge-data-check');
    } else {
        res.redirect('supply-public-water');
    }
  }

});


/// Select the supported source name
router.get('/create-charge-information/charge-reference/supported-source-name', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/supported-source-name');
});

router.post('/create-charge-information/charge-reference/supported-source-name', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].supSourceName = req.session.data.supSourceName
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {
      res.redirect('supply-public-water');
  }
});

/// Select the supply of public water
router.get('/create-charge-information/charge-reference/supply-public-water', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/supply-public-water');
});

router.post('/create-charge-information/charge-reference/supply-public-water', function(req, res) {

  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].supPublicWater = req.session.data.supPublicWater
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {

    //check to see if adjustments has already been answered
    let adjustmentsApply  = req.session.data.adjustmentsApply
    if (adjustmentsApply  == undefined){
    req.session.data.change = false
    res.redirect('do-adjustments-apply');
  } else if (adjustmentsApply.length){
    req.session.data.change = false
    //update charge information
    removeCharge(req, res);
    createCharge(req, res);
    res.redirect('../charge-data-check');
  }


  }
});



/// do adjustments apply?
router.get('/create-charge-information/charge-reference/do-adjustments-apply', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/do-adjustments-apply');
});

router.post('/create-charge-information/charge-reference/do-adjustments-apply', function(req, res) {

  let adjustmentsApply  = req.session.data.adjustmentsApply
  //check for adjustments, if there aren't create the charge reference
  if (adjustmentsApply == "no") {

    //check if the route is from changing existing data or not
    let change = req.session.data.change
    if (change == "true"){
      let elementNumber = req.session.data.elementNumber
      req.session.data.chargeReferences[0].adjustmentsApply = req.session.data.adjustmentsApply
      req.session.data.change = false
      //update charge
      removeCharge(req, res);
      createCharge(req, res);
      res.redirect('../charge-data-check');
    } else {
      //create charge
      createCharge(req, res);
      res.redirect('../charge-data-check');
    }

  } else {
    //if adjustments Apply
    //check to see if any adjustments are already there if they are redirect back to the charge version
    let adjustments = req.session.data.adjustments
    if (adjustments == undefined) {
    req.session.data.change = false
    res.redirect('which-adjustments');
    }
    else if (adjustments.length){
      //update charge
      removeCharge(req, res);
      createCharge(req, res);
      res.redirect('../charge-data-check');
    }
  }

});


/// Which adjustments
router.get('/create-charge-information/charge-reference/which-adjustments', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/which-adjustments');
});

router.post('/create-charge-information/charge-reference/which-adjustments', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].adjustments = req.session.data.adjustments
    req.session.data.change = false
    //update charge
    removeCharge(req, res);
    createCharge(req, res);
    res.redirect('../charge-data-check');
      } else {
        //update charge
        removeCharge(req, res);
        createCharge(req, res);
        res.redirect('../charge-data-check');
      }
});



/// Reason for adjustments - No longer needed
/*
router.get('/create-charge-information/charge-reference/adjustment-reason', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/adjustment-reason');
});

router.post('/create-charge-information/charge-reference/adjustment-reason', function(req, res) {

  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let elementNumber = req.session.data.elementNumber
    req.session.data.chargeReferences[0].adjustmentReason = req.session.data.adjustmentReason
    req.session.data.change = false
    //update charge
    removeCharge(req, res);
    createCharge(req, res);
    res.redirect('../charge-data-check');
  } else {
    //update charge
    removeCharge(req, res);
    createCharge(req, res);
    res.redirect('../charge-data-check');
  }

});
*/

module.exports = router

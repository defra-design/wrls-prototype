const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line


//get all of the charge category data
const chargeCategories = require('./data-category.js').chargeCategories;



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
  let chargeReferences = req.session.data.chargeReferences
  let chargeReferenceIndex = 0
  if (chargeReferences == []){
    let chargeReferenceIndex = req.session.data.chargeReferenceIndex
    if (chargeReferenceIndex == undefined){
      chargeReferenceIndex = 0
    }
  } else {
    chargeReferenceIndex = chargeReferences.length
  }

  //check to see which elements are part of the charge category
  if (srocElementsAssigned == undefined ){
    srocElementsAssigned = [0]
    appliesTo = ["Element 1"]
    req.session.data.srocElements[0].chargeReference = chargeReferenceIndex

    //blank out the fields that aren't used on SRoC assigned elements
    req.session.data.srocElements[srocElementsAssigned].season = ""
    req.session.data.srocElements[srocElementsAssigned].source = ""
    req.session.data.srocElements[srocElementsAssigned].eiuc = ""
    req.session.data.srocElements[srocElementsAssigned].billableQuantity = ""

} else if (srocElementsAssigned.length == 1) {
    let elementName = "Element " + (parseInt(srocElementsAssigned) + 1)
    appliesTo.push(elementName)
    req.session.data.srocElements[(parseInt(srocElementsAssigned))].chargeReference = chargeReferenceIndex

    //blank out the fields that aren't used on SRoC assigned elements
    req.session.data.srocElements[srocElementsAssigned].season = ""
    req.session.data.srocElements[srocElementsAssigned].source = ""
    req.session.data.srocElements[srocElementsAssigned].eiuc = ""
    req.session.data.srocElements[srocElementsAssigned].billableQuantity = ""

} else {
  srocElementsAssigned.forEach((srocElementsAssigned, index) => {
    let elementName = "Element " + (parseInt(srocElementsAssigned) + 1)
    appliesTo.push(elementName)
    req.session.data.srocElements[srocElementsAssigned].chargeReference = chargeReferenceIndex

    //blank out the fields that aren't used on SRoC assigned elements
    req.session.data.srocElements[srocElementsAssigned].season = ""
    req.session.data.srocElements[srocElementsAssigned].source = ""
    req.session.data.srocElements[srocElementsAssigned].eiuc = ""
    req.session.data.srocElements[srocElementsAssigned].billableQuantity = ""
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

  //set variables and ref and description just incase there are no matches
  let chargeRefNumber = "3.20.23"
  let chargeDescription = chargeLoss + " loss, " + chargeSource + " abstraction, below " + (parseInt(chargeQuantity) + 1) + "ML per year"

  //amend references to match chargeCategories for water modelling and availability
  let waterModel = ""
  let waterAvailability = ""

  if (chargeWaterRestrictions == "no model") {
    waterModel = ""
  } else {
    waterModel = chargeWaterRestrictions
  }

  if (chargeWaterAvailability == "available") {
    waterAvailability = ""
  } else {
    waterAvailability = "restricted"
  }

  //find the charge catergory
  for (chargeCategory of chargeCategories) {
    if ((chargeSource == chargeCategory.source) & (chargeLoss == chargeCategory.loss)  & (parseInt(chargeQuantity) >= chargeCategory.minVolume) & (parseInt(chargeQuantity) <= chargeCategory.maxVolume) & (waterAvailability == chargeCategory.restriction) & (waterModel == chargeCategory.model)) {
    chargeRefNumber = chargeCategory.chargeNumber
    chargeDescription = chargeCategory.chargeDescription
  }
  };

  //If there are no category matches search through the categories without the restriction/availability variable
  if (chargeRefNumber == "3.20.23") {
  for (chargeCategory of chargeCategories) {
  if ((chargeSource == chargeCategory.source) & (chargeLoss == chargeCategory.loss) & (parseInt(chargeQuantity) >= chargeCategory.minVolume) & (parseInt(chargeQuantity) <= chargeCategory.maxVolume) & (waterModel == chargeCategory.model))
  {
    chargeRefNumber = chargeCategory.chargeNumber
    chargeDescription = chargeCategory.chargeDescription
  }
  };
}

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
  let abatementFactor = ""
  if (adjustments.includes("abatement agreement applies")) {
       abatementFactor = req.session.data.abatementFactor
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
    abatementFactor,

  };

  //push reference data
  req.session.data.chargeReferences.push(newChargeReference);

  //set variable to say that the charge has been assigned
  req.session.data.chargeAssigned = "true"

};

 ///Remove charge function
 function removeCharge(req, res) {

   //delete the object in the array
   req.session.data.chargeReferences.splice(req.session.data.chargeReferenceIndex ,1);

}

///update the charge reference
function updateChargeReference(req, res) {

  let chargeLoss = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeLoss
  let chargeSource = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeSource
  let chargeQuantity = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeQuantity
  let chargeWaterAvailability = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterAvailability
  let chargeWaterRestrictions = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions

  //set variables and ref and description just incase there are no matches
  let chargeRefNumber = "3.20.23"
  let chargeDescription = chargeLoss + " loss, " + chargeSource + " abstraction, below " + (parseInt(chargeQuantity) + 1) + "ML per year"

  //amend references to match chargeCategories for water modelling and availability
  let waterModel = ""
  let waterAvailability = ""

  if (chargeWaterRestrictions == "no model") {
    waterModel = ""
  } else {
    waterModel = chargeWaterRestrictions
  }

  if (chargeWaterAvailability == "available") {
    waterAvailability = ""
  } else {
    waterAvailability = "restricted"
  }
  //find the charge catergory
  for (chargeCategory of chargeCategories) {
    if ((chargeSource == chargeCategory.source) & (chargeLoss == chargeCategory.loss)  & (parseInt(chargeQuantity) >= chargeCategory.minVolume) & (parseInt(chargeQuantity) <= chargeCategory.maxVolume) & (waterAvailability == chargeCategory.restriction) & (waterModel == chargeCategory.model)) {
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeRefNumber = chargeCategory.chargeNumber
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeDescription = chargeCategory.chargeDescription
    chargeRefNumber = chargeCategory.chargeNumber
    chargeDescription = chargeCategory.chargeDescription
  }
  };

  //If there are no category matches search through the categories without the restriction/availability variable
  if (chargeRefNumber == "3.20.23") {
  for (chargeCategory of chargeCategories) {
  if ((chargeSource == chargeCategory.source) & (chargeLoss == chargeCategory.loss) & (parseInt(chargeQuantity) >= chargeCategory.minVolume) & (parseInt(chargeQuantity) <= chargeCategory.maxVolume) & (waterModel == chargeCategory.model))
  {
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeRefNumber = chargeCategory.chargeNumber
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeDescription = chargeCategory.chargeDescription
    chargeRefNumber = chargeCategory.chargeNumber
    chargeDescription = chargeCategory.chargeDescription
  }
  };
}

}

///update charge reference
function updateAdditionalCharges(req, res) {

  //delete the object in the array
  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].addCharges = req.session.data.addCharges
  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].supSourceCharge = req.session.data.supSourceCharge
  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].supSourceName= req.session.data.supSourceName
  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].supPublicWater = req.session.data.supPublicWater

}



/// Select which elements are part of the charge reference
router.get('/create-charge-information/charge-reference/which-elements', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/which-elements');
});

router.post('/create-charge-information/charge-reference/which-elements', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    let existingElements = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].srocElementsAssigned
    existingElements.forEach((existingElements) => {
      req.session.data.srocElements[existingElements].chargeReference = undefined
    });
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].appliesTo = []
    let srocElementsAssigned = req.session.data.assignElements
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].srocElementsAssigned = req.session.data.assignElements
    srocElementsAssigned.forEach((srocElementsAssigned) => {
      let elementName = "Element " + (parseInt(srocElementsAssigned) + 1)
      req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].appliesTo.push(elementName)
      req.session.data.srocElements[srocElementsAssigned].chargeReference = req.session.data.chargeReferenceIndex

      //blank out the fields that aren't used on SRoC assigned elements
      req.session.data.srocElements[srocElementsAssigned].season = ""
      req.session.data.srocElements[srocElementsAssigned].source = ""
      req.session.data.srocElements[srocElementsAssigned].eiuc = ""
      req.session.data.srocElements[srocElementsAssigned].billableQuantity = ""
      }
    );
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].lineDescription = req.session.data.lineDescription
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeSource = req.session.data.chargeSource
    req.session.data.change = false
    updateChargeReference(req, res)
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeLoss = req.session.data.chargeLoss
    req.session.data.change = false
    updateChargeReference(req, res)
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeQuantity = req.session.data.chargeQuantity
    req.session.data.change = false
    updateChargeReference(req, res)
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterAvailability = req.session.data.chargeWaterAvailability
    req.session.data.change = false
    updateChargeReference(req, res)
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    updateChargeReference(req, res)
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
      req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].addCharges = req.session.data.addCharges
      req.session.data.change = false
      res.redirect('../charge-data-check');
    } else {
        res.redirect('do-adjustments-apply');
    }
  } else {

    //check to see if answers already exist for sup Source

    //Does the charge reference exist?
    let chargeReference = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex]
    if (chargeReference == undefined ){
    req.session.data.change = false
    res.redirect('supported-source');
  } //Does the supported source question exist?
    else if (chargeReference.supSourceCharge !== undefined){
    req.session.data.change = false
    //update charge information
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].addCharges = req.session.data.addCharges
    res.redirect('../charge-data-check');
  } //If add charges and suppored source doesn't exist then ask for the supported source
    else {
    req.session.data.change = false
    res.redirect('supported-source');
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
      req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].supSourceCharge = req.session.data.supSourceCharge
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].supSourceName = req.session.data.supSourceName
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
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].supPublicWater = req.session.data.supPublicWater
    req.session.data.change = false
    res.redirect('../charge-data-check');
  } else {


      //check to see the charge reference exists
      let chargeReference = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex]
      if (chargeReference == undefined ){
    req.session.data.change = false
    res.redirect('do-adjustments-apply');
  } else if (chargeReference.adjustmentsApply.length){
    req.session.data.change = false
    //update charge information
    updateAdditionalCharges(req, res);
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
  let chargeReference = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex]
  let adjustmentsApply  = req.session.data.adjustmentsApply

  //If the charge reference doesn't exist
  if (chargeReference == undefined ){

    //check for adjustments, if there aren't create the charge reference
    if (adjustmentsApply == "no") {
      //create charge
      createCharge(req, res);
      res.redirect('../charge-data-check');
  } //else continue to next question
  else {
    res.redirect('which-adjustments');
  }
}  //if the charge does exist
else {
  //check for adjustments being applied, if that is no update the answer and return to the charge screen
  if (adjustmentsApply == "no") {
  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].adjustmentsApply = req.session.data.adjustmentsApply
  req.session.data.change = false
  res.redirect('../charge-data-check');
} //the charge exists and adjustments are being applied update the answer and move to the next question
 else {
   req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].adjustmentsApply = req.session.data.adjustmentsApply
   req.session.data.change = false
   res.redirect('which-adjustments');
 }
}

});


/// Which adjustments
router.get('/create-charge-information/charge-reference/which-adjustments', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/which-adjustments');
});

router.post('/create-charge-information/charge-reference/which-adjustments', function(req, res) {
   //check to see if the charge exists
   let chargeReference = req.session.data.chargeReferences[req.session.data.chargeReferenceIndex]
  if (chargeReference == undefined){
    //if the charge doesn't exist, create charge
    createCharge(req, res);
  } //if the charge exists, update the answers for the adjustments
  else {
    req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].adjustments = req.session.data.adjustments

    if (req.session.data.adjustments.includes("aggregate")) {
       req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].aggregateFactor = req.session.data.aggregateFactor
    }

    if (req.session.data.adjustments.includes("charge adjustment")) {
         req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeAdjustmentFactor = req.session.data.chargeAdjustmentFactor
    }
    req.session.data.change = false
  }
    res.redirect('../charge-data-check');
});

///ADD A NOTE

/// Enter a note
router.get('/create-charge-information/charge-reference/add-a-note', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/charge-reference/add-a-note');
});

router.post('/create-charge-information/charge-reference/add-a-note', function(req, res) {


    res.redirect('../charge-data-check');

});



////CHARGE DATA CONFIRMED
//Charge data check
router.post('/create-charge-information/charge-data-check', function(req, res) {

  console.log(req.session.data.chargeVersions[0])
  console.log(req.session.data.chargeReferences)
  console.log(req.session.data.srocElements)
  req.session.data.chargeVersions[0]['chargeStatus'] = "NOT APPROVED"
  //reset all the completed flags for the task list
  req.session.data['reasonNewSet'] = "false"
  req.session.data['chargeStartSet'] = "false"
  req.session.data['elementNew'] = "false"
  req.session.data['createNewContact'] = "false"
  req.session.data['existingContact'] = "false"

  req.session.data['sroc'] = "true"
  res.redirect('/bd/charges-2020/charge-version/charge-data-confirmation');

});


///chargeVersions - approve or request changes
router.post('/create-charge-information/charge-version', function(req, res) {

  const approve = req.session.data['approve-charge-information']

  if (approve === 'approve') {
    req.session.data['changesMade'] = "false"
    req.session.data.suppBilling = "true"
    if(req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].adjustments.includes('two part tariff agreement applies')){
      res.redirect('/create-charge-information/confirm-tpt-supplementary')
      console.log('TpT supplementary set')
    } else { res.redirect('/bd/charges-2020/confirm-approve-charge-information')}
    
  } else {
    res.redirect('/bd/charges-2020/confirm-request-changes')
  }

});

//TpT supplementary billing route
router.get('/create-charge-information/confirm-tpt-supplementary', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/confirm-tpt-supplementary');
});

router.post('/create-charge-information/confirm-tpt-supplementary', function(req, res) {
  req.session.data.back = req.headers.referer
  res.redirect('/bd/charges-2020/confirm-approve-charge-information');
});




///////////CHARGE INFORMATION NOT APPROVED REASON
router.post('/bd/charges-2020/request-changes', function(req, res) {

  res.redirect('/bd/charges-2020/confirm-request-changes');

});

///////////CHARGE INFORMATION NOT APPROVED CONFIRMATION
router.post('/bd/charges-2020/confirm-request-changes', function(req, res) {

  //update the element status
  req.session.data.chargeVersions[0]['chargeStatus'] = "CHANGES"

  res.redirect('/bd/licence-summary#charge');

});



//REMOVE CHARGE VERSION
router.post('/bd/charges-2020/charge-version/confirm-remove-charge-information', function(req, res) {


  let chargeVersions = req.session.data['chargeVersions']

  chargeVersions.splice(0, 1);
  req.session.data['chargeVersions'] = chargeVersions


  res.redirect('/bd/licence-summary#charge');
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


//---------------------------------------------------------------------------

// CREATE AN AGGREEMENT //


/// Select Aggressment
router.get('/create-charge-information/create-an-agreement', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/create-an-agreement/select-agreement');
});

router.post('/create-charge-information/create-an-agreement/select-agreement', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
    req.session.data['change'] = "false"
    res.redirect('check-your-answers');
  } else {
    res.redirect('agreement-signed-date');
  }
});

/// Add a signed date
router.get('/create-charge-information/agreement-signed-date', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/create-an-agreement/agreement-signed-date');
});

router.post('/create-charge-information/create-an-agreement/agreement-signed-date', function(req, res) {

    res.redirect('check-your-answers');
});

/// Check your answers
router.get('/create-charge-information/check-your-answers', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'create-charge-information/create-an-agreement/check-your-answers');
});

router.post('/create-charge-information/create-an-agreement/check-your-answers', function(req, res) {
  let agreementNumber = req.session.data['agreementNumber']

  console.log(agreementNumber)
  if(agreementNumber == undefined) {

  let agreement = req.session.data['srocAgreement']
  let agreementSignedStartDay = ""
  let agreementSignedStartMonth = ""
  let agreementSignedStartYear = ""
  let agreementSignedDate = ""
  let agreementSignedDateConditional = req.session.data['srocAgreementSignedDateConditional']

  if (agreementSignedDateConditional == "no" ){
    agreementSignedDate = "Not known"
  } else {
    agreementSignedStartDay = req.session.data['srocAgreementSignedStart-day']
    agreementSignedStartMonth = req.session.data['srocAgreementSignedStart-month']
    agreementSignedStartYear = req.session.data['srocAgreementSignedStart-year']
    agreementSignedDate = agreementSignedStartYear + (agreementSignedStartMonth.padStart(2, '0')) + (agreementSignedStartDay.padStart(2, '0'))
    parseInt(agreementSignedDate)
  }


  let newsrocAgreement = {

    agreement,
    agreementSignedStartDay,
    agreementSignedStartMonth,
    agreementSignedStartYear,
    agreementSignedDate,
    agreementSignedDateConditional

  };

  //push agreement data
  req.session.data.srocAgreements.push(newsrocAgreement);

  }
    else  {

    req.session.data.srocAgreements[agreementNumber].agreement = req.session.data['srocAgreement']
    req.session.data.srocAgreements[agreementNumber].agreementSignedDateConditional = req.session.data['srocAgreementSignedDateConditional']

    if (req.session.data['srocAgreementSignedDateConditional'] == "no") {
      req.session.data.srocAgreements[agreementNumber].agreementSignedDate = "Not known"
      req.session.data.srocAgreements[agreementNumber].agreementSignedStartDay = ""
      req.session.data.srocAgreements[agreementNumber].agreementSignedStartMonth = ""
      req.session.data.srocAgreements[agreementNumber].agreementSignedStartYear = ""
    } else {

      req.session.data.srocAgreements[agreementNumber].agreementSignedStartDay = req.session.data['srocAgreementSignedStart-day']
      req.session.data.srocAgreements[agreementNumber].agreementSignedStartMonth = req.session.data['srocAgreementSignedStart-month']
      req.session.data.srocAgreements[agreementNumber].agreementSignedStartYear = req.session.data['srocAgreementSignedStart-year']
      req.session.data.srocAgreements[agreementNumber].agreementSignedDate = req.session.data['srocAgreementSignedStart-year'] + (req.session.data['srocAgreementSignedStart-month'].padStart(2, '0')) + (req.session.data['srocAgreementSignedStart-day'].padStart(2, '0'))
      parseInt(req.session.data.srocAgreements[agreementNumber].agreementSignedDate)
    }
    }



  //blank the session data from the flow, once the agreement object has been created
  req.session.data['srocAgreement'] = ""
  req.session.data['srocAgreementSignedDateConditional'] = ""
  req.session.data['srocAgreementSignedStart-day'] = ""
  req.session.data['srocAgreementSignedStart-month'] = ""
  req.session.data['srocAgreementSignedStart-year'] = ""
  req.session.data['agreementNumber'] = undefined



  res.redirect('../charge-data-check');
});


//Remove an agreement
router.get('/create-charge-information/remove-agreement-date', function(req, res) {

  let agreements = req.session.data['srocAgreements']
  let agreementNumber = req.session.data['agreementNumber']
  agreements.splice(agreementNumber, 1);
  req.session.data['srocAgreements'] = agreements

  res.render(folder + 'create-charge-information/charge-data-check');
});



module.exports = router

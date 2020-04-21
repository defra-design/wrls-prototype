const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

/////Reason for new charge version
//Setting the change element route back
router.get('/bd/charges-2020/add-new-reason', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-new-reason');

});


router.post('/bd/charges-2020/add-new-reason', function (req, res) {

  let change = req.session.data['change']
  //if statement for creating the new chargeversion
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
  }
  else {
  res.redirect('/bd/charges-2020/charge-version/set-charge-start-date');
  }
});



//Charge start date
//This triggers the creation of a charge version
router.post('/bd/charges-2020/charge-version/set-charge-start-date', function (req, res) {

  //setting the date of charge start incorporating the radio buttons
  let chargeDateConditional = req.session.data['chargeDateConditional'];
  if (chargeDateConditional != "other"){

  let d = new Date();
  let m = new Date();
  let y = new Date();
  req.session.data['chargeStart-day'] = d.getDate();
  req.session.data['chargeStart-month'] = m.getMonth()+1;
  req.session.data['chargeStart-year'] = y.getFullYear();
  }


  //trigger for new element
  let chargeNew = req.session.data['createElement']

// date fields
  let chargeStartDay = req.session.data['chargeStart-day'];
  let chargeStartMonth = req.session.data['chargeStart-month'];
  let chargeStartYear = req.session.data['chargeStart-year'];

//change the month into a name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let monthNumber = chargeStartMonth
let month = monthNames[monthNumber - 1]

//set the charge start date
  let chargeStart = chargeStartDay + " " + month + " " + chargeStartYear
  let chargeEnd = ""
  let chargeStatus = "DRAFT"
  let chargeBilledDate = ""
  let reason = req.session.data['reasonNewCharge']

  let newCharge = {chargeStart, chargeEnd, chargeStatus, chargeBilledDate, reason};
  let chargeVersions = req.session.data['chargeVersions']
  chargeVersions.unshift(newCharge);

   let change = req.session.data['change']
//if statement for creating the new chargeversion
  if (chargeNew == "true"){
  res.redirect('/bd/charges-2020/charge-version/how-to-create-element');
  }
  else {
    res.redirect('set-charge-start-date-check');
  }



  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
  }


});

//Purpose
//Setting the change element route back
router.get('/bd/charges-2020/add-element-purpose', function (req, res) {

     req.session.data.back = req.headers.referer


  res.render('bd/charges-2020/add-element-purpose');

});

//Purpose
//This triggers the creation of a charge element
router.post('/bd/charges-2020/add-element-purpose', function (req, res) {

  let elementNew = req.session.data['elementNew']
  let purpose = req.session.data['purpose']
  let elementNumber = req.session.data['elementNumber']

  if (elementNew == "true" && elementNumber > "0"){
  let newElement = {purpose};
  let elements = req.session.data['elements']
  elements.push(newElement);
  }

  let change = req.session.data['change']

  if (change == "true"){
    req.session.data.elements[elementNumber]['purpose'] = purpose
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
} else {
  res.redirect('add-element-description');
}

});


//description
//Setting the change element route back
router.get('/bd/charges-2020/add-element-description', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-element-description');

});

//Description
router.post('/bd/charges-2020/add-element-description', function (req, res) {

  let description = req.session.data['description']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['description'] = description

  let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
} else {
  res.redirect('add-abstraction-period');
}

});

//Abstraction period
//Setting the change element route back
router.get('/bd/charges-2020/add-abstraction-period', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-abstraction-period');

});

//Abstraction period
router.post('/bd/charges-2020/add-abstraction-period', function (req, res) {

  let abstractionStartDay = req.session.data['abstractionStartDay'];
  let abstractionStartMonth = req.session.data['abstractionStartMonth'];
  let abstractionEndDay = req.session.data['abstractionEndDay'];
  let abstractionEndMonth = req.session.data['abstractionEndMonth'];

  let elementNumber = req.session.data['elementNumber']

  req.session.data.elements[elementNumber]['abstractionStartDay'] = abstractionStartDay
  req.session.data.elements[elementNumber]['abstractionStartMonth'] = abstractionStartMonth
  req.session.data.elements[elementNumber]['abstractionEndDay'] = abstractionEndDay
  req.session.data.elements[elementNumber]['abstractionEndMonth'] = abstractionEndMonth


  let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
} else {
  res.redirect('add-authorised-quantity');
}

});


//Authorised quantity
//Setting the change element route back
router.get('/bd/charges-2020/add-authorised-quantity', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-authorised-quantity');

});

//Authorised quantity
router.post('/bd/charges-2020/add-authorised-quantity', function (req, res) {

  let authorisedQuantity = req.session.data['authorisedQuantity']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['authorisedQuantity'] = authorisedQuantity

  let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
  } else {
  res.redirect('add-billable-quantity');
  }

});

//Billable quantity
//Setting the change element route back
router.get('/bd/charges-2020/add-billable-quantity', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-billable-quantity');

});

//Billable quantity
router.post('/bd/charges-2020/add-billable-quantity', function (req, res) {

  let billableQuantity = req.session.data['billableQuantity']
  let billableQuantityNeeded = req.session.data['billableQuantityNeeded']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['billableQuantity'] = billableQuantity
  req.session.data.elements[elementNumber]['billableQuantityNeeded'] = billableQuantityNeeded

  let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
} else {
  res.redirect('add-time-limit');
}

});


//Time limit
//Setting the change element route back
router.get('/bd/charges-2020/add-time-limit', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-time-limit');

});


//Time limit
router.post('/bd/charges-2020/add-time-limit', function (req, res) {

  let timeLimit = req.session.data['timeLimit']
  let timeLimitDay = req.session.data['timeLimit-day'];
  let timeLimitMonth = req.session.data['timeLimit-month'];
  let timeLimitYear = req.session.data['timeLimit-year'];
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['timeLimit'] = timeLimit
  req.session.data.elements[elementNumber]['timeLimitDay'] = timeLimitDay;
  req.session.data.elements[elementNumber]['timeLimitMonth'] = timeLimitMonth;
  req.session.data.elements[elementNumber]['timeLimitYear'] = timeLimitYear;

  let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
  } else {
  res.redirect('add-source');
  }

});


//Source
//Setting the change element route back
router.get('/bd/charges-2020/add-source', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-source');

});



//Source
router.post('/bd/charges-2020/add-source', function (req, res) {

  let source = req.session.data['source']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['source'] = source

  let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
} else {
  res.redirect('add-season');
}

});

//Season
//Setting the change element route back
router.get('/bd/charges-2020/add-season', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-season');

});



//Season
router.post('/bd/charges-2020/add-season', function (req, res) {

  let season = req.session.data['season']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['season'] = season

  let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
  } else {
  res.redirect('add-loss');
  }

});


//Loss
//Setting the change element route back
router.get('/bd/charges-2020/add-loss', function (req, res) {

     req.session.data.back = req.headers.referer

  res.render('bd/charges-2020/add-loss');

});


//Loss
router.post('/bd/charges-2020/add-loss', function (req, res) {

  let loss = req.session.data['loss']
  let elementNumber = req.session.data['elementNumber']
  req.session.data.elements[elementNumber]['loss'] = loss


let change = req.session.data['change']
  if (change == "true"){
    req.session.data.change = "false"
    back = req.session.data['back'];
  res.redirect(back);
  } else {
  res.redirect('/bd/charges-2020/charge-version/create-element?change=false');
  }

});

//Copy element
router.post('/bd/charges-2020/charge-version/confirm-copy-element', function (req, res) {


  let elementCopy = req.session.data['elementCopy']
  let elementNumber = req.session.data['elementNumber']

  let purpose = req.session.data.elements[elementNumber]['purpose']
  let description = req.session.data.elements[elementNumber]['description']
  let abstractionStartDay = req.session.data.elements[elementNumber]['abstractionStartDay']
  let abstractionStartMonth = req.session.data.elements[elementNumber]['abstractionStartMonth']
  let abstractionEndDay = req.session.data.elements[elementNumber]['abstractionEndDay']
  let abstractionEndMonth = req.session.data.elements[elementNumber]['abstractionEndMonth']
  let billableQuantity = req.session.data.elements[elementNumber]['billableQuantity']
  let authorisedQuantity =  req.session.data.elements[elementNumber]['authorisedQuantity']
  let timeLimit = req.session.data.elements[elementNumber]['timeLimit']
  let timeLimitDay = req.session.data['timeLimit-day'];
  let timeLimitMonth = req.session.data['timeLimit-month'];
  let timeLimitYear = req.session.data['timeLimit-year'];
  let source = req.session.data.elements[elementNumber]['source']
  let season = req.session.data.elements[elementNumber]['season']
  let loss = req.session.data.elements[elementNumber]['loss']

   elementNumber = req.session.data['elements'].length


  if (elementCopy == "true" && elementNumber > "0"){
  let newElement = {purpose, description, abstractionStartDay, abstractionStartMonth, abstractionEndDay, abstractionEndMonth, billableQuantity, authorisedQuantity, timeLimit, timeLimitDay, timeLimitMonth, timeLimitYear, source, season, loss};
  let elements = req.session.data['elements']
  elements.push(newElement);
  }

  res.redirect('/bd/charges-2020/charge-version/create-element?change=false');
});


//Remove element
router.post('/bd/charges-2020/charge-version/confirm-remove-element', function (req, res) {

  let elementNumber = req.session.data['elementNumber']
  let elements = req.session.data['elements']

    elements.splice(elementNumber, 1);
    req.session.data['elements'] = elements


  res.redirect('/bd/charges-2020/charge-version/create-element?change=false');
});


//Create Element
router.post('/bd/charges-2020/charge-version/create-element', function (req, res) {

  let createElement = req.session.data['createElement']

  if ( createElement == "true"){
  res.redirect('charge-data-check');
} else {
  res.redirect('charge-data-create?elementNew=true');
}

});




//Charge data check
router.post('/bd/charges-2020/charge-version/charge-data-check', function (req, res) {


  req.session.data.chargeVersions[0]['chargeStatus'] = "NOT APPROVED"

  res.redirect('charge-data-confirmation');

});


///////////CHARGE INFORMATION APPROVAL
router.post('/bd/charges-2020/confirm-approve-charge-information', function (req, res) {

 //update the element statuses
  req.session.data.chargeVersions[0]['chargeStatus'] = "CHARGEABLE"
  req.session.data.chargeVersions[1]['chargeStatus'] = "REPLACED"

  // date fields
    let chargeStartDay = req.session.data['chargeStart-day'] -1;
    let chargeStartMonth = req.session.data['chargeStart-month'];
    let chargeStartYear = req.session.data['chargeStart-year'];

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthNumber = chargeStartMonth
  let month = monthNames[monthNumber - 1]

  //set the charge end date
    let chargeEnd = chargeStartDay + " " + month + " " + chargeStartYear


//set the old charge informations end date
  req.session.data.chargeVersions[1]['chargeEnd'] = chargeEnd


  res.redirect('charge-versions');

});


///////////CHARGE INFORMATION NOT APPROVED REASON
router.post('/bd/charges-2020/request-changes', function (req, res) {

  res.redirect('confirm-request-changes');

});

///////////CHARGE INFORMATION NOT APPROVED CONFIRMATION
router.post('/bd/charges-2020/confirm-request-changes', function (req, res) {

 //update the element status
  req.session.data.chargeVersions[0]['chargeStatus'] = "CHANGES"

  res.redirect('charge-versions');

});



//REMOVE CHARGE VERSION
router.post('/bd/charges-2020/charge-version/confirm-remove-charge-information', function (req, res) {


  let chargeVersions = req.session.data['chargeVersions']

    chargeVersions.splice(0, 1);
    req.session.data['chargeVersions'] = chargeVersions


  res.redirect('/bd/charges-2020/charge-versions');
});





/////////////NON_CHARGEABLE

//Reason
router.post('/bd/charges-2020/add-reason', function (req, res) {


  res.redirect('/bd/charges-2020/add-nonchargeable-date');
});

//DATE
router.post('/bd/charges-2020/add-nonchargeable-date', function (req, res) {

  let nonChargeableDate = req.session.data['nonchargeableDateConditional'];
  if (nonChargeableDate != "other"){

  let d = new Date();
  let m = new Date();
  let y = new Date();
  req.session.data['chargeStart-day'] = d.getDate();
  req.session.data['chargeStart-month'] = m.getMonth()+1;
  req.session.data['chargeStart-year'] = y.getFullYear();
  }

  res.redirect('/bd/charges-2020/nonchargeable-check');
});



//NON-CHARGEABLE-CREATE
router.post('/bd/charges-2020/nonchargeable-check', function (req, res) {


  // date fields
    let chargeStartDay = req.session.data['chargeStart-day'];
    let chargeStartMonth = req.session.data['chargeStart-month'];
    let chargeStartYear = req.session.data['chargeStart-year'];

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthNumber = chargeStartMonth
  let month = monthNames[monthNumber - 1]

  //set the charge start date
    let chargeStart = chargeStartDay + " " + month + " " + chargeStartYear
    let chargeEnd = ""
    let chargeStatus = "CHARGEABLE"
    let chargeBilledDate = "Free of charge"
    let free = "true"

    let newCharge = {chargeStart, chargeEnd, chargeStatus, chargeBilledDate, free};
    let chargeVersions = req.session.data['chargeVersions']
    chargeVersions.unshift(newCharge);


   //Mark the old charge version as replaced and set the end date
    req.session.data.chargeVersions[1]['chargeStatus'] = "REPLACED"

    //set the charge end date
    chargeStartDay = chargeStartDay - 1;
    chargeEnd = chargeStartDay + " " + month + " " + chargeStartYear
  //set the old charge informations end date
    req.session.data.chargeVersions[1]['chargeEnd'] = chargeEnd



  //Set an agreement for Abatement
  let reason = req.session.data['reason']
  if ( reason = "Abatement" )
  {
   req.session.data['agreement'] = "Abatement (S126)"
   req.session.data['agreementNew'] = "true"
   req.session.data['agreementEnded'] = "true"
  }

  res.redirect('/bd/charges-2020/charge-versions');
});

/*
router.get('/bd/charges-2020/charge-version/create-element', function (req, res) {


   req.session.data['elementCopy'] = "false"

  res.render('bd/charges-2020/charge-version/create-element')
});


//Create Element
router.('', function (req, res) {


  let elementNew = req.session.data['elementNew']
  let purpose = req.session.data['purpose']
  let elementNumber = req.session.data['elementNumber']

  if (elementNew == "true" && elementNumber > "0"){
  let newElement = {purpose};
  let elements = req.session.data['elements']
  elements.push(newElement);
  }

  let change = req.session.data['change']


  res.redirect('/bd/charges-2020/charge-version/create-element');
}


});*/



module.exports = router

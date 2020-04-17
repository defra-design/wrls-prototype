const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

/*
//  elment details set in route - these have been moved to the default session data

//Element details
const elements = {
  element1 : {
  purpose: 'Spray irrigation',
  description: 'Base licence',
  absPeriod: "1 April to 31 March",
  authQuantity: "1,250,000",
  billQuantity: "1,250,000",
  source: "Unsupported",
  season: "All year",
  loss: "High"

},
   element2 : {
     purpose: 'Spray irrigation',
     description: 'Time limited increase',
     absPeriod: "1 April to 31 March",
     authQuantity: "250,000",
     billQuantity: "250,000",
     timeLimited: "31 March 2022",
     source: "Unsupported",
     season: "All year",
     loss: "High"
},
};



// //////////////////////////////
//INDEX PAGE
router.get('/', function(req, res) {

  req.session.data['elements'] = elements

    res.render('index');
});



router.get('/bd/charges-2020/current-charge-version', function (req, res) {

  req.session.data['elements'] = elements

  res.render('bd/charges-2020/current-charge-version')
})



const elements = {
  "element1": {
      "purpose":"Spray irrigation",
      "description":"Otterton borehole 1a",
      "abstractionStartDay": "1",
      "abstractionStartMonth": "4",
      "abstractionEndDay": "31",
      "abstractionEndMonth": "3",
      "billableQuantity": "125,000,000",
      "authorisedQuantity": "150,000,000",
      "timeLimit": "No",
      "source":"Unsupported",
      "season":"All year",
      "loss":"High"
    },
    "element2":{
      "purpose":"Spray irrigation",
      "description":"Otterton borehole 1a, Time limited increase",
      "abstractionStartDay": "1",
      "abstractionStartMonth": "4",
      "abstractionEndDay": "31",
      "abstractionEndMonth": "3",
      "billableQuantity": "250,000",
      "authorisedQuantity": "250,000",
      "timeLimit": "Yes",
      "source":"Unsupported",
      "season":"All year",
      "loss":"High"
    },
    "element3":{
      "purpose":"Spray irrigation",
      "description":"Otterton borehole 1a, Time limited increase",
      "abstractionStartDay": "1",
      "abstractionStartMonth": "4",
      "abstractionEndDay": "31",
      "abstractionEndMonth": "3",
      "billableQuantity": "250,000",
      "authorisedQuantity": "250,000",
      "timeLimit": "Yes",
      "source":"Unsupported",
      "season":"All year",
      "loss":"High"
    }
  }





//add another activity to the activities list
router.post('/bd/charges-2020/charge-version/create-element', function (req, res) {

  let purpose = req.session.data['purpose']
  let elementNumber = req.session.data['elementNumber']
  if (elementNumber === "1") {
   req.session.data.elements.element1['purpose'] = purpose
  }


  res.redirect('create-element');

});



// //////////////////////////////
//INDEX PAGE
router.get('/', function(req, res) {


const elementNumber = req.session.data['elementNumber']
const change = req.session.data['change']


const purpose = req.session.data['purpose']
const description = req.session.data['description']
const abstractionStartDay = req.session.data['abstractionStartDay']
const abstractionStartMonth = req.session.data['abstractionStartMonth']
const abstractionEndDay = req.session.data['abstractionEndDay']
const abstractionEndMonth = req.session.data['abstractionEndMonth']
const billableQuantity = req.session.data['billableQuantity']
const authorisedQuantity = req.session.data['authorisedQuantity']
const timeLimit = req.session.data['timeLimit']
const source = req.session.data['source']
const season = req.session.data['season']
const loss = req.session.data['loss']

res.render('index');
});

*/


//Charge start date
//This triggers the creation of a charge version
router.post('/bd/charges-2020/charge-version/set-charge-start-date', function (req, res) {

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


//if statement for creating the new chargeversion
  if (chargeNew == "true"){
  let newCharge = {chargeStart, chargeEnd, chargeStatus, chargeBilledDate};
  let chargeVersions = req.session.data['chargeVersions']
  chargeVersions.unshift(newCharge);
  res.redirect('/bd/charges-2020/charge-version/how-to-create-element');
  }
  else {
    let newCharge = {chargeStart, chargeEnd, chargeStatus, chargeBilledDate};
    let chargeVersions = req.session.data['chargeVersions']
    chargeVersions.unshift(newCharge);
    res.redirect('set-charge-start-date-check');
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

  //set the charge start date
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

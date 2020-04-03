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

  // //////////////////////////////
  //INDEX PAGE
  router.get('/', function(req, res) {

    req.session.data['elements'] = elements

      res.render('index');
  });

*/

//add another activity to the activities list
router.post('/bd/charges-2020/charge-version/create-element', function (req, res) {

  let purpose = req.session.data['purpose']
  let elementNumber = req.session.data['elementNumber']
  if (elementNumber === "1") {
   req.session.data.elements.element1['purpose'] = purpose
  }


  res.redirect('create-element');

});



module.exports = router

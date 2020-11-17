const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



////SEARCH RESULTS
router.get('/search', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/search');

});

router.post('/search', function(req, res) {

//get the search term
let term = req.session.data['search']


//Check to see if the results should be a billing account or a licence based on the search term entered
//In the proto all billing accounts begin with BA
if ( term.startsWith("BA") ){
  req.session.data.resultsTable = "sandbox/includes/billing-accounts-table.html"
} else {
  req.session.data.resultsTable = "sandbox/includes/licences-table.html"
}

res.redirect('search');

});


router.post('/set-user-type', function(req, res) {

  /*let chargeNew = req.session.data['createElement']
  let change = req.session.data['change']
  let noCharge = req.session.data['reasonNewCharge']
  //if statement for creating the new chargeversion
  if (change == "true") {
    req.session.data.change = "false"
    back = req.session.data['back'];
    res.redirect(back);
  }
  else if (noCharge == "Make this licence non-chargeable") {
    res.redirect('/archive/previous-proto/views/bd/charges-2020/add-reason');
   }
  else {
    req.session.data['reasonNewSet']  = "true"

  }*/

res.redirect('/sandbox/');

});

module.exports = router

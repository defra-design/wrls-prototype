const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/search', function(req, res) {

  req.session.data.back = req.headers.referer

  //get the search term

  let term = req.session.data['search']

  if (term == "test") {
    console.log('test success');
  }

  res.render('sandbox/search');

});


router.post('/add-new-reason', function(req, res) {

  let chargeNew = req.session.data['createElement']
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
    res.redirect('set-charge-start-date');
  }

});

module.exports = router

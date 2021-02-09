const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Send a water abstraction alert



//enter licence numbers
router.get('enter-licence-numbers', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/licence-notices/send-a-water-abstraction-alert/enter-licence-numbers');

});


router.post('/send-a-water-abstraction-alert/enter-licence-numbers', function(req, res) {


res.redirect('check-the-contact-details-for-each-licence');

});

//check contact details
router.get('/licence-notices/send-a-water-abstraction-alert/check-the-contact-details-for-each-licence', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/licence-notices/send-a-water-abstraction-alert/check-the-contact-details-for-each-licence');

});


router.post('/licence-notices/send-a-water-abstraction-alert/check-the-contact-details-for-each-licence', function(req, res) {


res.redirect('check-the-contact-details-for-each-licence');

});


module.exports = router

const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Send a water abstraction alert

const folder = "sandbox/licence-notices/send-a-water-abstraction-alert/"

//enter licence numbers
router.get('/send-a-water-abstraction-alert/enter-licence-numbers', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'enter-licence-numbers');
});


router.post('/send-a-water-abstraction-alert/enter-licence-numbers', function(req, res) {
  res.redirect('check-the-contact-details-for-each-licence');
});

//check contact details
router.get('/send-a-water-abstraction-alert/check-the-contact-details-for-each-licence', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'check-the-contact-details-for-each-licence');
});


router.post('/send-a-water-abstraction-alert/check-the-contact-details-for-each-licence', function(req, res) {
  res.redirect('add-details-to-include-in-this-alert');
});


//add details to include in this alert
router.get('/send-a-water-abstraction-alert/add-details-to-include-in-this-alert', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add-details-to-include-in-this-alert');
});


router.post('/send-a-water-abstraction-alert/add-details-to-include-in-this-alert', function(req, res) {
  res.redirect('check-and-confirm-your-hands-off-flow');
});

//check and confirm message details
router.get('/send-a-water-abstraction-alert/check-and-confirm-your-hands-off-flow', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'check-and-confirm-your-hands-off-flow');
});

router.post('/send-a-water-abstraction-alert/check-and-confirm-your-hands-off-flow', function(req, res) {
  res.redirect('notification-sent');
});

//notification sent
router.get('/send-a-water-abstraction-alert/notification-sent', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'notification-sent');
});


module.exports = router

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line

const fs = require('fs')
const path = require('path');


const folder = "sandbox/external/"



///////Welcome page
router.get('/welcome', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'welcome');
});

///////Create an account
router.get('/start', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'start');
});

router.get('/register', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'register');
});

router.post('/register', function(req, res) {
req.session.data.back = req.headers.referer
  res.redirect('/success');
});

router.get('/success', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'success');
});

router.get('/send-again', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'send-again');
});

router.post('/send-again', function(req, res) {
req.session.data.back = req.headers.referer
  res.redirect('/success');
});



///////Sign in
router.get('/sign-in', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'sign-in');
});

router.post('/sign-in', function(req, res) {
req.session.data.back = req.headers.referer
  res.redirect('choose-a-licence-holder');
});


///////Forgotten password
router.get('/reset-password', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'reset-password');
});

router.post('/reset-password', function(req, res) {
req.session.data.back = req.headers.referer
  res.redirect('success');
});

router.get('/change-password', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'change-password');
});

router.post('/change-password', function(req, res) {
req.session.data.back = req.headers.referer
  res.redirect('choose-a-licence-holder');
});


////////choose a licence holder
router.get('/choose-a-licence-holder', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'choose-a-licence-holder');
});

router.post('/choose-a-licence-holder', function(req, res) {
req.session.data.back = req.headers.referer
req.session.data.customerID = req.session.data.whichCustomer
  res.redirect('licences');
});


////////Licences
router.get('/licences', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'licences');
});



////////Returns
router.get('/returns', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'returns');
});

module.exports = router
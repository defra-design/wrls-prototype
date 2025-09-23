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




///////Sign in
router.get('/sign-in', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'sign-in');
});

router.post('/sign-in', function(req, res) {
req.session.data.back = req.headers.referer
  res.redirect(folder + 'licences');
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
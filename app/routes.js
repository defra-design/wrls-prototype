// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


/*
// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
  req.folder = req.originalUrl.split('/')[1]; //folder, e.g. 'current'
  req.subfolder = req.originalUrl.split('/')[2]; //sub-folder e.g. 'service'
  res.locals.folder = req.folder; // what folder the url is
  res.locals.subfolder = req.subfolder; // what subfolder the URL is in
console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});
*/

router.use('/', (req, res, next) => {
  req.session.data.url = req.url; //current screen
  //console.log(req.url);
  next();
});

// Start folder specific routes

// Sandbox, remember to add older sprint when adding a new folder!
router.use('/sandbox', require('./views/sandbox/_routes/_routes'));

// current
router.use('/current', require('./views/current/routes'));

/*
//Archive
router.use('/archive', require('./views/archive/routes'));
*/

/*
//redirect home page
router.all(/^\/$/, (req, res) => {

 urlEnd = req.originalUrl
 return res.redirect('/archive/previous-proto' + urlEnd)
})
*/

//Redirect old routes to current page
router.all(/^\/bd\/.*|^\/ar\/.*|^\/dashboard\/.*|^\/data\/.*|^\/eo\/.*|^\/ex\/.*|^\/includes\/.*|^\/kpi\/.*|^\/nps\/.*|^\/partials\/.*|^\/patterns\/.*|^\/wirs\/.*/, (req, res) => {

 req.session.data.back = req.headers.referer
 urlEnd = req.originalUrl
 return res.redirect('/current' + urlEnd)
})





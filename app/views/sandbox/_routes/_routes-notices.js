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

  let licenceList = req.session.data['licenceList'].trim().replace(/\r\n|\n|\r|\s/gm, ',');
  console.log(licenceList)
  req.session.data.licenceList = licenceList

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
  res.redirect('check-and-confirm-the-alert');
});

//check and confirm message details
router.get('/send-a-water-abstraction-alert/check-and-confirm-the-alert', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'check-and-confirm-the-alert');
});

router.post('/send-a-water-abstraction-alert/check-and-confirm-the-alert', function(req, res) {

  //get today's date
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;

  const yyyy = today.getFullYear();
  if(dd<10)
  {
    dd=`0${dd}`;
  }
  if(mm<10)
  {
    mm=`0${mm}`;
  }

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]

  today = `${dd} ${mm} ${yyyy}`;


  let notifications = req.session.data['notifications']


  //add the department to the contact list
  let date = today
  let notification = req.session.data['waaType'] + " - Water abstraction alert"
  let sentBy = "youremailaddress@defra.gov.uk"
  let numberOfrecipients = "1"
  let licenceNumber = "03/28/60/0032"
  let sentTo =  "Bottled Water Plc,15 Ward Street,Bath, BA1 5EH"
  let method = "Letter"
  let status = "Sent"
  let problems = ""

  let recipients = [{ licenceNumber, sentTo, method, status }] ;

  let newNotification = {
    date,
    notification,
    sentBy,
    numberOfrecipients,
    recipients,
    problems
  };

  notifications.push(newNotification);

  res.redirect('alert-sent');

/*
  "date": "22 December 2020",
  "notification": "Paper returns",
  "sentBy": "tim.teace@defra.gov.uk",
  "numberOfrecipients": "1",
  "recipients": [{
    "licenceNumber": "03/28/69/0034",
    "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
    "method": "Letter",
    "status": "Sent",
  }],
  "problems": "",
  }
*/

});

//notification sent
router.get('/send-a-water-abstraction-alert/alert-sent', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'alert-sent');
});


module.exports = router

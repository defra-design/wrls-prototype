const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const folder = "sandbox/contact/"

//-----------------------------------------------------------------
//REMOVE CUSTOMER CONTACT RELATIONSHIP


//Remove customer
router.get('/remove-customer', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'remove-customer');

});


router.post('/remove-customer', function(req, res) {

//get the contact ID
let contactID = req.session.data.contactID
let contactCustomerNumber = req.session.data.customerID
let contactCustomers = req.session.data.contacts[contactID]['customers']

if (contactCustomerNumber > -1) {
  contactCustomers.splice(contactCustomerNumber, 1);
}

/*
//find the customers for that contact
let customers = req.session.data.contacts[contactID].customer.split(',')

let customer = "Bottled Water Plc"


let index = customers.indexOf(customer);
if (index > -1) {
  customers.splice(index, 1);
}
console.log(customers)
req.session.data.contacts[contactID].customer = customers.toString()
*/


res.redirect('../contact?contactID=' + contactID);

});



//-----------------------------------------------------------
///CHANGE NAME
router.get('/change-name', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'change-name');

});

router.post('/change-name', function(req, res) {



  let title = req.session.data['title']
  let firstName = req.session.data['firstName']
  let middleInitials = req.session.data['middleInitials']
  let lastName = req.session.data['lastName']
  let suffix = req.session.data['suffix']
  let department = req.session.data['department']

  //join each part of the name together
  let rawName = title + "," + firstName + "," + middleInitials + "," + lastName + "," + suffix

  let contactID = req.session.data.contactID

  req.session.data.contacts[contactID].name = rawName.replace(/[, ]+/g, " ").trim()


res.redirect('../contact');

});


//-----------------------------------------------------------
///CHANGE EMAIL ADDRESS
router.get('/change-email-address', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'change-email-address');

});

router.post('/change-email-address', function(req, res) {

  //get the contact ID
  let contactID = req.session.data.contactID

  req.session.data.contacts[contactID].email = req.session.data.emailDetails


res.redirect('../contact');

});


module.exports = router

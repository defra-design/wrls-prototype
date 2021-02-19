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

req.session.data.contacts[contactID].customer = ""

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




module.exports = router

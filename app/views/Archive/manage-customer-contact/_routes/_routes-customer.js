const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//CUSTOMER ROUTES

const folder = "sandbox/customer/"

//-----------------------------------------
///ADD A Contact



//Contact details


//contact type
router.get('/add/select-a-contact-type', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'add/select-a-contact-type');

});


router.post('/add/select-a-contact-type', function(req, res) {

  //if adding extra details send to extra details, else if there is an email added send to notices, else send to check your answers
  if (req.session.data['contactType'] === "person") {
    res.redirect('enter-a-name');
  } else {
    req.session.data.fullName = req.session.data['department']
    res.redirect('enter-an-email-address');
  }

});

///Enter a name
router.get('/add/enter-a-name', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'add/enter-a-name');

});

router.post('/add/enter-a-name', function(req, res) {

  let title = req.session.data['title']
  let firstName = req.session.data['first-name']
  let middleInitials = req.session.data['middleInitials']
  let lastName = req.session.data['last-name']
  let suffix = req.session.data['suffix']
  let department = req.session.data['department']

  //join each part of the name together
  let rawName = title + "," + firstName + "," + middleInitials + "," + lastName + "," + suffix
  let name = rawName.replace(/[, ]+/g, " ").trim()
  if (department.length) {
    req.session.data.fullName = name + " (" + department + ")"
  } else {
    req.session.data.fullName = name
  }


    res.redirect('enter-an-email-address')


});


//Enter an email address
router.get('/add/enter-an-email-address', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'add/enter-an-email-address');

});


router.post('/add/enter-an-email-address', function(req, res) {


  res.redirect('check-your-answers');

});


//Check your answers
router.get('/add/check-your-answers', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'add/check-your-answers');

});


router.post('/add/check-your-answers', function(req, res) {




  let contacts = req.session.data['contacts']
  req.session.data.contactID = contacts.length



  //add the department to the contact list
  let name = req.session.data['fullName']
  let title = req.session.data['title']
  let firstName = req.session.data['first-name']
  let middleInitials = req.session.data['middleInitials']
  let lastName = req.session.data['last-name']
  let suffix = req.session.data['suffix']
  let department = req.session.data['department']
  let email = req.session.data['emailDetails']
  let role = "Contact"
  let notices = req.session.data['notices']
  if (notices === "true") {
    notices = ""
  }
  let customer = req.session.data.customers[req.session.data.customerID]['name']
  let phone = req.session.data['phoneDetails']

  let customers = [{
    role,
    notices,
    customer
  }]
  let nameDetails = [{
    title,
    firstName,
    middleInitials,
    lastName,
    suffix,
    department,
  }]

  let newContact = {
    name,
    nameDetails,
    email,
    phone,
    customers
  };

  contacts.push(newContact);

  req.session.data.back = "customer#contacts"

res.redirect('contact-set-up');
//  res.redirect('../../customer#contacts');

});




//Contact set up!!
router.get('/add/contact-set-up', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'add/contact-set-up');

});


///////////////////////////////////////////////////
//Manage customer contacts
router.get('/manage-contact', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'manage-contact');

});


router.post('/manage-contact', function(req, res) {

  //contact customers
  let contactCustomers = req.session.data.contacts[req.session.data.contactID]['customers']
  //selected customer to manage
  let selectedCustomer = req.session.data.customers[req.session.data.customerID]['name']

  //add email address
  let email = req.session.data['emailDetails']
  for (i of email){
  let reg = new RegExp("@");
    if (reg.test(i)) {
      req.session.data.contacts[req.session.data.contactID].email = i
    }
  }



  console.log(req.session.data.customers[req.session.data.customerID].email)
  //loop through customers for contact and match the selected customer name if it matches update the notices
  for (var [customerIndex, contactCustomer] of contactCustomers.entries()) {

    if (contactCustomer.customer == selectedCustomer) {

      //if notices is blank empty the array
      if (req.session.data['notices'] == undefined) {
        req.session.data.contacts[req.session.data.contactID].customers[customerIndex].notices = ""
      } else {
        req.session.data.contacts[req.session.data.contactID].customers[customerIndex].notices = req.session.data['notices']
      }



    }
  }

  res.redirect('../customer#contacts');

});



///CHANGE EMAIL ADDRESS
router.get('/change-email-address', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'change-email-address');

});

router.post('/change-email-address', function(req, res) {

  //get the contact ID
  let contactID = req.session.data.contactID

  req.session.data.contacts[contactID].email = req.session.data.emailDetails


res.redirect('manage-contact');

});




module.exports = router

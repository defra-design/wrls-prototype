//const express = require('express')
//const router = express.Router()

// Add your routes here - above the module.exports line

//CUSTOMER ROUTES


//-----------------------------------------
///ADD A Contact



//Contact details
router.get('sandbox/customer/add/which-contact-details-do-you-want-to-add', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/which-contact-details-do-you-want-to-add');

});

router.post('/add/which-contact-details-do-you-want-to-add', function(req, res) {


  if (req.session.data['emailDetails'] === "") {
    req.session.data.notices = ""
  }


  //if name is added format it for use later on
  if (req.session.data['contact-details'].includes("name")) {

    let firstName = req.session.data['first-name']
    let lastName = req.session.data['last-name']
    req.session.data.fullName = firstName + " " + lastName
    //if only a department name was added then go ot check your answers
    if (firstName = req.session.data['fullName'] === " ") {
      req.session.data.fullName = req.session.data['department-name']
      res.redirect('check-your-answers');
    } else {
      res.redirect('do-you-need-to-add-more-name-details');
    }

  } else {
    res.redirect('select-any-email-notices');
  }



});


//If name added ask about extra name details
router.get('sandbox/customer/add/do-you-need-to-add-more-name-details', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/do-you-need-to-add-more-name-details');

});


router.post('/add/do-you-need-to-add-more-name-details', function(req, res) {

  //if adding extra details send to extra details, else if there is an email added send to notices, else send to check your answers
  if (req.session.data['extraNameDetails'] === "yes") {
    res.redirect('enter-any-extra-details');
  } else if (req.session.data['emailDetails'] != "") {
    res.redirect('select-any-email-notices');
  } else {
    res.redirect('check-your-answers')
  }

});

///Extra name details
router.get('sandbox/customer/add/enter-any-extra-details', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/enter-any-extra-details');

});

router.post('/add/enter-any-extra-details', function(req, res) {

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

  if (req.session.data['contact-details'].includes("email")) {
    res.redirect('select-any-email-notices');
  } else {
    res.redirect('check-your-answers')
  }


});


//Select notices
router.get('sandbox/customer/add/select-any-email-notices', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/select-any-email-notices');

});


router.post('/add/select-any-email-notices', function(req, res) {


  res.redirect('check-your-answers');

});


//Check your answers
router.get('sandbox/customer/add/check-your-answers', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/check-your-answers');

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


  res.redirect('../../customer#contacts');

});


///////////////////////////////////////////////////
//Manage customer contacts
router.get('/manage-contact', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/manage-contact');

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




module.exports = router

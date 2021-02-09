const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//CUSTOMER ROUTES


//-----------------------------------------
///ADD A Contact



//Contact details
router.get('sandbox/customer/add/what-contact-details-do-you-want-to-add', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/what-contact-details-do-you-want-to-add');

});


router.post('/add/what-contact-details-do-you-want-to-add', function(req, res) {

  //if email address is blank change it Not set
  if (req.session.data['emailDetails'] === "") {
  req.session.data.emailDetails = "Not set"
  }

res.redirect('is-this-the-contact-for-water-abstraction-alerts');

});


///Do they want water abstraction alerts
router.get('sandbox/customer/add/is-this-the-contact-for-water-abstraction-alerts', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/is-this-the-contact-for-water-abstraction-alerts');

});

router.post('/add/is-this-the-contact-for-water-abstraction-alerts', function(req, res) {

 //if they've said yes to water abstraction alerts add the role
 if (req.session.data['WAA'] === "yes") {
     req.session.data.WAA = "Water Abstraction Alerts"
 }

 else {
     req.session.data.WAA = ""
 }

 //if they haven't added a name leave the flow other wise search for the name to see if it matches a contact
if (req.session.data['name-details'].length){
  res.redirect('does-this-contact-already-exist');
}

else {

  let contacts = req.session.data['contacts']
  req.session.data.contactID = contacts.length

    let name = "Not set"
    let email = req.session.data['emailDetails']
    let role = req.session.data['WAA']
    let customer = req.session.data.customers[req.session.data.customerID]['name']

    let newContact = {
      name,
      email,
      role,
      customer,
    };

    contacts.push(newContact);

    res.redirect('../../contact?contactID=' + req.session.data.contactID);
}



});


///Does this contact exist
router.get('sandbox/customer/add/does-this-contact-already-exist', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/does-this-contact-already-exist');

});

router.post('/add/Does-this-contact-already-exist', function(req, res) {

  // if they select an existing contact leave the flow and go to the existing contact
  if (req.session.data['contact-exist'] === "new-contact") {
    res.redirect('set-up-a-new-contact');
  } else {
    res.redirect('../../contact?contactID=' + req.session.data['contact-exist']);
  }



});


///Is the contact a person or department?
router.get('sandbox/customer/add/set-up-a-new-contact', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/set-up-a-new-contact');

});

router.post('/add/set-up-a-new-contact', function(req, res) {

let personOrDepartment = req.session.data['person-or-department']

let contacts = req.session.data['contacts']
req.session.data.contactID = contacts.length

if (personOrDepartment === "department") {

  //add the department to the contact list
  let name = req.session.data['name-details']
  let email = req.session.data['emailDetails']
  let role = req.session.data['WAA']
  let customer = req.session.data.customers[req.session.data.customerID]['name']
  let type = req.session.data['person-or-department']

  let newContact = {
    name,
    email,
    role,
    customer,
    type,
  };

  contacts.push(newContact);

  res.redirect('../../contact?contactID=' + req.session.data.contactID);

  }

else {

  res.redirect('enter-the-persons-name');

  }

});

///Does this contact exist
router.get('sandbox/customer/add/enter-the-persons-name', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/enter-the-persons-name');

});

router.post('/add/enter-the-persons-name', function(req, res) {

  let title = req.session.data['title']
  let firstName = req.session.data['firstName']
  let middleInitials = req.session.data['middleInitials']
  let lastName = req.session.data['lastName']
  let suffix = req.session.data['suffix']
  let department = req.session.data['department']

  //join each part of the name together
  let rawName = title + "," + firstName + "," + middleInitials + "," + lastName + "," + suffix
  let name = rawName.replace(/[, ]+/g, " ").trim()
  if (department.length) {
    name = name + " (" + department + ")"
  }




  let contacts = req.session.data['contacts']
  req.session.data.contactID = contacts.length



    //add the department to the contact list

    let email = req.session.data['emailDetails']
    let role = req.session.data['WAA']
    let customer = req.session.data.customers[req.session.data.customerID]['name']
    let type = req.session.data['person-or-department']

    let newContact = {
      name,
      email,
      role,
      customer,
      type,
    };

    contacts.push(newContact);

    req.session.data.back = "customer#contacts"

    res.redirect('../../contact?contactID=' + req.session.data.contactID);



});




module.exports = router

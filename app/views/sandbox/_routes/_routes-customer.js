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
  let notices = []
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


router.get('/notices', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'notices');

});

router.post('/notices', function(req, res) {

  //contact customers
  let contactCustomers = req.session.data.contacts[req.session.data.contactID]['customers']
  //selected customer to manage
  let selectedCustomer = req.session.data.customers[req.session.data.customerID]['name']

  let allContacts = req.session.data['contacts']

  if (req.session.data['notices'] === "yes") {

    //loop through all contacts and check if the customer is matched
    for (var [contactIndex, contact] of allContacts.entries()) {

      //get all the customers for that contact
      let allcustomerContacts = contact.customers

      // loop through the contacts customers
      for (var [customerIndex, customerContact] of allcustomerContacts.entries()) {

        //if the customer matches the selected customer
        if (customerContact.customer == selectedCustomer) {

          //if the contact has a role of licence hodler for this customer
          if (customerContact.role.match(/Licence/g)) {
            //remove the notice from the licence holder if they have a postal alert


            //find the Water abstraction notice in the customer contacts notices and delete it
            let holderNotices = customerContact['notices']



            for (var [holderNoticeIndex, holderNotice] of holderNotices.entries()) {

              if (holderNotice.type === 'Water abstraction alerts' && holderNotice.sendBy === 'post') {

                let index = holderNoticeIndex;
                if (index > -1) {
                  holderNotices.splice(index, 1);
                }

              };

            }
          }
        }
      }
    }

    //loop through customers for contact and match the selected customer name if it matches update the notices
    for (var [customerIndex, contactCustomer] of contactCustomers.entries()) {

      if (contactCustomer.customer == selectedCustomer) {

        //set the customer to receive WAA by post
        req.session.data.customers[req.session.data.customerID].WAA = "email"

        /*if notices is blank empty the array
        if (req.session.data['notices'] == undefined) {
          req.session.data.contacts[req.session.data.contactID].customers[customerIndex].notices = ""
        } else {
          req.session.data.contacts[req.session.data.contactID].customers[customerIndex].notices = req.session.data['notices']
        }*/




        //check whether the contact is already receiving WAA by post, if so update to receive them by email
        let existingNotices = []
        let contactNotices = req.session.data.contacts[req.session.data.contactID].customers[customerIndex]['notices']
        for (var [existingNoticeIndex, existingNotice] of contactNotices.entries()) {


          existingNotices.push(existingNotice.type)
        }

        if (existingNotices.includes('Water abstraction alerts')) {
          for (var [contactNoticeIndex, contactNotice] of contactNotices.entries()) {
            if (contactNotice.type == "Water abstraction alerts") {
              contactNotice.sendBy = "email"
            }
          }
        } else {
          //if they aren't receiving them by post, add the alert type to their notice list

          let type = "Water abstraction alerts"
          let sendBy = "email"
          let addressID = ""

          let newNotice = {
            type,
            sendBy,
            addressID
          };

          contactNotices.push(newNotice);

        }





      }
    }

    if (req.session.data.contacts[req.session.data.contactID]['email'].length) {
      res.redirect('manage-contact');
    } else {
      res.redirect('change-email-address');
    }

  }
  //if the answer was no to receiving WAA by email
  else {

    //loop through customers for contact and match the selected customer name if it matches update the notices
    for (var [customerIndex, contactCustomer] of contactCustomers.entries()) {

      if (contactCustomer.customer == selectedCustomer) {


        //find the Water abstraction notice in the customer contacts notices and delete it
        let contactNotices = req.session.data.contacts[req.session.data.contactID].customers[customerIndex]['notices']


        for (var [existingNoticeIndex, existingNotice] of contactNotices.entries()) {

          if (existingNotice.type === 'Water abstraction alerts') {



            let index = existingNoticeIndex;
            if (index > -1) {
              contactNotices.splice(index, 1);
            }

          };

        }
      }
    }
    //loop through the customer contacts again and check if anyone is receiving WAA by email,
    let emailContact = "false"


    //loop through all contacts and check if the customer is matched
    for (var [contactIndex, contact] of allContacts.entries()) {

      //get all the customers for that contact
      let allcustomerContacts = contact.customers

      // loop through the contacts customers
      for (var [customerIndex, customerContact] of allcustomerContacts.entries()) {

        //if the customer matches the selected customer
        if (customerContact.customer == selectedCustomer) {

          //find the Water abstraction notice in the customer contacts notices and delete it
          let existingNotices = customerContact['notices']



          for (var [existingNoticeIndex, existingNotice] of existingNotices.entries()) {

            //   for (var [customerIndex, contactCustomer] of contactCustomers.entries()) {
            //   let contactNotices = req.session.data.contacts[req.session.data.contactID].customers[customerIndex]['notices']
            //  for (var [existingNoticeIndex, existingNotice] of contactNotices.entries()) {

            if (existingNotice.type === 'Water abstraction alerts') {

              if (existingNotice.sendBy === 'email') {

                emailContact = "true"


              }

            }
          }
        }
      }
    }

    //if not then change the customer back to post and add the postal notice to the licence holder


    if (emailContact === "false") {
      //loop through customers for contact and match the selected customer name if it matches update the notices
      //loop through all contacts and check if the customer is matched
      for (var [contactIndex, contact] of allContacts.entries()) {

        //get all the customers for that contact
        let allcustomerContacts = contact.customers

        // loop through the contacts customers
        for (var [customerIndex, customerContact] of allcustomerContacts.entries()) {



          //if the customer matches the selected customer
          if (customerContact.customer == selectedCustomer) {



            //set the customer to receive WAA by post
            req.session.data.customers[req.session.data.customerID].WAA  = "post"

            //if the contact has a role of licence hodler for this customer
            if (customerContact.role.match(/Licence/g)) {


              //Add the water abstraction alert post notice for the licence holder
              let customerLicenceHolderNotices = customerContact['notices']


                let type = "Water abstraction alerts"
                let sendBy = "post"
                let addressID = "0"

                let newNotice = {
                  type,
                  sendBy,
                  addressID
                };

                customerLicenceHolderNotices.push(newNotice);

            }
          }
        }
      }
    }

    res.redirect('manage-contact');
  }

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

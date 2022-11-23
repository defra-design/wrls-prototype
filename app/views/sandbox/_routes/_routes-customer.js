const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

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
  let wrls = "true"
  let type = req.session.data['contactType']
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
    wrls,
    type,
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

  //clear form data
  req.session.data.contactType = ""
  req.session.data.fullName = ""
  req.session.data.title = ""
  req.session.data['first-name'] = ""
  req.session.data.middleInitials =""
  req.session.data['last-name'] = ""
  req.session.data.suffix = ""
  req.session.data.department = ""
  req.session.data.emailDetails = ""
  req.session.data.phoneDetails = ""

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

    //Check if the contact is the licence holder, if so delete the WAA notice from the contact

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

    //

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
              contactNotice.licences = "all"
            }
          }
        } else {
          //if they aren't receiving them by post, add the alert type to their notice list

          let type = "Water abstraction alerts"
          let sendBy = "email"
          let addressID = ""
          let licences = "all"

          let newNotice = {
            type,
            sendBy,
            addressID,
            licences
          };

          contactNotices.push(newNotice);

        }





      }
    }

    if (req.session.data.contacts[req.session.data.contactID]['email'].length) {
      res.redirect('all-licences');
    } else {
      req.session.data.route = "emailWAA"
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

  if (req.session.data.route == "emailWAA") {
    req.session.data.route = ""
    res.redirect('all-licences');
  } else {
  res.redirect('manage-contact');
  }
});

///WAA for ALL LICENCES?
router.get('/all-licences', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'all-licences');

});

router.post('/all-licences', function(req, res) {


  if (req.session.data.allLicences == "yes") {
  req.session.data.route = ""
  res.redirect('manage-contact');
} else {
  res.redirect('select-licences');
}
});


///WAA for which licences?
router.get('/select-licences', function(req, res) {


  req.session.data.back = req.headers.referer

  res.render(folder + 'select-licences');

});

router.post('/select-licences', function(req, res) {
  //contact customers
  let contactCustomers = req.session.data.contacts[req.session.data.contactID]['customers']
  //selected customer
  let selectedCustomer = req.session.data.customers[req.session.data.customerID]['name']
  //loop through customers for contact and match the selected customer name if it matches update the notices
  for (var [customerIndex, contactCustomer] of contactCustomers.entries()) {

    if (contactCustomer.customer == selectedCustomer) {


      //get all the contacts notices
       let contactNotices = req.session.data.contacts[req.session.data.contactID].customers[customerIndex]['notices']
       //loop through the contacts notices
       for (var [contactNoticeIndex, contactNotice] of contactNotices.entries()) {

         //check for the notice that equals type water abstraction alerts
            if (contactNotice.type == 'Water abstraction alerts') {

              // Set the WAA licences for this contact-
              contactNotice.licences = req.session.data['waaLicences']

            }
          }
        }
      }

  res.redirect('manage-contact');

});



///CHANGE NAME
router.get('/change-name', function(req, res) {

  req.session.data.back = req.headers.referer

  //get the contact ID
  let contactID = req.session.data.contactID

  //get contact contact
  let contactType = req.session.data.contacts[contactID].type

  console.log(contactType)

  if (contactType === "person") {
  res.render(folder + 'change-name');
} else {
  res.redirect('change-department-name');
}

});

router.post('/change-name', function(req, res) {

  //get the contact ID
  let contactID = req.session.data.contactID

  //update the contacts name details
  req.session.data.contacts[contactID].nameDetails[0].title = req.session.data['title']
  req.session.data.contacts[contactID].nameDetails[0].firstName = req.session.data['first-name']
  req.session.data.contacts[contactID].nameDetails[0].middleInitials = req.session.data['middleInitials']
  req.session.data.contacts[contactID].nameDetails[0].lastName = req.session.data['last-name']
  req.session.data.contacts[contactID].nameDetails[0].suffix = req.session.data['suffix']
  req.session.data.contacts[contactID].nameDetails[0].department = req.session.data['department']

  //join each part of the name together
  let rawName = req.session.data['title'] + "," + req.session.data['first-name'] + "," + req.session.data['middleInitials'] + "," + req.session.data['last-name'] + "," + req.session.data['suffix']
  let name = rawName.replace(/[, ]+/g, " ").trim()
  if (req.session.data['department'].length) {
    req.session.data.contacts[contactID].name = name + " (" + req.session.data['department'] + ")"
  } else {
    req.session.data.contacts[contactID].name = name
  }


  res.redirect('manage-contact');

});


router.post('/change-department-name', function(req, res) {

  //get the contact ID
  let contactID = req.session.data.contactID

  //update the department name
  req.session.data.contacts[contactID].nameDetails[0].department = req.session.data['department']
  req.session.data.contacts[contactID].name = req.session.data['department']

  res.redirect('manage-contact');

});


/////////////////////////////REMOVE A CONTACT/////
//////

//Select the contact
router.get('/remove/select-which-contact-to-remove', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'remove/select-which-contact-to-remove');

});


router.post('/remove/select-which-contact-to-remove', function(req, res) {


    res.redirect('check-your-answers');

});

//Are you sure/check your answers
router.get('/remove/check-your-answers', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'remove/check-your-answers');

});


router.post('/remove/check-your-answers', function(req, res) {

   //Remove the contact
   //get the ID of the contact that you want to remove
     let contactID = req.session.data['contactID']

     //get the contacts List
     let contacts = req.session.data['contacts']

     //set the removed contacts name to so we can use it in the success banner after it has been removed
     req.session.data.removedName = req.session.data.contacts[contactID]['name']

     //remove the object that is in the position set by the contact ID
     if (contactID > -1) {
       contacts.splice(contactID, 1);
     }

    res.redirect('contact-removed');

});


//confirmation
router.get('/remove/contact-removed', function(req, res) {

  req.session.data.back = req.headers.referer

  //blank out the variable after use
  req.session.data.removedContact = ""

  res.render(folder + 'remove/contact-removed');

});




module.exports = router

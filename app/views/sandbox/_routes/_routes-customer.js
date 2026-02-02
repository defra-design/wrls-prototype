const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line

//CUSTOMER ROUTES

const folder = "sandbox/customer/"

//-----------------------------------------
///ADD A Contact

//Contact details
//Create contact hub page
router.get('/contacts', function(req, res) {
  req.session.data.success = 0
  req.session.data.removed = 0
  req.session.data.back = req.headers.referer
  res.render(folder + 'contacts');
});

//contact type
router.get('/add/select-a-contact-type', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'add/select-a-contact-type');

});


router.post('/add/select-a-contact-type', function(req, res) {

  //if adding extra details send to extra details, else if there is an email added send to notices, else send to check your answers
  if (req.session.data['contactType'] === "person") {
    res.redirect('select-how-to-contact');
  } else {
    req.session.data.fullName = req.session.data['department']
    res.redirect('select-how-to-contact');
  }

});

//NO LONGER USED IN NEW VERSION
///Enter a name
router.get('/add/enter-a-name', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add/enter-a-name');
});

router.post('/add/enter-a-name', function(req, res) {

  /* Old routing
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
  res.redirect('enter-an-email-address') */


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
  let post = req.session.data['postAddress']
  let phone = req.session.data['phoneNumber']
  let role = "Contact"
  let notices = []
  let customer = req.session.data.customers[req.session.data.customerID]['name']
  //let phone = req.session.data['phoneDetails']

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
    post,
    phone,
    customers
  };

  contacts.push(newContact);

  req.session.data.edit = "false"
  req.session.data.success = 0

 res.redirect('create-contact')
});

//Create contact hub page
router.get('/add/create-contact', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.changed = 0
  res.render(folder + 'add/create-contact');
});

router.post('/add/create-contact', function(req, res) {

  req.session.data['contactType'] = ""
  req.session.data['fullName'] = ""
  req.session.data['title'] = ""
  req.session.data['first-name'] = ""
  req.session.data['middleInitials'] = ""
  req.session.data['last-name'] = ""
  req.session.data['suffix'] = ""
  req.session.data['department'] = ""
  req.session.data['emailDetails'] = ""
  req.session.data['postAddress'] = ""
  req.session.data['phoneNumber'] = ""

  req.session.data.success = "1"
 if (req.session.data.edit == "true") {

  res.redirect('../manage-contact')
 } else {
  
  res.redirect('../contacts')
 }

 
});

//change email address
router.get('/add/change-email-address', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add/change-email-address');
});

router.post('/add/change-email-address', function(req, res) {
  req.session.data.contacts[req.session.data.contactID].email = req.session.data.emailDetails
  req.session.data.changed = 1
 res.redirect('create-contact')
});

//change name
router.get('/add/change-name', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add/change-name');
});

router.post('/add/change-name', function(req, res) {
  req.session.data.contacts[req.session.data.contactID].name = req.session.data.fullName
  req.session.data.changed = 1
 res.redirect('create-contact')
});


//change postal address
router.get('/add/change-postal-address', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add/change-postal-address');
});

router.post('/add/change-postal-address', function(req, res) {
  req.session.data.contacts[req.session.data.contactID].post = req.session.data.postAddress
  req.session.data.changed = 1
 res.redirect('create-contact')
});


//change phone number
router.get('/add/change-phone-number', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add/change-phone-number');
});

router.post('/add/change-phone-number', function(req, res) {
  req.session.data.contacts[req.session.data.contactID].phone = req.session.data.phoneNumber
  req.session.data.changed = 1
 res.redirect('create-contact')
});


router.get('/add/notices', function(req, res) {

  req.session.data.back = req.headers.referer

  req.session.data.alreadyGets = "yes"

  res.render(folder + 'add/notices');

});

router.post('/add/notices', function(req, res) {

let selectedContact = req.session.data.contacts[req.session.data.contactID]
let selectedCustomer = req.session.data.customers[req.session.data.customerID].name
let selectedComType = req.session.data.type
console.log(selectedContact)
console.log(selectedCustomer)



 if (req.session.data.notices == "no") {


    selectedContact.customers.forEach(customer => {
      // Check if notices array exists
      if (customer.notices) {
        // overwrite the notices array with a version that excludes 'returns'
        customer.notices = customer.notices.filter(notice => notice.type !== selectedComType );
      }
    });

   req.session.data.changed = 1
   res.redirect('create-contact');

 } else {

// 1. Find or Create the Customer
let customerIndex = selectedContact.customers.findIndex(c => c.customer === selectedCustomer);

if (customerIndex === -1) {
  // Create customer if they don't exist
  selectedContact.customers.push({
    role: "Contact",
    notices: [], 
    customer: selectedCustomer
  });
  customerIndex = selectedContact.customers.length - 1;
}

// 2. Find or Create the Notice inside that customer
const targetCustomer = selectedContact.customers[customerIndex];
let noticeIndex = targetCustomer.notices.findIndex(n => n.type === selectedComType);

if (noticeIndex === -1) {
  // Create notice if it doesn't exist
  targetCustomer.notices.push({
    type: selectedComType,
    sendBy: "email", // Default values
    addressID: "",
    licences: "all"
  });
  noticeIndex = targetCustomer.notices.length - 1;
}


    res.redirect('all-licences');

  }

  });




//Select how to contact
router.get('/add/select-how-to-contact', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add/select-how-to-contact');
});

router.post('/add/select-how-to-contact', function(req, res) {

  //direct the user to ask what we want to send them if they've chosen either post or email as the preference. This is because we don't text anything at the moment
  if ( req.session.data.contactPref.includes('emailDetails') || req.session.data.contactPref.includes('post')) {
    res.redirect('select-communication-type')
  } else {
  res.redirect('check-your-answers') }
});


//Select communication type (What to send)
router.get('/add/select-communication-type', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'add/select-communication-type');
});


router.post('/add/select-communication-type', function(req, res) {

  if (req.session.data.communicationType == "none" ) 
    { 
      req.session.data.allLicences = ""
      req.session.data.waaLicences = ""
      res.redirect('check-your-answers'); } 
  else {
  res.redirect('all-licences'); }
});

///WAA for ALL LICENCES?
router.get('/add/all-licences', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'add/all-licences');

});

router.post('/add/all-licences', function(req, res) {

   

  if (req.session.data.allLicences == "yes") {
  req.session.data.route = ""
  req.session.data.waaLicences = ""
  req.session.data.changed = 1
  res.redirect('create-contact');
} else {
  res.redirect('select-licences');
}
});


///WAA for which licences?
router.get('/add/select-licences', function(req, res) {

  req.session.data.back = req.headers.referer
  res.render(folder + 'add/select-licences');

});

router.post('/add/select-licences', function(req, res) { 

    

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
            if (contactNotice.type == req.session.data.type ) {

              // Set the WAA licences for this contact-
              contactNotice.licences = req.session.data['waaLicences']

            }
          }
        }
      }
  req.session.data.changed = 1
   res.redirect('create-contact');

});

//NO LONGER USED IN NEW VERSION
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

/*

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


*/


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
  let post = req.session.data['postAddress']
  let phone = req.session.data['phoneNumber']
  let role = "Contact"
  let notices = []
  let customer = req.session.data.customers[req.session.data.customerID]['name']
  //let phone = req.session.data['phoneDetails']

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
    post,
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


/////////////Cancel set up

//Are you sure/check your answers
router.get('/cancel/check-your-answers', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + '/cancel/check-your-answers');

});


router.post('/cancel/check-your-answers', function(req, res) {

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

  req.session.data['contactType'] = ""
  req.session.data['fullName'] = ""
  req.session.data['title'] = ""
  req.session.data['first-name'] = ""
  req.session.data['middleInitials'] = ""
  req.session.data['last-name'] = ""
  req.session.data['suffix'] = ""
  req.session.data['department'] = ""
  req.session.data['emailDetails'] = ""
  req.session.data['postAddress'] = ""
  req.session.data['phoneNumber'] = ""

    res.redirect('../contacts');

});


///////////////////////////////////////////////////
//Manage customer contacts
router.get('/manage-contact', function(req, res) {

  req.session.data.back = req.headers.referer

  req.session.data.success= "0"

  res.render(folder + 'manage-contact');

});


router.get('/notices', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'notices');

});

router.post('/notices', function(req, res) {

  
let selectedContact = req.session.data.contacts[req.session.data.contactID]
let selectedCustomer = req.session.data.customers[req.session.data.customerID].name
let selectedComType = req.session.data.type
console.log(selectedContact)
console.log(selectedCustomer)


// 1. Find or Create the Customer
let customerIndex = selectedContact.customers.findIndex(c => c.customer === selectedCustomer);

if (customerIndex === -1) {
  // Create customer if they don't exist
  selectedContact.customers.push({
    role: "Contact",
    notices: [], 
    customer: selectedCustomer
  });
  customerIndex = selectedContact.customers.length - 1;
}

// 2. Find or Create the Notice inside that customer
const targetCustomer = selectedContact.customers[customerIndex];
let noticeIndex = targetCustomer.notices.findIndex(n => n.type === selectedComType);

if (noticeIndex === -1) {
  // Create notice if it doesn't exist
  targetCustomer.notices.push({
    type: selectedComType,
    sendBy: "email", // Default values
    addressID: "",
    licences: "all"
  });
  noticeIndex = targetCustomer.notices.length - 1;
}


    res.redirect('all-licences');
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
            if (contactNotice.type == req.session.data.type ) {

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

  //console.log(contactType)

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
    
     req.session.data.removed = 1
    res.redirect('../contacts');

});


//confirmation
router.get('/remove/contact-removed', function(req, res) {

  req.session.data.back = req.headers.referer

  //blank out the variable after use
  req.session.data.removedContact = ""

  res.render(folder + 'remove/contact-removed');

});




module.exports = router

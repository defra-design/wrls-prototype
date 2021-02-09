const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

////SET USER TYPE
router.post('/set-user-type', function(req, res) {

res.redirect('/sandbox/');

});

////SEARCH RESULTS
router.get('sandbox/search', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/search');

});

router.post('/search', function(req, res) {

//get the search term
let term = req.session.data['search']


//Check to see if the results should be a billing account or a licence based on the search term entered
//In the proto all billing accounts begin with BA
if ( term.startsWith("BA") ){
  req.session.data.resultsTable = "sandbox/includes/billing-accounts-table.html"
} else if ( term.includes("@") ) {
  req.session.data.resultsTable = "sandbox/includes/users-table.html"
} else {
  req.session.data.resultsTable = "sandbox/includes/licences-table.html"
}

res.redirect('search');

});

//----------------------------------------------------------------

///ADD A Contact



//Contact details
router.get('/customer/add/what-contact-details-do-you-want-to-add', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/what-contact-details-do-you-want-to-add');

});


router.post('/customer/add/what-contact-details-do-you-want-to-add', function(req, res) {

  //if email address is blank change it Not set
  if (req.session.data['emailDetails'] === "") {
  req.session.data.emailDetails = "Not set"
  }

res.redirect('use-this-email-address-for-water-abstraction-alerts');

});


///Do they want water abstraction alerts
router.get('sandbox/customer/add/use-this-email-address-for-water-abstraction-alerts', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/customer/add/what-contact-details-do-you-want-to-add');

});

router.post('/customer/add/use-this-email-address-for-water-abstraction-alerts', function(req, res) {

 //if they've said yes to water abstraction alerts add the role
 if (req.session.data['WAA'] === "yes") {
     req.session.data.WAA = "Water Abstraction Alerts"
 } else {
     req.session.data.WAA = ""
 }

 //if they haven't added a name leave the flow other wise search for the name to see if it matches a contact
if (req.session.data['name-details'].length){
  res.redirect('does-this-contact-already-exist');
} else {

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

router.post('/customer/add/Does-this-contact-already-exist', function(req, res) {

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

router.post('/customer/add/set-up-a-new-contact', function(req, res) {

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

router.post('/customer/add/enter-the-persons-name', function(req, res) {

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



//----------------------------------------------------------------

///CREATE BILL RUN


/// Bill run type
router.get('/bill-runs/select-bill-run-type', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/bill-runs/select-bill-run-type');

});

router.post('/bill-runs/select-bill-run-type', function(req, res) {

res.redirect('select-the-region');

});


//Region
router.get('/bill-runs/select-the-region', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render('sandbox/bill-runs/select-the-region');

});

router.post('/bill-runs/select-the-region', function(req, res) {


      //Date
      let today = new Date();
      let dd = today.getDate();

      let mm = today.getMonth();
      let months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
      const yyyy = today.getFullYear();
      if(dd<10)
      {
    dd=`0${dd}`;
      }

        if(mm<10)
        {
          mm=`0${mm}`;
          }
          let  monthName =  months[mm];
        today = `${dd} ${monthName} ${yyyy}`;

        //TPT tptSeason

        let billRunType = req.session.data['billRunType']

       if(req.session.data['billRunType'] === "two-part tariff"){
         let billRunType = req.session.data['billRunType'] + req.session.data['tptSeason']
       }


      //add new bill run to the list
      let date = today
      let region = req.session.data['region']
      let runType = billRunType
      let bills = "5"
      let value = "£7,460.00"
      let status = "ready"

      let newBillRun= {
        date,
        region,
        runType,
        bills,
        value,
        status
      };

      let billRuns= req.session.data['billRuns']
      billRuns.unshift(newBillRun);

res.redirect('../bill-runs');

});


module.exports = router

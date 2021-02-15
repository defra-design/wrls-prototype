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
  req.session.data.licenceList = licenceList



  req.session.data.recipients = 0

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
  let mm = today.getMonth() + 1;

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]

  today = `${dd} ${mm} ${yyyy}`;

    //getting the notification
  let notifications = req.session.data['notifications']
  //getting the contact data
  let contacts = req.session.data['contacts']
  //get the licence data
  let licences = req.session.data['licences']
  //get the address data
  let addresses = req.session.data['addresses']
  // declare recipients
  let recipients = [];

  //loop through the licences in the alert and add the recipient details to and object.
  licenceList = req.session.data['licenceList'].split(',')


  let licenceHolder = ""
  let address = ""
  let licenceNumber = ""
  let method = ""
  let sentTo = ""
  let status = "sent"

  for ( licenceNumber of licenceList) {

    for ( var [licenceIndex, licence] of licences.entries()) {
    //match the licence number entered against the licence number in the list

     if (licenceNumber == licence.number) {

    //set a variable for the licenceHolder-
     licenceHolder = licences[licenceIndex].holder

   }
  }





    //loop through the contacts and set the contact index to the loop index
    for (var [contactIndex, contact] of contacts.entries()) {

      //split the contacts role from comma separted string into an array and check for the water abstraction alerts role
      let roleArr = contact.role.split(",")
      for (var role of roleArr) {

        if (role === "Water abstraction alerts") {
          //If the water abstraction alert role is against the contact split the customer name comma separated string into an array-->

          let array = contacts[contactIndex].customer.split(",")

          for (var customer of array) {

            //Checking the customer name matches the address
            if (customer == licenceHolder) {

              if (contacts[contactIndex].email == "Not set") {
                let method = "letter"

                // find the address for the licence
                for ( [addressIndex, address] of addresses.entries()) {
                 if (licenceHolder == address.customer) {

                //set a variable for the address
                 address = licenceHolder +  ", "  + addresses[addressIndex].address1 +  ", "  + addresses[addressIndex].city +  ", "  + addresses[addressIndex].postcode


                 let sentTo = address


                  let newRecipient = {
                    licenceNumber,
                    sentTo,
                    method,
                    status
                  };

                  recipients.push(newRecipient);
               }
              }




              } else {

                //split the contacts role from comma separted string into an array and check for the water abstraction alerts role
                let contactRole = contact.role

                  if (contactRole.includes("Licence holder") ) {

                // find the address for the licence
                for ( [addressIndex, address] of addresses.entries()) {
                 if (licenceHolder == address.customer) {

                   //split the contacts role from comma separted string into an array and check for the water abstraction alerts role
                   let addressRoles = addresses[addressIndex].role.split(",")
                   for (var addressRole of addressRoles) {

                     if (addressRole === "Licence holder") {
                       //If the water abstraction alert role is against the contact split the customer name comma separated string into an array-->


                //set a variable for the address
                 address = licenceHolder +  ", "  + addresses[addressIndex].address1 +  ", "  + addresses[addressIndex].city +  ", "  + addresses[addressIndex].postcode


                 let sentTo = address
                 let method = "letter"

                  let newRecipient = {
                    licenceNumber,
                    sentTo,
                    method,
                    status
                  };

                  recipients.push(newRecipient);
               }
              }
            }
          }
        }
                let method = "email"
                let sentTo = contacts[contactIndex].email

                let newRecipient = {
                  licenceNumber,
                  sentTo,
                  method,
                  status
                };

                recipients.push(newRecipient);

              }




            }
          }
        }
      }
    }


  }

console.log(recipients)


  //add the department to the contact list
  let date = today
  let notification = req.session.data['waaType'] + " - Water abstraction alert"
  let sentBy = "youremailaddress@defra.gov.uk"
  let numberOfrecipients = req.session.data['recipients']
  let problems = ""

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

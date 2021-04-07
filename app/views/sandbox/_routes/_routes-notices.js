const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Send a water abstraction alert
const folder = "sandbox/licence-notices/"

//enter licence numbers
router.get('/send-a-water-abstraction-alert/enter-licence-numbers', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/enter-licence-numbers');
});


router.post('/send-a-water-abstraction-alert/enter-licence-numbers', function(req, res) {

  let licenceList = req.session.data['licenceList'].trim().replace(/\r\n|\n|\r|\s|\r\s|\,\s/gm, ',');
  licenceList.toString()

  req.session.data.licenceList = licenceList


  req.session.data.recipients = 0
  req.session.data.recipientsLetter = 0
  req.session.data.recipientsEmail = 0

  res.redirect('check-the-contact-details-for-each-licence');
});

//check contact details
router.get('/send-a-water-abstraction-alert/check-the-contact-details-for-each-licence', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/check-the-contact-details-for-each-licence');
});


router.post('/send-a-water-abstraction-alert/check-the-contact-details-for-each-licence', function(req, res) {
  res.redirect('add-details-to-include-in-this-alert');
});


//add details to include in this alert
router.get('/send-a-water-abstraction-alert/add-details-to-include-in-this-alert', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/add-details-to-include-in-this-alert');
});


router.post('/send-a-water-abstraction-alert/add-details-to-include-in-this-alert', function(req, res) {
  res.redirect('check-and-confirm-the-alert');
});

//check and confirm message details
router.get('/send-a-water-abstraction-alert/check-and-confirm-the-alert', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/check-and-confirm-the-alert');
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
  //declare Communications
  let communications = [];

  //loop through the licences in the alert and add the recipient details to and object.
  licenceList = req.session.data['licenceList'].split(',')


  let licenceHolder = ""
  let address = ""
  let licenceNumber = ""
  let method = ""
  let sentTo = ""
  let status = "sent"


  //add details for the notification
  let type = req.session.data['waaType'] + " - Water abstraction alert"
  let sent = today
  let sender = "youremailaddress@defra.gov.uk"
  let watercourse = req.session.data['watercourse']
  let gaugingStation = req.session.data['gaugingStation']
  let flowThreshold = req.session.data['flowThreshold']
  let contactEmail = req.session.data['contactEmail']

  for (licenceNumber of licenceList) {

    for (var [licenceIndex, licence] of licences.entries()) {
      //match the licence number entered against the licence number in the list

      if (licenceNumber == licence.number) {

        //set a variable for the licenceHolder-
        licenceHolder = licences[licenceIndex].holder
        //Add the communication details to the licence
        communications = licences[licenceIndex]['communications']

      }
    }





    //loop through the contacts and set the contact index to the loop index
    for (var [contactIndex, contact] of contacts.entries()) {

      let contactCustomers = contact.customers

      for (contactCustomer of contactCustomers) {

        if (licenceHolder == contactCustomer.customer && contactCustomer.notices.includes("Water abstraction alerts")) {


              if (contacts[contactIndex].email == "") {
                let method = "letter"

                // find the address for the licence
                for ([addressIndex, address] of addresses.entries()) {

                  let addressCustomers = address.customers

                  for (addressCustomer of addressCustomers) {

                  if (licenceHolder == addressCustomer.customer && addressCustomer.role.includes("Licence holder")) {

                    //set a variable for the address
                    address = licenceHolder + ", " + addresses[addressIndex].address1 + ", " + addresses[addressIndex].city + ", " + addresses[addressIndex].postcode


                    let sentTo = address


                    let newRecipient = {
                      licenceNumber,
                      sentTo,
                      method,
                      status
                    };

                    recipients.push(newRecipient);


                    let newCommunication = {
                      type,
                      sent,
                      sender,
                      method,
                      watercourse,
                      gaugingStation,
                      flowThreshold,
                      contactEmail
                    };

                    communications.unshift(newCommunication);

                  }
                }
              }




              } else {

                //check if the contact has a role of licence holder, this is so the licenec holder is posted a copy as well as emailed if they have an email address
                let contactRole = contactCustomer.role
                if (contactRole.includes("Licence holder")) {

                  // find the address for the licence
                  for ([addressIndex, address] of addresses.entries()) {

                    let addressCustomers = address.customers

                    for (addressCustomer of addressCustomers) {

                    if (licenceHolder == addressCustomer.customer && addressCustomer.role.includes("Licence holder")) {



                          //set a variable for the address
                          address = licenceHolder + ", " + addresses[addressIndex].address1 + ", " + addresses[addressIndex].city + ", " + addresses[addressIndex].postcode


                          let sentTo = address
                          let method = "letter"

                          let newRecipient = {
                            licenceNumber,
                            sentTo,
                            method,
                            status
                          };

                          recipients.push(newRecipient);




                          let newCommunication = {
                            type,
                            sent,
                            sender,
                            method,
                            watercourse,
                            gaugingStation,
                            flowThreshold,
                            contactEmail
                          };

                          communications.unshift(newCommunication);
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



                let newCommunication = {
                  type,
                  sent,
                  sender,
                  method,
                  watercourse,
                  gaugingStation,
                  flowThreshold,
                  contactEmail
                };

                communications.unshift(newCommunication);

              }




        }
      }
    }


  }



  //add details for the notification
  let date = today
  let notification = req.session.data['waaType'] + " - Water abstraction alert"
  let sentBy = "youremailaddress@defra.gov.uk"
  let numberOfrecipients = recipients.length
  console.log(numberOfrecipients)
  let problems = ""

  let newNotification = {
    date,
    notification,
    sentBy,
    numberOfrecipients,
    recipients,
    problems
  };

  notifications.unshift(newNotification);



  //add the communication details to the licences

  for (licenceNumber of licenceList) {


  }



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
  res.render(folder + 'send-a-water-abstraction-alert/alert-sent');
});



///Remove licence from licenceList
router.get('/send-a-water-abstraction-alert/remove-from-the-alert-send-list', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/remove-from-the-alert-send-list');
});

router.post('/send-a-water-abstraction-alert/remove-from-the-alert-send-list', function(req, res) {

  let licenceList = req.session.data['licenceList'].split(',')

  let licenceListNumber = req.session.data['licenceListNumber']

  let index = licenceList.indexOf(licenceListNumber);
  if (index > -1) {
    licenceList.splice(index, 1);
  }

  req.session.data.licenceList = licenceList.toString()


  req.session.data.recipients = 0

  if (licenceList.length) {
    res.redirect('check-the-contact-details-for-each-licence');
  } else {
    res.redirect('enter-licence-numbers');
  }


});


////////////////////////////////////////////////////////////////////////////
////TAG A LICENCE


///Set the threshold
router.get('/tagging/enter-the-hands-off-flow-or-level-threshold', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/enter-the-hands-off-flow-or-level-threshold');
});

router.post('/tagging/enter-the-hands-off-flow-or-level-threshold', function(req, res) {

  if (req.session.data['thresholdUnits'].includes("metres")){
    req.session.data.notificationType = "level"
  } else {
  req.session.data.notificationType = "flow" }
 console.log(req.session.data['notificationType'])

   res.redirect('reduce-or-stop');
});


///reduce or stop
router.get('/tagging/reduce-or-stop', function(req, res) {
  req.session.data.back = req.headers.referer
  console.log(req.session.data['stationID'])
  res.render(folder + 'tagging/reduce-or-stop');
});

router.post('/tagging/reduce-or-stop', function(req, res) {
   res.redirect('enter-licence-numbers');
});

///enter licence numbers
router.get('/tagging/enter-licence-numbers', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/enter-licence-numbers');
});

router.post('/tagging/enter-licence-numbers', function(req, res) {

  let licenceList = req.session.data['licenceList'].trim().replace(/\r\n|\n|\r|\s|\r\s|\,\s/gm, ',');
  licenceList.toString()

  req.session.data.licenceList = licenceList

   res.redirect('link-conditions');
});


//Link NALD Conditions
router.get('/tagging/link-conditions', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/link-conditions');
});

router.post('/tagging/link-conditions', function(req, res) {

req.session.data.conditions = req.session.data.conditions0

let linkedconditions = "req.session.data.conditions0"
console.log(linkedconditions);
linkedconditions = linkedconditions.slice(0, -1) + '1';
console.log(linkedconditions);

req.session.data.conditions = linkedconditions
console.log(req.session.data.conditions);


/*Need to do a for while loop here but not got around to it.
let linkedconditions = req.session.data.conditions1
while (linkedconditions.length) {
  req.session.data.conditions = req.session.data.conditions + "," + linkedconditions
  linkedcondtions = linkedconditions + 1;
} */


   res.redirect('check-your-answers');
});


///check your answers
router.get('/tagging/check-your-answers', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/check-your-answers');
});

router.post('/tagging/check-your-answers', function(req, res) {

   //get the station details
   let stationID = req.session.data['stationID']
  let tags = req.session.data.stations[stationID]['tags']


   //for each licence
  let licenceList = req.session.data['licenceList'].split(',')


for ([licenceIndex, licence] of licenceList.entries()) {
  //add details for the tag




  let licenceNumber = licenceList[licenceIndex]
  let thresholdValue = req.session.data['thresholdValue']
  let thresholdUnits = req.session.data['thresholdUnits']
  let conditionType = req.session.data['reduce-or-stop']
  let linkedCondtion = req.session.data['conditions0']
  let notificationType = req.session.data['notificationType']
  let status = "no restrictions"

  let newTag = {
    licenceNumber,
    thresholdValue,
    thresholdUnits,
    linkedCondtion,
    conditionType,
    notificationType,
    status
  };

  tags.unshift(newTag);
}

   res.redirect('licence-tagged');
});


///check your answers
router.get('/tagging/licence-tagged', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/licence-tagged');
});

module.exports = router

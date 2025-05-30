const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here - above the module.exports line
const fs = require('fs');
const notification = require('notifications-node-client/client/notification');

//get today's date
let date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;

const yyyy = date.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}

//change the month into a name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
monthName = monthNames[mm - 1]

const today = `${dd} ${monthName} ${yyyy}`;

const todayNumber = `${yyyy}${mm}${dd}`;

//change the string "yyyymmdd" into a gov formated date string
function formatDate(x) {
  let dd = x.slice(-2);
  dd = parseInt(dd, 10);
  let mm = x.slice(-4, -2)
  mm = parseInt(mm, 10);
  let yyyy = x.slice(0, 4);

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]

  const today = `${dd} ${mm} ${yyyy}`;

  return x.replace(/\w+/g, today)
}





//Send a water abstraction alert
const folder = "sandbox/licence-notices/"



/////RETURN INVITES AND REMINDERS//////
//select the type of alert
router.get('/returns/send-quarterly-returns', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'returns/send-quarterly-returns');
});

router.post('/returns/send-quarterly-returns', function(req, res) {
  res.redirect('create-mailing-list');
});


//Enter the returns period // Skipped this page as it was surplus to requirements
router.get('/returns/enter-returns-period', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'returns/enter-returns-period');
});

router.post('/returns/enter-returns-period', function(req, res) {
  res.redirect('create-mailing-list');
});

//exclude some licences
router.get('/returns/exclude-licences', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'returns/exclude-licences');
});

router.post('/returns/exclude-licences', function(req, res) {
  res.redirect('create-mailing-list');
});

//create mailing list
router.get('/returns/create-mailing-list', function(req, res) {
  req.session.data.back = req.headers.referer
    

  //get the return period for the notification selected
  let selectedPeriodDueDate = req.session.data.returnType


////console.log(selectedPeriodDueDate);


  
    //getting the contact data
    let contacts = req.session.data['contacts']
    //get the licence data
    let licences = req.session.data['licences']
    //get the address data
    let addresses = req.session.data['addresses']
    // declare recipients
    let recipients = [];



    //licenceList = req.session.data['licenceList']
  
      //loop through the contacts and set the contact index to the loop index
      for (var [licenceIndex, licence] of licences.entries()) {
        let licenceHolder = licence.holder
         //if the licence has returns, loop through and look for any due returns in the return period
        if(licence.returns){
          for (var [returnIndex, returning] of licence.returns.entries()) {
            ////console.log(returning.due + returning.status)
            if(returning.status == "due" & returning.due == selectedPeriodDueDate){
              //if there are returns due in the return period add the licenceHolder,Recipient,AddressorEmail,Method to the notifications list 
              //console.log("success add the recipients for this licence")
              let returnsRef =[]
              returnsRef.push(returning.id)
              returnsPeriodStart = returning.returnsPeriodStart
              returnsPeriodEnd = returning.returnsPeriodEnd
              returnsDueDate = returning.due

              ////console.log(JSON.stringify(returns))

              ////console.log(licence.number)
              licenceContacts = licence.contacts
             // //console.log(contacts)
             //get all the return contacts for the licence
              for(licenceContact of licenceContacts){
                if (licenceContact.type == "returns"){

                            /*"type": "returns",
                              "id": ['1'],
                               "method": "letter",
                              "addressID": "6"*/

                             // //console.log(licenceContact)
                  //contact name
                  let id = licenceContact.id[0]
                  let contactName = contacts[id].name

                 let sentTo = ""
                 
                  //comms method
                 let method = licenceContact.method

                 let email = contacts[id].email
                 let addressID = licenceContact.addressID
                 let address = addresses[addressID].address1 + "," + addresses[addressID].city + "," + addresses[addressID].postcode

                 if (method == "email"){
                  sentTo = email
                 } else {
                   sentTo = licence.holder + "," + "FAO " + contactName + ","+ address
                 }
                  
                licenceNumber = licence.number


                sentTo = sentTo
                method = method
                let status = []

          

                 recipient = {
                  licenceNumber, //AN/123/213/123
                  licenceHolder,
                  returnsRef,
                  returnsPeriodStart,
                  returnsPeriodEnd,
                  returnsDueDate,
                  email,
                  address,
                  contactName,
                  sentTo, //Public Water Plc, FAO Geoffrey Billington, 67 Gainsborough, Poole, BH33 1QE",
                  method, // "Letter"
                  status
                }

                ////console.log(recipient)
                recipients.push(recipient)

                }
              }

              
            }
          }
      }
    }

  

 // //console.log(recipients)

  //generate CSV
function generateCSV(data, fileName) {
  let csvContent = "Licences,Return references,Returns period start date,Returns period end date,Returns due date,Message type,Message reference,Licence holder,Recipient name,Email,Address line 1,Address line 2,Addresss line 3,Address line 4,Address line 5,Address line 6,Postcode\r\n";

  data.forEach(item => {
    const splitAddress = item.address.split(",");
    const row = `${item.licenceNumber},${item.returnsRef},${formatDate(item.returnsPeriodStart)},${formatDate(item.returnsPeriodEnd)},${formatDate(item.returnsDueDate)},${item.method},${req.session.data.returnNotificationType},${item.licenceHolder},${item.contactName},${item.email},${splitAddress[0]},${splitAddress[1]},${splitAddress[2]},${splitAddress[3]},${splitAddress[4]},${splitAddress[5]},${splitAddress[6]}\r\n`;
    csvContent += row;
  });

  fs.writeFile(fileName, csvContent, (err) => {
    if (err) throw err;
    //console.log('CSV file saved!');
  });

}

generateCSV(recipients, 'app/assets/files/returns/Returns'+req.session.data.returnNotificationType+'-RINV-ABCD123.csv');


//dedupe and generate notification  

function deduplicateByLicenceAndContact(data) {
  const seen = new Map();

  return data.reduce((acc, current) => {
    const key = `${current.licenceNumber}-${current.contactName}`;

    if (!seen.has(key)) {
      seen.set(key, { ...current }); // Spread current object to avoid mutation
      acc.push(seen.get(key));
    } else {
      seen.get(key).returnsRef.push(...current.returnsRef); // Combine returnsRef
      // No need to modify existing object in acc, seen handles the update
    }

    return acc;
  }, []);
}
  
  const deduplicatedData = deduplicateByLicenceAndContact(recipients);

  recipients= deduplicatedData

////console.log(deduplicatedData)



    //add details for the notification
    let date = todayNumber
    let notification = "Returns: " + req.session.data.returnNotificationType
    let sentBy = "youremailaddress@defra.gov.uk"
    let numberOfrecipients = recipients.length
    let problems = ""
  

      let newNotification = {
        date,
        notification,
        sentBy,
        numberOfrecipients,
        recipients,
        problems
      };

      //the notification
      req.session.data.newNotification = newNotification








  res.render(folder + 'returns/create-mailing-list');
});

//send returns
router.get('/returns/send-returns', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'returns/send-returns');
});

router.post('/returns/send-returns', function(req, res) {

 //deleteCSV download file
 function deleteCSV(filename) {
  fs.unlink(filename, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        //console.error('File not found:', filename);
      } else {
        throw err;
      }
    } else {
      //console.log('File deleted:', filename);
    }
  });
}
deleteCSV('app/assets/files/returns/Returns'+req.session.data.returnNotificationType+'-RINV-ABCD123.csv');


    //getting the notification
    let notifications = req.session.data['notifications']

//mark notifications as sent
let newNotification = req.session.data.newNotification
    function markSent(notificationObject) {
      notificationObject.recipients.forEach(recipient => {
        recipient.status.push("sent");
      });
    }   
    markSent(newNotification);

  
    //push the new notification in the notifications list
    notifications.unshift(newNotification);
  
  
    //get the licence data
    let licences = req.session.data['licences']

 
  
 
  


     for  (var [i, value] of newNotification.recipients.entries()) {


  let type = "Returns: " + req.session.data.returnNotificationType
  let sent = today
  let sender =  "youremailaddress@defra.gov.uk"
  let method = newNotification.recipients[i].method
  let sentTo = newNotification.recipients[i].sentTo

  let newCommunication = {
    type,  
    sent,
    sender,
    method,
    sentTo 
  }

 let number = newNotification.recipients[i].licenceNumber

  const index = licences.findIndex(obj => obj.number === number);


  req.session.data.licences[index].communications.unshift(newCommunication);
  
    }
  
  
    //clear selected licences
    req.session.data.selectedLicences = []
  

    res.redirect('returns-sent');
  
  
});




//returns sent
router.get('/returns/returns-sent', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'returns/returns-sent');
});


/////////////////////////////////////////
/////RETURN SENDING AD-HOC RETURNS //////
/////////////////////////////////////////

//enter the licence numbers
router.get('/returns/ad-hoc/enter-licences', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/enter-licences');
});


router.post('/returns/ad-hoc/enter-licences', function(req, res) {
  req.session.data.adHocLicences = []
  let noReturns = []
  
/*  
function splitStringByCommasAndNewlines(str) {
  const regex = /,|\n/g;
  return str.replace(/\r/g, "").split(regex);
}

//dedupe
function deduplicateSet(array) {
  return [...new Set(array)];
}

let resultArray = splitStringByCommasAndNewlines(req.session.data.enterLicences);

resultArray = deduplicateSet(resultArray);
*/

//list of licences entered
req.session.data.adHocLicences.push(req.session.data.enterLicences)



//get index of those licences so they can be looked up in the data
function findIndexOfObjectByValue(array, key, value) {
  /**
   * Finds the index of the first object in an array that has a specific value for a given key.
   *
   * @param {Array} array - The array of objects to search.
   * @param {string} key - The key of the value to search for.
   * @param {*} value - The value to search for.
   * @returns {number} The index of the first object with the specified value, or -1 if not found.
   */

  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}

let licenceIndexes = []

for(i of req.session.data.adHocLicences){

 let index = findIndexOfObjectByValue(req.session.data.licences, "number", i);

 licenceIndexes.push(index)

} 

//licence indexes
req.session.data.licenceIndexes = licenceIndexes



//remove any licences that don't have any returns
for (var [i, v] of licenceIndexes.entries()) {
   
   let returnsPresent = req.session.data.licences[v].returns


  if (returnsPresent.length == 0) {

    noReturns.push(req.session.data.licences[v].number)
   // //console.log("no returns for " + req.session.data.licences[v].number)
    req.session.data.noReturns = noReturns
    req.session.data.licenceIndexes.splice(i, 1)
    req.session.data.adHocLicences.splice(i, 1)

    req.session.data.statusMessage = 1

    

  }


}


//get contacts

    //getting the contact data
    let contacts = req.session.data['contacts']
    //get the licence data
    let licences = req.session.data['licences']
    //get the address data
    let addresses = req.session.data['addresses']
    // declare recipients
    let recipients = [];

    let lIndex = ""

for (var [licenceIndex, licence] of licences.entries()){
 
  if (licence.number == req.session.data['enterLicences']){
     lIndex = licenceIndex
    console.log(lIndex)
  }
}



    //licenceList = req.session.data['licenceList']
  
      //loop through the contacts and set the contact index to the loop index

        let licenceHolder = licences[lIndex].holder
   
              ////console.log(licence.number)
              licenceContacts = licences[lIndex].contacts

              
           console.log(licenceContacts)
             //get all the return contacts for the licence
              for(licenceContact of licenceContacts){
                if (licenceContact.type == "returns"){

                            /*"type": "returns",
                              "id": ['1'],
                               "method": "letter",
                              "addressID": "6"*/

                             // //console.log(licenceContact)
                  //contact name
                  let id = licenceContact.id[0]
                  let contactName = contacts[id].name

                 let sentTo = ""
                 
                  //comms method
                 let method = licenceContact.method

                 let email = contacts[id].email
                 let addressID = licenceContact.addressID
                 let address = ""
                 if(addressID.length){
                 address = addresses[addressID].address1 + "," + addresses[addressID].city + "," + addresses[addressID].postcode
                } 
                
                 if (method == "email"){
                  sentTo = email
                 } else {
                   sentTo = licence.holder + "," + "FAO " + contactName + ","+ address
                 }
                  
                licenceNumber = licences[lIndex].number


                sentTo = sentTo
                method = method
                let status = []

          

                 recipient = {
                  licenceNumber, //AN/123/213/123
                  licenceHolder,
                 // returnsRef,
                 // returnsPeriodStart,
                 // returnsPeriodEnd,
                 // returnsDueDate,
                  email,
                  address,
                  contactName,
                  sentTo, //Public Water Plc, FAO Geoffrey Billington, 67 Gainsborough, Poole, BH33 1QE",
                  method, // "Letter"
                  status
                }

                
              recipients.push(recipient)
           

                }
         
                console.log(recipients)
              
            }
          
    //generate CSV
function generateCSV(data, fileName) {
  let csvContent = "Licences,Return references,Returns period start date,Returns period end date,Returns due date,Message type,Message reference,Licence holder,Recipient name,Email,Address line 1,Address line 2,Addresss line 3,Address line 4,Address line 5,Address line 6,Postcode\r\n";

  data.forEach(item => {
    const splitAddress = item.address.split(",");
    const row = `${item.licenceNumber},${item.method},${req.session.data.returnNotificationType},${item.licenceHolder},${item.contactName},${item.email},${splitAddress[0]},${splitAddress[1]},${splitAddress[2]},${splitAddress[3]},${splitAddress[4]},${splitAddress[5]},${splitAddress[6]}\r\n`;
    csvContent += row;
  });

  fs.writeFile(fileName, csvContent, (err) => {
    if (err) throw err;
    //console.log('CSV file saved!');
  });

}

generateCSV(recipients, 'app/assets/files/returns/Returns'+req.session.data.returnNotificationType+'-RINV-ABCD123.csv');


//dedupe and generate notification  

function deduplicateByLicenceAndContact(data) {
  const seen = new Map();

  return data.reduce((acc, current) => {
    const key = `${current.licenceNumber}-${current.contactName}`;

    if (!seen.has(key)) {
      seen.set(key, { ...current }); // Spread current object to avoid mutation
      acc.push(seen.get(key));
    } else {
      seen.get(key).returnsRef.push(...current.returnsRef); // Combine returnsRef
      // No need to modify existing object in acc, seen handles the update
    }

    return acc;
  }, []);
}
  
  const deduplicatedData = deduplicateByLicenceAndContact(recipients);

  recipients= deduplicatedData

////console.log(deduplicatedData)



    //add details for the notification
    let date = todayNumber
    let notification = "Returns: " + req.session.data.returnNotificationType
    let sentBy = "youremailaddress@defra.gov.uk"
    let numberOfrecipients = recipients.length
    let problems = ""
  

      let newNotification = {
        date,
        notification,
        sentBy,
        numberOfrecipients,
        recipients,
        problems
      };

      //the notification
      req.session.data.newNotification = newNotification
      req.session.data.licenceRecipients = recipients

////console.log("No returns = " + req.session.data.noReturns + "/n licence Indexes = " + req.session.data.licenceIndexes + "/n Ad hoc licences = " + req.session.data.adHocLicences)

/* test data
03/28/60/0032
03/28/60/0035,00/22/001/02,03/28/60/0726,03/28/61/065
*/
if (req.session.data.change !== "true" ){

if (noReturns.length) {
  req.session.data.statusMessage = 1
  res.redirect('enter-licences');
} else {
  res.redirect('select-type');
}

} else {
//was thinking about doing a different route for changing the licence number but realised the returns are conditional on the licence number
  if (noReturns.length) {
    req.session.data.statusMessage = 1
    res.redirect('enter-licences');
  } else {
    res.redirect('select-type');
  }

}

});

//change which returns are selected
router.get('select-type', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/select-type');
});

router.post('/returns/ad-hoc/select-type', function(req, res) {
  req.session.data.back = req.headers.referer


  //route for paper forms
  if (req.session.data.noticeType == "submit using a paper form invitation" ){
    res.redirect('select-returns');
  } else {
    res.redirect('check-notice-type');
  }


});


//change which returns are selected
router.get('select-returns', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/select-returns');
});

router.post('/returns/ad-hoc/select-returns', function(req, res) {
  req.session.data.back = req.headers.referer
  res.redirect('check-notice-type');
});

//change which returns are selected
router.get('check-notice-type', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  req.session.data.change = "false"
  res.render(folder + '/returns/ad-hoc/check-notice-type');
});

router.post('/returns/ad-hoc/check-notice-type', function(req, res) {
  req.session.data.back = req.headers.referer
  res.redirect('send-returns');
});



//Manage recipients are selected

router.get('/returns/ad-hoc/manage-recipients/select-recipients', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0

  res.render(folder + '/returns/ad-hoc/manage-recipients/select-recipients');
});

router.post('/returns/ad-hoc/manage-recipients/select-recipients', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
   
  let recipients = req.session.data.licenceRecipients
  let newRecipients = req.session.data.selectedContacts

  function filterItemsByIndices(arrayOfObjects, indicesToKeep) {
    if (!Array.isArray(arrayOfObjects) || !Array.isArray(indicesToKeep)) {
      return "Invalid input. Both inputs must be arrays.";
    }
  
    const filteredArray = [];
  
    for (let i = 0; i < arrayOfObjects.length; i++) {
      if (indicesToKeep.includes(String(i))) {
        filteredArray.push(arrayOfObjects[i]);
      }
    }
  
    return filteredArray;
  }

  req.session.data.newNotification.recipients = filterItemsByIndices(recipients, newRecipients)
  
  

  res.redirect('../send-returns');
});


//Single use address

router.get('/returns/ad-hoc/manage-recipients/single-use-address/enter-recipients-name-or-email-address', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/manage-recipients/single-use-address/enter-recipients-name-or-email-address');
});

router.post('/returns/ad-hoc/manage-recipients/single-use-address/enter-recipients-name-or-email-address', function(req, res) {
  req.session.data.back = req.headers.referer

  let contactMethod = req.session.data.contactMethod

  if (contactMethod == 'email'){
  let recipients = req.session.data.licenceRecipients
  let notificationRecipients = req.session.data.newNotification.recipients

 let licenceNumber = req.session.data['enterLicences']
 let licenceHolder = req.session.data.newNotification.recipients[0].licenceNumber
 let email = req.session.data.recipientsEmail
 let address = ""
 let contactName = ""
 let sentTo = email
 let method = "email"
 let status = []

 let recipient = {
    licenceNumber, //AN/123/213/123
    licenceHolder,
   // returnsRef,
   // returnsPeriodStart,
   // returnsPeriodEnd,
   // returnsDueDate,
    email,
    address,
    contactName,
    sentTo, //Public Water Plc, FAO Geoffrey Billington, 67 Gainsborough, Poole, BH33 1QE",
    method, // "Letter"
    status
  }

 recipients.push(recipient)
 notificationRecipients.push(recipient)

 //tidy up
  req.session.data.recipientsEmail = ""

 res.redirect('../select-recipients');
} else {

  res.redirect('enter-the-uk-postcode');
}

  
});


//Enter the postcode
router.get('/returns/ad-hoc/manage-recipients/single-use-address/enter-the-uk-postcode', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0

  res.render(folder + '/returns/ad-hoc/manage-recipients/single-use-address/enter-the-uk-postcode');
});

router.post('/returns/ad-hoc/manage-recipients/single-use-address/enter-the-uk-postcode', function(req, res) {
  req.session.data.back = req.headers.referer

  res.redirect('select-the-uk-postcode');
});


//select the uk postcode
router.get('/returns/ad-hoc/manage-recipients/single-use-address/select-the-uk-postcode', function(req, res) {
  req.session.data.back = req.headers.referer
  console.log('get')
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/manage-recipients/single-use-address/select-the-uk-postcode');
});

router.post('/returns/ad-hoc/manage-recipients/single-use-address/select-the-uk-postcode', function(req, res) {
  req.session.data.back = req.headers.referer
  
  let name = req.session.data.recipientsName
  let address = req.session.data.address

  let recipients = req.session.data.licenceRecipients
  let notificationRecipients = req.session.data.newNotification.recipients

 let licenceNumber = req.session.data['enterLicences']
 let licenceHolder = req.session.data.newNotification.recipients[0].licenceNumber
 let email = ""
 let contactName = name
 let sentTo = name + "," + address
 let method = "letter"
 let status = []

 let recipient = {
    licenceNumber, //AN/123/213/123
    licenceHolder,
   // returnsRef,
   // returnsPeriodStart,
   // returnsPeriodEnd,
   // returnsDueDate,
    email,
    address,
    contactName,
    sentTo, //Public Water Plc, FAO Geoffrey Billington, 67 Gainsborough, Poole, BH33 1QE",
    method, // "Letter"
    status
  }

 recipients.push(recipient)
 notificationRecipients.push(recipient)

 //tidy up
  req.session.data.recipientsName = ""
  req.session.data.address = ""

 res.redirect('../select-recipients');

});


//Enter the address manually
router.get('/returns/ad-hoc/manage-recipients/single-use-address/enter-the-address-manually', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0

  res.render(folder + '/returns/ad-hoc/manage-recipients/single-use-address/enter-the-address-manually');
});


router.post('/returns/ad-hoc/manage-recipients/single-use-address/enter-the-non-UK-address', function(req, res) {
  req.session.data.back = req.headers.referer

  let address = req.session.data.addressLine1 +","+ req.session.data.addressLine2  +","+ req.session.data.addressTown +","+ req.session.data.addressCounty +","+ req.session.data.addressPostcode +","+ req.session.data.addressCountry
  address = address.replace(/,,+/g, ',');

  let name = req.session.data.recipientsName


  let recipients = req.session.data.licenceRecipients
  let notificationRecipients = req.session.data.newNotification.recipients

 let licenceNumber = req.session.data['enterLicences']
 let licenceHolder = req.session.data.newNotification.recipients[0].licenceNumber
 let email = ""
 let contactName = name
 let sentTo = name + "," + address
 let method = "letter"
 let status = []

 let recipient = {
    licenceNumber, //AN/123/213/123
    licenceHolder,
   // returnsRef,
   // returnsPeriodStart,
   // returnsPeriodEnd,
   // returnsDueDate,
    email,
    address,
    contactName,
    sentTo, //Public Water Plc, FAO Geoffrey Billington, 67 Gainsborough, Poole, BH33 1QE",
    method, // "Letter"
    status
  }

 recipients.push(recipient)
 notificationRecipients.push(recipient)

 res.redirect('../select-recipients');
});



router.post('/returns/ad-hoc/manage-recipients/single-use-address/enter-the-address-manually', function(req, res) {
  req.session.data.back = req.headers.referer

  let address = req.session.data.addressLine1 +","+ req.session.data.addressLine2  +","+ req.session.data.addressTown +","+ req.session.data.addressCounty +","+ req.session.data.addressPostcode
  address = address.replace(/,,+/g, ',');

  let name = req.session.data.recipientsName


  let recipients = req.session.data.licenceRecipients
  let notificationRecipients = req.session.data.newNotification.recipients

 let licenceNumber = req.session.data['enterLicences']
 let licenceHolder = req.session.data.newNotification.recipients[0].licenceNumber
 let email = ""
 let contactName = name
 let sentTo = name + "," + address
 let method = "letter"
 let status = []

 let recipient = {
    licenceNumber, //AN/123/213/123
    licenceHolder,
   // returnsRef,
   // returnsPeriodStart,
   // returnsPeriodEnd,
   // returnsDueDate,
    email,
    address,
    contactName,
    sentTo, //Public Water Plc, FAO Geoffrey Billington, 67 Gainsborough, Poole, BH33 1QE",
    method, // "Letter"
    status
  }

 recipients.push(recipient)
 notificationRecipients.push(recipient)

 res.redirect('../select-recipients');
});

//change which contacts are selected (old route)
router.get('select-returns', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/select-contacts');
});

router.post('/returns/ad-hoc/select-contacts', function(req, res) {
  req.session.data.back = req.headers.referer
  res.redirect('check-returns-details');
});


router.get('send-returns', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/send-returns');
});

//show the returns and contact details licence by licence (not implemented see send-returns)
router.get('check-returns-details', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.statusMessage = 0
  res.render(folder + '/returns/ad-hoc/check-returns-details');
});

router.post('/returns/ad-hoc/check-returns-details', function(req, res) {
  req.session.data.back = req.headers.referer
 



 //add details for the notification
 let date = todayNumber
 let notification = "Returns: ad-hoc"
 let sentBy = "youremailaddress@defra.gov.uk"
 let numberOfrecipients = req.session.data.adHocLicences.length
 let problems = ""
 let recipients = []



for(let [i,v] of req.session.data.adHocLicences.entries()) {

  ////console.log(" gathering recipients")

  //contact name
  let contactID = req.session.data.licences[req.session.data.licenceIndexes[i]].contacts[0].id


recipients.push({
     "licenceNumber": v,
     "sentTo": req.session.data.licences[req.session.data.licenceIndexes[i]].holder + ",FAO " + req.session.data.contacts[contactID].name + ",67 Gainsborough, Poole, BH33 1QE",
     "method": "Letter",
     "status": ["sent"],
   })

  }


 let newNotification = {
   date,
   notification,
   sentBy,
   numberOfrecipients,
   recipients,
   problems
 };


 req.session.data.notifications.unshift(newNotification);

res.redirect('../returns-sent');
 

});



/////////WATER ABSTRACTION ALERTS//////////////

//select the type of alert
router.get('/send-a-water-abstraction-alert/select-the-type-of-alert', function(req, res) {
  req.session.data.back = req.headers.referer
//  //console.log("something")
  res.render(folder + 'send-a-water-abstraction-alert/select-the-type-of-alert');
});


router.post('/send-a-water-abstraction-alert/select-the-type-of-alert', function(req, res) {

  //clear selected licences
  req.session.data.selectedLicences = []

  //clear water abstraction alert
  req.session.data.waterAbstractionAlert = []

  var waaType = req.session.data['waaType']


  //wrapped in a function so the code executes before the page loads
  selectThreshold = (function() {


    var flowThresholdsMegaLitresPerDay = []
    var levelThresholdsMetresAboveOrdinanceDatum = []
    //get tags
    let stationID = req.session.data['stationID']

    let tags = req.session.data.stations[stationID]['tags']

    for (tag of tags) {
      //get tagValues
      let tagValues = tag['tagValues']
      for (tagValue of tagValues) {

        if (waaType === "reduce") {
          //get thresholds for warning or resume
          if (tagValue.thresholdUnits === "megaLitresPerDay" && tagValue.conditionType === "reduce") {
            flowThresholdsMegaLitresPerDay.push(tagValue.thresholdValue)
          } else if (tagValue.thresholdUnits === "metresAboveOrdinanceDatum" && tagValue.conditionType === "reduce") {
            levelThresholdsMetresAboveOrdinanceDatum.push(tagValue.thresholdValue)
          }
        } else if (waaType === "stop") {
          //get thresholds for warning or resume
          if (tagValue.thresholdUnits === "megaLitresPerDay" && tagValue.conditionType === "stop") {
            flowThresholdsMegaLitresPerDay.push(tagValue.thresholdValue)
          } else if (tagValue.thresholdUnits === "metresAboveOrdinanceDatum" && tagValue.conditionType === "stop") {
            levelThresholdsMetresAboveOrdinanceDatum.push(tagValue.thresholdValue)
          }
        }
        else {
          //get thresholds for warning or resume
          if (tagValue.thresholdUnits === "megaLitresPerDay") {
            flowThresholdsMegaLitresPerDay.push(tagValue.thresholdValue)
          } else if (tagValue.thresholdUnits === "metresAboveOrdinanceDatum") {
            levelThresholdsMetresAboveOrdinanceDatum.push(tagValue.thresholdValue)
          }
        }
      }
    }

    //remove duplicates
    req.session.data.allFlowThresholdsMegaLitresPerDay = [...new Set(flowThresholdsMegaLitresPerDay)];
    req.session.data.allLevelThresholdsMetresAboveOrdinanceDatum = [...new Set(levelThresholdsMetresAboveOrdinanceDatum)];

    res.redirect('select-the-thresholds-for-the-alert');

  });

  //call the function
  selectThreshold();

});




////Select the thresholds to send an alert to
router.get('/send-a-water-abstraction-alert/select-the-thresholds-for-the-alert', function(req, res) {
  req.session.data.back = req.headers.referer

  //clear selected licences
  req.session.data.selectedLicences = []

  //clear water abstraction alert
  req.session.data.waterAbstractionAlert = []

 //clear water abstraction alert
  req.session.data.flowThresholdsMegaLitresPerDay = []

 //clear water abstraction alert
  req.session.data.levelThresholdsMetresAboveOrdinanceDatum = []

  res.render(folder + 'send-a-water-abstraction-alert/select-the-thresholds-for-the-alert');

});


router.post('/send-a-water-abstraction-alert/select-the-thresholds-for-the-alert', function(req, res) {

  //push selected thresholds into an array
  var selectedThresholds = []

  let flowThresholds = req.session.data['flowThresholdsMegaLitresPerDay']
  if (flowThresholds !== null) {
    selectedThresholds.push.apply(selectedThresholds, flowThresholds);
  }

  let levelThresholds = req.session.data['levelThresholdsMetresAboveOrdinanceDatum']
  if (levelThresholds !== null) {
    selectedThresholds.push.apply(selectedThresholds, levelThresholds)
  }


  //get tags
  let stationID = req.session.data['stationID']
  let tags = req.session.data.stations[stationID]['tags']

  //get waterAbstractionAlert
  let waterAbstractionAlert = req.session.data['waterAbstractionAlert']

 // //console.log(selectedThresholds)
  let op = ""
  //filter licences based on the selected thresholds
  var selectedLicences = req.session.data['selectedLicences']


  for (item of selectedThresholds) {
     op = tags.filter(val => {
      let tagValues = val.tagValues.some(({
        thresholdValue
      }) => thresholdValue.includes(item))
      return tagValues

    })
    let licence = op.map(({
      licenceNumber
    }) => licenceNumber)

    //push them into a notification
    waterAbstractionAlert.push.apply(waterAbstractionAlert, op);

    selectedLicences.push.apply(selectedLicences, licence);
    ////console.log('filtered values -->\n',op)

  }

////console.log(selectedLicences)
  //push them into a notification
  waterAbstractionAlert.push.apply(waterAbstractionAlert, op);


  req.session.data.waterAbstractionAlert = [...new Set(waterAbstractionAlert)];

  /*     waterAbstractionAlert = Array.from(new Set(notifications.map(a => a.licenceNumber)))
   .map(licenceNumber => {
     return notifications.find(a => a.licenceNumber === licenceNumber)
   }) */

//  //console.log(waterAbstractionAlert)

  res.redirect('check-the-licences-for-the-selected-thresholds');
});


////CHECK THE LICENCE NUMBERS THAT ARE RETURNED
router.get('/send-a-water-abstraction-alert/check-the-licences-for-the-selected-thresholds', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/check-the-licences-for-the-selected-thresholds');
});

router.post('/send-a-water-abstraction-alert/check-the-licences-for-the-selected-thresholds', function(req, res) {




  res.redirect('enter-an-email-address');
});


////ENTER AN EMAIL ADDRESS
router.get('/send-a-water-abstraction-alert/enter-an-email-address', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/enter-an-email-address');
});

router.post('/send-a-water-abstraction-alert/enter-an-email-address', function(req, res) {

  var licenceList = []
  let waterAbstractionAlert = req.session.data['waterAbstractionAlert']

  for (items of waterAbstractionAlert) {
    licenceList.push(items.licenceNumber)
  }


  //  licenceList.toString()

  // //console.log("licenceList:" + licenceList)
  req.session.data.licenceList = licenceList

  res.redirect('check-the-mailing-list');
});


////CHECK THE MAILING LIST
router.get('/send-a-water-abstraction-alert/check-the-mailing-list', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/check-the-mailing-list');
});

router.post('/send-a-water-abstraction-alert/check-the-mailing-list', function(req, res) {




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
  licenceList = req.session.data['licenceList']


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



    let selectedLicences = req.session.data['selectedLicences']
    for (selectedLicence of selectedLicences) {
      //update the status of the water abstraction alerts
      let stations = req.session.data['stations']
      let stationID = req.session.data['stationID']

      let tags = req.session.data.stations[stationID]['tags']

      for (var [tagIndex, tag] of tags.entries()) {
        if (selectedLicence == tag.licenceNumber) {
          tag.status = req.session.data['waaType']
        }
      }
    }





    //loop through the contacts and set the contact index to the loop index
    for (var [contactIndex, contact] of contacts.entries()) {

      let contactCustomers = contact.customers

      for (contactCustomer of contactCustomers) {

        if (licenceHolder == contactCustomer.customer) {

           for (notice of contactCustomer.notices) {
             if (notice.type == "Water abstraction alerts") {



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

    /*      //check if the contact has a role of licence holder, this is so the licenec holder is posted a copy as well as emailed if they have an email address
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
            }  */
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
 }

  }



  //add details for the notification
  let date = today
  let notification = req.session.data['waaType'] + " - Water abstraction alert"
  let sentBy = "youremailaddress@defra.gov.uk"
  let numberOfrecipients = recipients.length
  // //console.log(numberOfrecipients)
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


  //clear selected licences
  req.session.data.selectedLicences = []

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



////REMOVE A LICENCE FROM THE ALERT SENDING LIST
router.get('/send-a-water-abstraction-alert/remove-from-the-alert-send-list', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'send-a-water-abstraction-alert/remove-from-the-alert-send-list');
});

router.post('/send-a-water-abstraction-alert/remove-from-the-alert-send-list', function(req, res) {

  let waterAbstractionAlert = req.session.data['waterAbstractionAlert']
  let listIndex = req.session.data['listIndex']
  let selectedLicences = req.session.data['selectedLicences']

  if (listIndex > -1) {
    waterAbstractionAlert.splice(listIndex, 1);
    selectedLicences.splice(listIndex, 1);
  }


  if (waterAbstractionAlert.length) {
    res.redirect('check-the-licences-for-the-selected-thresholds');
  } else {
    res.redirect('select-the-thresholds-for-the-alert');
  }


});




////////////////////////////////////////////////////////////////////////////
////TAG A LICENCE
router.get('/sandbox/station', function(req, res) {
  req.session.data.tagRemoved = 0
  req.session.data.back = req.headers.referer
  res.render('/sandbox/station');
});



///Set the threshold
router.get('/tagging/enter-the-hands-off-flow-or-level-threshold', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/enter-the-hands-off-flow-or-level-threshold');
});

router.post('/tagging/enter-the-hands-off-flow-or-level-threshold', function(req, res) {

  if (req.session.data['thresholdUnits'].includes("metres")) {
    req.session.data.notificationType = "level"
  } else {
    req.session.data.notificationType = "flow"
  }
//  //console.log(req.session.data['notificationType'])

  res.redirect('reduce-or-stop');
});


///reduce or stop
router.get('/tagging/reduce-or-stop', function(req, res) {
  req.session.data.back = req.headers.referer
//  //console.log(req.session.data['stationID'])
  res.render(folder + 'tagging/reduce-or-stop');
});

router.post('/tagging/reduce-or-stop', function(req, res) {
  res.redirect('enter-licence-number');
});

///enter licence numbers
router.get('/tagging/enter-licence-number', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/enter-licence-number');
});

router.post('/tagging/enter-licence-number', function(req, res) {

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

  // get the name of the radio by looping through the licence list and adding the index number of the end
  var linkedConditions = []
  let licenceList = req.session.data['licenceList'].split(',');
  var regex = new RegExp('^The');

  for ([licenceIndex, licence] of licenceList.entries()) {
    let condition = "conditions" + licenceIndex

    if (regex.test(req.session.data[condition])) {


      condition = "The condition is not listed for this licence"
      linkedConditions.push(condition)
      req.session.data.conditions = linkedConditions.toString()
      res.redirect('enter-an-abstraction-period');
    } else {
    linkedConditions.push(req.session.data[condition])
    //stringify the array and add it back in to the session data
    req.session.data.conditions = linkedConditions.toString()

    licencesData = req.session.data['licences']

    for  (licenceData of licencesData) {
      if (licenceData.number == licence){
      req.session.data.abstractionPeriod = licenceData.absPeriod
       }
    }




     res.redirect('check-your-answers');
    }
  };

});

///Enter an abstraction period - only shows if the NALD condition wasn't there
router.get('/tagging/enter-an-abstraction-period', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/enter-an-abstraction-period');
});

router.post('/tagging/enter-an-abstraction-period', function(req, res) {

  //get the dates
  let abstractionStartDay = "abstractionStartDay"
  let abstractionStartMonthNumber = "abstractionStartMonth"
  let abstractionEndDay = "abstractionEndDay"
  let abstractionEndMonthNumber = "abstractionEndMonth"

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let abstractionStartMonth = monthNames[req.session.data[abstractionStartMonthNumber] - 1]
  let abstractionEndMonth = monthNames[req.session.data[abstractionEndMonthNumber] - 1]

  //set abstraction period
  let abstractionPeriod = req.session.data[abstractionStartDay]+ " " + abstractionStartMonth + " to " + req.session.data[abstractionEndDay] + " " + abstractionEndMonth

  req.session.data.abstractionPeriod = abstractionPeriod
 // //console.log(req.session.data.abstractionPeriod)
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
    let abstractionPeriod = req.session.data['abstractionPeriod']
    let reductionAmount = req.session.data['reductionAmount']
    let reductionAmountUnits = req.session.data['reductionAmountUnits']
    let maxVolumeLimit = req.session.data['maxVolumeLimit']

    //get the licence index of the condition in the array
    let conditions = req.session.data['conditions'].split(',')
    let linkedCondtion = conditions[licenceIndex]

    let notificationType = req.session.data['notificationType']
    let status = "no restrictions"
    var match = "false"
    //loop through tags and check for existing licence,if found add the tag to that licence's values rather than creating a new entry, use match to switch between the two
    for ([tagIndex, tag] of tags.entries()) {
      if (licence === tag.licenceNumber) {

        let newTag = {
          thresholdValue,
          thresholdUnits,
          linkedCondtion,
          conditionType,
          abstractionPeriod,
          reductionAmount,
          reductionAmountUnits,
          maxVolumeLimit,
          notificationType
        };
        tag.tagValues.push(newTag);
        match = "true"
      }
    }

    if (match === "false") {
      let tagValues = [{
        thresholdValue,
        thresholdUnits,
        linkedCondtion,
        abstractionPeriod,
        conditionType,
        reductionAmount,
        reductionAmountUnits,
        maxVolumeLimit,
        notificationType
      }]

      let newTag = {
        licenceNumber,
        status,
        tagValues
      };

      tags.unshift(newTag);
      match = "false"
    }

  }

  res.redirect('licence-tagged');
});


///check your answers
router.get('/tagging/licence-tagged', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/licence-tagged');
});


///////////////////////////////////////////////////////////////////////////////
//REMOVE A TAG

router.get('/tagging/remove-tag', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/remove-tag');
});

router.post('/tagging/remove-tag', function(req, res) {

  let licenceID = req.session.data['ID']
  let stationID = req.session.data['stationID']
  let tagNumber = req.session.data['tagNumber']
  let tagValueNumber = req.session.data['tagValueNumber']



  let tagValues = req.session.data.stations[stationID].tags[tagNumber].tagValues

  let index = tagValueNumber;
  if (index > -1) {
    tagValues.splice(index, 1);
  }


  if (tagValues.length == 0) {
    let tags = req.session.data.stations[stationID].tags
    let index = tagNumber;
    if (index > -1) {
      tags.splice(index, 1);
    }
  }

 req.session.data.tagRemoved = 1

  res.redirect('/sandbox/station?stationID=' + stationID);



});

///////////////////////////////////////////////////////////////////////////////
//REMOVE ALL TAGS FOR A LICENCE
router.get('/tagging/which-licence-do-you-want-to-remove-tags-for', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/which-licence-do-you-want-to-remove-tags-for');
});


router.post('/tagging/which-licence-do-you-want-to-remove-tags-for', function(req, res) {

 //get the selected licence
 let selectedLicence = req.session.data['selectedLicence']
 //get the station details
 let stationID = req.session.data['stationID']
 let tags = req.session.data.stations[stationID]['tags']
 //find out if the licence has multiple tags or not, if it does have multiple tags redirect to the tag selection page.
 for ([tagIndex, tag] of tags.entries()) {
   if (selectedLicence === tag.licenceNumber) {
   if (tag.tagValues.length > 1) {
     res.redirect('select-the-tags-you-want-to-remove');
   } else {
     res.redirect('you-are-about-to-remove-tags');
   }
  }
 };

});

router.get('/tagging/select-the-tags-you-want-to-remove', function(req, res) {
req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/select-the-tags-you-want-to-remove');
});

router.post('/tagging/select-the-tags-you-want-to-remove', function(req, res) {
res.redirect('you-are-about-to-remove-tags');
});

router.get('/tagging/you-are-about-to-remove-tags', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'tagging/you-are-about-to-remove-tags');
});


router.post('/tagging/you-are-about-to-remove-tags', function(req, res) {

  let licence = req.session.data['selectedLicence']
  let stationID = req.session.data['stationID']
  let tagNumber = ""

    let tags = req.session.data.stations[stationID].tags






    for ([tagIndex, tag] of tags.entries()){




      if( licence == tag.licenceNumber) {

      //if the licence has multiple tags
      if (tag.tagValues.length > 1) {



        let tagValues = tag.tagValues


        //get the selected tags
        let selectedTags = req.session.data['selectedTags']

        //for each selected tag
        for ([selectedTagIndex, selectedTag] of selectedTags.entries()){

        //set the tag value that you want to delete to the value of the selectedTag
         let tagValueNumber = selectedTag - selectedTagIndex



        //remove that tag
        let index = tagValueNumber;
        if (index > -1) {
          tagValues.splice(index, 1);
        }

        //if it is the last tag, remove all tags
        if (tagValues.length == 0) {
          let tags = req.session.data.stations[stationID].tags
          let index = tagNumber;
          if (index > -1) {
            tags.splice(index, 1);
          }
        }
      }
        //just remove all tags
    } else {


      if (licence == tag.licenceNumber) {
      tagNumber = tagIndex

    //  //console.log(tagNumber)

    }

    let index = tagNumber;
    if (index > -1) {
      tags.splice(index, 1);
    }
 }
 }
}
  
  console.log("removed")
  req.session.data.tagRemoved = 1
  res.redirect('/sandbox/station?stationID=' + stationID);



});



///////Show and hide table filters
router.get('/notification-report', function(req, res) {
  req.session.data.openDetails = ""
req.session.data.back = req.headers.referer
  res.render(folder + 'notification-report');
});


router.post('/notification-report', function(req, res) {

  let showFilters = req.session.data.showFilters

if (showFilters == "true" ) {

   req.session.data.filters = "govuk-grid-column-two-thirds"
  // req.session.data.table = "govuk-grid-column-two-thirds"
  // req.session.data.fixTableWidth = "width:960px"
  // req.session.data.overFlow = "overflow-x: auto"

 } else {

   req.session.data.filters = "hide"
   req.session.data.table = "govuk-grid-column-full"
   req.session.data.fixTableWidth = ""
   req.session.data.overFlow = ""

 }

  res.redirect('notification-report#focus');
});


///Apply  filters

router.post('/notification-report/apply-filters', function(req, res) {



  //check to see if the user is clearing filters
  if (req.session.data.clearFilters == "true") {

    req.session.data.type = ""
    req.session.data.sentBy = ""
    req.session.data.filteredResults = ""
    req.session.data['sentAfter-day'] = ""
    req.session.data['sentAfter-month'] = ""
    req.session.data['sentAfter-year'] = ""
    req.session.data['sentBefore-day'] = ""
    req.session.data['sentBefore-month'] = ""
    req.session.data['sentBefore-year'] = ""
    req.session.data.openDetails = true
    //reset the table caption if the list is cleared
    req.session.data.filterCaption = "Showing all sent notices."
//    req.session.data.focus="alert"

  } else {



  //get the list of notifications
  let notifications = req.session.data.notifications

 // //console.log(req.session.data.communications)

//change data to communications if coming from that page
if (req.session.data.communications == "true"){
  
 ID = req.session.data.ID
  notifications =  req.session.data.licences[ID]['communications']
} 
  
////console.log (notifications)

  


//set global scope of filteredResults
let filteredResults = ""

//set the type filter
let typeFilters = ""
 typeFilters = req.session.data.type
 if (typeof typeFilters === 'undefined') {
   typeFilters= ""
 }

 if (typeof typeFilters.length) {
   filteredResults = notifications.filter(el => ( typeFilters.indexOf(el.type) >= 0 ))
 }


 //set the sent by filter
  let sentByFilter = ""
   sentByFilter = req.session.data.sentBy
  if (sentByFilter === 'undefined') {
     sentByFilter = ""
   }

  if ((sentByFilter.length) && (filteredResults.length)) {
    filteredResults = filteredResults.filter(el => (sentByFilter.indexOf(el.sentBy) >=0 ) );
  } else if (sentByFilter.length) {
    filteredResults = notifications.filter(el => (sentByFilter.indexOf(el.sentBy) >=0 ) );
  } else if ((!sentByFilter.length) && (!filteredResults.length)) {
    filteredResults = notifications
  }





    //date filter

function filterByDateRange(data, startDateString, endDateString) {
  // Convert date arrays to JavaScript Date objects
  const startDate = startDateString;
  const endDate = endDateString;

  // Filter objects based on date
  return data.filter(obj => {
    const objectDate = obj.date;
    return objectDate >= startDate && objectDate < endDate;
  });
}



const data = filteredResults;


//sort out formats from date input
if (req.session.data['sentAfter-month'].length == 1) {
  req.session.data['sentAfter-month'] = `0${req.session.data['sentAfter-month']}`;
}
if (req.session.data['sentAfter-day'].length == 1) {
  req.session.data['sentAfter-day'] = `0${req.session.data['sentAfter-day']}`;
}

if (req.session.data['sentBefore-month'].length == 1) {
  req.session.data['sentBefore-month'] = `0${req.session.data['sentBefore-month']}`;
}
if (req.session.data['sentBefore-day'].length == 1) {
  req.session.data['sentBefore-day'] = `0${req.session.data['sentBefore-day']}`;
}


let startDateString = req.session.data['sentAfter-year']+req.session.data['sentAfter-month']+req.session.data['sentAfter-day']; // April 1, 2021
if (startDateString === 'undefined') {
  startDateString = ""
}

let endDateString = req.session.data['sentBefore-year']+req.session.data['sentBefore-month']+req.session.data['sentBefore-day'] // March 31, 2022 (inclusive)


if (endDateString == "" ){
  endDateString = "21000101"
}

 filteredResults = filterByDateRange(data, startDateString, endDateString);

 if (endDateString === '21000101') {
  endDateString = ""
}

  //set filtered results to empty if filters don't return anything
  if (!filteredResults.length){
    filteredResults = "empty"
  }



req.session.data.openDetails = true
//req.session.data.focus="alert"

//Create a list formatter
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

//Create the list

let rawList = [...typeFilters, sentByFilter, formatDate(startDateString), formatDate(endDateString)]



let list =  rawList.filter(string => string !== "");

////console.log(list);

//set the dynamic caption for the table
if (list.length) {
req.session.data.filterCaption = "Showing sent notices filtered by " + formatter.format(list) + "."
} else {
  req.session.data.filterCaption = "Showing all sent notices."
}

req.session.data.filteredResults = filteredResults

}

  req.session.data.clearFilters = ""


  if (req.session.data.communications == "true"){
    req.session.data.communications = "false"
    res.redirect('/sandbox/licence?ID=1#communications');
  }
  else {
  res.redirect('../notification-report#focus');
  }

});


///clear filters

router.post('/notification-report/clear-filters', function(req, res) {


  //reset the table caption if the list is cleared
  req.session.data.filterCaption = "Showing all sent notices."

  res.redirect('../notification-report#focus');
});


///////////WAA SENT ALERT REPORT DOWNLOAD/////////////////////
//////////////////////////////////////////////////////////////

///Set the threshold
router.get('/create-waa-report/waa-alert-report', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.success = false
  res.render(folder + 'create-waa-report/waa-alert-report');
});

router.post('/create-waa-report/waa-alert-report', function(req, res) {

   req.session.data.waaReportStartDate = req.session.data['waaReportStartDate-year'] + req.session.data['waaReportStartDate-month'].padStart(2, '0') + req.session.data['waaReportStartDate-day'].padStart(2, '0')
   req.session.data.waaReportEndDate = req.session.data['waaReportEndDate-year'] + req.session.data['waaReportEndDate-month'].padStart(2, '0')  + req.session.data['waaReportEndDate-day'].padStart(2, '0')


  req.session.data.success = true

  res.redirect('waa-alert-report');
});





module.exports = router

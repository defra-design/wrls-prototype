const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


///-----------------------------------------CONSTANTS------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////



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
mm = monthNames[mm - 1]

const today = `${dd} ${mm} ${yyyy}`;



//Send a water abstraction alert
const folder = "sandbox/licence/returns-current/"


///Success messages///
//////////////////////
 const successMessage = {
   "dynamicContent":      "",
   "reasonUpdate":        '<h3 class="govuk-notification-banner__heading">Return requirement reason updated</h3><p class="govuk-body">Reason: ',
   "startDateUpdate":     '<h3 class="govuk-notification-banner__heading">Return requirement start date updated</h3><p class="govuk-body">Start date: ',
   "requirementUpdate":   '<h3 class="govuk-notification-banner__heading">Return requirement updated</h3><p class="govuk-body">ID: ',
   "requirementCreate":   '<h3 class="govuk-notification-banner__heading">Return requirement added</h3><p class="govuk-body">Return ID: ',
   "requirementRemove":   '<h3 class="govuk-notification-banner__heading">Return requirement removed</h3><p class="govuk-body">Return ID: ',
   "noteUpdate":          '<h3 class="govuk-notification-banner__heading">Return requirement note updated</h3>',
   "noteCreate":          '<h3 class="govuk-notification-banner__heading">Return requirement note added</h3>',
 }


///-----------------------------------------FUNCTIONS------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////


///CREATE RETURNS REQUIREMENTS
///Create individual requirement
function createReturnRequirement(req, res) {

  //get the licence info
  let licence = req.session.data.ID
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements[0]

  //set the ID
  let id = Math.floor(100000 + Math.random() * 900000)



  //set scope of purpose, points, amount, periodStart and periodEnd
  let purpose = req.session.data.purpose
  let points = req.session.data.points
  let periodStart = req.session.data.abstractionStartMonth.padStart(2, '0') + req.session.data.abstractionStartDay.padStart(2, '0')
  let periodEnd = req.session.data.abstractionEndMonth.padStart(2, '0') + req.session.data.abstractionEndDay.padStart(2, '0')
  let returnsCycle = req.session.data.returnsCycle


/*
  //check to see if the abs period is summer or winter and all year. Only bother to run the code if undefined or summer
  if (season == "" || season == "summer") {
  if (periodStart <= "1031" && periodStart >= "0401" && periodEnd <= "1031" && periodEnd >= "0401") {
    season = "summer"
  } else {
    season = "winter/all year"
    }
  }
*/

  //set the description and frequency
  let description = req.session.data.description
  let frequencyCollected = req.session.data.frequencyCollected
  let frequency = req.session.data.frequency



  let newRequirement = {
    id,
    description,
    frequency,
    frequencyCollected,
    purpose,
    points,
    periodStart,
    periodEnd,
    returnsCycle,
  };



  //push the requirment data
  returnsRequirements.requirements.push(newRequirement);

};

//////////////////////////////////
///Create Version
function createVersion(req, res) {

  //get the licence info
  let licence = req.session.data.ID
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements


  //create vars for the start date and reason
  let startDate = req.session.data.startDateConditional
  let endDate = ""
  let status = "active"
  let reason = req.session.data.reasonNewRequirements
  let requirements = []
  let username = "username@defra.gov.uk"
  let note = ""

    let versions = {

    startDate,
    endDate,
    reason,
    status,
    username,
    note,
    requirements,

  };
    //push reference data
    returnsRequirements.unshift(versions);
    req.session.data.returnVersion = 1

    if (req.session.data.returnsNotRequired == false) {
    //if the return version has returns required create the return requirement
    createReturnRequirement(req, res)
    }


}


//////////////////////////
///create the return requirement from abs data
function createReturnRequirementsFromAbsData(req, res) {

  //get the licence info
  let licence = req.session.data.ID
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements



  let  id = ""
  let  description = ""
  let  purpose = []
  let  points = []
  let  frequency = ""
  let  frequencyCollected = ""
  let  periodStart = ""
  let  periodEnd = ""
  let  returnsCycle = ""


//Data for the return requirement, loop through the uses on the licence and create a rquirement for each
for (const [i, v] of req.session.data.licences[licence].use.entries()) {

  id = Math.floor(100000 + Math.random() * 900000)
 description =   req.session.data.licences[licence].source
  purpose = req.session.data.licences[licence].use[i].purpose
  points = req.session.data.licences[licence].use[i].points
  frequency = "daily"
  frequencyCollected = "daily"
  periodStart = req.session.data.licences[licence].use[i].periodStart
 periodEnd = req.session.data.licences[licence].use[i].periodEnd
  returnsCycle = "summer"
if (periodStart <= "1031" && periodStart >= "0401" && periodEnd <= "1031" && periodEnd >= "0401") {
  returnsCycle = "summer"
} else {
  returnsCycle = "winter/all year"
  }


  let newRequirement = {
    id,
    description,
    frequency,
    frequencyCollected,
    purpose,
    points,
    periodStart,
    periodEnd,
    returnsCycle,
  };

  //push the requirment data
  returnsRequirements[0].requirements.push(newRequirement);


  }
}

//////////////////////////////////
///Create Version from Abs Data
function requirementsFromAbsData(req, res) {

  //get the licence info
  let licence = req.session.data.ID
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements

  //create vars for the start date and reason
  let startDate = req.session.data.startDateConditional
  let endDate = ""
  let status = "active"
  let reason = req.session.data.reasonNewRequirements
  let requirements = []
  let username = "username@defra.gov.uk"
  let note = ""

    let versions = {

    startDate,
    endDate,
    reason,
    status,
    username,
    note,
    requirements,

  };
    //push reference data
    returnsRequirements.unshift(versions);
    req.session.data.returnVersion = 1

    if (req.session.data.returnsNotRequired == false) {
    //if the return version has returns required create the return requirement

    createReturnRequirementsFromAbsData(req, res)

    }


}








//////////////////////////
///update the requirement
function updateReturnRequirement(req, res) {

  //get the return requirement
  let licence = req.session.data.ID
  let requirementIndex = req.session.data.requirementIndex
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements[0].requirements[requirementIndex]




  returnsRequirements.purpose = req.session.data.purpose
  returnsRequirements.points = req.session.data.points
  returnsRequirements.periodStart = req.session.data.abstractionStartMonth.padStart(2, '0') + req.session.data.abstractionStartDay.padStart(2, '0')
  returnsRequirements.periodEnd = req.session.data.abstractionEndMonth.padStart(2, '0') + req.session.data.abstractionEndDay.padStart(2, '0')
  returnsRequirements.returnsCycle = req.session.data.returnsCycle
  returnsRequirements.description = req.session.data.description
  returnsRequirements.frequencyCollected = req.session.data.frequencyCollected
  returnsRequirements.frequency = req.session.data.frequency



}



 ///Remove requirement
 function removeRequirement(req, res) {

   //get the return requirement
   let licence = req.session.data.ID
   let requirementIndex = req.session.data.requirementIndex
   let returnsRequirements = req.session.data.licences[licence].returnsRequirements[0].requirements

   //delete the object in the array
   returnsRequirements.splice(requirementIndex ,1);

}



///-----------------------------------------PAGE ROUTES------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////

/// Check the returns requirements
router.get('/requirements', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'requirements');
});


/// Select  the reason for the return requirement
router.get('/reason', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/reason');
});

router.post('/set-up/reason', function(req, res) {
  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){

  //  let elementNumber = req.session.data.elementNumber
  //  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    req.session.data.success = 1

    successMessage.dynamicContent = req.session.data.reasonNewRequirements + "</p>"
    req.session.data.successMessage = successMessage.reasonUpdate + successMessage.dynamicContent
    //update with the latest answers
    let licence = req.session.data.ID
    req.session.data.licences[licence].returnsRequirements[0].reason = req.session.data.reasonNewRequirements

    res.redirect('../check-your-answers');
  } else {
      res.redirect('start-date');
  }
});


/// Select the start date
router.get('/set-up/start-date', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/start-date');
});

router.post('/set-up/start-date', function(req, res) {

  if (req.session.data.startDateConditional == "other"){

  let dd = req.session.data.startDate[0];
  let mm = req.session.data.startDate[1];

  const yyyy = req.session.data.startDate[2];
 if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }

  const today = `${yyyy}${mm}${dd}`;

  req.session.data.startDateConditional = today
  }


  ////function to change a number string in to the govuk date format. "yyyymmdd"
    let govukDate = ""
    let dd = req.session.data.startDateConditional.slice(-2);
    dd = parseInt(dd, 10);
    let mm = req.session.data.startDateConditional.slice(-4, -2)
    mm = parseInt(mm, 10);
    let yyyy = req.session.data.startDateConditional.slice(0, 4);
    //change the month into a name
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    mm = monthNames[mm - 1]
    govukDate = `${dd} ${mm} ${yyyy}`;



  //check if the route is from changing existing data or not
  let change = req.session.data.change
  let licence = req.session.data.ID
  if (change == "true"){
  //  let elementNumber = req.session.data.elementNumber
  //  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions

  //Update the success banner
  req.session.data.success = 1

  successMessage.dynamicContent = govukDate + "</p>"
  req.session.data.successMessage = successMessage.startDateUpdate + successMessage.dynamicContent




    req.session.data.change = false

    req.session.data.licences[licence].returnsRequirements[0].startDate = req.session.data.startDateConditional
    res.redirect('../check-your-answers');
  } else {


//OLD ROUTING
/*
          //redirect to specified version of the route e.g. ?returnsRouteVersion=2  //V2 routes near the bottom
          if ( req.session.data.returnsRouteVersion == 2){
            if (req.session.data.returnsNotRequired == true) {
              createVersion(req, res)
              res.redirect('../check-your-answers');
            } else {
              //This used to redirect to purpose, however in UR we decided to try if only one purpose to skip the purpose question
              //res.redirect('V2/purpose');

              //use = data.licences[data.ID]['use']
              let use = req.session.data.licences[licence].use
              console.log(use);

              if (use.length == 1){
                 //if there is only 1 use on the licence, check to see if that use has multiple points. If so ask about points, if not skip to description



                 //create the session data array if there is only a single use

                req.session.data.use = ['0']


                 let redirect = ""


                 function setRedirect(callBack) {
                 //loop through and get the purpose, points, amount, periodStart and periodEnd
                 for (const [i, v] of use.entries()) {
                    console.log(i)
                 let  points = req.session.data.licences[licence].use[i].points

                      //check to see if specific points specified, if not then use all the points from the use
                      if(points.length >= 2){
                           redirect = "1"
                      }

                   }

                   callBack();
                 }

                 function purposeRedirect(){

                           if (redirect === "1") {
                           res.redirect('V2/all-points');
                         } else {
                           res.redirect('../description');
                         }
                   }

                   setRedirect(purposeRedirect)

              } else {
                res.redirect('V2/purpose');
              }




            }
          } else {
            if (req.session.data.returnsNotRequired == true) {
            createVersion(req, res)
            res.redirect('../check-your-answers');
          } else {
            res.redirect('use');
          }
        }
  }
  */

  res.redirect('how-do-you-want-to-set-up'); }

});

/// How do you want to set up abstraction data?
router.get('/how-do-you-want-to-set-up', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/how-do-you-want-to-set-up');
});

router.post('/set-up/how-do-you-want-to-set-up', function(req, res) {

  //routing, manual set up, copy or use abs data
  if (req.session.data.howToSetUp == "create requirement manually"){
    res.redirect('purpose');
  }
  else if (req.session.data.howToSetUp == "copy an existing return requirement") {
  res.redirect('select-an-existing-return-requirement');
  }
  else {
  requirementsFromAbsData(req,res);
  res.redirect('../check-your-answers');
  }

});



/// Select an existing return requirement to copy
router.get('/select-an-existing-return-requirement', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/select-an-existing-return-requirement');
});

router.post('/set-up/select-an-existing-return-requirement', function(req, res) {

  //get the return requirement selected
  let licence = req.session.data.ID
  let copyRequirements = req.session.data.copyRequirements
  let returnsRequirementToCopy = req.session.data.licences[licence].returnsRequirements[copyRequirements]

//  console.log(returnsRequirementToCopy);

  //create the copy
  let newRequirement = { ...returnsRequirementToCopy};

  //update the start date and reason
  newRequirement.startDate = req.session.data.startDateConditional
  newRequirement.reason = req.session.data.reasonNewRequirements

  //add the copied object to the returns requirements object
  req.session.data.licences[licence].returnsRequirements.unshift(newRequirement)

  res.redirect('../check-your-answers');


});



/// Select the use
router.get('/purpose', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/purpose');
});

router.post('/set-up/purpose', function(req, res) {

res.redirect('points');

});

/*
/// Select the use
router.get('/set-up/use', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.allPoints = ""
  res.render(folder + '/set-up/use');
});

router.post('/set-up/use', function(req, res) {

  if (req.session.data.allPoints == "yes" || req.session.data.allPoints == undefined || req.session.data.allPoints == ""){
  res.redirect('description');
  } else {
  res.redirect('points');
  }

});
*/


/// Select the points
router.get('/set-up/points', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/points');
});

router.post('/set-up/points', function(req, res) {
  res.redirect('abstraction-period');
});


/// Select the abstraction period
router.get('/set-up/abstraction-period', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/abstraction-period');
});

router.post('/set-up/abstraction-period', function(req, res) {
  res.redirect('returns-cycle');
});


/// Select the returns cycle
router.get('/set-up/returns-cycle', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/returns-cycle');
});

router.post('/set-up/returns-cycle', function(req, res) {
  res.redirect('description');
});


  /// Enter the description
  router.get('/set-up/description', function(req, res) {
    req.session.data.back = req.headers.referer
    res.render(folder + '/set-up/description');
});

router.post('/set-up/description', function(req, res) {

  res.redirect('frequency-collected');
});

/// Enter the frequency collected
router.get('/set-up/frequency-collected', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/frequency-collected');
});

router.post('/set-up/frequency-collected', function(req, res) {

res.redirect('frequency');
});

/// Enter the frequency reported
router.get('/set-up/frequency', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/frequency');
});

router.post('/set-up/frequency', function(req, res) {

  //check if the route is from changing existing data or not
  let change = req.session.data.change
  //get the return requirement
  let licence = req.session.data.ID
  let requirementIndex = req.session.data.requirementIndex

  if (change == "true"){

  //  let elementNumber = req.session.data.elementNumber
  //  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    updateReturnRequirement(req, res)

    //updating success banner
    req.session.data.success = 1


    successMessage.dynamicContent = req.session.data.licences[licence].returnsRequirements[0].requirements[requirementIndex].id +  '</p>'
    req.session.data.successMessage = successMessage.requirementUpdate + successMessage.dynamicContent


    res.redirect('../check-your-answers');
  } else {
    if (req.session.data.returnVersion !== 1){
    createVersion(req, res) } else {
      createReturnRequirement(req, res)
      req.session.data.success = 1
      let newRequirementIndex = req.session.data.licences[licence].returnsRequirements[0].requirements.length



      successMessage.dynamicContent = req.session.data.licences[licence].returnsRequirements[0].requirements[newRequirementIndex -1].id +  '</p>'
      req.session.data.successMessage = successMessage.requirementCreate + successMessage.dynamicContent



    }

    res.redirect('../check-your-answers');
  }
});

/*
/// Enter the frequency
router.get('/set-up/frequency', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/frequency');
});

router.post('/set-up/frequency', function(req, res) {

  //check if the route is from changing existing data or not
  let change = req.session.data.change
  //get the return requirement
  let licence = req.session.data.ID
  let requirementIndex = req.session.data.requirementIndex

  if (change == "true"){

  //  let elementNumber = req.session.data.elementNumber
  //  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    updateReturnRequirement(req, res)

    //updating success banner
    req.session.data.success = 1


    successMessage.dynamicContent = req.session.data.licences[licence].returnsRequirements[0].requirements[requirementIndex].id +  '</p>'
    req.session.data.successMessage = successMessage.requirementUpdate + successMessage.dynamicContent


    res.redirect('../check-your-answers');
  } else {
    if (req.session.data.returnVersion !== 1){
    createVersion(req, res) } else {
      createReturnRequirement(req, res)
      req.session.data.success = 1
      let newRequirementIndex = req.session.data.licences[licence].returnsRequirements[0].requirements.length



      successMessage.dynamicContent = req.session.data.licences[licence].returnsRequirements[0].requirements[newRequirementIndex -1].id +  '</p>'
      req.session.data.successMessage = successMessage.requirementCreate + successMessage.dynamicContent



    }

    res.redirect('../check-your-answers');
  }



});

*/

///Remove a requirements
router.get('/confirm-remove-requirement', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'confirm-remove-requirement');
});

router.post('/confirm-remove-requirement', function(req, res) {

  //get the return requirement
  let licence = req.session.data.ID
  let requirementIndex = req.session.data.requirementIndex
  let removedRequirementID = req.session.data.licences[licence].returnsRequirements[0].requirements[requirementIndex].id

    removeRequirement(req, res)

    //updating success banner
    req.session.data.success = 1

    //Success message set for removing return requirement
    successMessage.dynamicContent = removedRequirementID +  '</p>'
    req.session.data.successMessage = successMessage.requirementRemove + successMessage.dynamicContent

    res.redirect('check-your-answers');
});


/////Confirm return version
router.get('/check-your-answers', function(req, res) {
  req.session.data.back = req.headers.referer
  req.session.data.success = 0
  res.render(folder + 'check-your-answers');
});

router.post('/check-your-answers', function(req, res) {


   //end the previous return requirement
   let licence = req.session.data.ID
   if (req.session.data.licences[licence].returnsRequirements.length > 1) {
  let startDate = req.session.data.licences[licence].returnsRequirements[0].startDate;
  //format the date
  let day = startDate.substring(6, 8);
  let month = startDate.substring(4, 6);
  let year = startDate.substring(0, 4);
  let dateString = (year) + "-" + (month) + "-" + (day);
  //get the date
  let date1 = new Date(dateString);
  //set the days to subtract
  let daysPrior = -1;
  //use the method
  date1.setDate(date1.getDate() + daysPrior);
  //format the date
  year = date1.toISOString().substring(0, 4);
  month = date1.toISOString().substring(5, 7);
  day = date1.toISOString().substring(8, 10);
  //set the variable
   req.session.data.licences[licence].returnsRequirements[1].endDate = (year)+(month)+(day)
   }



   //clear all the data
   req.session.data.reasonNewRequirements = ""
   req.session.data.startDateConditional = ""
   req.session.data.startDate = []
   req.session.data.purpose = ""
   req.session.data.description = ""
   req.session.data.points = ""
   req.session.data.abstractionStartDay = ""
   req.session.data.abstractionStartMonth = ""
   req.session.data.abstractionEndDay = ""
   req.session.data.abstractionEndMonth = ""
   req.session.data.returnsCycle = ""
   req.session.data.frequencyCollected = ""
   req.session.data.frequency = ""
   req.session.data.change = false
   req.session.data.requirementIndex = ""
   req.session.data.returnVersion = ""
   req.session.data.note = ""
   req.session.data.success = 0
   req.session.data.returnsNotRequired = ""

    res.redirect('set-up/requirements-set-up');
});



///ADD A NOTE

/// Enter a note
router.get('/set-up/add-a-note', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/add-a-note');
});

router.post('/set-up/add-a-note', function(req, res) {

  //get the licence info
  let licence = req.session.data.ID


  //updating success banner
  req.session.data.success = 1

  if (req.session.data.licences[licence].returnsRequirements[0].note.length) {
  //If there is already a note success banner says updated
  //update the note
  req.session.data.licences[licence].returnsRequirements[0].note = req.session.data.note

  req.session.data.successMessage = successMessage.noteUpdate


} else {
  //create the note
  req.session.data.licences[licence].returnsRequirements[0].note = req.session.data.note
  //create the success banner
  req.session.data.successMessage = successMessage.noteCreate
}

    res.redirect('../check-your-answers');

});

/////Delete a note
router.get('/delete-note', function(req, res) {
  req.session.data.back = req.headers.referer

  //updating success banner -- This is originally done through the URL for deleting a note
  req.session.data.success = 0
  //create the success banner - This is set in the URL params for deleting a note, see notes include line 31


  res.render(folder + 'check-your-answers' );
});

///////////////////////RETURNS NOT REQUIRED////////////////////////////////////
//Why are returns not required
router.get('/set-up/reason-not-required', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/reason-not-required');
});

router.post('/set-up/reason-not-required', function(req, res) {
  req.session.data.returnsNotRequired = true

  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){

  //  let elementNumber = req.session.data.elementNumber
  //  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    req.session.data.success = 1

    successMessage.dynamicContent = req.session.data.reasonNewRequirements + "</p>"
    req.session.data.successMessage = successMessage.reasonUpdate + successMessage.dynamicContent
    //update with the latest answers
    let licence = req.session.data.ID
    req.session.data.licences[licence].returnsRequirements[0].reason = req.session.data.reasonNewRequirements

    res.redirect('../check-your-answers');
  } else {
      res.redirect('start-date');
  }

});





module.exports = router

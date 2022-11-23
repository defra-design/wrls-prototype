const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

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
const folder = "sandbox/licence/returns/"


///Success messages///
//////////////////////
 const successMessage = {
   "dynamicContent":      "",
   "reasonUpdate":        '<h3 class="govuk-notification-banner__heading">Return requirement reason updated</h3><p class="govuk-body">Reason: ',
   "startDateUpdate":     '<h3 class="govuk-notification-banner__heading">Return requirement start date updated</h3><p class="govuk-body">Start date: ',
   "requirementUpdate":   '<h3 class="govuk-notification-banner__heading">Return requirement updated</h3><p class="govuk-body">ID: ',
   "requirementCreate":   '<h3 class="govuk-notification-banner__heading">Return requirement created</h3><p class="govuk-body">Return ID: ',
   "requirementRemove":   '<h3 class="govuk-notification-banner__heading">Return requirement removed</h3><p class="govuk-body">Return ID: ',
   "noteUpdate":          '<h3 class="govuk-notification-banner__heading">Return requirement note updated</h3>',
   "noteCreate":          '<h3 class="govuk-notification-banner__heading">Return requirement note added</h3>',
 }


///-----------------------------------------FUNCTIONS------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////


///CREATE CHARGE INFORMATION
///Create charge function
function createReturnRequirement(req, res) {

  //get the licence info
  let licence = req.session.data.ID
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements[0]

  //set the ID
  let id = Math.floor(100000 + Math.random() * 900000)

  //assign the indexs of the uses
  let useIndexes = req.session.data.use



  let uses = []

  //set scope of purpose, points, amount, periodStart and periodEnd
  let purpose = ""
  let points = []
  let periodStart = ""
  let periodEnd = ""
  let amount = ""
  let season = ""
  let allPointsSelected = false
  //loop through and get the purpose, points, amount, periodStart and periodEnd
  for (const [v, i] of useIndexes.entries()) {

   purpose = req.session.data.licences[licence].use[i].purpose



   //check to see if route 1 or route 2 is being used
   if (req.session.data.returnsRouteVersion == 2) {

     //check to see if specific points specified, if not then use all the points from the use


     //get the index for the individual purpose
     let allPointsIndex = "allPoints"+i
     let allPoints = req.session.data[allPointsIndex]


     //Check to see if the loop is on the correct item
     if(allPoints == i){

       //If so get the answer to the individual points question and add the selected points
       let pointIndex = "points"+i
       points = req.session.data[pointIndex]


     } else {
            points = req.session.data.licences[licence].use[i].points
            allPointsSelected = true

     }

   } else {

   //check to see if specific points specified, if not then use all the points from the use
   if(req.session.data.allPoints == i){
          points = req.session.data.points
   } else {
          points = req.session.data.licences[licence].use[i].points
          allPointsSelected = true
   }

   }




   periodStart = req.session.data.licences[licence].use[i].periodStart
   periodEnd = req.session.data.licences[licence].use[i].periodEnd
   amount = req.session.data.licences[licence].use[i].amount


  //check to see if the abs period is summer or winter and all year. Only bother to run the code if undefined or summer
  if (season == "" || season == "summer") {
  if (periodStart <= "1031" && periodStart >= "0401" && periodEnd <= "1031" && periodEnd >= "0401") {
    season = "summer"
  } else {
    season = "winter/all year"
    }
  }


  let selectedUse = {
    purpose,
    points,
    periodStart,
    periodEnd,
    amount,
    allPointsSelected,
  }

  uses.push(selectedUse);

  }


  //set the description and frequency
  let description = req.session.data.description
  let frequency = req.session.data.frequency



  let newRequirement = {
    id,
    season,
    description,
    frequency,
    uses,
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
///update the requirement
function updateReturnRequirement(req, res) {

  //get the return requirement
  let licence = req.session.data.ID
  let requirementIndex = req.session.data.requirementIndex
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements[0].requirements[requirementIndex]




   //update the description and frequency
   returnsRequirements.description = req.session.data.description
   returnsRequirements.frequency = req.session.data.frequency

   //assign the indexs of the uses
   let useIndexes = req.session.data.use

   let uses = []

   //set scope of purpose, points, amount, periodStart and periodEnd
   let purpose = ""
   let points = []
   let periodStart = ""
   let periodEnd = ""
   let amount = ""
   let season = ""
   let allPointsSelected = false
   //loop through and get the purpose, points, amount, periodStart and periodEnd
   for (const [v, i] of useIndexes.entries()) {

    purpose = req.session.data.licences[licence].use[i].purpose



    //check to see if route 1 or route 2 is being used
    if (req.session.data.returnsRouteVersion == 2) {

      //check to see if specific points specified, if not then use all the points from the use


      //get the index for the individual purpose
      let allPointsIndex = "allPoints"+i
      let allPoints = req.session.data[allPointsIndex]


      //Check to see if the loop is on the correct item
      if(allPoints == v){

        //If so get the answer to the individual points question and add the selected points
        let pointIndex = "points"+i
        points = req.session.data[pointIndex]


      } else {
             points = req.session.data.licences[licence].use[i].points
             allPointsSelected = true

      }

    } else {

    //check to see if specific points specified, if not then use all the points from the use
    if(req.session.data.allPoints == i){
           points = req.session.data.points
    } else {
           points = req.session.data.licences[licence].use[i].points
           allPointsSelected = true
    }

    }



    periodStart = req.session.data.licences[licence].use[i].periodStart
    periodEnd = req.session.data.licences[licence].use[i].periodEnd
    amount = req.session.data.licences[licence].use[i].amount


   //check to see if the abs period is summer or winter and all year. Only bother to run the code if undefined or summer
   if (season == "" || season == "summer") {
   if (periodStart <= "1031" && periodStart >= "0401" && periodEnd <= "1031" && periodEnd >= "0401") {
     season = "summer"
   } else {
     season = "winter/all year"
     }
   }
   //update the season
   returnsRequirements.season = season


   let selectedUse = {
     purpose,
     points,
     periodStart,
     periodEnd,
     amount,
     allPointsSelected,
   }

   uses.push(selectedUse);

   }

   returnsRequirements.uses = uses

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
router.get('/set-up/reason', function(req, res) {
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

});


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

/// Select the points
router.get('/set-up/points', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/points');
});

router.post('/set-up/points', function(req, res) {

  res.redirect('description');
});


  /// Enter the description
  router.get('/set-up/description', function(req, res) {
    req.session.data.back = req.headers.referer
    res.render(folder + '/set-up/description');
});

router.post('/set-up/description', function(req, res) {

  res.redirect('frequency');
});


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
   let endDate = Number(req.session.data.licences[licence].returnsRequirements[0].startDate) - 1
   req.session.data.licences[licence].returnsRequirements[1].endDate = endDate.toString();
   }

   //clear all the data
   req.session.data.reasonNewRequirements = ""
   req.session.data.startDateConditional = ""
   req.session.data.startDate = []
   req.session.data.use = ""
   req.session.data.allPoints = ""
   req.session.data.description = ""
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

///////////////////////////////////////////////////////////////////////////////
///////////////////////RETURNS VERSION 2 ROUTES////////////////////////////////

/// Select the purpose
router.get('/set-up/V2/purpose', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/V2/purpose');
});

router.post('/set-up/V2/purpose', function(req, res) {

/*  if (req.session.data.allPoints == "yes" || req.session.data.allPoints == undefined || req.session.data.allPoints == ""){
  res.redirect('description');
  } else {
  res.redirect('points');
} */

//assign the indexs of the uses
let licence = req.session.data.ID
let useIndexes = req.session.data.use


//create the session data array if there is only a single use
if (useIndexes == 0) {
  req.session.data.use = ['0']
}

let redirect = ""


function setRedirect(callBack) {
//loop through and get the purpose, points, amount, periodStart and periodEnd
for (i of useIndexes) {

 points = req.session.data.licences[licence].use[i].points

     //check to see if specific points specified, if not then use all the points from the use
     if(points.length >= 2){
          redirect = "1"
     }

  }

  callBack();
}

function purposeRedirect(){

          if (redirect === "1") {
          res.redirect('all-points');
        } else {
          res.redirect('../description');
        }
  }


setRedirect(purposeRedirect)


});



/// Select whether to include all points, if there is more than one set of points
router.get('/set-up/V2/all-points', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/V2/all-points');
});

router.post('/set-up/V2/all-points', function(req, res) {



//assign the indexs of the uses
let licence = req.session.data.ID
let useIndexes = req.session.data.use




let selectPoints = []

function selectPointsCheck(callBack) {
//loop through and check whether all points is specified for all answers
for (const [i, v] of useIndexes.entries()) {

 //points = req.session.data.licences[licence].use[i].points
 let allPointsIndex = "allPoints"+v
 let allPoints = req.session.data[allPointsIndex]


 //check to see if specific points specified, if not then use all the points from the use
 if( v == allPoints ){
        selectPoints.push(v)
 }
}

    req.session.data.selectPoints = selectPoints


    callBack();
}

function selectPointsRedirect() {

        //if there are purposes with multiple points where the individual points need to be selected redirect to the points screen other wise select all
        if (selectPoints.length) {

          res.redirect('points');
        } else {
          res.redirect('../description');
        }

}


selectPointsCheck(selectPointsRedirect)


});


/// Select the points
router.get('/set-up/V2/points', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/V2/points');
});

router.post('/set-up/V2/points', function(req, res) {

  res.redirect('../description');
});





module.exports = router

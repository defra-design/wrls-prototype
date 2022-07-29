const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line






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


///---------------------------------------------------------
//Functions


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
  //loop through and get the purpose, points, amount, periodStart and periodEnd
  for (i of useIndexes) {
    console.log(i)
   purpose = req.session.data.licences[licence].use[i].purpose

   //check to see if specific points specified, if not then use all the points from the use
   if(req.session.data.allPoints == i){
          points = req.session.data.points
   } else {
          points = req.session.data.licences[licence].use[i].points
   }
   periodStart = req.session.data.licences[licence].use[i].periodStart
   periodEnd = req.session.data.licences[licence].use[i].periodEnd
   amount = req.session.data.licences[licence].use[i].amount

  //check to see if the abs period is summer or winter and all year. Only bother to run the code if undefined or summer
  if (season == "" || season == "summer") {
  if (periodStart <= 1031 && periodStart >= 0401 && periodEnd <= 1031 && periodEnd >= 0401) {
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

    let versions = {

    startDate,
    endDate,
    reason,
    status,
    requirements,

  };
    //push reference data
    returnsRequirements.push(versions);
    req.session.data.returnVersion = 1

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
   for (i of useIndexes) {
     console.log(i)
    purpose = req.session.data.licences[licence].use[i].purpose

    //check to see if specific points specified, if not then use all the points from the use
    if(req.session.data.allPoints == i){
           points = req.session.data.points

    } else {
           points = req.session.data.licences[licence].use[i].points
           allPointsSelected = true
    }
    periodStart = req.session.data.licences[licence].use[i].periodStart
    periodEnd = req.session.data.licences[licence].use[i].periodEnd
    amount = req.session.data.licences[licence].use[i].amount

   //check to see if the abs period is summer or winter and all year. Only bother to run the code if undefined or summer
   if (season == "" || season == "summer") {
   if (periodStart <= 1031 && periodStart >= 0401 && periodEnd <= 1031 && periodEnd >= 0401) {
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

  console.log(req.session.data.startDate)

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


  //check if the route is from changing existing data or not
  let change = req.session.data.change
  if (change == "true"){
  //  let elementNumber = req.session.data.elementNumber
  //  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    let licence = req.session.data.ID
    req.session.data.licences[licence].returnsRequirements[0].startDate = req.session.data.startDateConditional
    res.redirect('../check-your-answers');
  } else {
      res.redirect('use');
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
  if (change == "true"){

  //  let elementNumber = req.session.data.elementNumber
  //  req.session.data.chargeReferences[req.session.data.chargeReferenceIndex].chargeWaterRestrictions = req.session.data.chargeWaterRestrictions
    req.session.data.change = false
    updateReturnRequirement(req, res)
    res.redirect('../check-your-answers');
  } else {
    if (req.session.data.returnVersion !== 1){
    createVersion(req, res) }
    createReturnRequirement(req, res)
    res.redirect('../check-your-answers');
  }



});

///Remove a requirements
router.get('/confirm-remove-requirement', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'confirm-remove-requirement');
});

router.post('/confirm-remove-requirement', function(req, res) {
    removeRequirement(req, res)
    res.redirect('check-your-answers');
});


/////Confirm return version
router.get('/check-your-answers', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'check-your-answers');
});

router.post('/check-your-answers', function(req, res) {
    res.redirect('set-up/requirements-set-up');
});



///ADD A NOTE

/// Enter a note
router.get('/set-up/add-a-note', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/set-up/add-a-note');
});

router.post('/set-up/add-a-note', function(req, res) {


    res.redirect('../check-your-answers');

});



module.exports = router

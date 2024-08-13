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

const todayNoFormat = `${yyyy}${mm}${dd}`;


//change the month into a name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
mm = monthNames[mm - 1]

const today = `${dd} ${mm} ${yyyy}`;


 ////function to change an date array in to the govuk date format. ["dd", "mm", "yyyy"]
 function govukDateFormat (x){
  let dd = x[0];
  dd = parseInt(dd, 10);
  let mm = x[1]
  mm = parseInt(mm, 10);
  let yyyy = x[2]
  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]
  return `${dd} ${mm} ${yyyy}`;
  }


//Send a water abstraction alert
const folder = "sandbox/licence/returns-current/submission"


///Success messages///
//////////////////////
 const successMessage = {
   "dynamicContent":      "",
   "reasonUpdate":        '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
   "startDateUpdate":     '<h3 class="govuk-notification-banner__heading">Changes updated</h3>',
   "additionalSubmissionOptions":     '<h3 class="govuk-notification-banner__heading">Changes updated</h3>',
   "requirementUpdate":   '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
   "requirementCreate":   '<h3 class="govuk-notification-banner__heading">New requirement added</h3>',
   "requirementRemove":   '<h3 class="govuk-notification-banner__heading">Requirement removed</h3>',
   "noteUpdate":          '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
   "noteCreate":          '<h3 class="govuk-notification-banner__heading">Changes made</h3>',
 }
let notificationTitle = ""

///-----------------------------------------FUNCTIONS------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////
///Create Version
function createVersion(req, res) {

  //get the licence info
  let licence = req.session.data.ID
  let returnsRequirements = req.session.data.licences[licence].returnsRequirements


  //create vars for the start date and reason
  let startDate = req.session.data.startDateConditional
  let endDate = ""
  let createdDate = todayNoFormat
  let status = "review"
  let additionalSubmissionOptions = ["none"]
  let reason = req.session.data.reasonNewRequirements
  let requirements = []
  let username = "username@defra.gov.uk"
  let note = ""

    let versions = {

    startDate,
    endDate,
    createdDate,
    reason,
    additionalSubmissionOptions,
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

  //set the variables
  let purpose = req.session.data.purpose
  let points = req.session.data.points
  let abstractionStartMonth = req.session.data.abstractionStartMonth
  let abstractionEndMonth = req.session.data.abstractionEndMonth
  let timeLimit = req.session.data.timeLimit
  let returnsCycle = req.session.data.returnsCycle
  let description = req.session.data.description
  let title = req.session.data.title
  let frequencyCollected = req.session.data.frequencyCollected
  let frequency = req.session.data.frequency
  let settings = req.session.data.settings

  //console.log(purpose, points, abstractionStartMonth, abstractionEndMonth, returnsCycle, description, frequencyCollected, frequency);

  //if they have data then update
  if (purpose && typeof purpose !== "undefined") { returnsRequirements.purpose = req.session.data.purpose }
  if (points && typeof points !== "undefined") { returnsRequirements.points = req.session.data.points }
  if (abstractionStartMonth && typeof abstractionStartMonth !== "undefined") { returnsRequirements.periodStart = req.session.data.abstractionStartMonth.padStart(2, '0') + req.session.data.abstractionStartDay.padStart(2, '0') }
  if (abstractionEndMonth && typeof abstractionEndMonth !== "undefined") { returnsRequirements.periodEnd = req.session.data.abstractionEndMonth.padStart(2, '0') + req.session.data.abstractionEndDay.padStart(2, '0') }
  if (returnsCycle && typeof returnsCycle !== "undefined") { returnsRequirements.returnsCycle = req.session.data.returnsCycle }
  if (description && typeof description !== "undefined") { returnsRequirements.description = req.session.data.description }
  if (title && typeof title !== "undefined") { returnsRequirements.title = req.session.data.title }
  if (frequencyCollected && typeof frequencyCollected  !== "undefined") { returnsRequirements.frequencyCollected = req.session.data.frequencyCollected }
  if (frequency && typeof  frequency !== "undefined") { returnsRequirements.frequency = req.session.data.frequency }
  if (settings && typeof  settings !== "undefined") { returnsRequirements.settings = req.session.data.settings }
  if (timeLimit && typeof  timeLimit !== "undefined") {  if (req.session.data.timeLimit == "yes"){
      let timeLimitStart = govukDateFormat(req.session.data.timeLimitStart);
      let timeLimitEnd = govukDateFormat(req.session.data.timeLimitEnd);
      returnsRequirements.timeLimit =  "From " + timeLimitStart + " to " + timeLimitEnd
      } else {returnsRequirements.timeLimit = req.session.data.timeLimit }}


  req.session.data.purpose = ""
  req.session.data.points = ""
  req.session.data.abstractionStartMonth = ""
  req.session.data.abstractionEndMonth = ""
  req.session.data.timeLimit = ""
  req.session.data.returnsCycle = ""
  req.session.data.description = ""
  req.session.data.title = ""
  req.session.data.frequencyCollected = ""
  req.session.data.frequency = ""
  req.session.data.settings = ""


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

//////////////////////
//CREATE RETURNS

function createReturns(req,res) {

  //get the return requirements
  let licence = req.session.data.ID
  let requirements = req.session.data.licences[licence].returnsRequirements[0].requirements

  //loop through each requirement and create a return for each
  for (const [i, v] of requirements.entries()) {

  let id = v.id
  let status = "due"
  let due = "20240728"
  let returnsCycle = v.returnsCycle
  let description = v.description
  let title = v.title
  let frequency = v.frequency
  let settings = v.settings
  let purpose = v.purpose
  let points = v.points
  let periodStart = v.periodStart
  let periodEnd = v.periodEnd
  let returnsPeriodStart = "20240401"
  let returnsPeriodEnd = "20240630"

  let newReturn = {
    id,
    status,
    due,
    returnsCycle,
    description,
    title,
    frequency,
    settings,
    purpose,
    points,
    periodStart,
    periodEnd,
    returnsPeriodStart,
    returnsPeriodEnd
  }

  req.session.data.licences[licence].returns.unshift(newReturn)

};

};




///-----------------------------------------PAGE ROUTES------------------------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////////


//What to do with the return
router.post('/returnStatus', function(req, res) {

  if(req.session.data.returnStatus == "received"){
    res.redirect('received');
  } else {
    res.redirect('date-received');
  }
  

});


/////Marking it as received but not adding readings

router.get('/received', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/received');
});

//adding date
router.post('/received', function(req, res) {

   //Mark the return as received
   let licence = req.session.data.ID
   let returnID = req.session.data.returnIndex
   req.session.data.licences[licence].returns[returnID].status = "received" 

  res.redirect('confirmation-return-received');
});


///confirmation return has been received 
router.get('/confirmation-return-received', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/confirmation-return-received');
});


/////////////Submitting a return


/// Get the date when the return was received
router.get('/date-received', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + '/date-received');
});



module.exports = router

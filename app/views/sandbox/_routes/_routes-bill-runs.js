const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

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

const tDate = `${yyyy}-${mm}-${dd}`

//change the month into a name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
mm = monthNames[mm - 1]

const today = `${dd} ${mm} ${yyyy}`;



//Send a water abstraction alert
const folder = "sandbox/bill-runs/"





//Create TpT bill run data

function createTpTData(req,res){

  function getRandomName() {
    const nameList = [
      "Bottled Water Plc",
      "Big Smith Farms Ltd",
      "Irene Briton",
      "Robin Vithlhem-Smith",
      "D.B. Beecham-Smith",
      "Tech Innovators Inc.",
      "Tech Innovators Inc.",
      "Green Energy Solutions",
      "FreshFoods Grocery Store",
      "Global Marketing Group",
      "Sunrise Software Services",
      "Health & Wellness Institute",
      "Quantum Logistics Ltd.",
      "Creative Minds Agency",
      "Precision Engineering Works",
      "BlueWave Financial Advisors",
      "Nature's Bounty Organics",
      "Swift Courier Services",
      "Elite Fitness Studios",
      "SolarPower Solutions Co.",
      "Infinity Consulting Group",
      "Streamline Technologies",
      "Sunset Industries",
      "Starlight Productions",
      "EcoTech Innovations",
      "SolarFlare Energy Inc.",
      "Quantum Mechanics Ltd.",
      "Infinite Horizons Ventures",
      "NexaVision Solutions",
      "BlueSky Aerospace",
      "GlobalWave Innovations",
      "DigitalDreams Media",
      "EnergyWise Solutions",
      "FirstClass Airlines",
      "GoldenHarbor Maritime",
      "HealthMatters Pharmaceuticals",
      "PerfectFit Apparel",
      "VivaCasa Home Furnishings",
      "SwiftSolutions Logistics",
      "CloudScape Technologies",
      "GreenEarth Sustainability",
      "StarGazers Astronomy Club",
      "GrandHarbor Resorts",
      "ApexAutomotive Group",
      "AquaHarvest Solutions",
    "MineralFarm Industries",
    "HydroCultivate Innovations",
    "TerraDrill Technologies",
    "AquaGrowth Systems",
    "AgroMine Dynamics",
    "WaterRich Resources",
    "EarthMiner Innovations",
    "AgriWave Technologies",
    "HydroStone Enterprises",
    "FarmWell Innovations",
    "AquaQuarry Solutions",
    "HarvestStream Systems",
    "MineralFusion Enterprises",
    "AgroFlow Dynamics",
    "WaterHarvest Innovations",
    "TerraTrek Technologies",
    "HydroHaven Farms",
    "GrowGemstone Labs",
    "PureFlow Resources",
    "FarmOre Innovations",
    "AquaVein Dynamics",
    "EarthRich Harvesters",
    "MineralScape Solutions",
    "HydroSeed Innovations",
    "AquaBloom Labs",
    "MineralMeadow Systems",
    "TerraSprout Dynamics",
    "AquaGrove Innovations",
    "FarmOasis Technologies",
    "WaterBounty Enterprises",
    "HydroHill Resources",
    "AgroCrystal Innovations",
    "HydroCrest Labs",
    "WaterFertile Farms",
    "AgriOasis Solutions",
    "MineralMingle Innovations",
    "TerraBloom Dynamics",
    "FarmGleam Technologies",
    "HydroFlourish Systems",
    "AquaQuarry Innovations",
    "WaterMagnet Enterprises",
    "AgroPure Resources",
    "TerraTide Innovations",
    "HarvestFlow Labs",
    "MineralWave Farms",
    "AquaBloom Harvesters",
    "HydroCrest Gems",
    "AgriGemstone Innovations",
    "WaterCultivate Solutions",
    "Sarah Johnson",
    "Michael Rodriguez",
    "Emily Davis",
    "William Smith",
    "Olivia Brown",
    "James Wilson",
    "Sophia Martinez",
    "Daniel Clark",
    "Ava Taylor",
    "Benjamin White",
    "Mia Anderson",
    "Ethan Harris",
    "Isabella Walker",
    "Alexander Thomas",
    "Sophia Johnson",
    "Liam Jackson",
    "Emma Anderson",
    "Noah Davis",
    "Olivia Taylor",
    "Lucas Robinson",
    "Charlotte Moore",
    "Aiden Harris",
    "Oliver Martin",
    "Aria Smith",
    "Mason Lewis",
    "Harper Turner",
    "Elijah Baker",
    "Sophie Mitchell",
    "Carter Young",
    "Lily Hall",
    "Logan Wright",
    "Ava Davis",
    "Jackson Harris",
    ];
  
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * nameList.length);
  
    // Return the random name
    return nameList[randomIndex];
  }

  function generateRandomNumber() {
    // Generate random digits for each part
    const part1 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const part2 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const part3 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const part4 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
    // Combine the parts with slashes
    const randomNumber = `${part1}/${part2}/${part3}/${part4}`;
  
    return randomNumber;
  }

  // Array of random UK village names (you can add more)
const ukVillageNames = [
  "Appleby Magna",
  "Brockenhurst",
  "Chipping Norton",
  "Dunster",
  "Eynsford",
  "Fladbury",
  "Great Missenden",
  "Haworth",
  "Ickford",
  "Jedburgh",
  "Killearn",
  "Llandovery",
  "Marsden",
  "Nether Stowey",
  "Ogmore-by-Sea",
  "Port Sunlight",
  "Quorn",
  "Ramsbury",
  "Steyning",
  "Tisbury",
  "Uffculme",
  "Wincanton",
  "Xaiborah"
];

const abstractionType = [
  "reach",
  "borehole",
  "area",
  "well",
  "stream",
  "wier"
]

 // Original sentence
 const sentence = "abstraction from";

// Function to create a random ab description
function createDescription() {

//randomly select an abstraction type
  const randomAbstractionTypeIndex = Math.floor(Math.random() * abstractionType.length);
  const randomAbstractionType = abstractionType[randomAbstractionTypeIndex];

  // Randomly select a village name
  const randomIndex = Math.floor(Math.random() * ukVillageNames.length);
  const randomVillageName = ukVillageNames[randomIndex];
 
  // Append the random village name
  const result = sentence + " " + randomAbstractionType + " near " + randomVillageName;
  
  return result;
}
  
  function checkForIssues(data) {
    data.forEach((item, index) => {
      //create a data field for each licence with all the charge element issues
      req.session.data.billRunDataTpTReview[index].licenceHolder = getRandomName();
      req.session.data.billRunDataTpTReview[index].issues = [];
      req.session.data.billRunDataTpTReview[index].licenceRef = generateRandomNumber()
      req.session.data.billRunDataTpTReview[index].licenceId = index
      //const description = createDescription()
     // console.log(`Licence ${index + 1}:`);
      item.chargeVersions.forEach((chargeVersion, chargeVersionIndex) => {

      

        chargeVersion.chargeReferences.forEach((chargeReference, chargeReferenceIndex) => {

            //create a random description
       // req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeReferenceIndex].description = description

          chargeReference.chargeElements.forEach((chargeElement, chargeElementIndex) => {

            //create a random description
            //req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeReferenceIndex].chargeElements[chargeElementIndex].description = description
           // console.log(`Element ${chargeElementIndex + 1}:`);
           // console.log(chargeElement.issues)
           chargeElement.issues.forEach((issue, issueIndex) => {
            req.session.data.billRunDataTpTReview[index].issues.push(issue);
           });
            if( chargeElement.issues.length ){
              req.session.data.billRunDataTpTReview.erroredLicences.push(req.session.data.billRunDataTpTReview[index]);
            } else {
              req.session.data.billRunDataTpTReview.readyLicences.push(req.session.data.billRunDataTpTReview[index]);
            }
          });
        });
      });
     
    //  item.returns.forEach((returnIndex) => {
    //    req.session.data.billRunDataTpTReview[index].returns[returnIndex].description = description
    //  });

    });
  }
  
  //add in extra arrays to make it easier to sort errored and ready
  req.session.data.billRunDataTpTReview.erroredLicences = [];
  req.session.data.billRunDataTpTReview.readyLicences =[];
  
  //check for issues in the returns data
  checkForIssues(req.session.data.billRunDataTpTReview);
  
  //remove duplicates
  req.session.data.billRunDataTpTReview.erroredLicences = Array.from(new Set(req.session.data.billRunDataTpTReview.erroredLicences))
  req.session.data.billRunDataTpTReview.readyLicences = Array.from(new Set(req.session.data.billRunDataTpTReview.readyLicences))
 
  
  
}

    //I've updated the base data so no need to run this every time.
    //  changeLicenceNumbers(req.session.data.billRunData);
  
//check for issues in the returns data
function checkForTPTIssues(data, req) {
  data.forEach((item, index) => {
    req.session.data.billRunDataTpTReview[index].issues = [];
    item.chargeVersions.forEach((chargeVersion) => {
      chargeVersion.chargeReferences.forEach((chargeReference) => {
        chargeReference.chargeElements.forEach((chargeElement) => {
         chargeElement.issues.forEach((issue) => {
         // console.log(issue)
          if (issue !== null){

          req.session.data.billRunDataTpTReview[index].issues.push(issue);
          }; 
         });
        });
      });
    });
  });
}



///---------------------------------------------------------

///CREATE BILL RUN


/// Bill run type
router.get('/select-bill-run-type', function(req, res) {

  req.session.data.back = req.headers.referer


  res.render(folder + 'select-bill-run-type');

});

router.post('/select-bill-run-type', function(req, res) {

res.redirect('select-the-region');

});


//Region
router.get('/select-the-region', function(req, res) {

  req.session.data.back = req.headers.referer

  res.render(folder + 'select-the-region');

});

router.post('/select-the-region', function(req, res) {

  //create made up licence numbers
  function generateRandomNumber() {
    // Generate random digits for each part
    const part1 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const part2 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const part3 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const part4 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
    // Combine the parts with slashes
    const randomNumber = `${part1}/${part2}/${part3}/${part4}`;
  
    return randomNumber;
  }

  function changeLicenceNumbers(data) {
    data.forEach((item, index) => { 
      item.bills.forEach((bill, billIndex) => {
        bill.licences.forEach((licence, licenceIndex) => {
      req.session.data.billRunData[index].bills[billIndex].licences[licenceIndex].licence = generateRandomNumber()
      req.session.data.billRunData[index].bills[billIndex].licences[licenceIndex].id = licenceIndex
          });
        });
      });
    };
     


//Supplement data with issues, i've updated the base data so no need to run this every time.
//checkForTPTIssues(req.session.data.billRunDataTpTReview);

        //TPT tptSeason

        let billRunType = req.session.data['billRunType']

       if(req.session.data['billRunType'] === "two-part tariff"){
         let billRunType = req.session.data['billRunType'] + req.session.data['tptSeason']

         


       } else if (req.session.data['billRunType'] === "annual") {
        req.session.data.billRunData[0].dateCreated = tDate
        req.session.data.billRunData[0].region = req.session.data.region
        req.session.data.billRunData[0].status = req.session.data.status
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


     
      res.redirect("charges-load");

});

router.get('/charges-load', function(req, res) {



  req.session.data.back = req.headers.referer

  res.render(folder + 'charges-load');

});

///--------------------------------------------------------
//ANNUAL BILLING




/////////--------------------------------------------------
//TPT REVIEW (SROC) Oct 2023




//Create TpT bill run data
//Review the list of data issues
router.get('/tpt/review', function(req, res) {
 // createTpTData(req,res);

/* //supplementing  dummy data then saved to tpt.js file

 function unmatchedReturns(data) {
  data.forEach((item, index) => {
   // req.session.data.billRunDataTpTReview[index].unmatchedReturns = [];
  item.chargeVersions.forEach((chargeVersion, chargeVersionIndex) => {
    chargeVersion.chargeReferences.forEach((chargeReference, chargeRefencenceIndex) => {
      req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].authorisedVolume = 0
      req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].totalBillableReturns = 0
     // req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].additionalCharges = []
     // req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].adjustments = []
     // req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].aggregateFactor = ""
    console.log('success ref')
        chargeReference.chargeElements.forEach((chargeElement, chargeElementIndex) => {
         // req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].chargeElements[chargeElementIndex].tpt = true
          
         req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].authorisedVolume = req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].authorisedVolume + req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].chargeElements[chargeElementIndex].authorisedAnnualQuantity
         req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].totalBillableReturns = req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].totalBillableReturns + req.session.data.billRunDataTpTReview[index].chargeVersions[chargeVersionIndex].chargeReferences[chargeRefencenceIndex].chargeElements[chargeElementIndex].allocatedQuantity
         console.log('success element')
        })
      })
    })
  })
};

unmatchedReturns(req.session.data.billRunDataTpTReview);
*/


req.session.data.openDetails = false
req.session.data.statusBanner = "hide"
  req.session.data.back = req.headers.referer
  res.render(folder + 'tpt/review');
});

///TPT PROGRESS UPDATE FEATURE
router.post('/sandbox/bill-runs/tpt/progress-update', function(req, res) {
  req.session.data.statusBanner = "show"
  if (req.session.data.billRunDataTpTReview[req.session.data.ID].progress == "&#10003;") {
    req.session.data.billRunDataTpTReview[req.session.data.ID].progress = "" 
  } else {
  req.session.data.billRunDataTpTReview[req.session.data.ID].progress = "&#10003;" }
  res.redirect('/sandbox/bill-runs/tpt/licence-review');
});

router.get('/tpt/licence-review', function(req, res) {
  req.session.data.statusBanner = "hide"
  req.session.data.licenceBanner = "hide"
  req.session.data.aggregateUpdate = false
  req.session.data.totalBillableUpdate = false
  res.render(folder + 'tpt/licence-review');
});

///TPT COMPLETE REVIEW FEATURE
router.post('/sandbox/bill-runs/tpt/complete-review', function(req, res) {
  req.session.data.licenceBanner = "show"

  let chargeReferences = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences
  req.session.data.updateCount = 0
  chargeReferences.forEach((chargeReference, chargeReferenceIndex) => {
    chargeReference.chargeElements.forEach((chargeElement, chargeElementIndex) => {
      chargeElement.issues.forEach((issue, issueIndex) => {
         if (issue.issue !== null){
        req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences[chargeReferenceIndex].chargeElements[chargeElementIndex].issues.push("ready");
        req.session.data.updateCount = req.session.data.updateCount + 1
      }
   });
  });
});


  let issues = req.session.data.billRunDataTpTReview[req.session.data.ID].issues
  issues.forEach((issue, index) => { 
    req.session.data.billRunDataTpTReview[req.session.data.ID].issues[index] = ""
    req.session.data.status = "ready"
  });

  res.redirect('/sandbox/bill-runs/tpt/licence-review');
});

//undo route
router.get('/sandbox/bill-runs/tpt/undo-review', function(req, res) {
  req.session.data.licenceBanner = "show"
  
   //code not needed for review switcher as it only changes the licence status rather than each element
  /*
  let chargeReferences = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences
  req.session.data.updateCount = 0
  chargeReferences.forEach((chargeReference, chargeReferenceIndex) => {
    chargeReference.chargeElements.forEach((chargeElement, chargeElementIndex) => {
      chargeElement.issues.forEach((issue, issueIndex) => {
        console.log(issue + " " + issueIndex)
         if (issue == "ready"){
          
        req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[0].chargeReferences[chargeReferenceIndex].chargeElements[chargeElementIndex].issues.splice(issueIndex, 1);
        req.session.data.updateCount = req.session.data.updateCount + 1
      }
   });
  });
});
*/

  req.session.data.status = "review"
  checkForTPTIssues(req.session.data.billRunDataTpTReview, req);
console.log('undone');
  res.redirect('/sandbox/bill-runs/tpt/licence-review');
});


///TPT REMOVE LICENCE FEATURE
router.post('/sandbox/bill-runs/tpt/remove-licence', function(req, res) {
  res.redirect('/sandbox/bill-runs/tpt/confirm-remove-licence');
});

router.get('/tpt/confirm-remove-licence', function(req, res) {
  req.session.data.statusBanner = "hide"
  res.render(folder + 'tpt/confirm-remove-licence');
});

router.post('/sandbox/bill-runs/tpt/confirm-remove-licence', function(req, res) {

console.log("licence removed")
req.session.data.removedLicence = req.session.data.billRunDataTpTReview[req.session.data.ID].licenceRef

req.session.data.billRunDataTpTReview.splice(req.session.data.ID, 1)
req.session.data.statusBanner = "show"
  res.redirect('/sandbox/bill-runs/tpt/review');
});

////TPT EDIT THE BILLABLE RETURNS
router.post(folder + '/tpt/edit-the-billable-returns', function(req, res) {
  res.redirect(folder + '/tpt/edit-the-billable-returns');
});

router.get(folder +'/tpt/edit-the-billable-returns', function(req, res) {
  res.render(folder + 'tpt/edit-the-billable-returns');
});

router.post('/sandbox/bill-runs/tpt/set-billable-returns', function(req, res) {
  
  //update the authorised volume on the element
  if (req.session.data.customQuantity.length){
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements[req.session.data.elementID].allocatedQuantity = parseInt(req.session.data.customQuantity);
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements[req.session.data.elementID].edited = true
  } else {
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements[req.session.data.elementID].allocatedQuantity =  parseInt(req.session.data.billableReturnsQuantity);
  }

  //recalculate the overall returns for the charge reg
  req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns = 0
  req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].chargeElements.forEach((chargeElement, chargeElementIndex) => {
    req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns = parseInt(req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns) + parseInt(chargeElement.allocatedQuantity)
   })

  //tidy up
  req.session.data.customQuantity = ""

  //show the notification banner
  req.session.data.statusBanner = "show" 

  res.redirect('/'+ folder + '/tpt/element-review');
});

router.get('/tpt/element-review', function(req, res) {
  req.session.data.statusBanner = "hide"
  req.session.data.aggregateUpdate = false
  req.session.data.totalBillableUpdate = false
  res.render(folder + 'tpt/element-review');
});


router.get('/tpt/reference-review', function(req, res) {
  req.session.data.statusBanner = "hide"
  req.session.data.aggregateUpdate = false
  req.session.data.totalBillableUpdate = false
  req.session.data.showCharge = false
  res.render(folder + 'tpt/reference-review');
});


router.post('/tpt/preview-charge', function(req, res) {
  req.session.data.statusBanner = "show"
  req.session.data.aggregateUpdate = false
  req.session.data.totalBillableUpdate = false
  
  baseCharge = 20000 

  aggregateFactor = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].aggregateFactor
  adjustmentFactor = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].adjustmentFactor
 
  authorisedVolume = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].authorisedVolume
  totalBillableReturns = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns
  
  adjustments = req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].adjustments


  req.session.data.previewCharge = baseCharge * (totalBillableReturns / authorisedVolume) * aggregateFactor * adjustmentFactor

  //hack
  if(req.session.data.previewCharge !== req.session.data.previewCharge){
    req.session.data.previewCharge = baseCharge * (totalBillableReturns / authorisedVolume)
  }


  req.session.data.showCharge = true
  res.redirect('/'+ folder + 'tpt/reference-review');
});


////TPT EDIT THE AGGREGATE FACTOR
router.post('/sandbox/bill-runs/tpt/set-aggregate-factor', function(req, res) {

   //Set the aggregate factor
   req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].aggregateFactor = req.session.data.aggregateFactor
   req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].adjustmentFactor = req.session.data.adjustmentFactor
   req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].edited = true

   //Show the notification banner
   req.session.data.statusBanner = "show"
   req.session.data.aggregateUpdate = true 
  res.redirect('/'+ folder + 'tpt/reference-review');
});

////TPT EDIT THE TOTAL BILLABLE RETURNS
router.post('/sandbox/bill-runs/tpt/set-total-billable-returns', function(req, res) {

  //Set the aggregate factor
  //req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalBillableReturns = req.session.data.totalBillableReturns
  req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].authorisedVolume = req.session.data.authorisedVolume
  req.session.data.billRunDataTpTReview[req.session.data.ID].chargeVersions[req.session.data.chargeVersionID].chargeReferences[req.session.data.chargeReferenceID].totalEdited = true

  //Show the notification banner
  req.session.data.statusBanner = "show"
  req.session.data.totalBillableUpdate = true 
 res.redirect('/'+ folder + 'tpt/reference-review');
});




////TpT REVIEW FILTER LICENCE LIST



/////////////////////////Bill runs
///Apply  filters

router.post('/sandbox/bill-runs/tpt/review/apply-filters', function(req, res) {

  //check to see if the user is clearing filters
  if (req.session.data.clearFilters == "true") {

    req.session.data.TpTReviewStatus = ""
   req.session.data.issue = ""
   req.session.data.licenceHolder = ""
   req.session.data.filteredResults = ""
    req.session.data.openDetails = true
    //reset the table caption if the list is cleared
    req.session.data.TpTfilterCaption = "Showing all licences."
//    req.session.data.focus="alert"

  } else {
    console.log("filtering");

  //get the list of bill runs
  let  licences = req.session.data.billRunDataTpTReview

//set global scope of filteredResults
let filteredResults = ""

//set the type filter
let licenceHolderFilters = ""
licenceHolderFilters = req.session.data.licenceHolder


console.log(licenceHolderFilters.length);

 if (typeof licenceHolderFilters === 'undefined') {
  licenceHolderFilters= ""
 }

 if (typeof licenceHolderFilters.length) {
  console.log('Filtering by licence holder')
   filteredResults = licences.filter(el => ( licenceHolderFilters.indexOf(el.licenceHolder) >= 0 ))
 }



 //set the region filter
 let issueFilters = ""
 issueFilters = req.session.data.issue
  if (typeof issueFilters === 'undefined') {
    issueFilters= ""
  }

 if ((issueFilters.length) && (filteredResults.length)) {
  console.log('Filtering by licence holder and issues')
  filteredResults = filteredResults.filter(licence =>
    licence.issues.some(issueObj => issueObj.issue === issueFilters)
  );

  } else if (issueFilters.length) {
    console.log('Filtering by issues')
filteredResults = licences.filter(licence =>
      licence.issues.some(issueObj => issueObj.issue === issueFilters)
    );

  }


  //set the status filter
  let statusFilters = ""
   statusFilters = req.session.data.TpTReviewStatus
   if (typeof statusFilters === 'undefined') {
     statusFilters= ""
   }

  if ((issueFilters.length || licenceHolderFilters.length ) && (!filteredResults.length))
 { } else {

  if ((statusFilters.length ) && (filteredResults.length)) {
    console.log('Filtering by either issue or licence holder and status '+ statusFilters)
    if ( statusFilters == "review" ) {
      filteredResults = filteredResults.filter(licence =>
        licence.issues.some(issueObj => issueObj.issue && issueObj )
      );
    } else if ( statusFilters == "ready" ) {
      filteredResults = filteredResults.filter(licence =>
        licence.issues.every(issueObj => issueObj.issue === null && issueObj)
      );
    }
   
    } else if (statusFilters.length) {

      console.log('filtering by status ' + statusFilters)
     
     if ( statusFilters == "review" ) {
      filteredResults = licences.filter(licence =>
        licence.issues.some(issueObj => issueObj.issue && issueObj )
      );
    } else if ( statusFilters == "ready" ) {
      filteredResults = licences.filter(licence =>
        licence.issues.every(issueObj => issueObj.issue === null && issueObj)
      );
    }

   }
  }

   
// console.log("Filtered results = " + filteredResults)

  //set filtered results to empty if filters doesn't return anything
    if (!Array.isArray(filteredResults) || !filteredResults.length){
      filteredResults = "empty"
    }

 //   console.log("Filtered results = " + filteredResults)
req.session.data.openDetails = true
//req.session.data.focus="alert"

//Create a list formatter
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });



//Create the list depending on what filters are selected
let list = []
if (licenceHolderFilters.length && issueFilters.length && statusFilters.length){
list.push(licenceHolderFilters, issueFilters.toLowerCase(), statusFilters.toLowerCase());
} else if (licenceHolderFilters.length && issueFilters.length){
  list.push(licenceHolderFilters, issueFilters.toLowerCase());
} else if (licenceHolderFilters.length && statusFilters.length){
  list.push(licenceHolderFilters, statusFilters.toLowerCase());
} else if (issueFilters.length && statusFilters.length){
  list.push(issueFilters.toLowerCase(), statusFilters.toLowerCase());
} else if (issueFilters.length){
  list.push(issueFilters.toLowerCase())
} else if (licenceHolderFilters.length){
  list.push(licenceHolderFilters)
} else if (statusFilters.length){
  list.push(statusFilters.toLowerCase())
}

console.log(list)


//set the dynamic caption for the table
if (list.length) {
req.session.data.TpTfilterCaption = "Showing licences filtered by " + formatter.format(list) + "."
} else {
  req.session.data.TpTfilterCaption = "Showing all licences."
}

console.log(req.session.data.TpTfilterCaption)

req.session.data.filteredResults = filteredResults

}

  req.session.data.clearFilters = ""
  res.redirect('/sandbox/bill-runs/tpt/review#caption');

});






/////////--------------------------------------------------
//TPT REVIEW


//Review the list of data issues
router.get('/two-part-tariff/review', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'two-part-tariff/review');
});

//Review the issues for a licence
router.get('/two-part-tariff/reviewLicence', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'two-part-tariff/reviewLicence');
});


//Set the billable returns quantity
router.get('/two-part-tariff/set-the-returns-quantity', function(req, res) {
  req.session.data.back = req.headers.referer
  res.render(folder + 'two-part-tariff/set-the-returns-quantity');
});


router.post('/two-part-tariff/set-the-returns-quantity', function(req, res) {

   //get the licence number of the issue that is being edited
   let licenceNumber = req.session.data['licence']

   //get the index of the element that is being edited (at time of writing this will always be 0)
   let elementNumber  = req.session.data['element']

   //get the new value for the returns billable quantity
   let billableReturns = req.session.data['billable-returns-quantity']
   if (billableReturns === "custom" ){
      billableReturns = req.session.data['customQuantity']
   }

   //get the list of licences in the tptBillRun
   let tptBillRun = req.session.data['tptBillRun']

   //loop through the items in the tptBillRun
   for (var [itemIndex, item] of tptBillRun.entries()) {
   //find the matching licence
   if (item.licence === licenceNumber){
      //set the billable returns
      item.elements[elementNumber].billableReturns = billableReturns
      //set the edited flag for the element
      item.elements[elementNumber].edited = "edited"
      //set the element to ready
      item.elements[elementNumber].ready= "yes"
      //set the licence edited flag
      item.edited = "yes"
      //set the element to ready
      item.ready= "yes"
    }
   }


    res.redirect('reviewLicence');
  });

  //Region
  router.get('/split-bills/bill-runs-filtered', function(req, res) {

    req.session.data.runType = ""
    req.session.data.region = ""
    req.session.data.status = ""
    req.session.data.createdYear = ""

    res.render(folder + 'split-bills/bill-runs-filtered');

  });


/////////////////////////Bill runs
  ///Apply  filters

  router.post('/split-bills/bill-runs-filtered/apply-filters', function(req, res) {

    //check to see if the user is clearing filters
    if (req.session.data.clearFilters == "true") {

      req.session.data.runType = ""
      req.session.data.region = ""
      req.session.data.status = ""
      req.session.data.createdYear = ""
     req.session.data.filteredResults = ""
      req.session.data.openDetails = true
      //reset the table caption if the list is cleared
      req.session.data.filterCaption = "Showing all bill runs."
  //    req.session.data.focus="alert"

    } else {


    //get the list of bill runs
    let  billRuns = req.session.data.billRuns


  //set global scope of filteredResults
  let filteredResults = ""

  //set the type filter
  let typeFilters = ""
   typeFilters = req.session.data.runType

   if (typeof typeFilters === 'undefined') {
     typeFilters= ""
   }

   if (typeof typeFilters.length) {
     filteredResults = billRuns.filter(el => ( typeFilters.indexOf(el.runType) >= 0 ))
   }

   //set the region filter
   let regionFilters = ""
    regionFilters = req.session.data.region
    if (typeof regionFilters === 'undefined') {
      regionFilters= ""
    }

   if ((regionFilters.length) && (filteredResults.length)) {
      filteredResults = filteredResults.filter(el => ( regionFilters.indexOf(el.region) >= 0 ))

    } else if (regionFilters.length) {
      filteredResults = billRuns.filter(el => ( regionFilters.indexOf(el.region) >= 0 ))
    }


    //set the status filter
    let statusFilters = ""
     statusFilters = req.session.data.status
     if (typeof statusFilters === 'undefined') {
       statusFilters= ""
     }

    if ((regionFilters.length || typeFilters.length) && (!filteredResults.length))
   { } else {

    if ((statusFilters.length) && (filteredResults.length)) {
       filteredResults = filteredResults.filter(el => ( statusFilters.indexOf(el.status) >= 0 ))
     } else if (statusFilters.length) {
       filteredResults = billRuns.filter(el => ( statusFilters.indexOf(el.status) >= 0 ))
     }
    }

     //set the created year filter
      let createdYearFilter = ""
       createdYearFilter = req.session.data.createdYear
      if (createdYearFilter === 'undefined') {
         createdYearFilter = ""
       }

      if ((createdYearFilter.length) && (filteredResults.length)) {
        filteredResults = filteredResults.filter(el => (createdYearFilter.indexOf(el.createdYear) >=0 ) );
      } else if (createdYearFilter.length) {
        filteredResults = billRuns.filter(el => (createdYearFilter.indexOf(el.createdYear) >=0 ) );
      }


    //set filtered results to empty if filters doesn't return anything
      if (!Array.isArray(filteredResults) || !filteredResults.length){
        filteredResults = "empty"
      }


  req.session.data.openDetails = true
  //req.session.data.focus="alert"

  //Create a list formatter
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

  //Create the list depending on what filters are selected
  let list = []
  if (typeFilters.length && regionFilters.length && statusFilters.length){
  list = typeFilters.concat(regionFilters,statusFilters);
  } else if (typeFilters.length && regionFilters.length){
    list = typeFilters.concat(regionFilters);
  } else if (typeFilters.length && statusFilters.length){
    list = typeFilters.concat(statusFilters);
  } else if (regionFilters.length && statusFilters.length){
    list = regionFilters.concat(statusFilters);
  } else if (regionFilters.length){
    list = regionFilters
  } else if (typeFilters.length){
    list = typeFilters
  } else if (statusFilters.length){
    list = statusFilters
  }

  if (createdYearFilter.length) {
    list.push(createdYearFilter)
  }

  //set the dynamic caption for the table
  if (list.length) {
  req.session.data.filterCaption = "Showing bill runs filtered by " + formatter.format(list) + "."
  } else {
    req.session.data.filterCaption = "Showing all bill runs."
  }

  req.session.data.filteredResults = filteredResults

  }

    req.session.data.clearFilters = ""
    res.redirect('../bill-runs-filtered#caption');

  });


  ///clear filters

  router.post('/bill-runs-filtered/clear-filters', function(req, res) {


    //reset the table caption if the list is cleared
    req.session.data.filterCaption = "Showing all sent notices."


    res.redirect('/split-bills/bill-runs-filtered/apply-filters#captions');
  });


module.exports = router

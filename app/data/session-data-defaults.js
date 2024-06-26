/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {



    "number" : 10000000000.68,
    "resultsTable": "sandbox/_includes/stations-table.html",
    "userType": "su",
    "customerName": "Bottled Water Plc",
    "licenceHolder": "Bottled Water Plc",
    "billingContact": "Bottled Water Plc",
    "existingContact": "false",
    "licenceNumber": "AN01/68/60/0032",
    "licenceNum": "AN01/68/60/0032",
    "address1": "15 Ward Road",
    "city": "Bath",
    "postcode": "BA1 5EH",
    "address": "15 Ward Road, Bath, BA1 5EH",
    "stableAddress": "15 Ward Road, Bath, BA1 5EH",
    "returnsAddress": "Bottled Water Plc, 15 Ward Road, Bath, BA1 5EH",
    "credit": "false",
    "rebill": "false",
    "url": "",
    "invoiceAccount": "L12345678S",
    "startDay": "11",
    "startMonth": "April",
    "startYear": "2019",
   "runType": "supplementary",
    "numberBills": "5",
    "remove": "false",
    "removeLicence": "false",
  "region": "Anglian",
    "dateToday": "5 March 2020",
    "tptIssue": "overAbstraction",
    "tptIssueIR": "incompleteReturns",
    "tptIssueNP": "notProcessed",
    "billRun": "",
    "status": "ready",
    "tptstatus": "review",
    "tptSeason": "summer",
    "numberofIssues": "3",
    "annualstatus": "ready",
    "agreement": "Two-part tariff",
    "agreementStart-day": "1",
    "agreementStart-month": "4",
    "agreementStart-year": "2020",
    "agreementStartDay": "1",
    "agreementStartMonth": "4",
    "agreementStartYear": "2020",
    "agreementSignedStart-day": "1",
    "agreementSignedStart-month": "4",
    "agreementSignedStart-year": "2020",
    "agreementSignedStartDay": "1",
    "agreementSignedStartMonth": "4",
    "agreementSignedStartYear": "2020",
    "agreementEnd-day": "5",
    "agreementEnd-month": "5",
    "agreementEnd-year": "2023",
    "agreementEndDay": "5",
    "agreementEndMonth": "5",
    "agreementEndYear": "2023",
    "agreementEnded": "false",
    "agreementNew": "false",
    "agreementCount": "0",
    "agreements": [{
      "agreement": "Two-part tariff",
      "agreementStartDay": "1",
      "agreementStartMonth": "4",
      "agreementStartYear": "2017",
      "agreementSignedStartDay": "1",
      "agreementSignedStartMonth": "10",
      "agreementSignedStartYear": "2020",
      "agreementEnded": "false",
      "agreementEndDay": "",
      "agreementEndMonth": "",
      "agreementEndYear": "",
    }],
    "srocAgreements": [],
    "chargeStart": "1 April 2020",
    "createNewContact": "false",
    "chargeStartSet": "false",
    "versionRemoved": "false",
    "elements": [{
      "purpose": "Spray irrigation",
      "description": "Otterton borehole 1a",
      "abstractionStartDay": "1",
      "abstractionStartMonth": "4",
      "abstractionEndDay": "30",
      "abstractionEndMonth": "9",
      "billableQuantity": "100",
      "authorisedQuantity": "100",
      "timeLimit": "No",
      "source": "Unsupported",
      "season": "Summer",
      "loss": "High"
    }],
    "elementNew": "false",
    "elementNumber": "0",
    "change": "false",
    "elementCopy": "false",
    "createElement": "false",
    "removeElement": "false",
    "elementsHistoric": [{
        "purpose": "Spray irrigation",
        "description": "Otterton borehole 1a",
        "abstractionStartDay": "1",
        "abstractionStartMonth": "4",
        "abstractionEndDay": "31",
        "abstractionEndMonth": "3",
        "billableQuantity": "150,000,000",
        "authorisedQuantity": "150,000,000",
        "timeLimit": "No",
        "source": "Unsupported",
        "season": "All year",
        "loss": "High"
      },
      {
        "purpose": "Spray irrigation",
        "description": "Otterton borehole 1a, Time limited increase",
        "abstractionStartDay": "1",
        "abstractionStartMonth": "4",
        "abstractionEndDay": "31",
        "abstractionEndMonth": "3",
        "billableQuantity": "250,000",
        "authorisedQuantity": "250,000",
        "timeLimit": "Yes",
        "source": "Unsupported",
        "season": "All year",
        "loss": "High"
      }
    ],

    "chargeVersions": [{
        "chargeStart": "22 April 2019",
        "chargeEnd": "",
        "chargeStatus": "CHARGEABLE",
        "chargeBilledDate": "31 March 2020",
        "free": "false",
        "reasonNewCharge": "Formal variation"
      },
      {
        "chargeStart": "1 April 2017",
        "chargeEnd": "21 April 2019",
        "chargeStatus": "REPLACED",
        "chargeBilledDate": "31 March 2019",
        "free": "false",
        "reasonNewCharge": "New licence"
      },
      {
        "chargeStart": "1 April 2017",
        "chargeEnd": "21 April 2019",
        "chargeStatus": "INVALID",
        "chargeBilledDate": "31 March 2019",
        "free": "false",
        "reasonNewCharge": "New licence"
      }
    ],

    "chargeInfoNumber": "0",
    "newLicence": "false",
    "reasonNewCharge": "New licence",
    "return": "",
    "return-2": "",
    "return-3": "",
    "licenceList": "AN01/68/60/0032",
    "return": "-AN01/68/60/0032p1234543w-",
    "returns": [{
      "licence": "AN01/68/60/0032",
      "licenceHolder": "Bottled Water Plc",
      "ref": "1234545 - Due 28 October 2019,3455343 - Due 28 October 2018,7434343 - Due 28 October 2017",
      "address": "15 Osborne Road, Bath, BA1 5AH",
      "change": "false",
      "returnAddressFlag": "false",
      "singleUseAddressFlag": "false"
    }],

    //set which SRoC charge creation scenario to go through
    //a = 1 element 1 charge category
    //b = 2 elements 1 charge category
    //c = 3 elements 2 charge categories
    "scenario": "a",

    //SRoC elements
    "srocElements": [
      {
      "id": 0,
      "purpose": "Spray irrigation",
      "description": "Otterton borehole 1a",
      "abstractionStartDay": "1",
      "abstractionStartMonth": "3",
      "abstractionEndDay": "30",
      "abstractionEndMonth": "9",
      "billableQuantity": "<br>Billable not set",
      "authorisedQuantity": "100",
      "timeLimit": "No",
      "source": "Unsupported",
      "season": "Summer",
      "loss": "High",
      "eiuc": "Other",
      "agreementsApply": "yes",
      "chargeReference": undefined,
    },
    {
      "id": 1,
      "purpose": "Spray storage",
      "description": "Otterton borehole 1b",
      "abstractionStartDay": "1",
      "abstractionStartMonth": "12",
      "abstractionEndDay": "30",
      "abstractionEndMonth": "12",
      "billableQuantity": "<br>Billable not set",
      "authorisedQuantity": "50",
      "timeLimit": "December 2022 to December 2026",
      "source": "Unsupported",
      "season": "Summer",
      "loss": "High",
      "eiuc": "Other",
      "agreementsApply": "",
      "chargeReference": undefined,
    },
    {
      "id": 2,
      "purpose": "Mineral washing",
      "description": "Otterton North borehole 32a",
      "abstractionStartDay": "1",
      "abstractionStartMonth": "4",
      "abstractionEndDay": "30",
      "abstractionEndMonth": "3",
      "billableQuantity": "<br>Billable not set",
      "authorisedQuantity": "300",
      "timeLimit": "No",
      "source": "Supported",
      "season": "Winter/All year",
      "loss": "Medium",
      "eiuc": "Other",
      "agreementsApply": "",
      "chargeReference": undefined,
    }
  ],

  //charge references
  "chargeReferences": [],

    "search": "",
    "reports": "true",
    "billing": "true",
    "notices": "true",

    //bill runs
    "billRuns": [{
        "date": "12 January 2020",
        "createdYear": "2020",
        "number": "-",
        "region": "southern",
        "runType": "supplementary",
        "bills": "-",
        "value": "-",
        "status": "error"
      },
      {
        "date": "7 January 2020",
        "createdYear": "2020",
        "number": "200291",
        "region": "anglian",
        "runType": "supplementary",
        "bills": "5",
        "value": "£5,460.00",
        "status": "ready"
      },
      {
        "date": "19 November 2019",
        "createdYear": "2019",
        "number": "200290",
        "region": "anglian",
        "runType": "annual",
        "bills": "874",
        "value": "£512,468.00",
        "status": "ready"
      },
      {
        "date": "19 November 2019",
        "createdYear": "2019",
        "number": "200289",
        "region": "anglian",
        "runType": "two-part tariff",
        "bills": "-",
        "value": "-",
        "status": "review"
      },
      {
        "date": "2 January 2020",
        "createdYear": "2020",
        "number": "773483",
        "region": "southern",
        "runType": "annual",
        "bills": "-",
        "value": "-",
        "status": "error"
      },
      {
        "date": "1 January 2020",
        "createdYear": "2020",
        "number": "555333",
        "region": "midlands",
        "runType": "supplementary",
        "bills": "19",
        "value": "£10,142.99",
        "status": "sent"
      },
      {
        "date": "7 December 2019",
        "createdYear": "2019",
        "number": "555332",
        "region": "midlands",
        "runType": "supplementary",
        "bills": "5",
        "value": "£4,927.10",
        "status": "sent"
      },
      {
        "date": "1 November 2019",
        "createdYear": "2019",
        "number": "100234",
        "region": "south west",
        "runType": "supplementary",
        "bills": "3",
        "value": "£3,887.04",
        "status": "sent"
      },
      {
        "date": "2 October 2019",
        "createdYear": "2019",
        "number": "100233",
        "region": "south west",
        "runType": "supplementary",
        "bills": "9",
        "value": "£11,602.22",
        "status": "sent"
      },
      {
        "date": "30 September 2019",
        "createdYear": "2019",
        "number": "100232",
        "region": "south west",
        "runType": "supplementary",
        "bills": "6",
        "value": "£1,824.04",
        "status": "sent"
      },
      {
        "date": "27 September 2019",
        "createdYear": "2019",
        "number": "200288",
        "region": "anglian",
        "runType": "supplementary",
        "bills": "9",
        "value": "£2,824.02",
        "status": "sent"
      },
      {
        "date": "20 September 2019",
        "createdYear": "2019",
        "number": "4422322",
        "region": "north east",
        "runType": "supplementary",
        "bills": "1",
        "value": "£1,122.06",
        "status": "sent"
      },
      {
        "date": "15 September 2019",
        "createdYear": "2019",
        "number": "8845622",
        "region": "north west",
        "runType": "supplementary",
        "bills": "10",
        "value": "£22,122.89",
        "status": "sent"
      },
      {
        "date": "1 September 2019",
        "createdYear": "2019",
        "number": "4326109",
        "region": "thames",
        "runType": "supplementary",
        "bills": "17",
        "value": "£35,753.01",
        "status": "sent"
      },
      {
        "date": "1 September 2019",
        "createdYear": "2019",
        "number": "1000002",
        "region": "wales",
        "runType": "supplementary",
        "bills": "5",
        "value": "£9,634.23",
        "status": "sent"
      },
      {
        "date": "29 August 2019",
        "createdYear": "2019",
        "number": "9923892",
        "region": "north east",
        "runType": "two-part tariff",
        "bills": "88",
        "value": "£135,812.77",
        "status": "sent"
      }
    ],

    //returns versions
    "returnVersion": "",
    "success" : 0,
    "successMessage" : "",
    "returnsRouteVersion" : 1,
    "returnsNotRequired" : false,

"licenceID" : 0,

    //licence
    "id" : 1,
    "licences": [
      //licence 1
      {
        "number": "00/22/001/02",
        "name": "Lower Smith Road",
        "holder": "Irene Briton",
        "startDate": "1 June 1985",
        "endDate": "31 January 2020",
        "expired": "true",
        "billingRegion": "Midlands",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation","General machine washing"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124(RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              },
              {
                "purpose": "General machine washing",
                "points": ["At National Grid Reference SE 437 682 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount": "20",
                "timeLimit": "No"
              }],

               //Previous versions of the licence data
               "previousVersions": [
                { }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "31 January 2020",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "michael.babb@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "michael.babb@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "INVALID",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "michael.babb@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "sent": "5 June 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something1@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "sent": "17 April 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "sent": "30 March 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

      },
      //licence 2
      {
        "number": "03/28/60/0032",
        "name": "Glindenfold Lake",
        "holder": "Bottled Water Plc",
        "startDate": "1 June 1985",
        "endDate": "30 April 2022",
        "expired": "false",
        "billingRegion": "North West",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation", "General machine washing"],
        "absPeriod": ["1 April to 31 October", "1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675126"],
        "gridRefs": [ "SK 67540 12640" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              },
              {
                      "purpose": "Spray irrigation - direct",
                      "points": ["At National Grid Reference SK 675126(RIVER SWALE - HELPERBY)"],
                      "periodStart": "1101",
                      "periodEnd": "0331",
                      "amount":"125",
                      "timeLimit": "No"
                    },
              {
                "purpose": "General machine washing",
                "points": ["At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount": "20",
                "timeLimit": "No"
              }],

               //Previous versions of the licence data
               "previousVersions": [
                { }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [{
            "chargeStart": "22 April 2021",
            "chargeEnd": "",
            "chargeStatus": "NOT APPROVED",
            "chargeBilledDate": "31 March 2022",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "rose.conelly@madeup.com"

          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2021",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2022",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "rose.conelly@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "sent": "5 June 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "sent": "17 April 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something2@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "sent": "30 March 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

      },
      //licence 3
      {
        "number": "03/28/61/029",
        "name": "Honeydew Crescent",
        "holder": "Big Smith Farms Ltd",
        "startDate": "1 April 2022",
        "endDate": "31 March 2034",
        "expired": "false",
        "billingRegion": "South West",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "0331",
                "amount":"125",
                "timeLimit": "No"
              }],

               //Previous versions of the licence data
               "previousVersions": [
                { }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [
          //newLicence
        ],

        "agreements": [
          //newLicence
        ],

        "communications": [
          //newLicence
        ],

      },
      //licence 4
      {
        "number": "03/28/60/0035",
        "name": "George Furrow",
        "holder": "Bottled Water Plc",
        "startDate": "1 June 1985",
        "endDate": "15 September 2022",
        "expired": "false",
        "billingRegion": "North East",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SU 190683", "At National Grid Reference SU 190679", "At National Grid Reference SU 188678", "At National Grid Reference SU 187680"],
        "gridRefs": [ "SU 19025 68308", "SU 19047 67983", "SU 18810 67869", "SU 18776 68078" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SU 190683 (Marlborough)", "At National Grid Reference SU 190679 (Marlborough)", "At National Grid Reference SU 188678 (Marlborough)", "At National Grid Reference SU 187680 (Marlborough)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              }],

               //Previous versions of the licence data
               "previousVersions": [
                { }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "barry.crampton@madeup.com",
            "elements": [{
              "purpose": "Spray irrigation - direct",
              "description": "Borehole A",
              "abstractionStartDay": "1",
              "abstractionStartMonth": "4",
              "abstractionEndDay": "31",
              "abstractionEndMonth": "3",
              "billableQuantity": "7.89",
              "authorisedQuantity": "7.89",
              "timeLimit": "No",
              "source": "Unsupported",
              "season": "Winter and all year",
              "loss": "High",
              },
              {
              "purpose": "Spray irrigation - direct",
              "description": "Borehole B",
              "abstractionStartDay": "1",
              "abstractionStartMonth": "4",
              "abstractionEndDay": "31",
              "abstractionEndMonth": "3",
              "billableQuantity": "7.89",
              "authorisedQuantity": "7.89",
              "timeLimit": "No",
              "source": "Unsupported",
              "season": "Winter and all year",
              "loss": "High",
              },
            ],
          },
          {
            "chargeStart": "1 June 1985",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "barry.crampton@madeup.com",
            "elements": [{
              "purpose": "Spray irrigation - direct",
              "description": "Borehole A",
              "abstractionStartDay": "1",
              "abstractionStartMonth": "4",
              "abstractionEndDay": "31",
              "abstractionEndMonth": "3",
              "billableQuantity": "2.89",
              "authorisedQuantity": "2.89",
              "timeLimit": "No",
              "source": "Unsupported",
              "season": "Winter and all year",
              "loss": "High",
              }],
          }
        ],

        "agreements": [
          //No agreements
        ],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "sent": "5 June 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "sent": "17 April 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "sent": "30 March 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

      },
      //licence 5
      {
        "number": "03/28/60/0033",
        "name": "Dale Barrow",
        "holder": "Bottled Water Plc",
        "startDate": "1 September 1990",
        "endDate": "15 September 2022",
        "expired": "false",
        "billingRegion": "Anglian",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 674125", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK 67443 12554", "SK 67540 12640" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "1101",
                "periodEnd": "0331",
                "amount":"125",
                "timeLimit": "No"
              }],

               //Previous versions of the licence data
               "previousVersions": [
                { }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHANGES",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "barry.crampton@madeup.com",
            "changeRequest": "Please change the abstraction start month to April"
          },
          {
            "chargeStart": "1 September 1990",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "barry.crampton@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "sent": "5 June 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "sent": "17 April 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "sent": "30 March 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

      },
      //licence 6
      {
        "number": "03/28/60/0726",
        "name": "River House",
        "holder": "Robin Vithlhem-Smith",
        "startDate": "1 April 2015",
        "endDate": "1 March 2023",
        "expired": "false",
        "billingRegion": "Midlands",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              }],

               //Previous versions of the licence data
               "previousVersions": [
                { }
              ],

        "returnsRequirements":  [{
                                "startDate":"20180401",
                                "endDate":"",
                                "reason":"Major change",
                                "status":"active",
                                "additionalSubmissionOptions": ["none"],
                                "username":"username@defra.gov.uk",
                                "note":"",
                                "requirements":[{
                                                "id":823187,
                                                "returnsCycle":"summer",
                                                "description":"River Swale - Helperby",
                                                "frequencyCollected":"daily",
                                                "frequency":"daily",
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"0401",
                                                "periodEnd":"1031",
                                                "timeLimit": "No",
                                                "settings":["none"],
                                                  }]
                                    },
                                    {
                                    "startDate":"20150401",
                                    "endDate":"20180331",
                                    "reason":"New licence",
                                    "additionalSubmissionOptions": ["none"],
                                    "status":"active",
                                    "username":"username@defra.gov.uk",
                                    "note":"",
                                    "requirements":[{
                                                    "id":823187,
                                                    "returnsCycle":"summer",
                                                    "description":"River Swale - Helperby",
                                                    "frequencyCollected":"daily",
                                                    "frequency":"daily",
                                                    "purpose":["Spray irrigation - direct"],
                                                    "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                                    "periodStart":"0401",
                                                    "periodEnd":"1031",
                                                    "timeLimit": "No",
                                                    "settings":["none"],
                                                      }]
                                        }
                                  ],


                                  "returns": [{
                                                "id":823187,
                                                "status": "due",
                                                "due": "20221128",
                                                "returnsCycle":"summer",
                                                "description":"River Swale - Helperby",
                                                "frequency": "daily",
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"0401",
                                                "periodEnd":"1031",
                                                "returnsPeriodStart":"20220401",
                                                "returnsPeriodEnd":"20221031",
                                              }
                                              ],

        "chargeInformation": [{
            "chargeStart": "1 April 2018",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Major change",
            "setUpBy": "	jo.langton@madeup.com",
          },
          {
            "chargeStart": "1 April 2015",
            "chargeEnd": "31 March 2018",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "sent": "5 June 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "sent": "17 April 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "sent": "30 March 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],
      },
      //licence 7
      {
        "number": "11/22/32/02",
        "name": "",
        "holder": "D.B. Beecham-Smith",
        "startDate": "1 October 2016",
        "endDate": "30 September 2025",
        "expired": "false",
        "billingRegion": "South West",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                "periodStart": "1101",
                "periodEnd": "0331",
                "amount":"125",
              }],

              //Previous versions of the licence data
              "previousVersions": [
                { }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "INVALID",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 October 2016",
            "chargeEnd": "31 March 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2019",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 October 2016",
            "chargeEnd": "31 March 2019",
            "chargeStatus": "INVALID",
            "chargeBilledDate": "31 March 2019",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "sent": "5 June 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "sent": "17 April 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "sent": "30 March 2020",
            "sender": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

      },
      //licence 8
      {
        "number": "03/28/61/033",
        "name": "Cherry Tree Farm",
        "holder": "Big Smith Farms Ltd",
        "startDate": "1 April 2017",
        "effectiveDate": "1 August 2019",
        "endDate": "31 March 2034",
        "expired": "false",
        "billingRegion": "Midlands",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of chalk at An-area, A-town.",
        "purpose": ["Trickle Irrigation - Storage","General Farming & Domestic","Spray irrigation - Direct"],
        "absPeriod": ["1 April to 31 March"],

        "absPoints": ["At National Grid Reference SK 675124"],
        "gridRefs": [ "SK675124" ],
        "means": ["Unspecified pump"],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "Borehole A~4 cubic metres per hour~6 cubic metres per day~2,890 cubic metres per year~~Borehole B~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

        "use": [    {
                      "purpose": "Trickle Irrigation - Storage",
                      "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"51,830",
                      "timeLimit": "No"
                    },
                    {
                      "purpose": "General Farming & Domestic",
                      "points": ["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"2,890",
                      "timeLimit": "No"
                    },
                    {
                      "purpose": "Spray irrigation - direct",
                      "points": ["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"2,890",
                      "timeLimit": "No"
                    },
            ],

            "changeLog": [{
              "type": "Licence version",
              "reasonCreated": "minor variation",
              "reasonText":  "Minor variation reduction of abstraction volume on SK 675124 and SK 675126",
              "changedDate": "31 July 2019",
              "changedBy": "admin@gov.uk",
            },{
              "type": "Licence version",
              "reasonCreated": "new Licence",
              "reasonText":  "",
              "changeDate": "1 April 2017",
              "changedBy": "admin@gov.uk",
            }],

            "previousVersions": [
                {

                  //Changed
                  "changed": true,
                  "reasonCreated": "New Licence",
                  "reasonText":  "",
                  "changedDate": "31 July 2019",
                  "changedBy": "admin@gov.uk",

                  "number": "03/28/61/033",
                  "name": "Cherry Tree Farm",
                  "holder": "Big Smith Farms Ltd",
                  "startDate": "1 April 2017",
                  "effectiveDate": "1 April 2017",
                  "endDate": "31 July 2019",
                  "expired": "false",

                  //licence Settings
                  "multipleUpload": "no",
                  "confidentiality": "public",

                  "source": "Underground strata comprising of chalk at An-area, A-town.",
                  "purpose": ["Trickle Irrigation - Storage","General Farming & Domestic","Spray irrigation - Direct"],
                  "absPeriod": ["1 April to 31 March"],

                  "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
                  "means": ["Unspecified pump"],
                  "absConditions": [
                    {"type" : "general condition",
                     "purposeIndex" : ["0"],
                     "pointsIndex" : ["0"],
                     "param1" : "",
                     "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
                   },
                   {"type" : "hands off flow condition (HOF)",
                     "purposeIndex" : ["0"],
                     "pointsIndex" : ["0"],
                     "param1" : "Bourton Dickler",
                     "param2" : "180Ml/d",
                     "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
                   }
                 ],
                  "absQuantities": "Borehole A~5 cubic metres per hour~10 cubic metres per day~3,250 cubic metres per year~~Borehole B~30 cubic metres per hour~280 cubic metres per day~72,830 cubic metres per year",

                  "use": [    {
                                "purpose": "Trickle Irrigation - Storage",
                                "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                                "periodStart": "0401",
                                "periodEnd": "0331",
                                "amount":"51,830",
                                "timeLimit": "No"
                              },
                              {
                                "purpose": "General Farming & Domestic",
                                "points": ["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                                "periodStart": "0401",
                                "periodEnd": "0331",
                                "amount":"2,890",
                                "timeLimit": "No"
                              },
                              {
                                "purpose": "Spray irrigation - direct",
                                "points": ["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                                "periodStart": "0401",
                                "periodEnd": "0331",
                                "amount":"2,890",
                                "timeLimit": "No"
                              },
                      ],
              }
            ],


            //return requirements
            "returnsRequirements":  [{
                                    "startDate":"20190401",
                                    "endDate":"",
                                    "reason":"New licence",
                                    "status":"approved",
                                    "additionalSubmissionOptions": ["multiple upload"],
                                    "username":"username@defra.gov.uk",
                                    "note":"",
                                    "requirements":[{
                                                    "id":823187,
                                                    "returnsCycle":"winter and all year",
                                                    "description":"Cherry tree farm - BOREHOLE A",
                                                    "frequencyCollected":"monthly",
                                                    "frequency":"monthly",
                                                    "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                                    "points":["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                                                    "periodStart":"0401",
                                                    "periodEnd":"0331",
                                                    "timeLimit": "No",
                                                    "settings":["none"],
                                                      }]
                                        }
                                      ],

              "returns": [
                          {
                            "id":823187,
                            "status": "completed",
                            "due": "20211128",
                            "returnsCycle":"winter and all year",
                            "description":"Cherry tree farm - BOREHOLE A",
                            "frequency": "monthly",
                            "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                            "points":["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                            "periodStart":"0401",
                            "periodEnd":"1031",
                            "returnsPeriodStart":"20210401",
                            "returnsPeriodEnd":"20211031",
                          },
                          {
                            "id":823187,
                            "status": "completed",
                            "due": "20201128",
                            "returnsCycle":"winter and all year",
                            "description":"Cherry tree farm - BOREHOLE A",
                            "frequency": "monthly",
                            "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                            "points":["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                            "periodStart":"0401",
                            "periodEnd":"1031",
                            "returnsPeriodStart":"20200401",
                            "returnsPeriodEnd":"20201031",
                          }
                          ],

        "chargeInformation": [{
            "chargeStart": "1 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com",
            "elements": [{
                          "purpose": "Spray irrigation - direct",
                          "description": "Borehole A",
                          "abstractionStartDay": "1",
                          "abstractionStartMonth": "4",
                          "abstractionEndDay": "31",
                          "abstractionEndMonth": "3",
                          "billableQuantity": "2.89",
                          "authorisedQuantity": "2.89",
                          "timeLimit": "No",
                          "source": "Unsupported",
                          "season": "Winter and all year",
                          "loss": "High",
                          }
            ],
          }
        ],

        "agreements": [],

        "communications": [
          //newLicence
        ],

      },
            //licence 9 //impoundment
            {
              "number": "11/22/32/03",
              "name": "",
              "holder": "Bottled Water Plc",
              "startDate": "1 April 2000",
              "endDate": "",
              "expired": "false",
              "billingRegion": "North West",

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Surface water",
              "purpose": ["Impounding (for any purpose excluding impounding for HEP)"],
              "absPeriod": ["1 January to 31 December"],


              "absPoints": ["At National Grid Reference SD 728565", "At National Grid Reference SD 717547", "At National Grid Reference SD 719545", "At National Grid Reference SD 736560",],
              "gridRefs": [ 'SD 72890 56537', 'SD 71770 54730', 'SD 71966 54510', 'SD 73652 56049' ],
              "means": ["Fixed weir"],
              "absConditions": [{"type" : "compensation release flow",
                                 "purposeIndex" : ["0"],
                                 "pointsIndex" : ["0"],
                                 "param1" : "",
                                 "text" : "The Licence Holder shall make a continuous release of compensation water of not less than 12.96 megalitres per day from the Helperby reservoir to the River Swale as National Grid Reference SE 437 684."
                                },
                                {"type" : "general condition",
                                 "purposeIndex" : ["0"],
                                 "pointsIndex" : ["0"],
                                 "param1" : "",
                                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
                                }
                        ],
              "absQuantities": "",

              "use": [{
                      "purpose": "Impounding (for any purpose excluding impounding for HEP)",
                      "points": ["At National Grid Reference SD 728565, SD 717547, SD 719545 and SD 736560 (STOCKS RESERVOIR - LANCASTER)"],
                      "periodStart": "0101",
                      "periodEnd": "1231",
                      "amount":"",
                      "timeLimit": "No"
                    }],

              "previousVersions": [],

              "returnsRequirements":  [],

              "returns": [],

              "chargeInformation": [],

              "agreements": [],

              "communications": [],

            },
            //licence 10
            {
              "number": "03/28/61/044",
              "name": "Apple Tree Farm ",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2023",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2034",
              "expired": "false",
              "billingRegion": "South East",

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at Apple Tree Farm.",
              "purpose": ["Trickle Irrigation - Storage","General Farming & Domestic", "Trickle irrigation - Direct"],
              "absPeriod": ["1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675 126 "],
              "gridRefs": [ "SK675124", "SK675126" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
               },
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "180Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
               }
             ],
              "absQuantities": "Borehole A~4 cubic metres per hour~6 cubic metres per day~2,890 cubic metres per year~~Borehole B~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [    {
                            "purpose": "Trickle irrigation - storage",
                            "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No"
                          },
                          {
                            "purpose": "General Farming & Domestic",
                            "points": ["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"2,890",
                            "timeLimit": "No"
                          },
                          {
                            "purpose": "Trickle irrigation - direct",
                            "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No"
                          }
                  ],

                  "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changeDate": "1 April 2022",
                    "changedBy": "admin@gov.uk",
                  }],

                  "previousVersions": [],


                  //return requirements
                  "returnsRequirements":  [],

                    "returns": [],

              "chargeInformation": [],

              "agreements": [],

              "communications": [],

            },
            //licence 11
            {
              "number": "03/28/61/055",
              "name": "Pear Tree Farm",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2019",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2035",
              "expired": "false",
              "billingRegion": "Midlands",

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at An-area, A-town.",
              "purpose": ["Spray irrigation - Direct", "General Farming & Domestic","Spray irrigation - Storage"],
              "absPeriod": ["1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675 126"],
              "gridRefs": [ "SK675124", "SK675126" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124 and SK 675126."
               },
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "180Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
               }
             ],
              "absQuantities": "Up to and including 31 March 2028~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~From 1 April 2028~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [     {
                              "purpose": "Spray irrigation - direct",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                              "periodStart": "0401",
                              "periodEnd": "0331",
                              "amount":"89,000",
                              "timeLimit": "From 1 April 2023 to 31 March 2028"
                          },
                          {
                            "purpose": "General Farming & Domestic",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"89,000",
                            "timeLimit": "From 1 April 2023 to 31 March 2028"
                          },
                          {
                            "purpose": "Spray Irrigation - Storage",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)","At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"89,000",
                            "timeLimit": "From 1 April 2023 to 31 March 2028"
                          }, {
                            "purpose": "Spray irrigation - direct",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No"
                        },
                        {
                          "purpose": "General Farming & Domestic",
                          "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                          "periodStart": "0401",
                          "periodEnd": "0331",
                          "amount":"51,830",
                          "timeLimit": "No"
                        },

                  ],

                  "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "minor variation",
                    "reasonText":  "Minor variation time limited increase for reservoir storage for subsequent spray irrigation volume on SK 675124 and SK 675126",
                    "changedDate": "31 March 2023",
                    "changedBy": "admin@gov.uk",
                  },{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changeDate": "1 April 2019",
                    "changedBy": "admin@gov.uk",
                  }],

                  "previousVersions": [
                      {

                        //Changed
                        "changed": true,
                        "reasonCreated": "New Licence",
                        "reasonText":  "",
                        "changedDate": "31 March 2023",
                        "changedBy": "admin@gov.uk",

                        "number": "03/28/61/055",
                        "name": "Pear Tree Farm",
                        "holder": "Big Smith Farms Ltd",
                        "startDate": "1 April 2019",
                        "effectiveDate": "1 April 2019",
                        "endDate": "31 March 2023",
                        "expired": "false",

                        //licence Settings
                        "multipleUpload": "no",
                        "confidentiality": "public",

                        "source": "Underground strata comprising of chalk at An-area, A-town.",
                        "purpose": ["General Farming & Domestic","Spray irrigation - Direct"],
                        "absPeriod": ["1 April to 31 March"],

                        "absPoints": ["At National Grid Reference SK 675124"],
                        "means": ["Unspecified pump"],
                        "absConditions": [
                          {"type" : "general condition",
                           "purposeIndex" : ["0"],
                           "pointsIndex" : ["0"],
                           "param1" : "",
                           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124."
                         },
                         {"type" : "hands off flow condition (HOF)",
                           "purposeIndex" : ["0"],
                           "pointsIndex" : ["0"],
                           "param1" : "Bourton Dickler",
                           "param2" : "180Ml/d",
                           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
                         }
                       ],
                        "absQuantities": "Borehole A~5 cubic metres per hour~10 cubic metres per day~3,250 cubic metres per year~~Borehole B~30 cubic metres per hour~280 cubic metres per day~72,830 cubic metres per year",

                        "use": [
                                    {
                                      "purpose": "General Farming & Domestic",
                                      "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                      "periodStart": "0401",
                                      "periodEnd": "0331",
                                      "amount":"51,830",
                                      "timeLimit": "No"
                                    },
                                    {
                                      "purpose": "Spray irrigation - direct",
                                      "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                      "periodStart": "0401",
                                      "periodEnd": "0331",
                                      "amount":"51,830",
                                      "timeLimit": "No"
                                    },
                            ],
                    }
                  ],


                  //return requirements
                  "returnsRequirements":  [{
                                          "startDate":"20190401",
                                          "endDate":"",
                                          "createdDate":"20190404",
                                          "reason":"New licence",
                                          "status":"approved",
                                          "additionalSubmissionOptions": ["none"],
                                          "username":"username@defra.gov.uk",
                                          "note":"",
                                          "requirements":[{
                                                          "id":823187,
                                                          "returnsCycle":"winter and all year",
                                                          "description":"Pear tree farm - BOREHOLE A and B",
                                                          "frequencyCollected":"monthly",
                                                          "frequency":"monthly",
                                                          "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                                          "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                                          "periodStart":"0401",
                                                          "periodEnd":"0331",
                                                          "timeLimit": "No",
                                                          "settings":["none"],
                                                            }]
                                              }
                                            ],

                    "returns": [
                                {
                                  "id":823187,
                                  "status": "completed",
                                  "due": "20211128",
                                  "returnsCycle":"winter and all year",
                                  "description":"Pear tree farm - BOREHOLE A and B",
                                  "frequency": "monthly",
                                  "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                  "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                  "periodStart":"0401",
                                  "periodEnd":"1031",
                                  "returnsPeriodStart":"20210401",
                                  "returnsPeriodEnd":"20211031",
                                },
                                {
                                  "id":823187,
                                  "status": "completed",
                                  "due": "20201128",
                                  "returnsCycle":"winter and all year",
                                  "description":"Pear tree farm - BOREHOLE A and B",
                                  "frequency": "monthly",
                                  "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                  "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                  "periodStart":"0401",
                                  "periodEnd":"1031",
                                  "returnsPeriodStart":"20200401",
                                  "returnsPeriodEnd":"20201031",
                                }
                                ],

              "chargeInformation": [{
                  "chargeStart": "1 April 2019",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2023",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                  "elements": [{
                                "purpose": "Spray irrigation - direct",
                                "description": "Borehole A and B",
                                "abstractionStartDay": "1",
                                "abstractionStartMonth": "4",
                                "abstractionEndDay": "31",
                                "abstractionEndMonth": "3",
                                "billableQuantity": "51,830",
                                "authorisedQuantity": "51,830",
                                "timeLimit": "No",
                                "source": "Unsupported",
                                "season": "Winter and all year",
                                "loss": "High",
                                }
                  ],
                }
              ],

              "agreements": [],

              "communications": [
                //newLicence
              ],

            },
            {
              "number": "03/28/61/065",
              "name": "Lemon Tree Farm",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2019",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2035",
              "expired": "false",
              "billingRegion": "Anglian",

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at Lemon Tree Farm.",
              "purpose":  ["Spray irrigation - Storage", "Spray irrigation - Direct", "General Farming & Domestic"],
              "absPeriod": ["1 November to 31 March", "1 April to 31 October", "1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124"],
              "gridRefs": [ "SK675124" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124."
               },
             ],
              "absQuantities": "Spray irrigation - Storage~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~Spray irrigation - Direct~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~General farming and agriculture~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [     {
                              "purpose": "Spray Irrigation - Storage",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                              "periodStart": "1101",
                              "periodEnd": "0331",
                              "amount":"89,000",
                              "timeLimit": "No",
                          },
                          {
                              "purpose": "Spray irrigation - direct",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)",],
                              "periodStart": "0401",
                              "periodEnd": "1031",
                              "amount":"89,000",
                              "timeLimit": "No",
                          },
                          {
                            "purpose": "General Farming & Domestic",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No",
                          },
                  ],

                  "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "Normal variation",
                    "reasonText":  "Licence varied to add agriculture purpose to the licence",
                    "changedDate": "1 April 2023",
                    "changedBy": "admin@gov.uk",
                  },{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changeDate": "1 April 2019",
                    "changedBy": "admin@gov.uk",
                  }],

                  "previousVersions": [
                      {

                        //Changed
                        "changed": true,
                        "reasonCreated": "New Licence",
                        "reasonText":  "",
                        "changedDate": "1 April 2023",
                        "changedBy": "admin@gov.uk",

                        "number": "03/28/61/065",
                        "name": "Lemon Tree Farm",
                        "holder": "Big Smith Farms Ltd",
                        "startDate": "1 April 2019",
                        "effectiveDate": "1 April 2019",
                        "endDate": "31 March 2023",
                        "expired": "false",

                        //licence Settings
                        "multipleUpload": "no",
                        "confidentiality": "public",

                        "source": "Underground strata comprising of chalk at Lemon Tree Farm.",
                        "purpose": ["Spray Irrigation - Storage","Spray irrigation - Direct"],
                        "absPeriod": ["1 November to 31 March", "1 April to 31 October"],

                        "absPoints": ["At National Grid Reference SK 675124"],
                        "means": ["Unspecified pump"],
                        "absConditions": [
                          {"type" : "general condition",
                           "purposeIndex" : ["0"],
                           "pointsIndex" : ["0"],
                           "param1" : "",
                           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124."
                         },
                       ],
                       "absQuantities": "Spray irrigation - Storage~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~Spray irrigation - Direct~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year",

                        "use": [
                                      {
                                        "purpose": "Spray Irrigation - Storage",
                                        "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                                        "periodStart": "1101",
                                        "periodEnd": "0331",
                                        "amount":"89,000",
                                        "timeLimit": ""
                                    },
                                    {
                                      "purpose": "Spray irrigation - direct",
                                      "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                      "periodStart": "0401",
                                      "periodEnd": "0331",
                                      "amount":"89,000",
                                      "timeLimit": "No"
                                    },
                            ],
                    }
                  ],


                  //return requirements
                  "returnsRequirements":  [{
                                          "startDate":"20190401",
                                          "endDate":"",
                                          "reason":"New licence",
                                          "status":"approved",
                                          "additionalSubmissionOptions": ["none"],
                                          "username":"username@defra.gov.uk",
                                          "note":"",
                                          "requirements":[{
                                                          "id":823187,
                                                          "returnsCycle":"winter and all year",
                                                          "title":"Spray irrigation - storage, Reservoir storage at Lemon tree farm - BOREHOLE A",
                                                          "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                                                          "frequencyCollected":"monthly",
                                                          "frequency":"monthly",
                                                          "purpose":["Spray irrigation - storage",],
                                                          "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                                                          "periodStart":"1101",
                                                          "periodEnd":"0331",
                                                          "timeLimit": "No",
                                                          "settings":["none"],
                                                            },
                                                            {
                                                              "id":823188,
                                                              "returnsCycle":"summer",
                                                              "title":"Spray irrigation - direct, Spray irrigation at Lemon tree farm - BOREHOLE A",
                                                              "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                                                              "frequencyCollected":"monthly",
                                                              "frequency":"monthly",
                                                              "purpose":["Spray irrigation - direct"],
                                                              "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                                                              "periodStart":"0401",
                                                              "periodEnd":"1031",
                                                              "timeLimit": "No",
                                                              "settings":["none"],
                                                                }]
                                              }
                                            ],

                    "returns": [
                      {
                        "id":823187,
                        "status": "completed",
                        "due": "20221128",
                        "returnsCycle":"winter and all year",
                        "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - storage"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"1101",
                        "periodEnd":"0331",
                        "returnsPeriodStart":"20210401",
                        "returnsPeriodEnd":"20220331",
                      },{
                        "id":823188,
                        "status": "completed",
                        "due": "20220428",
                        "returnsCycle":"summer",
                        "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - direct"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"0401",
                        "periodEnd":"1031",
                        "returnsPeriodStart":"20210401",
                        "returnsPeriodEnd":"20220331",
                      },
                      {
                        "id":823187,
                        "status": "completed",
                        "due": "20211128",
                        "returnsCycle":"winter and all year",
                        "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - storage"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"1101",
                        "periodEnd":"0331",
                        "returnsPeriodStart":"20200401",
                        "returnsPeriodEnd":"20210331",
                      },{
                        "id":823188,
                        "status": "completed",
                        "due": "20210428",
                        "returnsCycle":"summer",
                        "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - direct"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"0401",
                        "periodEnd":"1031",
                        "returnsPeriodStart":"20200401",
                        "returnsPeriodEnd":"20210331",
                      },
                      {
                        "id":823187,
                        "status": "completed",
                        "due": "20201128",
                        "returnsCycle":"winter and all year",
                        "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - storage"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"1101",
                        "periodEnd":"0331",
                        "returnsPeriodStart":"20190401",
                        "returnsPeriodEnd":"20200331",
                      },{
                        "id":823188,
                        "status": "completed",
                        "due": "20200428",
                        "returnsCycle":"summer",
                        "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - direct"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"0401",
                        "periodEnd":"1031",
                        "returnsPeriodStart":"20190401",
                        "returnsPeriodEnd":"20200331",
                      },
                                ],

              "chargeInformation": [{
                  "chargeStart": "1 April 2019",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2023",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                  "elements": [{
                                "purpose": "Spray irrigation - storage",
                                "description": "Borehole A",
                                "abstractionStartDay": "1",
                                "abstractionStartMonth": "11",
                                "abstractionEndDay": "31",
                                "abstractionEndMonth": "3",
                                "billableQuantity": "89,000",
                                "authorisedQuantity": "89,000",
                                "timeLimit": "No",
                                "source": "Unsupported",
                                "season": "Winter and all year",
                                "loss": "High",
                                },
                                {
                                  "purpose": "Spray irrigation - direct",
                                  "description": "Borehole A",
                                  "abstractionStartDay": "1",
                                  "abstractionStartMonth": "4",
                                  "abstractionEndDay": "31",
                                  "abstractionEndMonth": "10",
                                  "billableQuantity": "89,000",
                                  "authorisedQuantity": "89,000",
                                  "timeLimit": "No",
                                  "source": "Unsupported",
                                  "season": "Summer",
                                  "loss": "High",
                                  }
                  ],
                }
              ],

              "agreements": [],

              "communications": [
                //newLicence
              ],

            },
            //licence 12 
            //ID11
            {
              "number": "100/22/33/0123",
              "name": "",
              "holder": "Public Water Plc",
              "startDate": "19 January 2018",
              "endDate": "30 March 2030",
              "effectiveDate": "19 January 2018",
              "expired": "false",
              "billingRegion": "Southern",
      
              //licence Settings
              "multipleUpload": "yes",
              "confidentiality": "public",
      
              "source": "Groundwater.",
              "purpose": ["Potable Water Supply - Direct"],
              "absPeriod": ["1 April to 31 October"],
              "means": ["Unspecified pump"],
      
              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126", "At National Grid Reference SK 675130", "At National Grid Reference SK 675135"],
              "gridRefs": [ "SK675124", "SK675126", "SK 675130", "SK 675135"],
              "absConditions": [
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0", "1", "2", "3"],
                 "param1" : "Bourton Dickler",
                 "param2" : "73.4Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4Ml/d."
               }
             ],
              "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
      
              "use": [{
                      "purpose": "Potable Water Supply - Direct",
                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"12271.581",
                      "timeLimit": "No"
                    }],
      
                     //Previous versions of the licence data
                     "previousVersions": [
                      { }
                    ],
      
              "returnsRequirements":  [{
                                      "startDate":"20180119",
                                      "endDate":"",
                                      "reason":"New licence",
                                      "status":"approved",
                                      "additionalSubmissionOptions": ["multiple upload", "quarterly return submissions"],
                                      "username":"username@defra.gov.uk",
                                      "note":"",
                                      "requirements":[{
                                                      "id":772318,
                                                      "returnsCycle":"winter and all year",
                                                      "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                      "frequencyCollected":"daily",
                                                      "frequency":"daily",
                                                      "purpose":["Potable Water Supply Direct"],
                                                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                      "periodStart":"0401",
                                                      "periodEnd":"0331",
                                                      "timeLimit": "No",
                                                      "settings":["none"],
                                                        }]
                                          },
                                        ],
      
      
                                        "returns": [{
                                                      "id":772318,
                                                      "status": "due",
                                                      "due": "20240728",
                                                      "returnsCycle":"winter and all year",
                                                      "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                      "frequency": "daily",
                                                      "purpose":["Potable Water Supply Direct"],
                                                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                      "periodStart":"0401",
                                                      "periodEnd":"0331",
                                                      "returnsPeriodStart":"20240401",
                                                      "returnsPeriodEnd":"20240630",
                                                    }
                                                    ],
      
              "chargeInformation": [{
                  "chargeStart": "19 January 2018",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2021",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                },
              ],
      
              "agreements": [],
      
              "communications": [{
                  "type": "resume - Water abstraction alert",
                  "sent": "5 June 2020",
                  "sender": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
                {
                  "type": "stop - Water abstraction alert",
                  "sent": "17 April 2020",
                  "sender": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
                {
                  "type": "warning - Water abstraction alert",
                  "sent": "30 March 2020",
                  "sender": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
      
              ],
            },
    ],

    //Billinga account ID
    "BAID": "0",

    //billng accounts
    "billingAccounts": [{
        "number": "BA1234443S",
        "customer": "Bottled Water Plc",
        "billingContact": "",
      },
      {
        "number": "BA4444436C",
        "customer": "Robin Vithlhem-Smith",
        "billingContact": "",
      },
      {
        "number": "BA333339A",
        "customer": "Irene Briton",
        "billingContact": "",
      },
      {
        "number": "BA839340P",
        "customer": "D.B. Beecham-Smith",
        "billingContact": "",
      },
      {
        "number": "BA1232412",
        "customer": "Public Water Plc",
        "billingContact": "",
      },
    ],

    //Users
    "userID": "0",

    //Users
    "users": [{
      "email": "gbillington@bwplc.co.uk",
      "licences": "03/28/60/0032",
    }],

    //Customer/Company
    "customerID": "0",

    //Customer/Company
    "customers": [{
        "name": "Bottled Water Plc",
        "WAA": "post",
      },
      {
        "name": "Big Smith Farms Ltd",
        "WAA": "email",
      },
      {
        "name": "Irene Briton",
        "WAA": "post",
      },
      {
        "name": "Robin Vithlhem-Smith",
        "WAA": "post",
      },
      {
        "name": "D.B. Beecham-Smith",
        "WAA": "post",
      },
      {
        "name": "Public Water Plc",
        "WAA": "post",
      }
    ],


    //contacts
    "contactID": "0",

    "contacts": [{
        "name": "Jim Smith",
        "email": "",
        "type": "person",
        "title": "",
        "firstName": "Jim",
        "middleInitials": "",
        "lastName": "Smith",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Licence holder",
          "notices": [{
                        "type":"Renewals",
                        "sendBy": "post",
                        "addressID": "2",
                      }],
          "customer": "Big Smith Farms Ltd",
        }],
      },
      {
        "name": "Joanna Southall",
        "email": "",
        "type": "person",
        "title": "",
        "firstName": "Joanna",
        "middleInitials": "",
        "lastName": "Southall",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Contact",
          "notices": [{
                        "type": "Returns",
                        "sendBy": "post",
                        "addressID": "2",
                      }],
          "customer": "Big Smith Farms Ltd",
        }],
      },
      {
        "name": "Frank Thomas",
        "email": "fthomas@bsfarms.co.uk",
        "type": "person",
        "title": "",
        "firstName": "Frank",
        "middleInitials": "",
        "lastName": "Thomas",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Contact",
          "notices": [{
                        "type": "Water abstraction alerts",
                        "sendBy": "email",
                        "addressID": "2",
                      }],
          "customer": "Big Smith Farms Ltd",
        }],
      },
      {
        "wrls": "true",
        "name": "Janice Betrand",
        "email": "jbetrand@bsfarms.co.uk",
        "type": "person",
        "nameDetails": [{
        "title": "",
        "firstName": "Janice",
        "middleInitials": "",
        "lastName": "Betrand",
        "suffix": "",
        "department": "",
      }],
        "customers": [{
          "role": "Contact",
          "notices": [{
                        "type": "Water abstraction alerts",
                        "sendBy": "email",
                        "addressID": "2",
                      }],
          "customer": "Big Smith Farms Ltd",
        }],
      },
      {
        "wrls": "true",
        "name": "Accounts",
        "email": "accounts@bsfarms.co.uk",
        "type": "department",
        "nameDetails": [{
        "department": "Accounts",
      }],
        "customers": [{
          "role": "Contact",
          "notices": [],
          "customer": "Big Smith Farms Ltd",
        }],
      },
      {
        "name": "Geoffrey Billington",
        "email": "",
        "phone": "+4477382932933",
        "title": "",
        "firstName": "Geoffrey",
        "middleInitials": "",
        "lastName": "Billington",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Contact",
          "notices": [{
                        "type": "Returns",
                        "sendBy": "post",
                        "addressID": "1",
                      }],
          "customer": "Bottled Water Plc",
        }],
      },
      {
        "name": "Bottled Water Plc",
        "email": "",
        "type": "company",
        "department": "Head office",
        "customers": [{
          "role": "Licence holder,Billing contact",
          "notices": [{
                        "type": "Renewals",
                        "sendBy": "post",
                        "addressID": "0",
                      },
                      {
                        "type": "Water abstraction alerts",
                        "sendBy": "post",
                        "addressID": "0",
                      },
                      {
                        "type": "Bills",
                        "sendBy": "post",
                        "addressID": "1",
                      }],
          "customer": "Bottled Water Plc",
        }],
      },
      {
        "name": "Irene Briton",
        "email": "",
        "type": "person",
        "title": "",
        "firstName": "Irene",
        "middleInitials": "",
        "lastName": "Briton",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Licence holder,Billing contact",
          "notices": [{
                        "type": "Water abstraction alerts",
                        "sendBy": "post",
                        "addressID": "3",
                      },
                      {
                        "type": "Renewals",
                        "sendBy": "post",
                        "addressID": "3",
                      },
                      {
                        "type": "Returns",
                        "sendBy": "post",
                        "addressID": "3",
                      },
                      {
                        "type": "Bills",
                        "sendBy": "post",
                        "addressID": "3",
                      }],
          "customer": "Irene Briton",
        }],
      },
      {
        "name": "Robin Vithlhem-Smith",
        "email": "",
        "type": "person",
        "title": "",
        "firstName": "Robin",
        "middleInitials": "",
        "lastName": "Vithlhem-Smith",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Licence holder,Billing contact",
          "notices": [
                      {
                        "type": "Water abstraction alerts",
                        "sendBy": "post",
                        "addressID": "4",
                      },
                      {
                        "type": "Renewals",
                        "sendBy": "post",
                        "addressID": "4",
                      },

                      {
                        "type": "Bills",
                        "sendBy": "post",
                        "addressID": "4",
                      }],
          "customer": "Robin Vithlhem-Smith",
        }],
      },
      {
        "name": "Fiona Thomas",
        "email": "",
        "type": "person",
        "title": "",
        "firstName": "Fiona",
        "middleInitials": "",
        "lastName": "Thomas",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Contact",
          "notices": [{
                        "type": "Returns",
                        "sendBy": "post",
                        "addressID": "4",
                      }],
          "customer": "Robin Vithlhem-Smith",
        }],
      },
      {
        "name": "D.B. Beecham-Smith",
        "email": "",
        "type": "person",
        "title": "",
        "firstName": "D.B.",
        "middleInitials": "",
        "lastName": "Beecham-Smith",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Licence holder,Billing contact",
          "notices": [
                      {
                        "type": "Water abstraction alerts",
                        "sendBy": "post",
                        "addressID": "5",
                      },
                      {
                        "type": "Renewals",
                        "sendBy": "post",
                        "addressID": "5",
                      },
                      {
                        "type": "Returns",
                        "sendBy": "post",
                        "addressID": "5",
                      },
                      {
                        "type": "Bills",
                        "sendBy": "post",
                        "addressID": "5",
                      }],
          "customer": "D.B. Beecham-Smith",
        }],
      }
    ],

    //addresses
    "addressID": "0",

    "addresses": [{
        "address1": "15 Ward Street",
        "city": "Bath",
        "postcode": "BA1 5EH",
        "customers": [{
          "role": "Licence holder",
          "customer": "Bottled Water Plc",
        }],
      },
      {
        "address1": "67 Gainsborough",
        "city": "Poole",
        "postcode": "BH33 1QE",
        "customers": [{
          "role": "Billing,Returns",
          "customer": "Bottled Water Plc",
        }],
      },
      {
        "address1": "17 Hampshire way",
        "city": "Portsmouth",
        "postcode": "PO1 5YP",
        "customers": [{
          "customer": "Big Smith Farms Ltd",
          "role": "Licence holder,Returns",
        }],
      },
      {
        "address1": "1134 New road",
        "city": "Liverpool",
        "postcode": "L17 6RB",
        "customers": [{
          "customer": "Irene Briton",
          "role": "Licence holder,Billing,Returns",
        }],
      },
      {
        "address1": "73 Old road",
        "city": "London",
        "postcode": "E16 8VB",
        "customers": [{
          "customer": "Robin Vithlhem-Smith",
          "role": "Licence holder,Billing,Returns",
        }],
      },
      {
        "address1": "500 Long street",
        "city": "Derby",
        "postcode": "D1 2RR",
        "customers": [{
          "customer": "D.B. Beecham-Smith",
          "role": "Licence holder,Billing,Returns",
        }],
      }

    ],
    //WAA
    "waaType": "warning",
    "recipients": 4,
    "recipientsLetter": 3,
    "recipientsEmail": 1,
    "watercourse": "Hull",
    "gaugingStation": "Helmspholme",
    "flowThreshold": "45.5",
    "contactEmail": "something@somewhere.co.uk",
    "licenceList": "03/28/60/0032",
    "selectedTags": [0],


    //sortby
    "sort": "dateDescending",

    //filtercaption default
    "filterCaption": "Showing all sent notices.",

    //Notification report
    "notifications": [{
                        "date": "20201222",
                        "notification": "Returns: reminder",
                        "type": "returns",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201217",
                        "notification": "Returns: send paper forms",
                        "type": "returns",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201201",
                        "notification": "Returns: send paper forms",
                        "type": "returns",
                        "sentBy": "rachel.pilkns@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201125",
                        "notification": "Returns: send paper forms",
                        "type": "returns",
                        "sentBy": "jim.pearce@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },

                      {
                        "date": "20201121",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "ralph.biddwell@defra.gov.uk",
                        "numberOfrecipients": "5",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201119",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201115",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201110",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201101",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201031",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201030",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201017",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201015",
                        "notification": "Expiring licence(s): invitation to renew",
                        "type": "renewals",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201007",
                        "notification": "Returns: send paper forms",
                        "type": "returns",
                        "sentBy": "rachel.pilkns@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "20201006",
                        "notification": "Returns: send paper forms",
                        "type": "returns",
                        "sentBy": "rachel.pilkns@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                        },
                        {
                          "date": "20201005",
                          "notification": "Returns: send paper forms",
                          "type": "returns",
                          "sentBy": "rachel.pilkns@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20201004",
                          "notification": "Returns: send paper forms",
                          "type": "returns",
                          "sentBy": "rachel.pilkns@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200930",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200929",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200928",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200927",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200926",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200926",
                          "notification": "Hands off flow: resume abstraction",
                          "type": "hands off flow notices",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200920",
                          "notification": "Hands off flow: stop or reduce abstraction",
                          "type": "hands off flow notices",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200919",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200915",
                          "notification": "Hands off flow: stop or reduce abstraction",
                          "type": "hands off flow notices",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200914",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200912",
                          "notification": "Returns: reminder",
                          "type": "returns",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200904",
                          "notification": "Returns: send paper forms",
                          "type": "returns",
                          "sentBy": "rachel.pilkns@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200901",
                          "notification": "Hands off flow: levels warning",
                          "type": "hands off flow notices",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20200831",
                          "notification": "Returns: invitation",
                          "type": "returns",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        ],


   "dates": [
     {"date": "20200831"},
     {"date": "20200830"},
     {"date": "20190703"},
     {"date": "20150103"},
     {"date": "20180103"},
     {"date": "20180203"},
     {"date": "20180203"},
   ],



    "allFlowThresholdsMegaLitresPerDay": [175,160,155],
    "allLevelThresholdsMetresAboveOrdinanceDatum": [2.123],
    "waterAbstractionAlert": [],
    "selectedLicences": [],


  //TPT Bill run

   "tptBillRun":[{
    "licence": "00/22/001/02",
    "licenceAggregate": "00/22/001/02<br><span class='govuk-!-font-size-16'>Aggregate</span>",
    "billingContact": "Irene Briton",
    "ready": "no",
    "edited": "",
    "elements": [{
          "issue": "Incomplete returns",
          "billableReturns": "0",
          "reportedReturns": "0ML",
          "edited": "",
          "ready": "no",
        }],
      },
      {
    "licence": "03/28/60/0032",
        "licenceAggregate": "03/28/60/0032",
    "billingContact": "Bottled Water Plc",
    "ready": "no",
    "edited": "",
    "elements": [{
      "issue": "Over abstraction",
      "billableReturns": "100",
      "reportedReturns": "0ML",
      "edited": "",
      "ready": "no",
          }],
      },
      {
    "licence": "03/28/60/0035",
        "licenceAggregate": "03/28/60/0035",
    "billingContact": "Bottled Water Plc",
    "ready": "no",
    "edited": "",
    "elements": [{
      "issue": "Received but not processed",
      "billableReturns": "100",
      "reportedReturns": "0ML",
      "edited": "",
      "ready": "no",
        }],
      },
     {
       "licence": "11/22/32/02",
       "licenceAggregate": "11/22/32/02",
       "billingContact": "D.B. Beecham-Smith",
       "ready": "yes",
       "edited": "",
       "elements": [{
         "issue": "Incomplete returns",
         "billableReturns": "100",
         "reportedReturns": "0ML",
         "edited": "",
         "ready": "yes",
       }],
     },
       {
         "licence": "03/28/60/0726",
         "licenceAggregate": "03/28/60/0726",
         "billingContact": "Robin Vithlhem-Smith",
         "ready": "yes",
         "edited": "",
         "elements": [{
           "issue": "Incomplete returns",
           "billableReturns": "100",
           "reportedReturns": "0ML",
           "edited": "",
           "ready": "yes",
         }],
       }],

//suplementary manual bill run review data

"suppManBillRun":[{
 "licence": "03/28/60/0032",
 "billingContact": "Bottled Water Plc",
 "ready": "yes",
 "edited": "",
 "fys":[{
 "elements": [{
   "issue": "No returns",
   "billableReturns": "100",
   "reportedReturns": "0Ml",
   "edited": "",
   "ready": "yes",
   "fy": 2021,
 }],
},{
 "elements": [{
   "issue": "No returns",
   "billableReturns": "100",
   "reportedReturns": "0Ml",
   "edited": "",
   "ready": "yes",
   "fy": 2020,
 }],
},{
 "elements": [{
   "issue": "No returns",
   "billableReturns": "100",
   "reportedReturns": "0Ml",
   "edited": "",
   "ready": "yes",
   "fy": 2019,
 }],
},
{
 "elements": [{
   "issue": "No returns",
   "billableReturns": "100",
   "reportedReturns": "0Ml",
   "edited": "",
   "ready": "yes",
   "fy": 2018,
 }],
},{
 "elements": [{
   "issue": "No returns",
   "billableReturns": "100",
   "reportedReturns": "0Ml",
   "edited": "",
   "ready": "yes",
   "fy": 2017,
 }],
}
],
    }],



  //Station data

  "stationID": "0",
  "stationReading": "190",

  "stations": [{
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/1029TH',
      RLOIid: '7041',
      catchmentName: 'Cotswolds',
      dateOpened: '1994-01-01',
      easting: 417990,
      label: 'Bourton Dickler',
      lat: 51.874767,
      long: -1.740083,
      measures: [
        [Object],
        [Object]
      ],
      northing: 219610,
      notation: '1029TH',
      riverName: 'River Dikler',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/1029TH/stageScale',
      stationReference: '1029TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Little Rissington',
      wiskiID: '1029TH',
      tags: [{
          licenceNumber: "03/28/60/0032",
          status: "no restrictions",
          tagValues: [{
              thresholdValue: "175",
              thresholdUnits: "megaLitresPerDay",
              conditionType: "reduce",
              reductionAmount: "100",
              reductionAmountUnits: "m3/s",
              maxVolumeLimit: "no",
              linkedCondtion: "Flow cessation condition, ID758342",
              abstractionPeriod: "1 April to 31 October",
              notificationType: "flow",
            },
            {
              thresholdValue: "160",
              thresholdUnits: "megaLitresPerDay",
              conditionType: "stop",
              reductionAmount: "",
              reductionAmountUnits: "",
              maxVolumeLimit: "",
              linkedCondtion: "Flow cessation condition, ID758342",
              abstractionPeriod: "1 April to 31 October",
              notificationType: "flow",
            }
          ],
        },
        {
          licenceNumber: "03/28/60/0726",
          status: "no restrictions",
          tagValues: [{
            thresholdValue: "175",
            thresholdUnits: "megaLitresPerDay",
            notificationType: "flow",
            linkedCondtion: "Flow cessation condition, ID598962",
            abstractionPeriod: "1 April to 31 October",
            conditionType: "reduce",
            reductionAmount: "100",
            reductionAmountUnits: "m3/s",
            maxVolumeLimit: "yes"
          }],

        },
        {
          licenceNumber: "11/22/32/02",
          status: "no restrictions",
          tagValues: [{
            thresholdValue: "2.123",
            thresholdUnits: "metresAboveOrdinanceDatum",
            notificationType: "level",
            linkedCondtion: "Flow cessation condition, ID598962",
            abstractionPeriod: "1 November to 31 March",
            conditionType: "stop",
            reductionAmount: "",
            reductionAmountUnits: "",
            maxVolumeLimit: ""
          }],
        },
        {
          licenceNumber: "03/28/60/0035",
          status: "no restrictions",
          tagValues: [{
            thresholdValue: "155",
            thresholdUnits: "megaLitresPerDay",
            notificationType: "flow",
            linkedCondtion: "Flow cessation condition, ID598962",
            abstractionPeriod: "1 April to 31 October",
            conditionType: "stop",
            reductionAmount: "",
            reductionAmountUnits: "",
            maxVolumeLimit: ""
          }],
        },
        {
          licenceNumber: "00/22/001/02",
          status: "no restrictions",
          tagValues: [{
            thresholdValue: "155",
            thresholdUnits: "megaLitresPerDay",
            notificationType: "flow",
            linkedCondtion: "Flow cessation condition, ID598962",
            abstractionPeriod: "1 April to 31 October",
            conditionType: "stop",
            reductionAmount: "",
            reductionAmountUnits: "",
            maxVolumeLimit: ""
          }],
        },
      ]
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E2043',
      RLOIid: '6022',
      catchmentName: 'Welland',
      dateOpened: '1992-01-01',
      datumOffset: 2,
      easting: 528000,
      label: 'Surfleet Sluice',
      lat: 52.845991,
      long: -0.100848,
      measures: [
        [Object]
      ],
      northing: 329300,
      notation: 'E2043',
      riverName: 'River Glen',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/E2043/stageScale',
      stationReference: 'E2043',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Surfleet Seas End',
      wiskiID: 'L31004',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/52119',
      RLOIid: '3072',
      catchmentName: 'Parrett, Brue and West Somerset Streams',
      dateOpened: '1997-01-01',
      datumOffset: 10,
      easting: 344383,
      label: 'Gaw Bridge',
      lat: 50.976043,
      long: -2.793549,
      measures: [
        [Object]
      ],
      northing: 119926,
      notation: '52119',
      riverName: 'River Parrett',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/52119/stageScale',
      stationReference: '52119',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Kingsbury Episcopi',
      wiskiID: '520320_FW',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E21136',
      RLOIid: '6177',
      catchmentName: 'Upper and Bedford Ouse',
      dateOpened: '1996-10-01',
      datumOffset: 6.3,
      easting: 529500,
      gridReference: 'TL 2950 7120',
      label: 'Hemingford',
      lat: 52.323618,
      long: -0.101287,
      measures: [
        [Object]
      ],
      northing: 271200,
      notation: 'E21136',
      riverName: 'River Great Ouse',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/E21136/stageScale',
      stationReference: 'E21136',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Hemingford Grey',
      wiskiID: 'L33865',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/2067',
      RLOIid: '2032',
      catchmentName: 'Worcestershire Middle Severn',
      dateOpened: '1976-04-06',
      easting: 386120,
      label: 'Swindon',
      lat: 52.51274,
      long: -2.205945,
      measures: [
        [Object]
      ],
      northing: 290560,
      notation: '2067',
      riverName: 'Smestow Brook',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/2067/stageScale',
      stationReference: '2067',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Swindon',
      wiskiID: '2067',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/48143',
      RLOIid: '3158',
      catchmentName: 'Fal and St Austell Streams',
      dateOpened: '2000-01-28',
      datumOffset: 13,
      easting: 178065,
      label: 'Penryn Trelawney Park',
      lat: 50.172659,
      long: -5.109416,
      measures: [
        [Object]
      ],
      northing: 34920,
      notation: '48143',
      riverName: 'Praze Stream',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/48143/stageScale',
      stationReference: '48143',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Penryn',
      wiskiID: 'S19726_FW',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/720215',
      RLOIid: '5022',
      catchmentName: 'Lune and Wyre',
      dateOpened: '1977-01-01',
      easting: 351210,
      label: 'A6 Bridge',
      lat: 53.858854,
      long: -2.743276,
      measures: [
        [Object]
      ],
      northing: 440550,
      notation: '720215',
      riverName: 'River Brock',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/720215/stageScale',
      stationReference: '720215',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Bilsborrow',
      wiskiID: '720215',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E9250',
      easting: 517850,
      gridReference: 'TQ178197',
      label: 'HATTERELL BRIDGE GS',
      lat: 50.965124,
      long: -0.323121,
      measures: [
        [Object]
      ],
      northing: 119750,
      notation: 'E9250',
      stationReference: 'E9250',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/F1906',
      RLOIid: '8276',
      catchmentName: 'Wharfe and Lower Ouse',
      dateOpened: '2001-07-11',
      easting: 398476,
      gridReference: 'SD9847664978',
      label: 'Netherside Hall',
      lat: 54.080705,
      long: -2.024779,
      measures: [
        [Object],
        [Object]
      ],
      northing: 464978,
      notation: 'F1906',
      riverName: 'River Wharfe',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/F1906/stageScale',
      stationReference: 'F1906',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Netherside Hall',
      wiskiID: 'F1906',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E8266',
      RLOIid: '1152',
      catchmentName: 'Ouse',
      dateOpened: '1981-05-01',
      easting: 533288,
      gridReference: 'TQ3328828283',
      label: 'Ardingly',
      lat: 51.038451,
      long: -0.100268,
      measures: [
        [Object]
      ],
      northing: 128283,
      notation: 'E8266',
      riverName: 'River Ouse',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/E8266/stageScale',
      stationReference: 'E8266',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Ardingly',
      wiskiID: '352835027',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/1771TH',
      RLOIid: '7080',
      catchmentName: 'Vale of White Horse',
      dateOpened: '1991-01-01',
      easting: 438260,
      label: 'Letcombe Regis',
      lat: 51.571482,
      long: -1.449342,
      measures: [
        [Object]
      ],
      northing: 185990,
      notation: '1771TH',
      riverName: 'Letcombe Brook',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/1771TH/stageScale',
      stationReference: '1771TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Letcombe Regis',
      wiskiID: '1771TH',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/531118',
      RLOIid: '3411',
      catchmentName: 'Bristol Avon Little Avon Axe and North Somerset St',
      dateOpened: '2009-07-24',
      easting: 363940,
      gridReference: 'ST6394080460',
      label: 'Bradley Bridge',
      lat: 51.521892,
      long: -2.521122,
      measures: [
        [Object]
      ],
      northing: 180460,
      notation: '531118',
      riverName: 'Bradley Brook',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/531118/stageScale',
      stationReference: '531118',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Winterbourne',
      wiskiID: '530260',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/52207',
      RLOIid: '3057',
      catchmentName: 'Parrett, Brue and West Somerset Streams',
      dateOpened: '1964-10-01',
      easting: 358984,
      label: 'Lovington',
      lat: 51.083697,
      long: -2.586936,
      measures: [
        [Object]
      ],
      northing: 131762,
      notation: '52207',
      riverName: 'River Brue',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/52207/stageScale',
      stationReference: '52207',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Lovington',
      wiskiID: '520920',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E1147',
      RLOIid: '6063',
      catchmentName: 'Witham',
      dateOpened: '1979-01-01',
      datumOffset: 0.02,
      easting: 524600,
      label: 'Goulceby',
      lat: 53.296901,
      long: -0.131922,
      measures: [
        [Object]
      ],
      northing: 379400,
      notation: 'E1147',
      riverName: 'River Bain',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/E1147/stageScale',
      stationReference: 'E1147',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Goulceby',
      wiskiID: '030011',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E70039',
      RLOIid: '6282',
      catchmentName: 'England - East Coast',
      dateOpened: '2012-01-19',
      easting: 654780,
      gridReference: 'TM 5478 9274',
      label: 'Lowestoft',
      lat: 52.473075,
      long: 1.750085,
      measures: [
        [Object]
      ],
      northing: 292741,
      notation: 'E70039',
      riverName: 'Tide',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/E70039/stageScale',
      stationReference: 'E70039',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Lowestoft',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E70024',
      easting: 654781,
      gridReference: 'TM 54781 92745',
      label: 'Lowestoft',
      lat: 52.47311,
      long: 1.75011,
      measures: [
        [Object]
      ],
      northing: 292745,
      notation: 'E70024',
      stationReference: 'E70024',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/693115',
      RLOIid: '5197',
      catchmentName: 'Upper Mersey',
      dateOpened: '2006-10-27',
      easting: 380508,
      label: 'Northern Moor',
      lat: 53.407591,
      long: -2.294665,
      measures: [
        [Object]
      ],
      northing: 390128,
      notation: '693115',
      riverName: 'Baguley Brook',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/693115/stageScale',
      stationReference: '693115',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Northern Moor',
      wiskiID: '693115',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/690611',
      RLOIid: '5034',
      catchmentName: 'Northern Manchester',
      dateOpened: '1995-04-27',
      easting: 384850,
      label: 'Collyhurst Weir',
      lat: 53.493682,
      long: -2.229815,
      measures: [
        [Object]
      ],
      northing: 399690,
      notation: '690611',
      riverName: 'River Irk',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/690611/stageScale',
      stationReference: '690611',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Manchester',
      wiskiID: '690611',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E21720',
      RLOIid: '6199',
      catchmentName: 'Cam and Ely Ouse (Including South Level)',
      dateOpened: '1980-04-15',
      easting: 541524,
      gridReference: 'TL 41524 52377',
      label: 'Haslingfield Burnt Mill',
      lat: 52.151539,
      long: 0.067146,
      measures: [
        [Object]
      ],
      northing: 252377,
      notation: 'E21720',
      riverName: 'River Rhee',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/E21720/stageScale',
      stationReference: 'E21720',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Haslingfield',
      wiskiID: '033021',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/2804TH',
      RLOIid: '7174',
      catchmentName: 'Pinn',
      dateOpened: '2000-01-01',
      easting: 512244,
      gridReference: 'TQ1224489069',
      label: 'Pinner, Eastcote Road',
      lat: 51.589297,
      long: -0.381167,
      measures: [
        [Object]
      ],
      northing: 189069,
      notation: '2804TH',
      riverName: 'River Pinn',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/2804TH/stageScale',
      stationReference: '2804TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Pinner',
      wiskiID: '2804TH',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/2406TH',
      RLOIid: '7135',
      catchmentName: 'Loddon',
      dateOpened: '2006-01-01',
      easting: 465884,
      label: 'Chineham',
      lat: 51.296962,
      long: -1.056426,
      measures: [
        [Object]
      ],
      northing: 155738,
      notation: '2406TH',
      riverName: "Petty's Brook",
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/2406TH/stageScale',
      stationReference: '2406TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Chineham',
      wiskiID: '2406TH',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/4615TH',
      RLOIid: '7329',
      catchmentName: 'Upper Lee',
      dateOpened: '2000-01-01',
      downstageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/4615TH/downstageScale',
      easting: 505740,
      gridReference: 'TL0574024440',
      label: 'Luton, Toddington Road',
      lat: 51.908463,
      long: -0.46427,
      measures: [
        [Object],
        [Object],
        [Object]
      ],
      northing: 224440,
      notation: '4615TH',
      riverName: 'River Lee',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/4615TH/stageScale',
      stationReference: '4615TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Leagrave',
      wiskiID: '4615TH',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/43165',
      RLOIid: '3374',
      catchmentName: 'Hampshire Avon',
      dateOpened: '2008-10-20',
      easting: 413860,
      gridReference: 'SU 13860 30819',
      label: 'Salisbury Ashley Road',
      lat: 51.076527,
      long: -1.803528,
      measures: [
        [Object]
      ],
      northing: 130819,
      notation: '43165',
      riverName: 'River Avon',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/43165/stageScale',
      stationReference: '43165',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Salisbury',
      wiskiID: '432170',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/2020',
      RLOIid: '2014',
      catchmentName: 'Shropshire Middle Severn',
      dateOpened: '1963-09-25',
      easting: 343440,
      label: 'Yeaton',
      lat: 52.76777,
      long: -2.839715,
      measures: [
        [Object]
      ],
      northing: 319240,
      notation: '2020',
      riverName: 'River Perry',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/2020/stageScale',
      stationReference: '2020',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Yeaton',
      wiskiID: '2020',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/3400TH',
      RLOIid: '7267',
      catchmentName: 'Thames from Hurley to Teddington',
      dateOpened: '1983-01-01',
      easting: 517700,
      label: 'Kingston',
      lat: 51.415005,
      long: -0.308869,
      measures: [
        [Object],
        [Object],
        [Object]
      ],
      northing: 169800,
      notation: '3400TH',
      riverName: 'River Thames',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/3400TH/stageScale',
      stationReference: '3400TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Kingston Upon Thames',
      wiskiID: '3400TH',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/L1931',
      RLOIid: '8277',
      catchmentName: 'Wharfe and Lower Ouse',
      dateOpened: '2007-11-07',
      easting: 407551,
      gridReference: 'SE0755149817',
      label: 'Addingham, Town Beck',
      lat: 53.944393,
      long: -1.886441,
      measures: [
        [Object]
      ],
      northing: 449817,
      notation: 'L1931',
      riverName: 'Town Beck',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/L1931/stageScale',
      stationReference: 'L1931',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Addingham',
      wiskiID: 'L1931',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/1090_w2TH',
      RLOIid: '7045',
      catchmentName: 'Cotswolds',
      dateOpened: '1986-01-01',
      easting: 440100,
      label: 'Newbridge Weir B',
      lat: 51.713499,
      long: -1.420988,
      measures: [
        [Object]
      ],
      northing: 201800,
      notation: '1090_w2TH',
      riverName: 'River Windrush',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/1090_w2TH/stageScale',
      stationReference: '1090_w2TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Standlake',
      wiskiID: '1090_w2TH',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/44112',
      RLOIid: '3288',
      catchmentName: 'West Dorset Streams',
      dateOpened: '1989-06-01',
      easting: 354990,
      label: 'Litton Cheney',
      lat: 50.710758,
      long: -2.638832,
      measures: [
        [Object]
      ],
      northing: 90320,
      notation: '44112',
      riverName: 'Litton Cheney Stream',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/44112/stageScale',
      stationReference: '44112',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Litton Cheney',
      wiskiID: '447010',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/023008',
      RLOIid: '8167',
      catchmentName: 'Tyne',
      dateOpened: '1968-01-01',
      easting: 386800,
      label: 'Rede Bridge',
      lat: 55.142955,
      long: -2.208614,
      measures: [
        [Object]
      ],
      northing: 583200,
      notation: '023008',
      riverName: 'River Rede',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/023008/stageScale',
      stationReference: '023008',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Redesmouth',
      wiskiID: '023008',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/690203',
      RLOIid: '5231',
      catchmentName: 'Northern Manchester',
      dateOpened: '1993-02-26',
      easting: 388275,
      gridReference: 'SD 88275 12740',
      label: 'Rochdale ETW',
      lat: 53.611067,
      long: -2.178685,
      measures: [
        [Object]
      ],
      northing: 412740,
      notation: '690203',
      riverName: 'River Roch',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/690203/stageScale',
      stationReference: '690203',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Rochdale',
      wiskiID: '690203',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/4036',
      RLOIid: '2114',
      catchmentName: 'Idle and Torne',
      dateOpened: '1969-07-24',
      easting: 469990,
      label: 'Twyford Bridge',
      lat: 53.26962,
      long: -0.952008,
      measures: [
        [Object],
        [Object]
      ],
      northing: 375250,
      notation: '4036',
      riverName: 'River Poulter',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/4036/stageScale',
      stationReference: '4036',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Elkesley',
      wiskiID: '4036',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/46128',
      RLOIid: '3210',
      catchmentName: 'Teign Torbay and South Hams',
      dateOpened: '1997-01-01',
      easting: 277090,
      label: 'Rolster Bridge',
      lat: 50.393426,
      long: -3.73051,
      measures: [
        [Object]
      ],
      northing: 56270,
      notation: '46128',
      riverName: 'River Harbourne',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/46128/stageScale',
      stationReference: '46128',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Harbertonford',
      wiskiID: 'S46456_FW',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/4827TH',
      RLOIid: '7338',
      catchmentName: 'Beane',
      dateOpened: '1973-01-01',
      easting: 527488,
      gridReference: 'TL2748821164',
      label: 'Bragbury Park',
      lat: 51.874477,
      long: -0.149495,
      measures: [
        [Object]
      ],
      northing: 221164,
      notation: '4827TH',
      riverName: 'Stevenage Brook',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/4827TH/stageScale',
      stationReference: '4827TH',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Bragbury End',
      wiskiID: '4827TH',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/055003_TG_316',
      RLOIid: '4019',
      catchmentName: 'Wye',
      dateOpened: '1970-01-01',
      easting: 354850,
      label: 'Lugwardine',
      lat: 52.061919,
      long: -2.659977,
      measures: [
        [Object]
      ],
      northing: 240600,
      notation: '055003_TG_316',
      riverName: 'River Lugg',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/055003_TG_316/stageScale',
      stationReference: '055003_TG 316',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Lugwardine',
      wiskiID: '055003',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/L2011',
      RLOIid: '8078',
      catchmentName: 'Wharfe and Lower Ouse',
      dateOpened: '1996-03-31',
      easting: 455512,
      gridReference: 'SE5551239809',
      label: 'Nun Appleton Fleet Pumping Station',
      lat: 53.851542,
      long: -1.15762,
      measures: [
        [Object]
      ],
      northing: 439809,
      notation: 'L2011',
      riverName: 'River Wharfe',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/L2011/stageScale',
      stationReference: 'L2011',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Nun Appleton',
      wiskiID: 'L2011',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/L08015',
      RLOIid: '8064',
      catchmentName: 'Don and Rother',
      dateOpened: '2004-02-23',
      easting: 442100,
      label: 'Darfield Bridge',
      lat: 53.536358,
      long: -1.366253,
      measures: [
        [Object],
        [Object]
      ],
      northing: 404600,
      notation: 'L08015',
      riverName: 'River Dearne',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/L08015/stageScale',
      stationReference: 'L08015',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Darfield',
      wiskiID: 'L08015',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/2206',
      easting: 385049,
      gridReference: 'SO8504905381',
      label: 'Merrywalks LVL',
      lat: 51.746918,
      long: -2.217953,
      measures: [
        [Object],
        [Object]
      ],
      northing: 205381,
      notation: '2206',
      stationReference: '2206',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/4161',
      RLOIid: '2188',
      catchmentName: 'Soar',
      dateOpened: '2001-12-17',
      easting: 465490,
      gridReference: 'SP65499781',
      label: 'Great Glen',
      lat: 52.574167,
      long: -1.035067,
      measures: [
        [Object]
      ],
      northing: 297810,
      notation: '4161',
      riverName: 'River Sence',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/4161/stageScale',
      stationReference: '4161',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Great Glen',
      wiskiID: '4161',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/693426',
      RLOIid: '5114',
      catchmentName: 'Upper Mersey',
      dateOpened: '2008-03-21',
      easting: 390190,
      label: 'Prestbury',
      lat: 53.289231,
      long: -2.148611,
      measures: [
        [Object]
      ],
      northing: 376930,
      notation: '693426',
      riverName: 'River Bollin',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/693426/stageScale',
      stationReference: '693426',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Prestbury',
      wiskiID: '693426',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E72639',
      RLOIid: '3014',
      catchmentName: 'England - South Coast',
      dateOpened: '2012-02-24',
      easting: 349530,
      gridReference: 'ST 4953 7815',
      label: 'Avonmouth Portbury',
      lat: 51.49999,
      long: -2.728468,
      measures: [
        [Object]
      ],
      northing: 178147,
      notation: 'E72639',
      riverName: 'Tide',
      stageScale: 'http://environment.data.gov.uk/flood-monitoring/id/stations/E72639/stageScale',
      stationReference: 'E72639',
      status: 'http://environment.data.gov.uk/flood-monitoring/def/core/statusActive',
      town: 'Avonmouth',
      wiskiID: '530102_FW',
      tags: []
    },
    {
      '@id': 'http://environment.data.gov.uk/flood-monitoring/id/stations/E72624',
      easting: 349530,
      gridReference: 'ST 49530 78148',
      label: 'Avonmouth Portbury',
      lat: 51.5,
      long: -2.72847,
      measures: [
        [Object]
      ],
      northing: 178148,
      notation: 'E72624',
      stationReference: 'E72624',
      tags: []
    }
  ],



  // Insert values here
}



//Extra session data if needed
/*,
{
  "purpose":"Spray irrigation",
  "description":"Otterton borehole 1a, Time limited increase",
  "abstractionStartDay": "1",
  "abstractionStartMonth": "4",
  "abstractionEndDay": "31",
  "abstractionEndMonth": "3",
  "billableQuantity": "250,000",
  "authorisedQuantity": "250,000",
  "timeLimit": "Yes",
  "source":"Unsupported",
  "season":"All year",
  "loss":"High"
},
{
  "purpose":"Trickle irrigation",
  "description":"Otterton borehole 2b",
  "abstractionStartDay": "1",
  "abstractionStartMonth": "4",
  "abstractionEndDay": "31",
  "abstractionEndMonth": "3",
  "billableQuantity": "750,000",
  "authorisedQuantity": "750,000",
  "timeLimit": "No",
  "source":"Unsupported",
  "season":"All year",
  "loss":"High"
}
*/

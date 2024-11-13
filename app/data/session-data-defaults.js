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

    "returnsPeriods": [
      {
        "title": "Quarterly",
        "startDate": "1001",
        "endDate": "1231",
         "dueDate": "0128"
      },
      {
        "title": "Quarterly",
        "startDate": "0101",
        "endDate": "0331",
         "dueDate": "0428"
      },
      {
      "title": "Winter and all year annual",
      "startDate": "0401",
      "endDate": "0331",
      "dueDate": "0428"
      },
      {
        "title": "Quarterly",
        "startDate": "0401",
        "endDate": "0630",
         "dueDate": "0728"
      },
      {
        "title": "Quarterly",
        "startDate": "0701",
        "endDate": "0930",
         "dueDate": "1028"
      },
      {
        "title": "Summer annual",
        "startDate": "1101",
        "endDate": "1031",
         "dueDate": "1128"
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
    "returnsRouteVersion" : 3,
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
        "effectiveDate": "1 June 1985",
        "expired": "true",
        "billingRegion": "Midlands",

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['6'],
          "method": "letter",
          "addressID": "6"
        }],

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

              "returnsRequirements":  [{
                "startDate":"20180401",
                "endDate":"",
                "reason":"Major change",
                "status":"active",
                "additionalSubmissionOptions": ["none"],
                "username":"username@defra.gov.uk",
                "note":"",
                "requirements":[{
                                "id":823188,
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
                                    "id":823188,
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
                                "id":823188,
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
                                "versions": [],
                              }
                              ],

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
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something1@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
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
        "effectiveDate": "1 June 1985",
        "expired": "false",
        "billingRegion": "North West",

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['3'],
          "method": "letter",
           "addressID": "6"
        }],

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

              "returnsRequirements":  [{
                "startDate":"20180401",
                "endDate":"",
                "reason":"Major change",
                "status":"active",
                "additionalSubmissionOptions": ["none"],
                "username":"username@defra.gov.uk",
                "note":"",
                "requirements":[{
                                "id":323188,
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
                                    "id":323188,
                                    "returnsCycle":"summer",
                                    "description":"River Swale - Helperby",
                                    "frequencyCollected":"monthly",
                                    "frequency":"monthly",
                                    "purpose":["Spray irrigation - direct"],
                                    "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                    "periodStart":"0401",
                                    "periodEnd":"0331",
                                    "timeLimit": "No",
                                    "settings":["none"],
                                      }]
                        }
                  ],


                  "returns": [{
                                "id":323188,
                                "status": "completed",
                                "due": "20230428",
                                "returnsCycle":"summer",
                                "description":"River Swale - Helperby",
                                "frequency": "monthly",
                                "purpose":["Spray irrigation - direct"],
                                "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                "periodStart":"0401",
                                "periodEnd":"0331",
                                "returnsPeriodStart":"20220401",
                                "returnsPeriodEnd":"20230331",
                                "versions": [{"id":0,
                                  "submittedBy":"testuser@gov.uk",
                                  "submittedDate":"20230425",
                                  "units":"cm3",
                                  "readingsOrVolumes":"volumes",
                                  "nilReturn":false,
                                  "notes" : "",
                                  "meterDetails":{"make":"Powerflow","serialNumber":"7777777", "x10": false, "startReading": "", "endReading": ""},
                                  "lines":[{
                                    "date": "20220401",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220501",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220601",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220701",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220801",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220901",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "202201001",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20221101",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20221201",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20230101",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20230201",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20230301",
                                    "reading": "",
                                    "volume": "10"
                                  }
                                ],
                                  "monthTotals":[{"month":"April","year":"2022","total":"10"},{"month":"May","year":"2022","total":"10"},{"month":"June","year":"2022","total":"10"},{"month":"July","year":"2022","total":"10"},{"month":"August","year":"2022","total":"10"},{"month":"September","year":"2022","total":"10"},{"month":"October","year":"2022","total":"10"},{"month":"November","year":"2022","total":"10"},{"month":"December","year":"2022","total":"10"},{"month":"January","year":"2023","total":"10"},{"month":"February","year":"2023","total":"10"},{"month":"March","year":"2023","total":"10"}]
                                }],
                              }
                              ],

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
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something2@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
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
        "effectiveDate": "1 April 2022",
        "expired": "false",
        "billingRegion": "South West",

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['1'],
          "method": "letter",
          "addressID": "4"
        }],

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
        "effectiveDate": "1 June 1985",
        "expired": "false",
        "billingRegion": "North East",

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['3'],
          "method": "letter",
          "addressID": "1"
        },{
          "type": "returns",
          "id": ['2'],
          "method": "email",
          "addressID": "1"
        },],

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

        "returnsRequirements":  [{"startDate":"19850601","endDate":"","createdDate":"20241018","reason":"New licence","additionalSubmissionOptions":["none"],"status":"approved","username":"username@defra.gov.uk","note":"","requirements":[{"id":808621,"description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.","title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.","frequency":"monthly","frequencyCollected":"monthly","settings":["none"],"purpose":["Spray irrigation - direct"],"points":["At National Grid Reference SU 190683 (Marlborough)","At National Grid Reference SU 190679 (Marlborough)","At National Grid Reference SU 188678 (Marlborough)","At National Grid Reference SU 187680 (Marlborough)"],"periodStart":"0401","periodEnd":"1031","timeLimit":"No","returnsCycle":"summer","amount":"125"}]}],

        "returns": [{"id":558734,
          "status":"due",
          "due":"20241128",
          "returnsCycle":"summer",
          "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
          "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
          "frequency":"monthly",
          "settings":["none"],
          "purpose":["Spray irrigation - direct"],
          "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
          "periodStart":"0401",
          "periodEnd":"1031",
          "returnsPeriodStart":"20231101",
          "returnsPeriodEnd":"20241031",
          "versions":[]
          },{"id":558735,
            "status":"due",
            "due":"20241128",
            "returnsCycle":"summer",
            "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
            "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
            "frequency":"monthly",
            "settings":["none"],
            "purpose":["Spray irrigation - direct"],
            "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
            "periodStart":"0401",
            "periodEnd":"1031",
            "returnsPeriodStart":"20231101",
            "returnsPeriodEnd":"20241031",
            "versions":[]
            }],

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
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
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
        "effectiveDate": "1 September 1990",
        "expired": "false",
        "billingRegion": "Anglian",

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['3'],
          "method": "letter",
          "addressID": "0"
        }],

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

        "returnsRequirements":  [{
                                "startDate":"19900901",
                                "endDate":"",
                                "createdDate":"19900901",
                                "reason":"Error correction",
                                "additionalSubmissionOptions":["none"],
                                "status":"approved",
                                "username":"username@defra.gov.uk",
                                "note":"Corrected error in frequency",
                                  "requirements":[{
                                                "id":660257,
                                                "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "frequency":"monthly",
                                                "frequencyCollected":"monthly",
                                                "settings":["none"],
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"1101",
                                                "periodEnd":"0331",
                                                "timeLimit":"No",
                                                "returnsCycle":"winter and all year",
                                                "amount":"125"}
                                                ]},
                              {"startDate":"19900901",
                                "endDate":"",
                                "createdDate":"20240906",
                                "reason":"New licence",
                                "additionalSubmissionOptions":["none"],
                                "status":"replaced",
                                "username":"username@defra.gov.uk",
                                "note":"",
                                  "requirements":[{
                                                "id":660257,
                                                "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "frequency":"daily",
                                                "frequencyCollected":"daily",
                                                "settings":["none"],
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"1101",
                                                "periodEnd":"0331",
                                                "timeLimit":"No",
                                                "returnsCycle":
                                                "winter and all year",
                                                "amount":"125"
                                                }]
                              }],

        "returns": [{"id":660257,
                    "status":"due",
                    "due":"20230728",
                    "returnsCycle":"winter and all year",
                    "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "frequency":"monthly",
                    "settings":["none"],
                    "purpose":["Spray irrigation - direct"],
                    "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                    "periodStart":"1101",
                    "periodEnd":"0331",
                    "returnsPeriodStart":"20221101",
                    "returnsPeriodEnd":"20230331",
                    "versions":[]
                    },
                    {"id":660257,
                    "status":"void",
                    "due":"20230428",
                    "returnsCycle":"winter and all year",
                    "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "frequency":"daily","settings":["none"],"purpose":["Spray irrigation - direct"],
                    "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)",
                      "At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                      "periodStart":"1101",
                      "periodEnd":"0331",
                      "returnsPeriodStart":"20221101",
                      "returnsPeriodEnd":"20230331",
                      "versions":[{
                                  "id":0,
                                  "submittedBy":
                                  "testuser@gov.uk",
                                  "submittedDate":"20230406",
                                  "notes":"",
                                  "units":"cm3",
                                  "readingsOrVolumes":"volumes",
                                  "nilReturn":false,
                                  "meterDetails":{"make":"","serialNumber":"","x10":"","startReading":"","endReading":""},
                                  "lines":[ {"date":"20221101","reading":"","volume":123456},{"date":"20221102","reading":"","volume":""},{"date":"20221103","reading":"","volume":""},{"date":"20221104","reading":"","volume":""},{"date":"20221105","reading":"","volume":""},{"date":"20221106","reading":"","volume":""},{"date":"20221107","reading":"","volume":""},{"date":"20221108","reading":"","volume":""},{"date":"20221109","reading":"","volume":""},{"date":"20221110","reading":"","volume":""},{"date":"20221111","reading":"","volume":""},{"date":"20221112","reading":"","volume":""},{"date":"20221113","reading":"","volume":""},{"date":"20221114","reading":"","volume":""},{"date":"20221115","reading":"","volume":""},{"date":"20221116","reading":"","volume":""},{"date":"20221117","reading":"","volume":""},{"date":"20221118","reading":"","volume":""},{"date":"20221119","reading":"","volume":""},{"date":"20221120","reading":"","volume":""},{"date":"20221121","reading":"","volume":""},{"date":"20221122","reading":"","volume":""},{"date":"20221123","reading":"","volume":""},{"date":"20221124","reading":"","volume":""},{"date":"20221125","reading":"","volume":""},{"date":"20221126","reading":"","volume":""},{"date":"20221127","reading":"","volume":""},{"date":"20221128","reading":"","volume":""},{"date":"20221129","reading":"","volume":""},{"date":"20221130","reading":"","volume":""},
                                            {"date":"20221201","reading":"","volume":123456},{"date":"20221202","reading":"","volume":""},{"date":"20221203","reading":"","volume":""},{"date":"20221204","reading":"","volume":""},{"date":"20221205","reading":"","volume":""},{"date":"20221206","reading":"","volume":""},{"date":"20221207","reading":"","volume":""},{"date":"20221208","reading":"","volume":""},{"date":"20221209","reading":"","volume":""},{"date":"20221210","reading":"","volume":""},{"date":"20221211","reading":"","volume":""},{"date":"20221212","reading":"","volume":""},{"date":"20221213","reading":"","volume":""},{"date":"20221214","reading":"","volume":""},{"date":"20221215","reading":"","volume":""},{"date":"20221216","reading":"","volume":""},{"date":"20221217","reading":"","volume":""},{"date":"20221218","reading":"","volume":""},{"date":"20221219","reading":"","volume":""},{"date":"20221220","reading":"","volume":""},{"date":"20221221","reading":"","volume":""},{"date":"20221222","reading":"","volume":""},{"date":"20221223","reading":"","volume":""},{"date":"20221224","reading":"","volume":""},{"date":"20221225","reading":"","volume":""},{"date":"20221226","reading":"","volume":""},{"date":"20221227","reading":"","volume":""},{"date":"20221228","reading":"","volume":""},{"date":"20221229","reading":"","volume":""},{"date":"20221230","reading":"","volume":""},{"date":"20221231","reading":"","volume":""},
                                            {"date":"20230101","reading":"","volume":123456},{"date":"20230102","reading":"","volume":""},{"date":"20230103","reading":"","volume":""},{"date":"20230104","reading":"","volume":""},{"date":"20230105","reading":"","volume":""},{"date":"20230106","reading":"","volume":""},{"date":"20230107","reading":"","volume":""},{"date":"20230108","reading":"","volume":""},{"date":"20230109","reading":"","volume":""},{"date":"20230110","reading":"","volume":""},{"date":"20230111","reading":"","volume":""},{"date":"20230112","reading":"","volume":""},{"date":"20230113","reading":"","volume":""},{"date":"20230114","reading":"","volume":""},{"date":"20230115","reading":"","volume":""},{"date":"20230116","reading":"","volume":""},{"date":"20230117","reading":"","volume":""},{"date":"20230118","reading":"","volume":""},{"date":"20230119","reading":"","volume":""},{"date":"20230120","reading":"","volume":""},{"date":"20230121","reading":"","volume":""},{"date":"20230122","reading":"","volume":""},{"date":"20230123","reading":"","volume":""},{"date":"20230124","reading":"","volume":""},{"date":"20230125","reading":"","volume":""},{"date":"20230126","reading":"","volume":""},{"date":"20230127","reading":"","volume":""},{"date":"20230128","reading":"","volume":""},{"date":"20230129","reading":"","volume":""},{"date":"20230130","reading":"","volume":""},{"date":"20230131","reading":"","volume":""},
                                            {"date":"20230201","reading":"","volume":123456},{"date":"20230202","reading":"","volume":""},{"date":"20230203","reading":"","volume":""},{"date":"20230204","reading":"","volume":""},{"date":"20230205","reading":"","volume":""},{"date":"20230206","reading":"","volume":""},{"date":"20230207","reading":"","volume":""},{"date":"20230208","reading":"","volume":""},{"date":"20230209","reading":"","volume":""},{"date":"20230210","reading":"","volume":""},{"date":"20230211","reading":"","volume":""},{"date":"20230212","reading":"","volume":""},{"date":"20230213","reading":"","volume":""},{"date":"20230214","reading":"","volume":""},{"date":"20230215","reading":"","volume":""},{"date":"20230216","reading":"","volume":""},{"date":"20230217","reading":"","volume":""},{"date":"20230218","reading":"","volume":""},{"date":"20230219","reading":"","volume":""},{"date":"20230220","reading":"","volume":""},{"date":"20230221","reading":"","volume":""},{"date":"20230222","reading":"","volume":""},{"date":"20230223","reading":"","volume":""},{"date":"20230224","reading":"","volume":""},{"date":"20230225","reading":"","volume":""},{"date":"20230226","reading":"","volume":""},{"date":"20230227","reading":"","volume":""},{"date":"20230228","reading":"","volume":""},
                                            {"date":"20230301","reading":"","volume":123456},{"date":"20230302","reading":"","volume":""},{"date":"20230303","reading":"","volume":""},{"date":"20230304","reading":"","volume":""},{"date":"20230305","reading":"","volume":""},{"date":"20230306","reading":"","volume":""},{"date":"20230307","reading":"","volume":""},{"date":"20230308","reading":"","volume":""},{"date":"20230309","reading":"","volume":""},{"date":"20230310","reading":"","volume":""},{"date":"20230311","reading":"","volume":""},{"date":"20230312","reading":"","volume":""},{"date":"20230313","reading":"","volume":""},{"date":"20230314","reading":"","volume":""},{"date":"20230315","reading":"","volume":""},{"date":"20230316","reading":"","volume":""},{"date":"20230317","reading":"","volume":""},{"date":"20230318","reading":"","volume":""},{"date":"20230319","reading":"","volume":""},{"date":"20230320","reading":"","volume":""},{"date":"20230321","reading":"","volume":""},{"date":"20230322","reading":"","volume":""},{"date":"20230323","reading":"","volume":""},{"date":"20230324","reading":"","volume":""},{"date":"20230325","reading":"","volume":""},{"date":"20230326","reading":"","volume":""},{"date":"20230327","reading":"","volume":""},{"date":"20230328","reading":"","volume":""},{"date":"20230329","reading":"","volume":""},{"date":"20230330","reading":"","volume":""},{"date":"20230331","reading":"","volume":""}
                                          ],
                                          "monthTotals":[
                                            {"month":"November","year":"2022","total":123456},
                                            {"month":"December","year":"2022","total":123456},
                                            {"month":"January","year":"2023","total":123456},
                                            {"month":"February","year":"2023","total":123456},
                                            {"month":"March","year":"2023","total":123456}
                                          ]
                                }]
                    }],

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
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
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
        "effectiveDate": "1 April 2015",
        "expired": "false",
        "billingRegion": "Midlands",

          //contacts on the licence
          "contacts": [{
            "type": "returns",
            "id": ['8'],
            "method": "letter",
            "addressID": "6"
          }],

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
                                                "versions": [],
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
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
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
        "effectiveDate": "1 October 2016",
        "expired": "false",
        "billingRegion": "South West",

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['10'],
          "method": "letter",
          "addressID": "6"
        }],

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
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
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

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['1'],
          "method": "letter",
          "addressID": "6"
        }],

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
                            "status": "due",
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
                            "versions": [],
                          },
                          {
                            "id":823187,
                            "status": "due",
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
                            "versions": [],
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
              "effectiveDate": "1 April 2000",
              "endDate": "",
              "expired": "false",
              "billingRegion": "North West",

              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['3'],
                "method": "letter",
                "addressID": "6"
              }],


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

                //contacts on the licence
                "contacts": [{
                  "type": "returns",
                  "id": ['1'],
                  "method": "letter",
                  "addressID": "6"
                }],

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

              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['1'],
                "method": "letter",
                "addressID": "6"
              }],

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
                                                          "id":323188,
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
                                  "id":323188,
                                  "status": "complete",
                                  "due": "20240428",
                                  "returnsCycle":"winter and all year",
                                  "description":"Pear tree farm - BOREHOLE A and B",
                                  "frequency": "daily",
                                  "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                  "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                  "periodStart":"0401",
                                  "periodEnd":"1031",
                                  "returnsPeriodStart":"20240401",
                                  "returnsPeriodEnd":"20241031",
                                  "versions": [{"id":0,
                                                "submittedBy":"testuser@gov.uk",
                                                "submittedDate":"20240829",
                                                "units":"cm3",
                                                "readingsOrVolumes":"readings",
                                                "nilReturn":false,
                                                "notes" : "",
                                                "meterDetails":{"make":"Powerflow","serialNumber":"7777777", "x10": false, "startReading": "118454", "endReading": "1235920"},
                                                "lines":[{
                                                  "date": "20240401",
                                                  "reading": "123456",
                                                  "volume": "5002"
                                                },
                                                {
                                                  "date": "20240402",
                                                  "reading": "128458",
                                                  "volume": "5022"
                                                },
                                                {
                                                  "date": "20240403",
                                                  "reading": "133480",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240404",
                                                  "reading": "138493",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240405",
                                                  "reading": "143506",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240406",
                                                  "reading": "148519",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240407",
                                                  "reading": "153532",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240408",
                                                  "reading": "158545",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240409",
                                                  "reading": "163558",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240410",
                                                  "reading": "168571",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240411",
                                                  "reading": "173584",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240412",
                                                  "reading": "178597",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240413",
                                                  "reading": "183610",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240414",
                                                  "reading": "188623",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240415",
                                                  "reading": "193636",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240416",
                                                  "reading": "198649",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240417",
                                                  "reading": "203662",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240418",
                                                  "reading": "208675",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240419",
                                                  "reading": "213688",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240420",
                                                  "reading": "218701",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240421",
                                                  "reading": "223714",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240422",
                                                  "reading": "228727",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240423",
                                                  "reading": "233740",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240424",
                                                  "reading": "238753",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240425",
                                                  "reading": "243766",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240426",
                                                  "reading": "248779",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240427",
                                                  "reading": "253792",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240428",
                                                  "reading": "258805",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240429",
                                                  "reading": "263818",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240430",
                                                  "reading": "268831",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240501",
                                                  "reading": "344016",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240502",
                                                  "reading": "349029",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240503",
                                                  "reading": "354042",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240504",
                                                  "reading": "359055",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240505",
                                                  "reading": "364068",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240506",
                                                  "reading": "369081",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240507",
                                                  "reading": "374094",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240508",
                                                  "reading": "379107",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240509",
                                                  "reading": "384120",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240510",
                                                  "reading": "389133",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240511",
                                                  "reading": "394146",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240512",
                                                  "reading": "399159",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240513",
                                                  "reading": "404172",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240514",
                                                  "reading": "409185",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240515",
                                                  "reading": "414198",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240516",
                                                  "reading": "419211",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240517",
                                                  "reading": "424224",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240518",
                                                  "reading": "429237",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240519",
                                                  "reading": "434250",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240520",
                                                  "reading": "439263",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240521",
                                                  "reading": "444276",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240522",
                                                  "reading": "449289",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240523",
                                                  "reading": "454302",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240524",
                                                  "reading": "459315",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240525",
                                                  "reading": "464328",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240526",
                                                  "reading": "469341",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240527",
                                                  "reading": "474354",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240528",
                                                  "reading": "479367",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240529",
                                                  "reading": "484380",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240530",
                                                  "reading": "489393",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240531",
                                                  "reading": "494406",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240601",
                                                  "reading": "494406",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240602",
                                                  "reading": "499419",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240603",
                                                  "reading": "504432",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240604",
                                                  "reading": "509445",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240605",
                                                  "reading": "514458",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240606",
                                                  "reading": "519471",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240607",
                                                  "reading": "524484",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240608",
                                                  "reading": "529497",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240609",
                                                  "reading": "534510",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240610",
                                                  "reading": "539523",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240611",
                                                  "reading": "544536",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240612",
                                                  "reading": "549549",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240613",
                                                  "reading": "554562",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240614",
                                                  "reading": "559575",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240615",
                                                  "reading": "564588",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240616",
                                                  "reading": "569601",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240617",
                                                  "reading": "574614",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240618",
                                                  "reading": "579627",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240619",
                                                  "reading": "584640",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240620",
                                                  "reading": "589653",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240621",
                                                  "reading": "594666",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240622",
                                                  "reading": "599679",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240623",
                                                  "reading": "604692",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240624",
                                                  "reading": "609705",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240625",
                                                  "reading": "614718",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240626",
                                                  "reading": "619731",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240627",
                                                  "reading": "624744",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240628",
                                                  "reading": "629757",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240629",
                                                  "reading": "634770",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240630",
                                                  "reading": "639783",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240701",
                                                  "reading": "639783",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240702",
                                                  "reading": "644796",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240703",
                                                  "reading": "649809",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240704",
                                                  "reading": "654822",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240705",
                                                  "reading": "659835",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240706",
                                                  "reading": "664848",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240707",
                                                  "reading": "669861",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240708",
                                                  "reading": "674874",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240709",
                                                  "reading": "679887",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240710",
                                                  "reading": "684900",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240711",
                                                  "reading": "689913",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240712",
                                                  "reading": "694926",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240713",
                                                  "reading": "699939",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240714",
                                                  "reading": "704952",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240715",
                                                  "reading": "709965",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240716",
                                                  "reading": "714978",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240717",
                                                  "reading": "719991",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240718",
                                                  "reading": "724904",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240719",
                                                  "reading": "729917",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240720",
                                                  "reading": "734930",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240721",
                                                  "reading": "739943",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240722",
                                                  "reading": "744956",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240723",
                                                  "reading": "749969",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240724",
                                                  "reading": "754982",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240725",
                                                  "reading": "759995",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240726",
                                                  "reading": "764908",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240727",
                                                  "reading": "769921",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240728",
                                                  "reading": "774934",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240729",
                                                  "reading": "779947",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240730",
                                                  "reading": "784960",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240731",
                                                  "reading": "789973",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240801",
                                                  "reading": "789973",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240802",
                                                  "reading": "794986",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240803",
                                                  "reading": "799999",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240804",
                                                  "reading": "805012",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240805",
                                                  "reading": "810025",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240806",
                                                  "reading": "815038",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240807",
                                                  "reading": "820051",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240808",
                                                  "reading": "825064",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240809",
                                                  "reading": "830077",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240810",
                                                  "reading": "835090",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240811",
                                                  "reading": "840103",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240812",
                                                  "reading": "845116",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240813",
                                                  "reading": "850129",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240814",
                                                  "reading": "855142",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240815",
                                                  "reading": "860155",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240816",
                                                  "reading": "865168",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240817",
                                                  "reading": "870181",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240818",
                                                  "reading": "875194",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240819",
                                                  "reading": "880207",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240820",
                                                  "reading": "885220",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240821",
                                                  "reading": "890233",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240822",
                                                  "reading": "895246",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240823",
                                                  "reading": "900259",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240824",
                                                  "reading": "905272",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240825",
                                                  "reading": "910285",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240826",
                                                  "reading": "915298",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240827",
                                                  "reading": "920311",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240828",
                                                  "reading": "925324",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240829",
                                                  "reading": "930337",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240830",
                                                  "reading": "935350",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240831",
                                                  "reading": "940363",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240901",
                                                  "reading": "940363",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240902",
                                                  "reading": "945376",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240903",
                                                  "reading": "950389",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240904",
                                                  "reading": "955402",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240905",
                                                  "reading": "960415",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240906",
                                                  "reading": "965428",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240907",
                                                  "reading": "970441",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240908",
                                                  "reading": "975454",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240909",
                                                  "reading": "980467",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240910",
                                                  "reading": "985480",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240911",
                                                  "reading": "990493",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240912",
                                                  "reading": "995506",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240913",
                                                  "reading": "1000519",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240914",
                                                  "reading": "1005532",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240915",
                                                  "reading": "1010545",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240916",
                                                  "reading": "1015558",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240917",
                                                  "reading": "1020571",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240918",
                                                  "reading": "1025584",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240919",
                                                  "reading": "1030597",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240920",
                                                  "reading": "1035610",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240921",
                                                  "reading": "1040623",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240922",
                                                  "reading": "1045636",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240923",
                                                  "reading": "1050649",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240924",
                                                  "reading": "1055662",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240925",
                                                  "reading": "1060675",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240926",
                                                  "reading": "1065688",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240927",
                                                  "reading": "1070701",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240928",
                                                  "reading": "1075714",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240929",
                                                  "reading": "1080727",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240930",
                                                  "reading": "1085740",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241001",
                                                  "reading": "1085740",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241002",
                                                  "reading": "1090753",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241003",
                                                  "reading": "1095766",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241004",
                                                  "reading": "1100779",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241005",
                                                  "reading": "1105792",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241006",
                                                  "reading": "1110805",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241007",
                                                  "reading": "1115818",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241008",
                                                  "reading": "1120831",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241009",
                                                  "reading": "1125844",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241010",
                                                  "reading": "1130857",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241011",
                                                  "reading": "1135870",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241012",
                                                  "reading": "1140883",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241013",
                                                  "reading": "1145896",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241014",
                                                  "reading": "1150909",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241015",
                                                  "reading": "1155922",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241016",
                                                  "reading": "1160935",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241017",
                                                  "reading": "1165948",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241018",
                                                  "reading": "1170961",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241019",
                                                  "reading": "1175974",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241020",
                                                  "reading": "1180987",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241021",
                                                  "reading": "1185990",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241022",
                                                  "reading": "1190903",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241023",
                                                  "reading": "1195916",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241024",
                                                  "reading": "1200929",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241025",
                                                  "reading": "1205942",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241026",
                                                  "reading": "1210955",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241027",
                                                  "reading": "1215968",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241028",
                                                  "reading": "1220981",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241029",
                                                  "reading": "1225994",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241030",
                                                  "reading": "1230907",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241031",
                                                  "reading": "1235920",
                                                  "volume": "5013"
                                                }
                                              ],
                                                "monthTotals":[{"month":"April","year":"2024","total":"150388"},{"month":"May","year":"2024","total":"155403"},{"month":"June","year":"2024","total":"150390"},{"month":"July","year":"2024","total":"155403"},{"month":"August","year":"2024","total":"155403"},{"month":"September","year":"2024","total":"150390"},{"month":"October","year":"2024","total":"155403"}]
                                              }
                                ],
                                },
                                {
                                  "id":323188,
                                  "status": "due",
                                  "due": "20240428",
                                  "returnsCycle":"winter and all year",
                                  "description":"Pear tree farm - BOREHOLE A and B",
                                  "frequency": "daily",
                                  "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                  "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                  "periodStart":"0401",
                                  "periodEnd":"1031",
                                  "returnsPeriodStart":"20230401",
                                  "returnsPeriodEnd":"20241031",
                                  "versions": [],
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


            //licence 11
            {
              "number": "03/28/61/065",
              "name": "Lemon Tree Farm",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2019",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2035",
              "expired": "false",
              "billingRegion": "Anglian",

                            //contacts on the licence
                            "contacts": [{
                              "type": "returns",
                              "id": ['1'],
                               "method": "letter",
                              "addressID": "6"
                            }],

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

                    "returns": [  {
                      "id":823187,
                      "status": "due",
                      "due": "20241128",
                      "returnsCycle":"winter and all year",
                      "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - storage"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"1101",
                      "periodEnd":"0331",
                      "returnsPeriodStart":"20230401",
                      "returnsPeriodEnd":"20240331",
                      "versions": [],
                    },{
                      "id":823188,
                      "status": "due",
                      "due": "20240428",
                      "returnsCycle":"summer",
                      "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - direct"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"0401",
                      "periodEnd":"1031",
                      "returnsPeriodStart":"20230401",
                      "returnsPeriodEnd":"20240331",
                      "versions": [],
                    },   {
                      "id":823187,
                      "status": "completed",
                      "due": "20231128",
                      "returnsCycle":"winter and all year",
                      "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - storage"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"1101",
                      "periodEnd":"0331",
                      "returnsPeriodStart":"20220401",
                      "returnsPeriodEnd":"20230331",
                      "versions": [],
                    },{
                      "id":823188,
                      "status": "completed",
                      "due": "20230428",
                      "returnsCycle":"summer",
                      "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - direct"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"0401",
                      "periodEnd":"1031",
                      "returnsPeriodStart":"20220401",
                      "returnsPeriodEnd":"20230331",
                      "versions": [],
                    },
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
                        "versions": [],
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
                        "versions": [],
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
                        "versions": [],
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
                        "versions": [],
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
                        "versions": [],
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
                        "versions": [],
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

              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['10'],
                 "method": "letter",
                "addressID": "6"
              }],
      
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
                                                      "versions": [],
                                                        }]
                                          },
                                        ],
      
      
                                        "returns": [{
                                                    "id":772318,
                                                    "status": "due",
                                                    "due": "20241028",
                                                    "returnsCycle":"winter and all year",
                                                    "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                    "frequency": "daily",
                                                    "purpose":["Potable Water Supply Direct"],
                                                    "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                    "periodStart":"0401",
                                                    "periodEnd":"0331",
                                                    "returnsPeriodStart":"20240701",
                                                    "returnsPeriodEnd":"20240930",
                                                    "versions": []
                                                    },
                                                    {
                                                      "id":772318,
                                                      "status": "complete",
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
                                                      "versions": [{
                                                        "id":0,
                                                        "submittedBy":"testuser@gov.uk",
                                                        "submittedDate":"20240816",
                                                        "units":"cm3",
                                                        "notes" : "",
                                                        "readingsOrVolumes": "volumes",
                                                        "nilReturn":false,
                                                        "meterDetails":{"make":"Powerflow","serialNumber":"2222222", "x10": false, "startReading": "", "endReading": ""},
                                                        "lines":[
                                                          {"date":"20240401","reading":"","volume":"5002"},
                                                          {"date":"20240402","reading":"","volume":"5022"},
                                                          {"date":"20240403","reading":"","volume":"5013"},
                                                          {"date":"20240404","reading":"","volume":"5013"},
                                                          {"date":"20240405","reading":"","volume":"5013"},
                                                          {"date":"20240406","reading":"","volume":"5013"},
                                                          {"date":"20240407","reading":"","volume":"5013"},
                                                          {"date":"20240408","reading":"","volume":"5013"},
                                                          {"date":"20240409","reading":"","volume":"5013"},
                                                          {"date":"20240410","reading":"","volume":"5013"},
                                                          {"date":"20240411","reading":"","volume":"5013"},
                                                          {"date":"20240412","reading":"","volume":"5013"},
                                                          {"date":"20240413","reading":"","volume":"5013"},
                                                          {"date":"20240414","reading":"","volume":"5013"},
                                                          {"date":"20240415","reading":"","volume":"5013"},
                                                          {"date":"20240416","reading":"","volume":"5013"},
                                                          {"date":"20240417","reading":"","volume":"5013"},
                                                          {"date":"20240418","reading":"","volume":"5013"},
                                                          {"date":"20240419","reading":"","volume":"5013"},
                                                          {"date":"20240420","reading":"","volume":"5013"},
                                                          {"date":"20240421","reading":"","volume":"5013"},
                                                          {"date":"20240422","reading":"","volume":"5013"},
                                                          {"date":"20240423","reading":"","volume":"5013"},
                                                          {"date":"20240424","reading":"","volume":"5013"},
                                                          {"date":"20240425","reading":"","volume":"5013"},
                                                          {"date":"20240426","reading":"","volume":"5013"},
                                                          {"date":"20240427","reading":"","volume":"5013"},
                                                          {"date":"20240428","reading":"","volume":"5013"},
                                                          {"date":"20240429","reading":"","volume":"5013"},
                                                          {"date":"20240430","reading":"","volume":"5013"},
                                                          {"date":"20240501","reading":"","volume":"5013"},
                                                          {"date":"20240502","reading":"","volume":"5013"},
                                                          {"date":"20240503","reading":"","volume":"5013"},
                                                          {"date":"20240504","reading":"","volume":"5013"},
                                                          {"date":"20240505","reading":"","volume":"5013"},
                                                          {"date":"20240506","reading":"","volume":"5013"},
                                                          {"date":"20240507","reading":"","volume":"5013"},
                                                          {"date":"20240508","reading":"","volume":"5013"},
                                                          {"date":"20240509","reading":"","volume":"5013"},
                                                          {"date":"20240510","reading":"","volume":"5013"},
                                                          {"date":"20240511","reading":"","volume":"5013"},
                                                          {"date":"20240512","reading":"","volume":"5013"},
                                                          {"date":"20240513","reading":"","volume":"5013"},
                                                          {"date":"20240514","reading":"","volume":"5013"},
                                                          {"date":"20240515","reading":"","volume":"5013"},
                                                          {"date":"20240516","reading":"","volume":"5013"},
                                                          {"date":"20240517","reading":"","volume":"5013"},
                                                          {"date":"20240518","reading":"","volume":"5013"},
                                                          {"date":"20240519","reading":"","volume":"5013"},
                                                          {"date":"20240520","reading":"","volume":"5013"},
                                                          {"date":"20240521","reading":"","volume":"5013"},
                                                          {"date":"20240522","reading":"","volume":"5013"},
                                                          {"date":"20240523","reading":"","volume":"5013"},
                                                          {"date":"20240524","reading":"","volume":"5013"},
                                                          {"date":"20240525","reading":"","volume":"5013"},
                                                          {"date":"20240526","reading":"","volume":"5013"},
                                                          {"date":"20240527","reading":"","volume":"5013"},
                                                          {"date":"20240528","reading":"","volume":"5013"},
                                                          {"date":"20240529","reading":"","volume":"5013"},
                                                          {"date":"20240530","reading":"","volume":"5013"},
                                                          {"date":"20240531","reading":"","volume":"5013"},
                                                          {"date":"20240601","reading":"","volume":"5013"},
                                                          {"date":"20240602","reading":"","volume":"5013"},
                                                          {"date":"20240603","reading":"","volume":"5013"},
                                                          {"date":"20240604","reading":"","volume":"5013"},
                                                          {"date":"20240605","reading":"","volume":"5013"},
                                                          {"date":"20240606","reading":"","volume":"5013"},
                                                          {"date":"20240607","reading":"","volume":"5013"},
                                                          {"date":"20240608","reading":"","volume":"5013"},
                                                          {"date":"20240609","reading":"","volume":"5013"},
                                                          {"date":"20240610","reading":"","volume":"5013"},
                                                          {"date":"20240611","reading":"","volume":"5013"},
                                                          {"date":"20240612","reading":"","volume":"5013"},
                                                          {"date":"20240613","reading":"","volume":"5013"},
                                                          {"date":"20240614","reading":"","volume":"5013"},
                                                          {"date":"20240615","reading":"","volume":"5013"},
                                                          {"date":"20240616","reading":"","volume":"5013"},
                                                          {"date":"20240617","reading":"","volume":"5013"},
                                                          {"date":"20240618","reading":"","volume":"5013"},
                                                          {"date":"20240619","reading":"","volume":"5013"},
                                                          {"date":"20240620","reading":"","volume":"5013"},
                                                          {"date":"20240621","reading":"","volume":"5013"},
                                                          {"date":"20240622","reading":"","volume":"5013"},
                                                          {"date":"20240623","reading":"","volume":"5013"},
                                                          {"date":"20240624","reading":"","volume":"5013"},
                                                          {"date":"20240625","reading":"","volume":"5013"},
                                                          {"date":"20240626","reading":"","volume":"5013"},
                                                          {"date":"20240627","reading":"","volume":"5013"},
                                                          {"date":"20240628","reading":"","volume":"5013"},
                                                          {"date":"20240629","reading":"","volume":"5013"},
                                                          {"date":"20240630","reading":"","volume":"5013"}
                                                        ],
                                                        "monthTotals":[
                                                          {"month":"April","year":"2024","total":"150388"},
                                                          {"month":"May","year":"2024","total":"155403"},
                                                          {"month":"June","year":"2024","total":"155403"}
                                                        ]
                                                                    }]
                                                    },
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
                  "date": "20200605",
                  "sent": "5 June 2020",
                  "sentBy": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
                {
                  "type": "stop - Water abstraction alert",
                  "date": "20200417",
                  "sent": "17 April 2020",
                  "sentBy": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
                {
                  "type": "warning - Water abstraction alert",
                  "date": "20200330",
                  "sent": "30 March 2020",
                  "sentBy": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
      
              ],
            },
            //licence 13 
            //ID12
            {
              "number": "200/20/23/0111",
              "name": "",
              "holder": "Public Water Plc",
              "startDate": "1 April 2024",
              "endDate": "31 March 2032",
              "effectiveDate": "1 April 2024",
              "expired": "false",
              "billingRegion": "Southern",
      
              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['10'],
                "method": "letter",
                "addressID": "6"
              }],

              //licence Settings
              "multipleUpload": "yes",
              "confidentiality": "public",
      
              "source": "Inland water known as the River Swale at Helperby",
              "purpose": ["Potable Water Supply - Direct"],
              "absPeriod": ["1 April to 31 October"],
              "means": ["Unspecified pump"],
      
              "absPoints": ["At National Grid Reference SK 675124"],
              "gridRefs": [ "SK675124"],
              "absConditions": [
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "73.4Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4Ml/d."
               }
             ],
              "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
      
              "use": [{
                      "purpose": "Potable Water Supply - Direct",
                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"12271.581",
                      "timeLimit": "No"
                    }],
      
                     //Previous versions of the licence data
                     "previousVersions": [
                      { }
                    ],
      
              "returnsRequirements":  [],
      
      
                                        "returns": [],
      
              "chargeInformation": [{
                  "chargeStart": "1 April 2024",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2025",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                  "elements": [{
                                "purpose": "Potable Water Supply - Direct",
                                "description":"River Swale - Helperby SP1",
                                "abstractionStartDay": "1",
                                "abstractionStartMonth": "4",
                                "abstractionEndDay": "31",
                                "abstractionEndMonth": "3",
                                "billableQuantity": "12271.581",
                                "authorisedQuantity": "12271.581",
                                "timeLimit": "No",
                                "source": "Unsupported",
                                "season": "Winter and all year",
                                "loss": "High",
                                }
                  ],
                },
              ],
      
              "agreements": [],
      
              "communications": [],
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
      },
      {
        "name": "Public Water Plc",
        "email": "",
        "type": "company",
        "title": "",
        "firstName": "",
        "middleInitials": "",
        "lastName": "",
        "suffix": "",
        "department": "",
        "customers": [{
          "role": "Licence holder,Billing contact",
          "notices": [
                      {
                        "type": "Water abstraction alerts",
                        "sendBy": "post",
                        "addressID": "6",
                      },
                      {
                        "type": "Renewals",
                        "sendBy": "post",
                        "addressID": "6",
                      },
                      {
                        "type": "Returns",
                        "sendBy": "post",
                        "addressID": "6",
                      },
                      {
                        "type": "Bills",
                        "sendBy": "post",
                        "addressID": "6",
                      }],
          "customer": "Public Water Plc",
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
      },
      {
        "address1": "500 Broad street",
        "city": "London",
        "postcode": "E13 SWJ",
        "customers": [{
          "customer": "Public Water Plc",
          "role": "Licence holder,Billing,Returns",
        }]
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
    "notifications": [
      {
        "date": "20210131",
        "notification": "Returns: reminder",
        "type": "returns",
        "sentBy": "tim.teace@defra.gov.uk",
        "numberOfrecipients": "1",
        "recipients": [{
          "licenceNumber": "03/28/61/033",
          "sentTo": "joanne.smith@bigsmithfarms.co.uk",
          "method": "email",
          "status": ["sent"],
        }],
        "problems": "",
      },
      {
        "date": "20210131",
        "notification": "Returns: reminder",
        "type": "returns",
        "sentBy": "tim.teace@defra.gov.uk",
        "numberOfrecipients": "1",
        "recipients": [{
          "licenceNumber": "03/28/61/033",
          "sentTo": "joanne.smith@bigsmithfarms.co.uk",
          "method": "email",
          "status": ["error", "techincal failure"],
        }],
        "problems": "1",
      },
      {
        "date": "20210131",
        "notification": "Returns: reminder",
        "type": "returns",
        "sentBy": "tim.teace@defra.gov.uk",
        "numberOfrecipients": "1",
        "recipients": [{
          "licenceNumber": "03/28/61/033",
          "sentTo": "joan.smythe@bigsmithfarms.co.uk",
          "method": "email",
          "status": ["error", "email address does not exist"],
        }],
        "problems": "1",
      },
                      {
                        "date": "20210115",
                        "notification": "Returns: invitation",
                        "type": "returns",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "3",
                        "recipients": [{
                          "licenceNumber": "03/28/61/029",
                          "sentTo": "Big Smith Farms Ltd, 17 Hampshire way, Portsmouth, PO1 5YP",
                          "method": "letter",
                          "status": ["sent"],
                        },
                        {
                          "licenceNumber": "03/28/61/033",
                          "sentTo": "joanne.smith@bigsmithfarms.co.uk",
                          "method": "email",
                          "status": ["error", "inbox not accepting messages right now"],
                        },
                        {
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": ["sent"],
                        },
                        {
                          "licenceNumber": "03/28/69/0035",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "email",
                          "status": ["sent"],
                        }],
                        "problems": "1",
                      },
                      {
                        "date": "20201222",
                        "notification": "Returns: reminder",
                        "type": "returns",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                          "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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
                            "status": ["sent"],
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

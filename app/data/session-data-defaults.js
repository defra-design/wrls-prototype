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
  "region": "Anglian",
  "dateToday": "5 March 2020",
  "tptIssue": "overAbstraction",
  "tptIssueIR": "incompleteReturns",
  "tptIssueNP": "notProcessed",
  "status": "ready",
  "tptstatus": "review",
  "annualstatus": "ready",
  "agreement": "Two-part tariff (S127)",
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
  "agreements":[{
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
    }
  ],
  "chargeStart": "1 April 2020",
  "createNewContact": "false",
  "chargeStartSet": "false",
  "versionRemoved": "false",
  "elements":[{
        "purpose":"Spray irrigation",
        "description":"Otterton borehole 1a",
        "abstractionStartDay": "1",
        "abstractionStartMonth": "3",
        "abstractionEndDay": "30",
        "abstractionEndMonth": "9",
        "billableQuantity": "20",
        "authorisedQuantity": "20",
        "timeLimit": "No",
        "source":"Unsupported",
        "season":"Summer",
        "loss":"High"
      }
    ],
  "elementNew": "false",
  "elementNumber": "0",
  "change": "false",
  "elementCopy": "false",
  "createElement": "false",
  "removeElement": "false",
  "elementsHistoric":[{
            "purpose":"Spray irrigation",
            "description":"Otterton borehole 1a",
            "abstractionStartDay": "1",
            "abstractionStartMonth": "4",
            "abstractionEndDay": "31",
            "abstractionEndMonth": "3",
            "billableQuantity": "150,000,000",
            "authorisedQuantity": "150,000,000",
            "timeLimit": "No",
            "source":"Unsupported",
            "season":"All year",
            "loss":"High"
          },
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
          }
        ],

  "chargeVersions":[{
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
  "returns":[{
            "licence": "AN01/68/60/0032",
            "licenceHolder": "Bottled Water Plc",
            "ref": "1234545 - Due 28 October 2019,3455343 - Due 28 October 2018,7434343 - Due 28 October 2017",
            "address": "15 Osborne Road, Bath, BA1 5AH",
            "change": "false",
            "returnAddressFlag": "false",
            "singleUseAddressFlag": "false"
          }
        ],

      "search": "00/22/001/02",
      "reports": "true",
      "billing": "true",
      "notices": "true",

      //bill runs
      "billRuns":[{
                "date": "12 January 2020",
                "region": "Southern",
                "runType": "Supplementary",
                "bills": "-",
                "value": "-",
                "status": "building"
              },
              {
                "date": "7 January 2020",
                "region": "Anglian",
                "runType": "Supplementary",
                "bills": "5",
                "value": "£5,460.00",
                "status": "ready"
              },
              {
                "date": "19 November 2019",
                "region": "Anglian",
                "runType": "Annual",
                "bills": "874",
                "value": "£512,468.00",
                "status": "ready"
              },
              {
                "date": "19 November 2019",
                "region": "Anglian",
                "runType": "Two-part tariff",
                "bills": "-",
                "value": "-",
                "status": "review"
              },
              {
                "date": "2 January 2019",
                "region": "Southern",
                "runType": "Two-part tariff",
                "bills": "-",
                "value": "-",
                "status": "error"
              },
              {
                "date": "7 December 2019",
                "region": "Midlands",
                "runType": "Supplementary",
                "bills": "5",
                "value": "£4,927.10",
                "status": "sent"
              },
              {
                "date": "1 November 2019",
                "region": "South West",
                "runType": "Supplementary",
                "bills": "3",
                "value": "£3,887.04",
                "status": "sent"
              },
              {
                "date": "2 October 2019",
                "region": "South West",
                "runType": "Supplementary",
                "bills": "9",
                "value": "£11,602.22",
                "status": "sent"
              },
              {
                "date": "30 September 2019",
                "region": "South West",
                "runType": "Supplementary",
                "bills": "6",
                "value": "£1,824.04",
                "status": "sent"
              }
            ],


     //licence
     "licences":[{
               "number": "00/22/001/02",
               "name": "Lower Smith Road",
               "holder": "Irene Briton",
               "startDate": "1 June 1985",
               "endDate": "31 January 2020",
               "expired": "true",

               "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
               "purpose":["Spray irrigation"],
               "absPeriod": "March to September",

               "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
               "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
               "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

             },
             {
               "number": "03/28/60/0032",
               "name": "Glindenfold Lake",
               "holder": "Bottled Water Plc",
               "startDate": "1 June 1985",
               "endDate": "30 April 2022",
               "expired": "false",

               "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
               "purpose":["Spray irrigation"],
               "absPeriod": "March to September",

               "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
               "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
               "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
              },
              {
                "number": "03/28/61/029",
                "name": "Honeydew Crescent",
                "holder": "Big Smith Farms Ltd",
                "startDate": "1 June 1985",
                "endDate": "15 September 2034",
                "expired": "false",

                "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                "purpose":["Spray irrigation"],
                "absPeriod": "March to September",

                "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
               },
               {
                 "number": "03/28/60/0035",
                 "name": "George Furrow",
                 "holder": "Big Smith Farms Ltd",
                 "startDate": "1 June 1985",
                 "endDate": "15 September 2022",
                 "expired": "false",

                 "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                 "purpose":["Spray irrigation"],
                 "absPeriod": "March to September",

                 "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                 "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                 "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
                },
                {
                  "number": "03/28/60/0035",
                  "name": "Dale Barrow",
                  "holder": "Big Smith Farms Ltd",
                  "startDate": "1 June 1985",
                  "endDate": "15 September 2022",
                  "expired": "false",

                  "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose":["Spray irrigation"],
                  "absPeriod": "March to September",

                  "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                  "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                  "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
                 },
                 {
                   "number": "03/28/60/0035",
                   "name": "River House",
                   "holder": "Robin Vithlhem-Smith",
                   "startDate": "1 June 1985",
                   "endDate": "1 March 2023",
                   "expired": "false",

                   "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                   "purpose":["Spray irrigation"],
                   "absPeriod": "March to September",

                   "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                   "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                   "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
                 },
                 {
                   "number": "11/22/32/02",
                   "name": "",
                   "holder": "D.B. Beecham-Smith",
                   "startDate": "1 June 1985",
                   "endDate": "30 September 2025",
                   "expired": "false",

                   "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                   "purpose":["Spray irrigation"],
                   "absPeriod": "March to September",

                   "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                   "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                   "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
                 }
           ],


           //billng accounts
           "billingAccounts":[{
              "number": "BA1234443S",
              "customer": "Bottled Water Plc",
              "billingContact": "Sam Burridge Accountants LLP",
              "address1": "15 Ward Street",
              "city": "Bath",
              "postcode": "BA1 5EH",
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

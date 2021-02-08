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

      "search": "",
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
     "licences":[
            //licence 1
            {
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

               "chargeInformation":[{
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

             },
             //licence 2
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

               "chargeInformation":[{
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

              },
              //licence 3
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

                "chargeInformation":[
                          //newLicence
                        ],

                "agreements":[
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

                 "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                 "purpose":["Spray irrigation"],
                 "absPeriod": "March to September",

                 "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                 "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                 "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

                 "chargeInformation":[{
                           "chargeStart": "22 April 2019",
                           "chargeEnd": "",
                           "chargeStatus": "CHARGEABLE",
                           "chargeBilledDate": "31 March 2021",
                           "free": "false",
                           "reasonNewCharge": "Formal variation",
                           "setUpBy": "barry.crampton@madeup.com"
                           },
                             {
                           "chargeStart": "1 June 1985",
                           "chargeEnd": "21 April 2019",
                           "chargeStatus": "REPLACED",
                           "chargeBilledDate": "31 March 2020",
                           "free": "false",
                           "reasonNewCharge": "New licence",
                           "setUpBy": "barry.crampton@madeup.com"
                           }
                         ],

                    "agreements":[
                              //No agreements
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

                  "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose":["Spray irrigation"],
                  "absPeriod": "April to September",

                  "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                  "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                  "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

                  "chargeInformation":[{
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

                 },
                 //licence 6
                 {
                   "number": "03/28/60/0726",
                   "name": "River House",
                   "holder": "Robin Vithlhem-Smith",
                   "startDate": "1 April 2015",
                   "endDate": "1 March 2023",
                   "expired": "false",

                   "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                   "purpose":["Spray irrigation"],
                   "absPeriod": "March to September",

                   "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                   "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                   "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

                   "chargeInformation":[{
                             "chargeStart": "22 April 2016",
                             "chargeEnd": "",
                             "chargeStatus": "CHARGEABLE",
                             "chargeBilledDate": "31 March 2021",
                             "free": "false",
                             "reasonNewCharge": "Formal variation",
                             "setUpBy": "	jo.langton@madeup.com",
                             },
                               {
                             "chargeStart": "1 April 2015",
                             "chargeEnd": "21 April 2019",
                             "chargeStatus": "REPLACED",
                             "chargeBilledDate": "31 March 2020",
                             "free": "false",
                             "reasonNewCharge": "New licence",
                             "setUpBy": "	jo.langton@madeup.com"
                             }
                           ],

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
                 },
                 //licence 7
                 {
                   "number": "11/22/32/02",
                   "name": "",
                   "holder": "D.B. Beecham-Smith",
                   "startDate": "1 October 2016",
                   "endDate": "30 September 2025",
                   "expired": "false",

                   "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                   "purpose":["Spray irrigation"],
                   "absPeriod": "March to September",

                   "absPoints":["At National Grid Reference SK 675124","At National Grid Reference SK 675343"],
                   "absConditions":["Eel screening condition", "Chemical cessation condition", "Hands of flow condition"],
                   "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

                   "chargeInformation":[{
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

                 }
           ],

          //Billinga account ID
          "BAID": "0",

           //billng accounts
           "billingAccounts":[{
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
         ],

         //Users
         "userID": "0",

          //Users
          "users":[{
             "email": "gbillington@bwplc.co.uk",
             "licences": "03/28/60/0032",
          }
        ],

        //Customer/Company
        "customerID": "0",

         //Customer/Company
         "customers":[{
            "name": "Bottled Water Plc",
         },
          {
            "name": "Big Smith Farms Ltd",
          },
           {
             "name": "Irene Briton",
           },
            {
              "name": "Robin Vithlhem-Smith",
            },
             {
               "name": "D.B. Beecham-Smith",
             }
       ],


       //contacts
       "contactID": "0",

       "contacts": [{
         "name": "Jim Smith",
         "email": "not set",
         "role": "Licence holder",
         "customer": "Big Smith Farms Ltd",
       },
       {
         "name": "Joanna Southall",
         "email": "not set",
         "role": "Returns",
         "customer": "Big Smith Farms Ltd",
       },
       {
         "name": "Geoffrey Billington",
         "email": "Not set",
         "role": "Returns",
         "customer": "Bottled Water Plc",
       },
       {
         "name": "Head office",
         "email": "admin@bwplc.co.uk",
         "role": "Licence holder,Billing",
         "customer": "Bottled Water Plc",
       },
       {
         "name": "Irene Briton",
         "email": "Not set",
         "role": "Licence holder,Billing,Returns",
         "customer": "Irene Briton",
       },
       {
         "name": "Robin Vithlhem-Smith",
         "email": "Not set",
         "role": "Licence holder,Billing,Returns",
         "customer": "Robin Vithlhem-Smith",
       },
       {
         "name": "D.B. Beecham-Smith",
         "email": "Not set",
         "role": "Licence holder,Billing,Returns",
         "customer": "D.B. Beecham-Smith",
       }
     ],

       //addresses
       "addressID": "0",

       "addresses": [{
         "address1": "15 Ward Street",
         "city": "Bath",
         "postcode": "BA1 5EH",
         "role": "Licence holder,Returns",
         "customer": "Bottled Water Plc",
       },
       {
         "address1": "67 Gainsborough",
         "city": "Poole",
         "postcode": "BH33 1QE",
         "role": "Billing",
         "customer": "Bottled Water Plc",
       },
       {
         "address1": "17 Hampshire way",
         "city": "Portsmouth",
         "postcode": "PO1 5YP",
         "role": "Licence holder,Returns",
         "customer": "Big Smith Farms Ltd",
       },
       {
         "address1": "1134 New road",
         "city": "Liverpool",
         "postcode": "L17 6RB",
         "role": "Licence holder,Billing,Returns",
         "customer": "Irene Briton",
       },
       {
         "address1": "73 Old road",
         "city": "London",
         "postcode": "E16 8VB",
         "role": "Licence holder,Billing,Returns",
         "customer": "Robin Vithlhem-Smith",
       },
       {
         "address1": "500 Long street",
         "city": "Derby",
         "postcode": "D1 2RR",
         "role": "Licence holder,Billing,Returns",
         "customer": "D.B. Beecham-Smith",
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

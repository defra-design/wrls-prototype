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
  "customerName": "Bottled Water Plc",
  "licenceHolder": "Bottled Water Plc",
  "billingContact": "Bottled Water Plc",
  "existingContact": "false",
  "licenceNumber": "AN01/68/60/0032",
  "address1": "15 Ward Road",
  "city": "Bath",
  "postcode": "BA1 5EH",
  "invoiceAccount": "L12345678S",
  "startDay": "11",
  "startMonth": "April",
  "startYear": "2019",
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
          "reasonNewCharge": "New licence"
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

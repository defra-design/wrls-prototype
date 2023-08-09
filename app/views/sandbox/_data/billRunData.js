
module.exports = {


  "billRunData": [{
    dateCreated: "today",
    status: "ready",
    region: "anglian",
    type: "annual",
    chargeScheme: "current",
    transactionFile: "AN12345325",
    billRunNumber: "12345325",
    financialYear: "2023 to 2024",
    debit: 150150.00,
    bills:
      [{
        ID: "0",
        account: "AA238398S",
        accountAddress: ['55 Eagle Lane', 'Reading', 'RG12 9QA'],
        number: "BAI000000197T",
        contact: "Irene Briton",
        isWaterCompany: false,
        debit: 150.00,
        licences: [{
          ID: "0",
          licence: "00/22/001/02",
          licenceStartDate: "20200131",
          licenceHolder: "Irene Briton",
          billableDays: "365",
          authorisedDays: "365",
          debit: 150.00,
          transactions: [
            {
              type: 'Water abstraction charge',
              lineDescription: 'Otterton borehole 1a',
              billableDays: "365",
              authorisedDays: "365",
              chargeQuantity: '80',
              debit: 150.00,
              chargePeriod: '1 April 2023 to 31 March 2024',
              chargeRefNumber: '2.1.88 (£97.00)',
              chargeDescription: 'High loss, tidal, greater than 75 up to and including 250 ML/yr',
              addCharges: ['Supported source earl soham - deben (£186.00)'],
              adjustments: [
                'aggregate',
                'charge adjustment',
                'winter discount',
                'two part tariff agreement applies',
                'abatement agreement applies',
                'canal and river trust agreement applies'
              ],
              elements: [{
                id: 0,
                purpose: 'Spray irrigation',
                abstractionPeriod: '1 April to 31 March',
                authorisedQuantity: '80',
              }]
            },
            {
              type: 'Compensation charge',
              lineDescription: 'Otterton borehole 1a',
              billableDays: "365",
              authorisedDays: "365",
              chargeQuantity: '80',
              debit: 0.00,
              chargePeriod: '1 April 2023 to 31 March 2024',
              chargeRefNumber: '2.1.88 (£97.00)',
              chargeDescription: 'High loss, tidal, greater than 75 up to and including 250 ML/yr',
              addCharges: ['Supported source earl soham - deben (£186.00)'],
              adjustments: [
                'Aggregate',
                'Charge adjustment',
                'Winter discount',
                'Two part tariff',
                'Abatement'
              ],
              elements: [{
                id: 0,
                purpose: 'Spray irrigation',
                abstractionPeriod: '1 April to 31 March',
                authorisedQuantity: '80',
              }]
            }],
        }]

      },
      {
        ID: "1",
        account: "AN1238482",
        accountAddress: ['67 Gainsborough', 'Poole', 'BH33 1QE'],
        number: "BAI000000197T",
        contact: "Bottled Water Plc",
        isWaterCompany: true,
        debit: 150000.00,
        licences: [{
          ID: "0",
          licence: "03/28/60/0033",
          licenceStartDate: "19900901",
          licenceHolder: "Bottled Water Plc",
          billableDays: "365",
          authorisedDays: "365",
          debit: 150000.00,
          transactions: [
            {
              type: 'Water abstraction charge',
              lineDescription: 'Otterton borehole 1a',
              billableDays: "365",
              authorisedDays: "365",
              chargeQuantity: '80',
              debit: 100000.00,
              chargePeriod: '1 April 2023 to 31 March 2024',
              chargeRefNumber: '2.1.88 (£97.00)',
              chargeDescription: 'High loss, tidal, greater than 75 up to and including 250 ML/yr',
              addCharges: ['Supported source earl soham - deben (£186.00)'],
              adjustments: [
                'Aggregate'
              ],
              elements: [{
                id: 0,
                purpose: 'Spray irrigation',
                abstractionPeriod: '1 April to 31 March',
                authorisedQuantity: '80',
              }]
            },
            {
              type: 'Water abstraction charge',
              lineDescription: 'Otterton borehole 1b',
              billableDays: "365",
              authorisedDays: "365",
              chargeQuantity: '80',
              debit: 50000.00,
              chargePeriod: '1 April 2023 to 31 March 2024',
              chargeRefNumber: '2.1.88 (£97.00)',
              chargeDescription: 'High loss, tidal, greater than 75 up to and including 250 ML/yr',
              addCharges: ['Supported source earl soham - deben (£186.00)'],
              adjustments: [
                'Aggregate'
              ],
              elements: [{
                id: 0,
                purpose: 'Spray irrigation',
                abstractionPeriod: '1 April to 31 March',
                authorisedQuantity: '80',
              }]
            }],
        }]

      }]

  }]

}

const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



//Element details
const elements = {
  element1 : {
  purpose: 'Spray irrigation',
  description: 'Base licence',
  absPeriod: "1 April to 31 March",
  authQuantity: "1,250,000",
  billQuantity: "1,250,000",
  source: "Unsupported",
  season: "All year",
  loss: "High"

},
   element2 : {
     purpose: 'Spray irrigation',
     description: 'Time limited increase',
     absPeriod: "1 April to 31 March",
     authQuantity: "250,000",
     billQuantity: "250,000",
     timeLimited: "31 March 2022",
     source: "Unsupported",
     season: "All year",
     loss: "High"
},
};

router.get('/bd/charges-2020/current-charge-version', function (req, res) {

  req.session.data['elements'] = elements

  res.render('bd/charges-2020/current-charge-version')
})



module.exports = router

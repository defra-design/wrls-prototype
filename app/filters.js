const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const proj4 = require("proj4");

//Import extraFilters from file
let extraFilters = require('./filters-preV13')
//Call the extra filters function and assign output to filters var
let filters = extraFilters()
//Loop through object and run the addFilter API for each filter
Object.keys(filters).forEach(function (filterName) {
  addFilter(filterName, filters[filterName])
})


 /**
     * Return latlng from an input easting + northing.
     * @param {object} coordinates - The easting + northing to be transformed.
     * @param {integer} decimals - [optional] The specified number of decimal places.
     */
 addFilter('toLatLng', function toLatLng (coordinates, decimals = 7) {
  var b = coordinates.split(',').map(Number);
  proj4.defs("EPSG:27700", "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs");
  var point = proj4('EPSG:27700', 'EPSG:4326', [ b[0], b[1] ]);

  var lng = Number(point[0].toFixed(decimals));
  var lat = Number(point[1].toFixed(decimals));

  return [lat, lng ];
});


 /**
     * Return latlng from an input easting + northing.
     * @param {object} coordinates - The easting + northing to be transformed.
     * @param {integer} decimals - [optional] The specified number of decimal places.
     */
 addFilter('toLngLat', function toLngLat (coordinates, decimals = 7) {
  var b = coordinates.split(',').map(Number);
  proj4.defs("EPSG:27700", "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs");
  var point = proj4('EPSG:27700', 'EPSG:4326', [ b[0], b[1] ]);

  var lng = Number(point[0].toFixed(decimals));
  var lat = Number(point[1].toFixed(decimals));

  return [lng, lat ];
});



addFilter('diff', function diff (replacement, original) {
  const result = {};
  if (Object.is(replacement, original)) {
      return undefined;
  }
  if (!original || typeof original !== 'object') {
      return original;
  }
  Object.keys(replacement || {}).concat(Object.keys(original || {})).forEach(key => {
      if(original[key] !== replacement[key] && !Object.is(replacement[key], original[key])) {
          result[key] = original[key];
      }
      if(typeof original[key] === 'object' && typeof replacement[key] === 'object') {
          const value = diff(replacement[key], original[key]);
          if (value !== undefined) {
              result[key] = value;
          }
      }
  });
  return result;
});


addFilter('compare', function compare(original, copy) {
  for (let [k, v] of Object.entries(original)) {
    if (typeof v === "object" && v !== null) {
      if (!copy.hasOwnProperty(k)) {
        copy[k] = v; // 2
      } else {
        compare(v, copy?.[k]);
      }
    } else {
      if (Object.is(v, copy?.[k])) {
        delete copy?.[k]; // 1
      }
    }
  }
  return JSON.stringify(copy);
});

addFilter('toObject', function toObject (x){
   x = JSON.parse(x)
   return x
});


addFilter('replaceN', function replaceN (x){
  return x.replace("\\n","")
});

addFilter('typeOf', function typeOf (x){
  return typeof x 
});



addFilter('objectToArray', function objectToArray (object) {
  const objectArray = []
  Object.keys(object).forEach(key => objectArray.push({
    ...{ id: key },
    ...object[key]
  }))

  return objectArray
});



addFilter('objectKeys', function objectKeys (x){
  return Object.keys(x)
})

addFilter('objectValues', function objectValues (x){
  return Object.values(x)
})


addFilter('year', function year (x){
      return x.slice(0, 4)
})

addFilter('yearPlusPlus', function yearPlusPlus (x){
   x.slice(0, 4)
   return parseInt(x) + 1
})


addFilter('stringPlusPlus', function stringPlusPlus (x){
  return parseInt(x) + 1
})


addFilter('arrObDedupe', function arrObDedupe (x){
  return x = Array.from(new Set(x))
})


addFilter('base64Decode', function base64Decode (x){
  return x = atob(x);
})




addFilter('nullInObject', function nullInObject (x){
Object.keys(x).some(function(k) {
  return x[k] == null;
})
});


addFilter('sortByReviewStatus', function sortByReviewStatus(array) {
  array.sort((a, b) => {
    const statusA = a[3].html;
    const statusB = b[3].html;



    if (statusA.includes("review") && !statusB.includes("review")) {
      return -1;
    } else if (!statusA.includes("review") && statusB.includes("review")) {
      return 1;
    } else {
      return 0;
    }
  });

  return array;
});

addFilter('sortByLicence', function sortBylicence(array) {
  array.sort((a, b) => {
    const licenceNumberA = parseInt(a[0].html.val.match(/<\/span>(\d+)/)[1]);
    const licenceNumberB = parseInt(b[0].html.val.match(/<\/span>(\d+)/)[1]);

    if (licenceNumberA < licenceNumberB) {
      return -1;
    } else if (licenceNumberA > licenceNumberB) {
      return 1;
    } else {
      return 0;
    }
  });

  return array;
});
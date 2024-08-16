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
    const statusA = a[4].html;
    const statusB = b[4].html;



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

//Batch return lines by month | batchByMonth
addFilter('batchByMonth', function batchByMonth(data) {
  const groupedData = data.reduce((acc, item) => {
    const year = item.date.substring(0, 4);
    const month = item.date.substring(4, 6);
    const monthName = new Date(year, month - 1, 1).toLocaleString('en-US', { month: 'long' });

    const key = `${month}-${year}`;

    if (!acc[key]) {
      acc[key] = { month: monthName, year, total: 0 };
    }

    acc[key].total += parseInt(item.volume);
    return acc;
  }, {});

  return Object.values(groupedData);
});


//filter by month | filterByMonth("May")
addFilter('filterByMonth', function filterByMonth(data, month) {
  const monthNumber = new Date(`2024-${month}-01`).getMonth() + 1; // Convert month name to number
  const monthString = monthNumber.toString().padStart(2, '0'); // Pad month with leading zero

  return data.filter(item => item.date.substring(4, 6) === monthString);
});


addFilter('nbsp', function nbsp(x) { 

  return x = x.replace(/\s/g, "&nbsp;")

});

addFilter('firstnbsp', function firstnbsp(x) { 

  return x = x.replace(" ", "&nbsp;")

});

addFilter ('stringToNumber', function stringToNumber(x) {
  return parseInt(x)
});

addFilter('submissionOptions', function submissionOptions(x) { 

  if (x == "0"){
    return "No"
  } else {
    return "Yes"
  }

});


//get the length of an object
addFilter('objLength', function objLength(x) {
    return Object.keys(x).length;
});

//sum volumes 
addFilter('sumVolumes', function sumVolumes(objects) {
  return objects.reduce((total, obj) => {
    const volume = Number(obj.volume); // Convert volume to number
    return total + (isNaN(volume) ? 0 : volume); // Handle empty or non-numeric values
  }, 0);
});

addFilter('formatDateToString', function formatDateToString(dateString) {
  // Split the date string into components
  const parts = dateString.split(" ");
  if (parts.length !== 3) {
    throw new Error("Invalid date format. Expected 'D Month YYYY'");
  }

  // Extract day, month (0-indexed), and year
  const day = parseInt(parts[0], 10);
  const monthNames = { // Map month names to numeric values (0-indexed)
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
  };
  console.log(parts[1])
  const month = monthNames[parts[1]]; // Check for valid month name (-1 for invalid)
  const year = parseInt(parts[2], 10);

  // Validate month and year
  if (month === -1 || year < 1000 || year > 9999) {
    throw new Error("Invalid date. Check month and year format.");
  }

  // Create a Date object with UTC time (avoids time zone issues)
  const utcDate = new Date(Date.UTC(year, month, day));

  // Use toISOString() to format in yyyy-MM-dd format (handles both valid and invalid dates)
  const formattedDate = utcDate.toISOString().split("T")[0];

  // Return the formatted date (yyyymmdd)
  return formattedDate.replace(/-/g, "");
});
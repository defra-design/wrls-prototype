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

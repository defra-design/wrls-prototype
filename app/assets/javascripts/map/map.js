
import Map from 'ol/Map.js';
import {XYZ, TileArcGISRest} from 'ol/source.js';
import {Group as LayerGroup, Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js'
import View from 'ol/View.js';
import {defaults as defaultControls} from 'ol/control.js';

import Feature from 'ol/Feature.js';
import Polygon from 'ol/geom/Polygon.js';
import VectorSource from 'ol/source/Vector.js';
import {Circle, Fill, Stroke, Style} from 'ol/style.js';

import TileGrid from 'ol/tilegrid/TileGrid'

import * as proj4 from 'proj4'
import { register as registerProj4 } from 'ol/proj/proj4'

// Proj4 defs
proj4.default.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs')
registerProj4(proj4.default)

import { useGeographic} from 'ol/proj'
useGeographic();

  // Remove default controls
  const controls = defaultControls({
    zoom: false,
    rotate: false,
    attribution: false
  })

  //centre of the map
let mapCenter = []
  //polygon
  let polygon = []
 
//view extent and centre and zoom levels
const view = new View({
  center: setCenter(),
  zoom: 16,
  minZoom: 10,
  maxZoom: 18,
  extent: [ -5.75447, 49.93027, 1.799683, 55.84093 ],
});

//set center of map
function setCenter(){

  //get scenario parameter
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const center = urlParams.get('center')
  
  
  if (center == undefined){
    mapCenter = [ -2.0159323734242225,53.74123069144088]
  } else {
    mapCenter = center.split(',');
  }

  return mapCenter

};

//create the polygon
function setPolygon(){

  //get scenario parameter
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const location = urlParams.get('location')
  
  
  if (location == undefined){
    polygon = [ -2.0159323734242225, 53.74123069144088 ]
  } else {
    polygon = JSON.parse(location)
  }
  
  return [polygon]

};


//grab api key
const apiKey = process.env.OS_API_KEY

//base map
const base = new TileLayer({
name: 'base',
 source: new XYZ({
   url: `https://api.os.uk/maps/raster/v1/zxy/Outdoor_27700/{z}/{x}/{y}.png?key=${apiKey}`,
   projection: 'EPSG:27700',
  tileGrid: new TileGrid({
   resolutions: [ 896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75 ],
   origin: [ -238375.0, 1376256.0 ]
 }),
   attributions: `Contains OS data<br/>&copy; Crown copyright and database rights ${(new Date()).getFullYear()}`
 }),
 visible: true,
 minZoom: 8,
 zIndex: 0
});


//the Marker

// radius style
var rStyle = new Style ({
  //image: new Circle ({ })
  //radius: 5,
  fill: new Fill({
    color: 'rgb(148, 37, 20, 0.5)'
  }),
  stroke: new Stroke({
    color: 'rgb(148, 37, 20, 1)',
    width: 3
  }),

});
  var marker = new Feature({
    geometry: new Polygon(setPolygon()),
    type: 'test',
    name: 'something'
  });
  marker.setStyle(rStyle);
  var markerLayer = new VectorLayer({
    title: 'point',
    source: new VectorSource({
      features: [marker]
    })
  });



//the map
const map = new Map({
  layers: [ base, markerLayer],
  target: 'maphigh',
  view: view,
  controls: controls
});


//Zoom controls
let element = $('#zoomIn').length;
if (element != null) {
  $('#zoomIn').on('click', function() {
  map.getView().animate({
    zoom: map.getView().getZoom() + 1,
     duration: 200
   });
});
}

let element2 = $('#zoomOut').length;
if (element2 != null) {
  $('#zoomOut').on('click', function() {
  map.getView().animate({
    zoom: map.getView().getZoom() - 1,
     duration: 200
   });
});
}

/*
//Zoom controls
$('#zoomIn').on('click', function() {
  map.getView().animate({
    zoom: map.getView().getZoom() + 1,
     duration: 200
   });
});

$('#zoomOut').on('click', function() {
  map.getView().animate({
   zoom: map.getView().getZoom() - 1,
    duration: 200
  });
});




function zoomIn() {
  map.getView().animate({
    zoom: map.getView().getZoom() + 1,
     duration: 200
   });
};

function zoomOut() {
  map.getView().animate({
    zoom: map.getView().getZoom() - 1,
     duration: 200
   });
};
*/


(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Local(coordinates, continent, country, city) {
  this.coordinates = coordinates;
  this.continent = continent;
  this.country = country;
  this.city = city;
}

//  var giza = Local({lat: 29.9792345, lng: 31.1320132}, "africa", "egypt", "giza");
// }

Local.prototype.createMap = function() {
  // debugger;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: this.coordinates,
    scrollwheel: false,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    map: map,
    position: this.coordinates,
    title: 'Hello World!'
  });

  return map;
}

exports.localModule = Local;

},{}],2:[function(require,module,exports){
var Local = require('./../js/map-model.js').localModule;
// var apiKey = require('./../.env').apiKey;


$('document').ready(function() {
  // Get information
  var locationObjects = [];
  var locationData = [
    [{lat: 48.854231, lng: 2.3034923}, "europe", "france", "paris"], [{lat: 19.432724, lng: -99.133362}, "north america", "mexico", "mexico city"]
    // [{lat: 40.4313399, lng: 116.5637495}, "asia", "china", "beijing"],
    // [{lat: 29.9792345, lng: 31.1320132}, "africa", "egypt", "giza"]
    ];

    // Game setup
  for (i=0; i<locationData.length; i++) {
    latLong = locationData[i][0];
    continent = locationData[i][1];
    country = locationData[i][2];
    city = locationData[i][3];
    map = new Local(latLong, continent, country, city);
    locationObjects.push(map);
  }
  // debugger;

  // Gameplay
  var locationNumber = 0;
  currentMap = locationObjects[locationNumber];
  currentMap.createMap();

  $('#next-map').click(function(){
    locationNumber++;
    currentMap = locationObjects[locationNumber];
    currentMap.createMap();
  });
});

},{"./../js/map-model.js":1}]},{},[2]);

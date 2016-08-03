var Local = require('./../js/map-model.js').localModule;
// var apiKey = require('./../.env').apiKey;

$('document').ready(function() {
  // debugger;
  var myLatLng = {lat: 29.9792345, lng: 31.1320132};
  giza = new Local(myLatLng);
  giza.createMap();
  // var element = $('#map');

  // debugger;

});

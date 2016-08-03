var Local = require('./../js/map-model.js').localModule;
// var apiKey = require('./../.env').apiKey;


$('document').ready(function() {
  // Get information
  var locationObjects = [];
  var locationData = [
    [{lat: 48.854231, lng: 2.3034923}, "europe", "france", "paris"],
    [{lat: 19.432724, lng: -99.133362}, "north america", "mexico", "mexico city"],
    [{lat: 40.4313399, lng: 116.5637495}, "asia", "china", "beijing"],
    [{lat: 29.9792345, lng: 31.1320132}, "africa", "egypt", "giza"]
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
  var zoomNumber = 18;
  currentMap = locationObjects[locationNumber];
  currentMap.createMap(zoomNumber);

  var score = 1000;
  $('#score').text(score);

  // User input

  $('#next-map').click(function(){
    locationNumber++;
    currentMap = locationObjects[locationNumber];
    currentMap.createMap(zoomNumber);
  });

  $('#guess').click(function() {
    var cityGuess = $('#city').val();
    if (cityGuess === currentMap.city) {
      alert("correct");
      score = score + (10 * zoomNumber);
      locationNumber++
      currentMap = locationObjects[locationNumber];
      zoomNumber = 18;
      currentMap.createMap(zoomNumber);
    } else {
      alert("wrong");
      score = score - 50;
    };
    $('#score').text(score);
    console.log(locationNumber);
    console.log(this.zoom);

  });

  $('#zoom-button').click(function(){
    zoomNumber -= 1;
    currentMap.createMap(zoomNumber);
  });




});

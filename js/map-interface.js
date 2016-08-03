var Local = require('./../js/map-model.js').localModule;
// var apiKey = require('./../.env').apiKey;

var cityNames = ["Aberdeen, Scotland",
"Adelaide, Australia",
"Algiers, Algeria",
"Amsterdam, Netherlands",
"Ankara, Turkey",
"Asunción, Paraguay",
"Athens, Greece",
"Auckland, New Zealand",
"Bangkok, Thailand",
"Barcelona, Spain",
"Beijing, China",
"Belém, Brazil",
"Belfast, Northern Ireland",
"Belgrade, Serbia",
"Berlin, Germany",
"Birmingham, England",
"Bogotá, Colombia",
"Bombay, India",
"Bordeaux, France",
"Bremen, Germany",
"Brisbane, Australia",
"Bristol, England",
"Brussels, Belgium",
"Bucharest, Romania",
"Budapest, Hungary",
"Buenos Aires, Argentina",
"Cairo, Egypt",
"Calcutta, India",
"Canton, China",
"Cape Town, South Africa",
"Caracas, Venezuela",
"Cayenne, French Guiana",
"Chihuahua, Mexico",
"Chongqing, China",
"Copenhagen, Denmark",
"Córdoba, Argentina",
"Dakar, Senegal",
"Darwin, Australia",
"Djibouti, Djibouti",
"Dublin, Ireland",
"Durban, South Africa",
"Edinburgh, Scotland",
"Frankfurt, Germany",
"Georgetown, Guyana",
"Glasgow, Scotland",
"Guatemala City, Guatemala",
"Guayaquil, Ecuador",
"Hamburg, Germany",
"Hammerfest, Norway",
"Havana, Cuba",
"Helsinki, Finland",
"Hobart, Tasmania",
"Hong Kong, China",
"Iquique, Chile",
"Irkutsk, Russia",
"Jakarta, Indonesia",
"Johannesburg, South Africa",
"Kingston, Jamaica",
"Kinshasa, Congo",
"Kuala Lumpur, Malaysia",
"La Paz, Bolivia",
"Leeds, England",
"Lima, Peru",
"Lisbon, Portugal",
"Liverpool, England",
"London, England",
"Lyons, France",
"Madrid, Spain",
"Manchester, England",
"Manila, Philippines",
"Marseilles, France",
"Mazatlán, Mexico",
"Mecca, Saudi Arabia",
"Melbourne, Australia",
"Mexico City, Mexico",
"Milan, Italy",
"Montevideo, Uruguay",
"Moscow, Russia",
"Munich, Germany",
"Nagasaki, Japan",
"Nagoya, Japan",
"Nairobi, Kenya",
"Nanjing (Nanking), China",
"Naples, Italy",
"New Delhi, India",
"Newcastle-on-Tyne, England",
"Odessa, Ukraine",
"Osaka, Japan",
"Oslo, Norway",
"Panama City, Panama",
"Paramaribo, Suriname",
"Paris, France",
"Perth, Australia",
"Plymouth, England",
"Port Moresby, Papua New Guinea",
"Prague, Czech Republic",
"Rangoon, Myanmar",
"Reykjavík, Iceland",
"Rio de Janeiro, Brazil",
"Rome, Italy",
"Salvador, Brazil",
"Santiago, Chile",
"St. Petersburg, Russia",
"São Paulo, Brazil",
"Shanghai, China",
"Singapore, Singapore",
"Sofia, Bulgaria",
"Stockholm, Sweden",
"Sydney, Australia",
"Tananarive, Madagascar",
"Teheran, Iran",
"Tokyo, Japan",
"Tripoli, Libya",
"Venice, Italy",
"Veracruz, Mexico",
"Vienna, Austria",
"Vladivostok, Russia",
"Warsaw, Poland",
"Wellington, New Zealand",
"Zürich, Switzerland"]


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

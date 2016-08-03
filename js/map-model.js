function Local(coordinates, continent, country, city) {
  this.coordinates = coordinates;
  this.continent = continent;
  this.country = country;
  this.city = city;
}

//  var giza = Local({lat: 29.9792345, lng: 31.1320132}, "africa", "egypt", "giza");
// }

Local.prototype.createMap = function(zoomNumber) {
  // debugger;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: this.coordinates,
    scrollwheel: false,
    zoom: zoomNumber,
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

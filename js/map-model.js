function Local(city, latLong) {
  this.city = city;
  this.geolocation = latLong;
}

//  var giza = Local({lat: 29.9792345, lng: 31.1320132}, "africa", "egypt", "giza");
// }

Local.prototype.createMap = function(zoomNumber) {
  // debugger;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: this.geolocation,
    scrollwheel: false,
    zoom: zoomNumber,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    map: map,
    position: this.geolocation,
    title: 'Hello World!'
  });

  return map;
};

Local.prototype.getCoordinates = function() {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {'address': this.city}, function(results, status) {
    this.geolocation = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
  });
};

exports.localModule = Local;

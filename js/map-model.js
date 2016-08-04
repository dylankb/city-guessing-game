function Local(city) {
  this.city = city;
}

Local.prototype.getCoordinates = function(zoomNumber) {

  var thisCity = this.city;
  var self = this;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {'address': thisCity}, function(results) {
    self.createMap(zoomNumber, results[0].geometry.location)
  });
};

Local.prototype.createMap = function(zoomNumber, latLng) {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    scrollwheel: false,
    zoom: zoomNumber,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true
  });

  return map;
};



exports.localModule = Local;

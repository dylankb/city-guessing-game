function Local(coordinates) {
  this.coordinates = coordinates;
}

Local.prototype.createMap = function() {
  debugger;
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

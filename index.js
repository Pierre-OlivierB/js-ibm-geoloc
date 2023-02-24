if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("latitude").innerHTML = latitude;
    document.getElementById("longitude").innerHTML = longitude;
  });
} else {
  alert("Votre navigateur ne supporte pas la géolocalisation");
}

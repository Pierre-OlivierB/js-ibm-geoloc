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

//* ----------------------------------
//on crée la scène
var scene = new THREE.Scene();
// on positionne la caméra, son zoom initiale et positionnement
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// on lance la "construction" = le moteur de rendu
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//ajout à l'arbre dom
document.body.appendChild(renderer.domElement);
//on crée notre cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
//on choisi la texture du cube
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//on habit notre cube de la texture
var cube = new THREE.Mesh(geometry, material);
//on ajoute le cube à la scène
scene.add(cube);
// on positionne la caméra sur l'axe des x
camera.position.z = 5;
var animate = function () {
  // gere le changement d'image
  requestAnimationFrame(animate);
  // rotation du cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();

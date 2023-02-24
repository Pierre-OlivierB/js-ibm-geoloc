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
// cube
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// taurus
// var geometry = new THREE.TorusKnotGeometry(0.5 - 0.12, 0.12);
// sphere
//rayon de la sphère, nombre de segments horizontaux (mini=3, defaut=8),
//  nombre de segments verticaux (mini=3, defaut=8)
var geometry = new THREE.SphereGeometry(1.9, 32, 32);
// attrape la texture
var loader = new THREE.TextureLoader();
// load la texture perso
var texture = loader.load("./wood.jpg");
//on choisi la texture du cube puis la couleur possible
var material = new THREE.MeshBasicMaterial({
  map: texture,
  color: "hsl(20, 39%, 59%)",
});
//on habit notre cube de la texture
var cube = new THREE.Mesh(geometry, material);
//on ajoute le cube à la scène
scene.add(cube);
// on positionne la caméra sur l'axe des x
camera.position.z = 4;
var animate = function () {
  // gere le changement d'image
  requestAnimationFrame(animate);
  // rotation du cube
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();

//Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;


    //Render
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    effect = new THREE.StereoEffect( renderer );
    effect.setSize( window.innerWidth, window.innerHeight );
    var controls = new THREE.DeviceOrientationControls(camera);

//Raycast
const raycaster = new THREE.Raycaster();
const ray = new THREE.Vector3();
    //Update
    function updateRaycaster() {
        raycaster.set(camera.position, ray);
    }

//Lights
function light(x, y) {
    const light = new THREE.PointLight(0xffbf00, 0.4, 15);
    light.position.set(x, 1, y);
    scene.add(light);
    //helper
    const pointLightHelper = new THREE.PointLightHelper(light, 1);
    //scene.add( pointLightHelper );
}

light(-0.5,-3);
light(-3,1.2);
light(4,-0.5);
light(2.2,3.7);

const light2 = new THREE.AmbientLight( 0x404040 );
scene.add( light2 );

const pictures = [];

//Geometry
function Picture(imgRute,x,z) {
    var geometry = new THREE.PlaneGeometry(0.8, 1.2);
    var texture = new THREE.TextureLoader().load(imgRute); 
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.position.set(x,0.1,z)
    return plane;
  }

const picture1 = Picture('img/picture1.jpeg',-0.48,-3.9);
pictures.push(picture1);
const picture2 = Picture('img/picture2.jpeg',4,-1.4);
pictures.push(picture2);
const  picture3 = Picture('img/picture3.jpeg',-3.17,0.17);
pictures.push(picture3);
const picture4 = Picture('img/picture4.jpeg',2.12,2.85);
pictures.push(picture4);

var objLoader = new THREE.OBJLoader();
objLoader.load('models/galery.obj', function(object){
    object.scale += 50;
    object.position.y = -1;
    object.position.x = 7.2;
    object.position.z = 13;
    object.rotation.y = 1.5708;
    
    scene.add(object);
})

function onMauseMove(){
    const intersectObject = raycaster.intersectObject(picture1);
    if (intersectObject.length > 0) {
        picture1.scale.x = 1.5;
        picture1.scale.y = 1.5;
      } else {
        picture1.scale.set(1, 1, 1);
      }
      const intersectsPint2 = raycaster.intersectObject(picture2);
      if (intersectsPint2.length > 0) {
        picture2.scale.x = 1.5;
        picture2.scale.y = 1.5;
      } else {
        picture2.scale.set(1, 1, 1);
      }
      const intersectsPint3 = raycaster.intersectObject(picture3);
      if (intersectsPint3.length > 0) {
        picture3.scale.x = 1.5;
        picture3.scale.y = 1.5;
      } else {
        picture3.scale.set(1, 1, 1);
      }
      const intersectsPint4 = raycaster.intersectObject(picture4);
      if (intersectsPint4.length > 0) {
        picture4.scale.x = 1.5;
        picture4.scale.y = 1.5;
      } else {
        picture4.scale.set(1, 1, 1);
      }
}

//Animate Funtion
function animate() {

    
        
  requestAnimationFrame(animate);

  //Raycast
  updateRaycaster();
  
  //Move
  window.addEventListener("keydown", onMauseMove);

  renderer.render(scene, camera);
  //Update Orbit Controls
  controls.update();
  effect.render(scene, camera);
}

animate();
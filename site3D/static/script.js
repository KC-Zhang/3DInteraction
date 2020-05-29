
import * as THREE from "/static/node_modules/three/src/Three.js";
import { OrbitControls } from '/static/node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '/static/node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// Load 3D Scene
var scene = new THREE.Scene();

 // Load Camera Perspektive
var camera = new THREE.PerspectiveCamera( 50,window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 10281, 195, -1250 );

 // Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: false });
// renderer.setClearColor( 0xC5C5C3 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

 // Load the Orbitcontroller
var controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 10380, 135, -1320  );
controls.rotateSpeed = 0.3; controls.zoomSpeed = 2; controls.panSpeed = 0.3

 // Load Light
// var ambientLight = new THREE.AmbientLight( 0xcccccc );
// scene.add( ambientLight );

// var directionalLight = new THREE.DirectionalLight( 0xffffff );
// directionalLight.position.set( 1, 1, 5 ).normalize();
// scene.add( directionalLight );

// BEGIN Clara.io JSON loader code
var sceneLoader = new THREE.ObjectLoader();
sceneLoader.load("static/scene.json", function ( obj ) {

scene.add( obj );
// camera.lookAt( obj.position );

} );

{
    const planeSize = 1;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    scene.add(mesh);
}

function animate() {
    render();
    requestAnimationFrame( animate );
    }

function render() {
    renderer.render( scene, camera );
    }

render();
animate();

//
// function main() {
//   const canvas = document.querySelector('#c');
//   const renderer = new THREE.WebGLRenderer({canvas});
//   const fov = 25;
//   const aspect = window.innerWidth / window.innerHeight;  // the canvas default
//   const near = 1;
//   const far = 20000;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(1, 1, 20);
//
//   const controls = new OrbitControls(camera, canvas);
//   controls.target.set(0, 5, 0);
//   controls.update();
//
//   const scene = new THREE.Scene();
//   scene.background = new THREE.Color('black');
//
//   // {
//   //   const planeSize = 40;
//   //
//   //   const loader = new THREE.TextureLoader();
//   //   const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
//   //   texture.wrapS = THREE.RepeatWrapping;
//   //   texture.wrapT = THREE.RepeatWrapping;
//   //   texture.magFilter = THREE.NearestFilter;
//   //   const repeats = planeSize / 2;
//   //   texture.repeat.set(repeats, repeats);
//   //
//   //   const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
//   //   const planeMat = new THREE.MeshPhongMaterial({
//   //     map: texture,
//   //     side: THREE.DoubleSide,
//   //   });
//   //   const mesh = new THREE.Mesh(planeGeo, planeMat);
//   //   mesh.rotation.x = Math.PI * -.5;
//   //   scene.add(mesh);
//   // }
//
//   {
//     const skyColor = 0xB1E1FF;  // light blue
//     const groundColor = 0xB97A20;  // brownish orange
//     const intensity = 1;
//     const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
//     scene.add(light);
//   }
//
//   {
//     const color = 0xFFFFFF;
//     const intensity = 1;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(5, 10, 2);
//     scene.add(light);
//     scene.add(light.target);
//   }
//
//     // Instantiate a loader
//     var loader = new GLTFLoader();
//
//     // Load a glTF resource
//     loader.load(
//         // resource URL
//         '/static/39.gltf',
//         // called when the resource is loaded
//         function ( gltf ) {
//
//             scene.add( gltf.scene );
//             //
//             // gltf.animations; // Array<THREE.AnimationClip>
//             // gltf.scene; // THREE.Group
//             // gltf.scenes; // Array<THREE.Group>
//             // gltf.cameras; // Array<THREE.Camera>
//             // gltf.asset; // Object
//
//         },
//
//     );
//
//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }
//
//   function render() {
//
//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }
//
//     renderer.render(scene, camera);
//
//     requestAnimationFrame(render);
//   }
//
//   requestAnimationFrame(render);
// }
//
// main();
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// console.log(OrbitControls);

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh);

// console.log(scene);
// console.log(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);

camera.position.z = 5;
// scene.add(camera);

// Initialize renderer
const canvas = document.querySelector("canvas.threejs");
// console.log(canvas);
const renderer = new THREE.WebGLRenderer({ canvas });
// Initialize the controls
const controls = new OrbitControls(camera, canvas);

renderer.setSize(window.innerWidth, window.innerHeight);
controls.enableDamping = true;
controls.autoRotate = true;

const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();

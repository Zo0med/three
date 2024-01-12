import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const geometry = new THREE.TorusGeometry(6,0.1);
const geometry2 = new THREE.BoxGeometry(5,5,5,);
const material = new THREE.MeshBasicMaterial({ color: 0x2aaccc });
material.blending = THREE.CustomBlending;
material.blendEquation = THREE.AddEquation;
material.blendSrc = THREE.SrcAlphaFactor;
material.blendDst = THREE.OneMinusSrcAlphaFactor
const material2 = new THREE.MeshBasicMaterial({ color: 0xccaccc });
material2.blending = THREE.CustomBlending;
material2.blendEquation = THREE.AddEquation;
material2.blendSrc = THREE.SrcAlphaFactor;
material2.blendDst = THREE.OneMinusSrcAlphaFactor
const torus = new THREE.Mesh(geometry, material)
const cube = new THREE.Mesh(geometry2, material2)
scene.add(cube);
scene.add(torus);

camera.position.z = 30

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.x += 0.005;
    cube.rotation.z += 0.005;
    torus.rotation.y += 0.007;
    torus.rotation.y += 0.007;
    renderer.render(scene,camera);
}
animate()
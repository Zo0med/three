import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const geometry = new THREE.TorusGeometry(6,0.2,);
const geometry2 = new THREE.BoxGeometry(5,5,5,);
const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa});
const material2 = new THREE.MeshBasicMaterial({
    color: 0xccaccc,
});
const torus = new THREE.Mesh(geometry, material);
const cube = new THREE.Mesh(geometry2, material2);
scene.add(cube);
scene.add(torus);

camera.position.z = 10

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.x += 0.005;
    cube.rotation.z += 0.005;
    torus.rotation.y += 0.004;
    torus.rotation.y += 0.004;
    renderer.render(scene,camera);
}

animate()
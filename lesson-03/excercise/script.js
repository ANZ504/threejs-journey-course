const canvas = document.querySelector('.webgl');
// Create a scene 
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Create a material with a color red
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// Create mesh for the cube
const mesh = new THREE.Mesh(geometry, material)

// Add mesh to the scene
scene.add(mesh);

// Camera
// Sizes
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Add camera to the scene
camera.position.z = 3
scene.add(camera);

// Rederer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
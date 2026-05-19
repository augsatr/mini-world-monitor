import Globe from 'globe.gl';
import * as THREE from 'three';
import { researchCenters } from './data/research-centers';
import { universities } from './data/universities';
import { companies } from './data/companies';
import type { Marker } from './data/research-centers';

const globe = Globe({ animateIn: true })
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .showAtmosphere(true)
  .atmosphereColor('#3a6ea5')
  .atmosphereAltitude(0.25)
  .width(window.innerWidth - 320)
  .height(window.innerHeight)
(document.getElementById('globe-container')!);

globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.6;

type Category = 'research' | 'universities' | 'companies';

const allMarkers: { data: Marker[]; color: string; category: Category; label: string }[] = [
  { data: researchCenters, color: '#ff6b6b', category: 'research', label: 'Research Centers' },
  { data: universities, color: '#ffd93d', category: 'universities', label: 'Universities' },
  { data: companies, color: '#6bcbff', category: 'companies', label: 'Companies' },
];

const activeLayers: Record<Category, boolean> = {
  research: true,
  universities: true,
  companies: true,
};

function updateCounts() {
  (document.getElementById('count-research') as HTMLElement).textContent = String(researchCenters.length);
  (document.getElementById('count-universities') as HTMLElement).textContent = String(universities.length);
  (document.getElementById('count-companies') as HTMLElement).textContent = String(companies.length);
}
updateCounts();

// Initialize each marker group as its own Three.js group for independent toggling
const pointGroups: Record<Category, THREE.Group> = {} as any;
const labelGroups: Record<Category, THREE.Group> = {} as any;

for (const { category } of allMarkers) {
  const pGroup = new THREE.Group();
  const lGroup = new THREE.Group();
  pointGroups[category] = pGroup;
  labelGroups[category] = lGroup;
  globe.scene().add(pGroup);
  globe.scene().add(lGroup);
}

// Pre-compute globe radius
const globeRadius = 200; // default globe.gl radius

// Convert lat/lng to 3D position
function getPosition(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

// Create markers for each layer
for (const { data, color, category } of allMarkers) {
  const pGroup = pointGroups[category];
  const lGroup = labelGroups[category];

  const geometry = new THREE.SphereGeometry(1.6, 16, 16);
  const material = new THREE.MeshBasicMaterial({ color });

  for (const m of data) {
    const pos = getPosition(m.lat, m.lng, globeRadius);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(pos);
    mesh.userData = { ...m, color };
    pGroup.add(mesh);

    // Label sprite
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 48;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 18px -apple-system, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(m.name, 128, 30);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.85 });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.copy(pos.clone().multiplyScalar(1.025));
    sprite.scale.set(8, 1.5, 1);
    lGroup.add(sprite);
  }
}

// Raycaster for click detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Collect all marker meshes for raycasting
let allMeshes: THREE.Mesh[] = [];
for (const { category } of allMarkers) {
  pointGroups[category].children.forEach(c => {
    if (c instanceof THREE.Mesh) allMeshes.push(c);
  });
}

function onGlobeClick(event: MouseEvent) {
  const rect = globe.container().getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, globe.camera() as any);

  const meshes: THREE.Mesh[] = [];
  for (const { category } of allMarkers) {
    if (activeLayers[category]) {
      pointGroups[category].children.forEach(c => {
        if (c instanceof THREE.Mesh) meshes.push(c);
      });
    }
  }

  const intersects = raycaster.intersectObjects(meshes);
  if (intersects.length > 0) {
    const hit = intersects[0].object as THREE.Mesh;
    const data = hit.userData as Marker & { color: string };
    document.getElementById('info-title')!.textContent = data.name;
    document.getElementById('info-desc')!.textContent = data.desc;

    globe.pointOfView({ lat: data.lat, lng: data.lng, altitude: 0.8 }, 800);
  }
}

globe.container().addEventListener('click', onGlobeClick);

// Toggle controls
function setupToggle(id: string, category: Category) {
  const checkbox = document.getElementById(id) as HTMLInputElement;
  checkbox.addEventListener('change', () => {
    activeLayers[category] = checkbox.checked;
    pointGroups[category].visible = checkbox.checked;
    labelGroups[category].visible = checkbox.checked;
  });
}

setupToggle('toggle-research', 'research');
setupToggle('toggle-universities', 'universities');
setupToggle('toggle-companies', 'companies');

// Resize handler
window.addEventListener('resize', () => {
  globe.width(window.innerWidth - 320);
  globe.height(window.innerHeight);
});

// Re-build label visibility on each render
globe.onRender(() => {
  const scale = globe.camera().position.length() / 500;
  for (const { category } of allMarkers) {
    labelGroups[category].children.forEach(sprite => {
      if (activeLayers[category]) {
        sprite.scale.setScalar(Math.max(2, Math.min(12, 8 / scale)));
      }
    });
  }
});

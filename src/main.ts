import Globe from 'globe.gl';
import { researchCenters } from './data/research-centers';
import { universities } from './data/universities';
import { companies } from './data/companies';
import type { Marker } from './data/research-centers';

type Category = 'research' | 'universities' | 'companies';

interface PointData extends Marker {
  color: string;
  category: Category;
}

const allMarkers: PointData[] = [
  ...researchCenters.map(m => ({ ...m, color: '#ff6b6b', category: 'research' as Category })),
  ...universities.map(m => ({ ...m, color: '#ffd93d', category: 'universities' as Category })),
  ...companies.map(m => ({ ...m, color: '#6bcbff', category: 'companies' as Category })),
];

const activeLayers: Record<Category, boolean> = {
  research: true,
  universities: true,
  companies: true,
};

const globe = Globe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .showAtmosphere(true)
  .atmosphereColor('#3a6ea5')
  .atmosphereAltitude(0.25)
  .width(window.innerWidth - 320)
  .height(window.innerHeight)
  .pointLat(d => (d as PointData).lat)
  .pointLng(d => (d as PointData).lng)
  .pointColor(d => (d as PointData).color)
  .pointAltitude(0.01)
  .pointRadius(0.5)
  .pointLabel(d => {
    const p = d as PointData;
    return `<div style="background:#0a0e17;border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 12px;font:12px -apple-system,sans-serif;color:#e0e6f0;max-width:220px">
      <b style="color:#fff">${p.name}</b><br/>${p.desc}
    </div>`;
  })
(document.getElementById('globe-container')!);

globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.6;

function updatePoints() {
  const visible = allMarkers.filter(m => activeLayers[m.category]);
  globe.pointsData(visible);
  (document.getElementById('count-research') as HTMLElement).textContent = String(activeLayers.research ? researchCenters.length : 0);
  (document.getElementById('count-universities') as HTMLElement).textContent = String(activeLayers.universities ? universities.length : 0);
  (document.getElementById('count-companies') as HTMLElement).textContent = String(activeLayers.companies ? companies.length : 0);
}

updatePoints();

globe.onGlobeClick(({ lat, lng, point }: { lat: number; lng: number; point?: PointData }) => {
  if (point) {
    document.getElementById('info-title')!.textContent = point.name;
    document.getElementById('info-desc')!.textContent = point.desc;
    globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 0.8 }, 800);
  }
});

function setupToggle(id: string, category: Category) {
  const checkbox = document.getElementById(id) as HTMLInputElement;
  checkbox.addEventListener('change', () => {
    activeLayers[category] = checkbox.checked;
    updatePoints();
  });
}

setupToggle('toggle-research', 'research');
setupToggle('toggle-universities', 'universities');
setupToggle('toggle-companies', 'companies');

window.addEventListener('resize', () => {
  globe.width(window.innerWidth - 320);
  globe.height(window.innerHeight);
});

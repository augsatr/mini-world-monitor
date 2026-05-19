export interface Marker {
  lat: number;
  lng: number;
  name: string;
  desc: string;
  type: 'research';
}

export const researchCenters: Marker[] = [
  { lat: 46.2333, lng: 6.0500, name: 'CERN', desc: 'European Organization for Nuclear Research — Large Hadron Collider', type: 'research' },
  { lat: 42.3736, lng: -71.1097, name: 'MIT Lincoln Laboratory', desc: 'Federally funded R&D center focused on national security', type: 'research' },
  { lat: 37.4163, lng: -122.0253, name: 'NASA Ames Research Center', desc: 'NASA center for aerospace, astrobiology, and IT', type: 'research' },
  { lat: 39.4814, lng: -76.1324, name: 'APL — Johns Hopkins Applied Physics Lab', desc: 'Defense, space, and cybersecurity R&D', type: 'research' },
  { lat: 34.2000, lng: -118.1667, name: 'NASA Jet Propulsion Laboratory', desc: 'Robotic space exploration and Earth science', type: 'research' },
  { lat: 29.5596, lng: -95.0793, name: 'NASA Johnson Space Center', desc: 'Human spaceflight, ISS, Orion program', type: 'research' },
  { lat: 28.5729, lng: -80.6490, name: 'NASA Kennedy Space Center', desc: 'Launch operations and spaceport', type: 'research' },
  { lat: 38.8822, lng: -76.9926, name: 'NASA Goddard Space Flight Center', desc: 'Earth science, astrophysics, heliophysics', type: 'research' },
  { lat: 34.6394, lng: -86.7769, name: 'NASA Marshall Space Flight Center', desc: 'Propulsion, space transportation', type: 'research' },
  { lat: 37.0902, lng: -76.3770, name: 'NASA Langley Research Center', desc: 'Aeronautics, atmospheric science', type: 'research' },
  { lat: 48.7758, lng: 11.4318, name: 'Max Planck Institute for Plasma Physics', desc: 'Fusion energy research (IPP Garching)', type: 'research' },
  { lat: 52.3811, lng: 13.1179, name: 'Max Planck Institute for Gravitational Physics', desc: 'Albert Einstein Institute — gravitational waves', type: 'research' },
  { lat: 51.5556, lng: -1.1153, name: 'Rutherford Appleton Laboratory', desc: 'UK particle physics, space science, and neutron scattering', type: 'research' },
  { lat: 52.2035, lng: 0.1158, name: 'Cavendish Laboratory', desc: 'Cambridge University physics lab — DNA, electron, superconductivity', type: 'research' },
  { lat: 35.7120, lng: 139.7614, name: 'RIKEN', desc: 'Japan\'s largest comprehensive research institute', type: 'research' },
  { lat: 37.4130, lng: 127.0730, name: 'KAIST Research Center', desc: 'Korea Advanced Institute of Science & Technology', type: 'research' },
  { lat: 55.7558, lng: 37.6173, name: 'Kurchatov Institute', desc: 'Russia\'s leading nuclear research center', type: 'research' },
  { lat: 22.3200, lng: 114.1700, name: 'HKSTP — Hong Kong Science & Technology Parks', desc: 'R&D hub for biotech, AI, fintech', type: 'research' },
  { lat: 48.8566, lng: 2.3522, name: 'CNRS Campus Gif-sur-Yvette', desc: 'French National Centre for Scientific Research', type: 'research' },
  { lat: 52.5200, lng: 13.4050, name: 'Fraunhofer Society HQ', desc: 'Germany\'s largest applied research organization', type: 'research' },
  { lat: 52.5200, lng: 13.4050, name: 'Helmholtz Association', desc: 'Germany\'s largest research organization — 18 centers', type: 'research' },
  { lat: 35.6762, lng: 139.6503, name: 'AIST — National Institute of Advanced Industrial Science & Technology', desc: 'Japan\'s largest public research organization', type: 'research' },
  { lat: 1.3521, lng: 103.8198, name: 'A*STAR', desc: 'Agency for Science, Technology & Research — Singapore', type: 'research' },
  { lat: 25.0343, lng: 121.5645, name: 'Academia Sinica', desc: 'Taiwan\'s national research academy', type: 'research' },
  { lat: 59.3293, lng: 18.0686, name: 'KTH Royal Institute of Technology Research Labs', desc: 'Sweden\'s leading technical research university', type: 'research' },
  { lat: 60.1699, lng: 24.9384, name: 'VTT Technical Research Centre of Finland', desc: 'Finland\'s leading applied research organization', type: 'research' },
  { lat: 52.3556, lng: 4.9563, name: 'AMOLF', desc: 'Dutch research institute for molecular physics', type: 'research' },
  { lat: 51.5074, lng: -0.1278, name: 'Francis Crick Institute', desc: 'UK biomedical research institute', type: 'research' },
  { lat: 52.1624, lng: 4.4904, name: 'SRON Netherlands Institute for Space Research', desc: 'Space science and technology', type: 'research' },
  { lat: 47.3769, lng: 8.5417, name: 'ETH Zurich Research Labs', desc: 'Swiss Federal Institute of Technology research', type: 'research' },
  { lat: -33.8688, lng: 151.2093, name: 'CSIRO', desc: 'Australia\'s national science agency', type: 'research' },
  { lat: -26.2041, lng: 28.0473, name: 'CSIR South Africa', desc: 'Council for Scientific and Industrial Research', type: 'research' },
  { lat: 19.0760, lng: 72.8777, name: 'BARC — Bhabha Atomic Research Centre', desc: 'India\'s premier nuclear research center', type: 'research' },
  { lat: 12.9716, lng: 77.5946, name: 'ISRO HQ — Indian Space Research Organisation', desc: 'India\'s space agency and research', type: 'research' },
  { lat: 30.0444, lng: 31.2357, name: 'NILES — National Institute for Laser Enhanced Sciences', desc: 'Egyptian laser and photonics research', type: 'research' },
  { lat: 51.7592, lng: 19.4560, name: 'CERN Poland — NCBJ', desc: 'National Centre for Nuclear Research, Poland', type: 'research' },
  { lat: 48.2082, lng: 16.3738, name: 'ISTA — Institute of Science and Technology Austria', desc: 'Basic research in natural sciences', type: 'research' },
  { lat: 55.6761, lng: 12.5683, name: 'Niels Bohr Institute', desc: 'University of Copenhagen — quantum physics, astrophysics', type: 'research' },
  { lat: 59.9139, lng: 10.7522, name: 'SINTEF', desc: 'Scandinavia\'s largest independent research institute', type: 'research' },
  { lat: 18.0174, lng: -76.8099, name: 'ICTP — International Centre for Theoretical Physics', desc: 'Trieste, Italy — physics research for developing world', type: 'research' },
];

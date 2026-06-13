"use client";

import { useState } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Si no importamos esto, el mapa se ve destruido

export default function LiveMap() {
  const [viewState, setViewState] = useState({
    longitude: -90.5227, // Longitud de Ciudad de Guatemala
    latitude: 14.6349,   // Latitud de Ciudad de Guatemala
    zoom: 12,            // Zoom ideal para ver el Área Metropolitana
    pitch: 45,           // Inclinación para dar un efecto 3D
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} // <--- CAMBIO AQUÍ
      style={{ width: '100%', height: '100%' }}
    />
  );
}
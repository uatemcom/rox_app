"use client";

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 

// Asignamos el token directamente al objeto global de Mapbox
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

export default function LiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Evitamos inicializar el mapa múltiples veces
    if (map.current || !mapContainer.current) return; 

    // Inicializamos el mapa nativo
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-90.5227, 14.6349], // Coordenadas de Ciudad de Guatemala
      zoom: 12,
      pitch: 45,
    });

    // Limpieza de memoria (Vital para que el navegador no colapse)
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Retornamos el contenedor limpio
  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
}
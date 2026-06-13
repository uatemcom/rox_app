"use client"; // Le decimos a Next.js que este es un Client Component

import dynamic from 'next/dynamic';

// Movemos la importación dinámica aquí, que sí está permitido
const LiveMap = dynamic(() => import('./LiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-900 flex items-center justify-center animate-pulse">
      <p className="text-slate-400 text-sm font-medium">Cargando mapa operativo de Guatemala...</p>
    </div>
  ),
});

export default function MapWrapper() {
  return <LiveMap />;
}
import dynamic from 'next/dynamic';
import { Activity, AlertTriangle, Route, ShieldCheck } from 'lucide-react';

const LiveMap = dynamic(() => import('@/components/map/LiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-900 flex items-center justify-center animate-pulse">
      <p className="text-slate-400 text-sm font-medium">Cargando mapa operativo de Guatemala...</p>
    </div>
  ),
});

export default async function DashboardPage() {

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* 1. SECCIÓN DE MÉTRICAS RÁPIDAS (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Tarjeta: Buses Activos */}
        <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-4 shadow-sm">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Buses en Ruta</p>
            <h3 className="text-2xl font-bold text-slate-100">142</h3>
          </div>
        </div>

        {/* Tarjeta: Rutas Monitoreadas */}
        <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-4 shadow-sm">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <Route className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Rutas Activas</p>
            <h3 className="text-2xl font-bold text-slate-100">18 <span className="text-xs font-normal text-slate-500">de 24</span></h3>
          </div>
        </div>

        {/* Tarjeta: Alertas Críticas */}
        <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-4 shadow-sm">
          <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Alertas Hoy</p>
            <h3 className="text-2xl font-bold text-slate-100">3</h3>
          </div>
        </div>

        {/* Tarjeta: Cumplimiento de Horarios */}
        <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-4 shadow-sm">
          <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Cumplimiento</p>
            <h3 className="text-2xl font-bold text-slate-100">94.2%</h3>
          </div>
        </div>
      </div>

      {/* 2. ESPACIO PRINCIPAL: MAPA OPERATIVO Y FEED DE ALERTAS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-[500px]">
        {/* Contenedor del Mapa (Ocupa 3 columnas) */}
        <div className="lg:col-span-3 bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden shadow-sm relative flex flex-col">
          <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center z-10">
            <div>
              <h2 className="text-sm font-semibold text-slate-200">Rastreo Geográfico General</h2>
              <p className="text-xs text-slate-400">Visualización de flotas en el Área Metropolitana</p>
            </div>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 animate-pulse">
                ● En vivo
              </span>
            </div>
          </div>
          <div className="w-full flex-1 relative bg-slate-900">
            <LiveMap />
          </div>
        </div>

        {/* Feed de Eventos en Tiempo Real (Ocupa 1 columna) */}
        <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-4 flex flex-col shadow-sm">
          <h2 className="text-sm font-semibold text-slate-200 mb-4">Eventos Recientes</h2>
          <div className="space-y-3 overflow-y-auto flex-1 pr-1 text-xs">
            
            {/* Alerta 1 */}
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex justify-between items-start">
                <span className="font-bold text-red-400">Botón de Pánico</span>
                <span className="text-slate-500">Hace 2m</span>
              </div>
              <p className="text-slate-300 mt-1">Unidad 045 - Ruta Extraurbana (Centra Sur)</p>
            </div>

            {/* Alerta 2 */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <div className="flex justify-between items-start">
                <span className="font-bold text-amber-400">Exceso de Velocidad</span>
                <span className="text-slate-500">Hace 14m</span>
              </div>
              <p className="text-slate-300 mt-1">Unidad 112 - Calzada Roosevelt (84 km/h)</p>
            </div>

            {/* Alerta 3 */}
            <div className="p-3 bg-slate-700/30 border border-slate-700 rounded-lg">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-400">Desvío de Ruta</span>
                <span className="text-slate-500">Hace 32m</span>
              </div>
              <p className="text-slate-300 mt-1">Unidad 089 - Transurbano Zona 18</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
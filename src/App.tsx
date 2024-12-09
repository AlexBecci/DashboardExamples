import { MonthlyOverview } from './components/MonthlyOverview'
import { RecentRecords } from './components/RecentRecords'
import { QuickActions } from './components/QuickActions'
import { CategoryPieChart } from './components/CategoryPleChart'
import { ComprehensiveDashboard } from './components/ComprehensiveDashboard'

function App() {

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Resumen Mensual</h2>
          <MonthlyOverview />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Registros Recientes</h2>
          <RecentRecords />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Acciones Rápidas</h2>
          <QuickActions />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Distribución de Gastos</h2>
          <CategoryPieChart />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard Detallado</h2>
          <ComprehensiveDashboard />
        </div>
      </div>
    </div>
  )
}

export default App

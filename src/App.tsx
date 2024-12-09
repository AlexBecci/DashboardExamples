import { MonthlyOverview } from './components/MonthlyOverview'
import { RecentRecords } from './components/RecentRecords'
import { QuickActions } from './components/QuickActions'
import { CategoryPieChart } from './components/CategoryPleChart'
import { ComprehensiveDashboard } from './components/ComprehensiveDashboard'
import { ExpenseCategoryComparison } from './components/ExpenseCategoryComparison'
import { StackedIncomeExpenses } from './components/StackedIncomeExpenses'
import { NetWorthEvolution } from './components/NetWorthEvolution'
import { InvestmentDistribution } from './components/InvestmentDistribution'
import { BudgetVsActualSpending } from './components/BudgetVsActualSpending'
import { ExpenseAnalysisBubble } from './components/ExpenseAnalysisBubble'
import { IncomeExpenseScatter } from './components/IncomeExpenseScatter'
import { TopExpenseCategories } from './components/TopExpenseCategories'
import { IncomeSourceDistribution } from './components/IncomeSourceDistribution'
import { SavingsGoalTracker } from './components/SavingsGoalTracker'
import { ParkingDashboard } from './components/ParkingDashboard'

function App() {
  /* 
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
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Análisis Financiero Detallado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Comparación de Gastos por Categoría</h3>
              <ExpenseCategoryComparison />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Ingresos y Gastos Mensuales</h3>
              <StackedIncomeExpenses />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Evolución del Patrimonio Neto</h3>
              <NetWorthEvolution />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Distribución de Inversiones</h3>
              <InvestmentDistribution />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Presupuesto vs Gasto Real</h3>
              <BudgetVsActualSpending />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Análisis de Gastos</h3>
              <ExpenseAnalysisBubble />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Relación Ingresos-Gastos</h3>
              <IncomeExpenseScatter />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Top 5 Categorías de Gastos</h3>
              <TopExpenseCategories />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Distribución de Ingresos por Fuente</h3>
              <IncomeSourceDistribution />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4">Seguimiento de Metas de Ahorro</h3>
              <SavingsGoalTracker />
            </div>
          </div>
        </div>
      </div>
    ) */
  return (
    <ParkingDashboard />
  )
}

export default App

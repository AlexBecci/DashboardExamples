import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const monthlyData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Ingresos',
            data: [1500, 1800, 2000, 1900, 2200, 2400],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Gastos',
            data: [1200, 1350, 1800, 1600, 1950, 2100],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};

const savingsData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Ahorros Acumulados',
            data: [300, 750, 950, 1250, 1500, 1800],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }
    ]
};

const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Ingresos vs Gastos Mensuales'
        }
    }
};

const lineOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Ahorros Acumulados'
        }
    }
};

export function ComprehensiveDashboard() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Ingresos vs Gastos</h3>
                    <Bar options={barOptions} data={monthlyData} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Ahorros Acumulados</h3>
                    <Line options={lineOptions} data={savingsData} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Balance Total</h3>
                    <p className="text-3xl font-bold text-green-600">€3,500.00</p>
                    <p className="text-sm text-gray-500">+15% vs mes anterior</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Gasto Promedio Diario</h3>
                    <p className="text-3xl font-bold text-blue-600">€70.00</p>
                    <p className="text-sm text-gray-500">-5% vs mes anterior</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Categoría Principal</h3>
                    <p className="text-3xl font-bold text-purple-600">Comida</p>
                    <p className="text-sm text-gray-500">30% del gasto total</p>
                </div>
            </div>
        </div>
    );
}


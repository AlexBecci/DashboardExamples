import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Ingresos',
            data: [2000, 2200, 2100, 2300, 2400, 2500],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
            label: 'Gastos',
            data: [1800, 1900, 2000, 2100, 2200, 2300],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
    ],
};

const options = {
    responsive: true,
    scales: {
        x: { stacked: true },
        y: { stacked: true },
    },
    plugins: {
        legend: { position: 'top' as const },
        title: {
            display: true,
            text: 'Ingresos y Gastos Mensuales',
        },
    },
};

export function StackedIncomeExpenses() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Bar options={options} data={data} />
        </div>
    );
}


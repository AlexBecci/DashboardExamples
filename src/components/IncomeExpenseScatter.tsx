import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
    datasets: [
        {
            label: 'Ingresos vs Gastos',
            data: [
                { x: 1500, y: 1400 },
                { x: 2000, y: 1800 },
                { x: 2500, y: 2200 },
                { x: 3000, y: 2600 },
                { x: 3500, y: 3000 },
                { x: 4000, y: 3300 },
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: {
            display: true,
            text: 'Relación Ingresos-Gastos',
        },
    },
    scales: {
        x: { title: { display: true, text: 'Ingresos' } },
        y: { title: { display: true, text: 'Gastos' } },
    },
};

export function IncomeExpenseScatter() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Scatter options={options} data={data} />
        </div>
    );
}


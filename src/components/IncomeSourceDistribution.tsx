import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
    labels: ['Salario', 'Inversiones', 'Freelance', 'Alquileres', 'Otros'],
    datasets: [
        {
            data: [3000, 500, 1000, 800, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
            ],
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: {
            display: true,
            text: 'Distribución de Ingresos por Fuente',
        },
    },
};

export function IncomeSourceDistribution() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <PolarArea options={options} data={data} />
        </div>
    );
}


import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Acciones', 'Bonos', 'Bienes Raíces', 'Criptomonedas', 'Efectivo'],
    datasets: [
        {
            data: [35, 25, 20, 10, 10],
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
        legend: { position: 'right' as const },
        title: {
            display: true,
            text: 'Distribución de Inversiones',
        },
    },
};

export function InvestmentDistribution() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Doughnut options={options} data={data} />
        </div>
    );
}


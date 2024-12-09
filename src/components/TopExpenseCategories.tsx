import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Vivienda', 'Comida', 'Transporte', 'Entretenimiento', 'Salud'],
    datasets: [
        {
            label: 'Gasto Mensual',
            data: [1200, 500, 300, 200, 150],
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
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: {
            display: true,
            text: 'Top 5 Categorías de Gastos',
        },
    },
};

export function TopExpenseCategories() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Bar options={options} data={data} />
        </div>
    );
}


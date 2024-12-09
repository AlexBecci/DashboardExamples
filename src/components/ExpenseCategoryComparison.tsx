import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Comida',
            data: [300, 350, 300, 320, 380, 350],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Transporte',
            data: [150, 180, 200, 220, 200, 180],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
            label: 'Entretenimiento',
            data: [100, 120, 140, 160, 180, 200],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Comparación de Gastos por Categoría',
        },
    },
};

export function ExpenseCategoryComparison() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Line options={options} data={data} />
        </div>
    );
}


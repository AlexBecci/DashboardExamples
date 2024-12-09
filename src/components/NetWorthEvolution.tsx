import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            fill: true,
            label: 'Patrimonio Neto',
            data: [10000, 11000, 12500, 14000, 15500, 17000],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: {
            display: true,
            text: 'Evolución del Patrimonio Neto',
        },
    },
};

export function NetWorthEvolution() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Line options={options} data={data} />
        </div>
    );
}


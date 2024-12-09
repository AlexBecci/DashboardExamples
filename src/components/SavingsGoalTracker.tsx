import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
/* import annotationPlugin from 'chartjs-plugin-annotation'; */

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend/* , annotationPlugin */);

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Ahorros Actuales',
            data: [500, 1000, 1800, 2300, 3000, 3500],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: {
            display: true,
            text: 'Seguimiento de Metas de Ahorro',
        },
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    yMin: 3000,
                    yMax: 3000,
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 2,
                    label: {
                        content: 'Meta',
                        enabled: true,
                        position: 'end',
                    },
                },
            },
        },
    },
};

export function SavingsGoalTracker() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Line options={options} data={data} />
        </div>
    );
}


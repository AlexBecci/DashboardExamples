import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
    labels: ['Comida', 'Transporte', 'Vivienda', 'Entretenimiento', 'Salud', 'Educación'],
    datasets: [
        {
            label: 'Presupuesto',
            data: [300, 200, 500, 100, 150, 200],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
        },
        {
            label: 'Gasto Real',
            data: [350, 180, 490, 140, 130, 220],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Presupuesto vs Gasto Real',
        },
    },
};

export function BudgetVsActualSpending() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Radar options={options} data={data} />
        </div>
    );
}

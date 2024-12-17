import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2'
// Register components
ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

function LineChart() {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Ventas',
            data: [12, 16, 3, 5, 2, 3],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
    const options = {};

    return (
        <div className="w-full">
            <Line data={data} /* options={options} */ />
        </div>
    )
}

function BarChart() {
    const data = {
        labels: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Dataset 2',
            data: [5, 2, 10, 8],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
    const options = {};

    return (
        <div className="w-full">
            <Bar data={data} /* options={options} */ />
        </div>
    );
}

function PieChart() {
    const data = {
        labels: ['Rojo', 'Azul', 'Verde'],
        datasets: [{
            label: 'Porcentaje',
            data: [30, 40, 30],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)'
            ]
        }]
    };
    const options = {};

    return (
        <div className="w-full">
            <Pie data={data} /* options={options} */ />
        </div>
    );
}


export function ExampleChart() {
    return (
        <div>
            <LineChart />
            <BarChart />
            <PieChart />
        </div>
    )
}
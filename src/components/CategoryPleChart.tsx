import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Transporte', 'Comida', 'Servicios', 'Entretenimiento', 'Salud', 'Otros'],
    datasets: [
        {
            data: [300, 500, 200, 150, 100, 50],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
            ]
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Distribución de Gastos por Categoría'
        }
    }
};

export function CategoryPieChart() {
    return (
        <div className="w-full h-64">
            <Pie data={data} options={options} />
        </div>
    );
}


import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const data = {
    datasets: [
        {
            label: 'Gastos',
            data: [
                { x: 20, y: 30, r: 15 },  // Comida
                { x: 40, y: 10, r: 10 },  // Transporte
                { x: 30, y: 20, r: 20 },  // Vivienda
                { x: 10, y: 40, r: 7 },   // Entretenimiento
                { x: 50, y: 30, r: 18 },  // Salud
            ],
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
            text: 'Análisis de Gastos (Monto vs Frecuencia)',
        },
    },
    scales: {
        x: { title: { display: true, text: 'Monto Promedio' } },
        y: { title: { display: true, text: 'Frecuencia' } },
    },
};

export  function ExpenseAnalysisBubble() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Bubble options={options} data={data} />
        </div>
    );
}
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Ingresos Mensuales ',
            data: [1200, 1500, 2000, 1600, 2100, 1900],
            backgroundColor: '#34D399',
        },
    ],
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Ingresos Mensuales',
        },
    },
}

export function MonthlyOverview() {
    return (
        <div className="w-full h-64">
            <Bar options={options} data={data} />
        </div>
    )
}


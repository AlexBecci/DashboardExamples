'use client'
interface CashierData {
    id: string;
    name: string;
    value: number;
}

interface ChartProps {
    data: CashierData[];
    average: number;
    startDate: string;
    endDate: string;
    onDateChange: (start: string, end: string) => void;
    mode: 'PLUS' | 'RAZO';
    onModeChange: (mode: 'PLUS' | 'RAZO') => void;
}

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function CashierChart({ data, average, startDate, endDate, onDateChange, mode, onModeChange }: ChartProps) {
    const chartData: ChartData<'line'> = {
        labels: data.map(item => item.name),
        datasets: [
            {
                label: 'Promedio Semanal',
                data: data.map(item => item.value),
                borderColor: 'rgb(255, 255, 255)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                pointRadius: 4,
                tension: 0.1,
            },
            {
                label: 'Promedio Total',
                data: Array(data.length).fill(average),
                borderColor: 'rgb(173, 255, 47)',
                borderDash: [5, 5],
                pointRadius: 0,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)',
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxRotation: 45,
                    minRotation: 45,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('es-AR').format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
    }

    return (
        <div className="w-full bg-slate-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <div className="text-white text-2xl font-bold">PROMEDIO CAJEROS</div>
                <div className="flex items-center space-x-4">
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => onDateChange(e.target.value, endDate)}
                        className="bg-slate-700 text-white p-2 rounded"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => onDateChange(startDate, e.target.value)}
                        className="bg-slate-700 text-white p-2 rounded"
                    />
                    <div className="flex bg-slate-700 rounded">
                        <button
                            className={`px-4 py-2 ${mode === 'PLUS' ? 'bg-slate-600' : ''}`}
                            onClick={() => onModeChange('PLUS')}
                        >
                            PLUS
                        </button>
                        <button
                            className={`px-4 py-2 ${mode === 'RAZO' ? 'bg-slate-600' : ''}`}
                            onClick={() => onModeChange('RAZO')}
                        >
                            RAZO
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4 text-white">
                <div>
                    <span className="text-4xl font-bold">{average}</span>
                    <span className="ml-2">PROMEDIO SEMANAL DEL TOTAL</span>
                </div>
                <div>
                    <span className="text-4xl font-bold">{data.length}</span>
                    <span className="ml-2">CAJEROS HABILITADOS</span>
                </div>
            </div>
            <div className="h-[400px]">
                <Line data={chartData} options={options} />
            </div>
        </div>
    )
}

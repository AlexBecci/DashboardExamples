import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

// Datos de ocupación por hora
const hourlyData = {
    labels: ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '0', '1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            fill: true,
            label: 'Ocupación',
            data: [2000, 2500, 3000, 2800, 2600, 3200, 3500, 4000, 4200, 4500, 5000, 5500, 9000, 7000, 6000, 5000, 4000, 3000, 2500, 2000, 1500, 1200, 1000, 800],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.3,
        }
    ]
};

// Datos mensuales
const monthlyData = {
    labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    datasets: [
        {
            label: 'Ingresos Mensuales',
            data: [6000, 6500, 7200, 7400, 7300, 7200, 7500, 7800, 8000, 8100, 8200, 5800],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0.3,
        }
    ]
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const monthlyOccupancy = [
    { month: 'enero', occupancy: 339 },
    { month: 'febrero', occupancy: 389 },
    { month: 'marzo', occupancy: 446 },
    { month: 'abril', occupancy: 441 },
    { month: 'mayo', occupancy: 434 },
    { month: 'junio', occupancy: 464 },
    { month: 'julio', occupancy: 495 },
    { month: 'agosto', occupancy: 506 },
    { month: 'septiembre', occupancy: 510 },
    { month: 'octubre', occupancy: 526 },
    { month: 'noviembre', occupancy: 518 },
    { month: 'diciembre', occupancy: 337 },
];

export function ParkingDashboard() {
    return (
        <div className="container mx-auto p-4 space-y-6">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold">AFORO PARKING</h1>
                    <span className="text-sm text-gray-500">Actualización cada 30min</span>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-sm font-medium mb-2">OCUPACIÓN DEL PARKING</h2>
                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <span>Interna</span>
                                <span className="font-bold">88.43%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Externa</span>
                                <span className="font-bold">11.57%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-sm font-medium mb-2">INGRESOS</h2>
                        <div className="text-2xl font-bold">90,79 mil</div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">VARIACIÓN POR HORA INGRESOS</h2>
                    <Line options={chartOptions} data={hourlyData} height={80} />
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">VARIACIÓN INGRESOS MENSUAL</h2>
                    <Line options={chartOptions} data={monthlyData} height={80} />
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">% OCUPACIONAL</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {monthlyOccupancy.map((item) => (
                            <div key={item.month} className="flex justify-between">
                                <span className="capitalize">{item.month}</span>
                                <span className="font-bold">{item.occupancy}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
'use client'

import { useState } from 'react'
import CashierChart from './CashierChart'

const sampleData = [
    { id: '13813', name: 'SOFIA ANAHI', value: 1907 },
    { id: '13943', name: 'NICOLE DAIANA', value: 1664 },
    { id: '13989', name: 'LARA SOLANGE', value: 1424 },
    { id: '13713', name: 'MARIA FABIOLA', value: 1249 },
    { id: '13811', name: 'CAROLINA LEGIZAMON', value: 1237 },
    { id: '13536', name: 'AZUL AINARA', value: 1182 },
    { id: '13835', name: 'PATRICIA THALIA', value: 1151 },
    { id: '14010', name: 'CAMILA AYELEN', value: 1034 },
    { id: '13604', name: 'IARA DANIELA', value: 896 },
    { id: '13913', name: 'AGUSTINA MICAELA', value: 882 },
    { id: '14009', name: 'ROSARIO YANINA', value: 842 },
    { id: '13737', name: 'FERNANDA EZEQUIEL', value: 704 },
    { id: '13987', name: 'VALENTINA LEONELA', value: 479 },
    { id: '14024', name: 'LUCIANA ORIANA', value: 413 },
    { id: '13612', name: 'PAULA SOFIA', value: 215 },
]

export function Page() {
    const [startDate, setStartDate] = useState('2024-07-11')
    const [endDate, setEndDate] = useState('2024-12-17')
    const [mode, setMode] = useState<'PLUS' | 'RAZO'>('PLUS')

    const handleDateChange = (start: string, end: string) => {
        setStartDate(start)
        setEndDate(end)
    }

    const handleModeChange = (newMode: 'PLUS' | 'RAZO') => {
        setMode(newMode)
    }

    return (
        <div className="container mx-auto p-4">
            <CashierChart
                data={sampleData}
                average={705}
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
                mode={mode}
                onModeChange={handleModeChange}
            />
        </div>
    )
}


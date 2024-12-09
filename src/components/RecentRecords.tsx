const recentRecords = [
    { id: 1, description: "Compra de suministros", amount: -150, date: "2023-06-15" },
    { id: 2, description: "Pago de cliente", amount: 500, date: "2023-06-14" },
    { id: 3, description: "Factura de electricidad", amount: -80, date: "2023-06-13" },
]

export function RecentRecords() {
    return (
        <div className="space-y-4">
            {recentRecords.map((record) => (
                <div key={record.id} className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${record.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {record.amount > 0 ? '+' : '-'}
                    </div>
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{record.description}</p>
                        <p className="text-xs text-gray-500">{record.date}</p>
                    </div>
                    <div className={`font-medium ${record.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {record.amount > 0 ? '+' : ''}{record.amount.toFixed(2)}€
                    </div>
                </div>
            ))}
        </div>
    )
}

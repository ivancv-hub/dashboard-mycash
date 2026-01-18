import { Card } from '../ui/Card';

interface CategoryCardProps {
    label: string;
    amount: number;
    percentage: number;
    color: string;
}

export function CategoryCard({ label, amount, percentage, color }: CategoryCardProps) {
    // Simple donut chart using conic-gradient
    const rotation = (percentage / 100) * 360;

    return (
        <Card className="flex flex-col items-center justify-center min-w-[140px]">
            {/* Donut Chart */}
            <div className="relative w-20 h-20 mb-3">
                <div
                    className="w-full h-full rounded-full"
                    style={{
                        background: `conic-gradient(${color} 0deg ${rotation}deg, #F3F4F6 ${rotation}deg 360deg)`
                    }}
                >
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-neutral-900">{percentage}%</span>
                    </div>
                </div>
            </div>

            {/* Label */}
            <p className="text-sm text-neutral-600 mb-1 text-center">{label}</p>

            {/* Amount */}
            <p className="text-lg font-bold text-neutral-1000">{formatCurrency(amount)}</p>
        </Card>
    );
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

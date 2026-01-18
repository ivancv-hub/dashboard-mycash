import { Card } from '../ui/Card';

interface CategoryCardProps {
    label: string;
    amount: number;
    percentage: number;
}

export function CategoryCard({ label, amount, percentage }: CategoryCardProps) {
    // Calculate stroke dasharray for circular progress
    const radius = 32;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <Card className="flex flex-col items-center justify-center min-w-[140px] p-6">
            {/* Circular Progress */}
            <div className="relative w-20 h-20 mb-3">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                    {/* Background circle */}
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        fill="none"
                        stroke="#F3F4F6"
                        strokeWidth="6"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        fill="none"
                        stroke="#DFFE35"
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-neutral-900">{percentage}%</span>
                </div>
            </div>

            {/* Label */}
            <p className="text-sm text-neutral-600 mb-1 text-center font-medium">{label}</p>

            {/* Amount */}
            <p className="text-base font-bold text-neutral-1000">{formatCurrency(amount)}</p>
        </Card>
    );
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

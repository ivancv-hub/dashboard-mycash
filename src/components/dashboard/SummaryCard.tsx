import { Card } from '../ui/Card';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

interface SummaryCardProps {
    type: 'balance' | 'income' | 'expenses';
    label: string;
    amount: number;
}

export function SummaryCard({ type, label, amount }: SummaryCardProps) {
    const isBalance = type === 'balance';
    const isIncome = type === 'income';

    return (
        <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isBalance ? 'bg-neutral-100' : isIncome ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                    {isBalance && <DollarSign className="w-5 h-5 text-neutral-900" />}
                    {isIncome && <TrendingDown className="w-5 h-5 text-green-600" />}
                    {!isBalance && !isIncome && <TrendingUp className="w-5 h-5 text-red-600" />}
                </div>
            </div>

            <p className="text-sm text-neutral-600 mb-2 font-medium">
                {label}
            </p>

            <p className={`text-2xl font-bold ${isBalance ? 'text-blue-600' : isIncome ? 'text-neutral-1000' : 'text-neutral-1000'
                }`}>
                {formatCurrency(amount)}
            </p>
        </Card>
    );
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

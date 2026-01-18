import { Card } from '../ui/Card';
import { DollarSign, ArrowDownLeft, ArrowUpRight } from 'lucide-react';

interface SummaryCardProps {
    type: 'balance' | 'income' | 'expenses';
    label: string;
    amount: number;
}

export function SummaryCard({ type, label, amount }: SummaryCardProps) {
    const isBalance = type === 'balance';
    const isIncome = type === 'income';

    return (
        <Card className={isBalance ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0' : ''}>
            <div className="flex items-start justify-between mb-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isBalance ? 'bg-white/20' : isIncome ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                    {isBalance && <DollarSign className="w-5 h-5 text-white" />}
                    {isIncome && <ArrowDownLeft className="w-5 h-5 text-green-600" />}
                    {!isBalance && !isIncome && <ArrowUpRight className="w-5 h-5 text-red-600" />}
                </div>
            </div>

            <p className={`text-sm mb-1 ${isBalance ? 'text-white/80' : 'text-neutral-600'}`}>
                {label}
            </p>

            <p className={`text-3xl font-bold ${isBalance ? 'text-white' : 'text-neutral-1000'}`}>
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

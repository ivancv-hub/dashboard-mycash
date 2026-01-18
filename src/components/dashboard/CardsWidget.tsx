import { Card } from '../ui/Card';
import { Plus, ChevronRight, CreditCard } from 'lucide-react';

// Update CARDS_DATA to include icons if needed, keeping simple for now with colors
const CARDS_DATA = [
    { id: '1', name: 'Nubank', amount: 120, cardNumber: '**** 5897', color: 'bg-purple-600' },
    { id: '2', name: 'Inter', amount: 2300, cardNumber: '**** 5897', color: 'bg-orange-500' },
    { id: '3', name: 'Picpay', amount: 17000, cardNumber: '**** 5897', color: 'bg-green-500' },
];

export function CardsWidget() {
    return (
        <Card className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-neutral-900" />
                    <h3 className="text-base font-bold text-neutral-1000">Cards & contas</h3>
                </div>
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center transition-colors">
                        <Plus className="w-4 h-4 text-neutral-900" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-4 h-4 text-neutral-900" />
                    </button>
                </div>
            </div>

            <div className="space-y-6 flex-1">
                {CARDS_DATA.map((card) => (
                    <div
                        key={card.id}
                        className="flex items-start justify-between group cursor-pointer"
                    >
                        <div className="flex flex-col gap-1">
                            {/* Bank Name Row */}
                            <div className="flex items-center gap-2 mb-1">
                                <div className={`w-4 h-4 ${card.color} rounded-sm flex items-center justify-center`}>
                                    {/* Icon placeholder */}
                                </div>
                                <span className="text-sm font-medium text-neutral-700">{card.name}</span>
                            </div>

                            {/* Value Row */}
                            <p className="text-2xl font-bold text-neutral-1000 -ml-0.5">
                                {formatCurrency(card.amount)}
                            </p>

                            {/* Due Date Row */}
                            <p className="text-xs font-medium text-neutral-900">
                                Vence dia 10
                            </p>
                        </div>

                        {/* Right Side: Card Number */}
                        <div className="pt-0.5">
                            <span className="text-xs font-bold text-neutral-900">{card.cardNumber}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

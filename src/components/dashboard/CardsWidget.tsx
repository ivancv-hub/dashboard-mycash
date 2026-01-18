import { Card } from '../ui/Card';
import { Plus, ChevronRight, CreditCard } from 'lucide-react';

const CARDS_DATA = [
    { id: '1', name: 'Nubank', amount: 120, cardNumber: '****5897', color: 'bg-purple-600' },
    { id: '2', name: 'Inter', amount: 2300, cardNumber: '****5897', color: 'bg-orange-500' },
    { id: '3', name: 'Picpay', amount: 17000, cardNumber: '****5897', color: 'bg-green-500' },
];

export function CardsWidget() {
    return (
        <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-neutral-900" />
                    <h3 className="text-sm font-bold text-neutral-1000">Cards & contas</h3>
                </div>
                <div className="flex items-center gap-1">
                    <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center transition-colors">
                        <Plus className="w-4 h-4 text-neutral-900" />
                    </button>
                    <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-4 h-4 text-neutral-900" />
                    </button>
                </div>
            </div>

            <div className="space-y-3">
                {CARDS_DATA.map((card) => (
                    <div
                        key={card.id}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-2 h-8 ${card.color} rounded-full`} />
                            <div>
                                <p className="text-sm font-semibold text-neutral-1000">{card.name}</p>
                                <p className="text-xs text-neutral-500">Vence dia 10</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-neutral-1000">{formatCurrency(card.amount)}</p>
                            <p className="text-xs text-neutral-500">{card.cardNumber}</p>
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

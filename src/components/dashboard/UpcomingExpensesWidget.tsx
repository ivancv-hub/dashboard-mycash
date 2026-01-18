import { Card } from '../ui/Card';
import { Plus, Check } from 'lucide-react';

const EXPENSES_DATA = [
    { id: '1', name: 'Conta de luz', amount: 154, date: '21/01', account: 'Nubank **** 5897' },
    { id: '2', name: 'Gás', amount: 123, date: '21/01', account: 'Nubank **** 5897' },
    { id: '3', name: 'Internet', amount: 110, date: '21/01', account: 'Nubank **** 5897' },
    { id: '4', name: 'Netflix', amount: 60, date: '21/01', account: 'Nubank **** 5897' },
];

export function UpcomingExpensesWidget() {
    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-neutral-900 rounded flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-white rounded" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-1000">Próximas despesas</h3>
                </div>
                <button className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors">
                    <Plus className="w-4 h-4 text-neutral-900" />
                </button>
            </div>

            <div className="space-y-3">
                {EXPENSES_DATA.map((expense) => (
                    <div
                        key={expense.id}
                        className="flex items-center justify-between group"
                    >
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-neutral-1000 mb-0.5">{expense.name}</p>
                            <p className="text-xs text-neutral-500">Vence dia {expense.date}</p>
                            <p className="text-xs text-neutral-400">Crédito {expense.account}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-sm font-bold text-neutral-1000">{formatCurrency(expense.amount)}</p>
                            <button className="w-8 h-8 rounded-full border border-neutral-300 hover:border-green-500 hover:bg-green-50 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
                                <Check className="w-4 h-4 text-green-600" />
                            </button>
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

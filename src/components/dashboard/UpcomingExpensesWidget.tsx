import { Card } from '../ui/Card';
import { Plus, Check, Receipt } from 'lucide-react';

const EXPENSES_DATA = [
    { id: '1', name: 'Conta de Luz', amount: 154, date: '21/01', account: 'Nubank **** 5897' },
    { id: '2', name: 'Conta de Luz', amount: 154, date: '21/01', account: 'Nubank **** 5897' },
    { id: '3', name: 'Conta de Luz', amount: 154, date: '21/01', account: 'Nubank **** 5897' },
    { id: '4', name: 'Conta de Luz', amount: 154, date: '21/01', account: 'Nubank **** 5897' },
    { id: '5', name: 'Conta de Luz', amount: 154, date: '21/01', account: 'Nubank **** 5897' },
];

export function UpcomingExpensesWidget() {
    return (
        <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-neutral-900" />
                    <h3 className="text-sm font-bold text-neutral-1000">Próximas despesas</h3>
                </div>
                <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center transition-colors">
                    <Plus className="w-4 h-4 text-neutral-900" />
                </button>
            </div>

            <div className="space-y-3">
                {EXPENSES_DATA.map((expense) => (
                    <div
                        key={expense.id}
                        className="flex items-start justify-between group py-2"
                    >
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-neutral-1000 mb-0.5 truncate">{expense.name}</p>
                            <p className="text-xs text-neutral-500">Vence dia {expense.date}</p>
                            <p className="text-xs text-neutral-400 truncate">Crédito {expense.account}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-3">
                            <p className="text-sm font-bold text-neutral-1000 whitespace-nowrap">{formatCurrency(expense.amount)}</p>
                            <button className="w-6 h-6 rounded-md border border-neutral-300 hover:border-green-500 hover:bg-green-50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                                <Check className="w-3.5 h-3.5 text-green-600" />
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

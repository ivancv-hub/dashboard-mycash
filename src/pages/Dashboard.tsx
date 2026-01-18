import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { CategoryCard } from '../components/dashboard/CategoryCard';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { CardsWidget } from '../components/dashboard/CardsWidget';
import { UpcomingExpensesWidget } from '../components/dashboard/UpcomingExpensesWidget';
import { Card } from '../components/ui/Card';
import { BarChart3, Search } from 'lucide-react';

const CATEGORIES = [
    { label: 'Aluguel', amount: 4000, percentage: 25 },
    { label: 'Alimentação', amount: 2000, percentage: 15 },
    { label: 'Mercado', amount: 1500, percentage: 5 },
    { label: 'Academia', amount: 120, percentage: 3 },
];

const TRANSACTIONS = [
    { id: '1', member: 'https://i.pravatar.cc/150?img=1', date: '17/01/2026', description: 'Conta de água', category: 'Manutenção', account: 'Conta corrente', installments: '-', amount: 100 },
    { id: '2', member: 'https://i.pravatar.cc/150?img=2', date: '17/01/2026', description: 'Conta de Luz', category: 'Manutenção', account: 'Conta corrente', installments: '-', amount: 150 },
    { id: '3', member: 'https://i.pravatar.cc/150?img=2', date: '17/01/2026', description: 'Passeio no parque', category: 'Lazer', account: 'Cartão XP', installments: '1/1', amount: 750 },
];

export default function Dashboard() {
    return (
        <div className="p-6 space-y-6">
            <DashboardHeader />

            {/* Main Grid: Left Column (Categories + Summary) | Right Column (Cards Widget) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Category Cards Carousel */}
                    <div className="overflow-x-auto pb-2">
                        <div className="flex gap-3 min-w-max">
                            {CATEGORIES.map((category) => (
                                <CategoryCard key={category.label} {...category} />
                            ))}
                        </div>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SummaryCard type="balance" label="Saldo total" amount={2000} />
                        <SummaryCard type="income" label="Receitas" amount={12000} />
                        <SummaryCard type="expenses" label="Despesas" amount={10000} />
                    </div>
                </div>

                {/* Right Column - Cards Widget */}
                <div className="lg:block">
                    <CardsWidget />
                </div>
            </div>

            {/* Chart and Upcoming Expenses */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
                {/* Chart */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-neutral-900" />
                            <h3 className="text-sm font-bold text-neutral-1000">Fluxo financeiro</h3>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#DFFE35]" />
                                <span className="text-neutral-600">Receitas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <span className="text-neutral-600">Despesas</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 flex items-center justify-center text-neutral-400 text-sm">
                        Gráfico de área (implementação futura)
                    </div>
                </Card>

                {/* Upcoming Expenses Widget */}
                <UpcomingExpensesWidget />
            </div>

            {/* Transactions Table */}
            <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-neutral-900" />
                        <h3 className="text-sm font-bold text-neutral-1000">Extrato detalhado</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                            <input
                                type="text"
                                placeholder="Buscar lançamentos"
                                className="pl-9 pr-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-neutral-300"
                            />
                        </div>
                        <select className="px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-neutral-300">
                            <option>Despesas</option>
                            <option>Receitas</option>
                            <option>Todas</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-neutral-200">
                                <th className="text-left py-3 px-3 text-xs font-semibold text-neutral-600">Membro</th>
                                <th className="text-left py-3 px-3 text-xs font-semibold text-neutral-600">Datas</th>
                                <th className="text-left py-3 px-3 text-xs font-semibold text-neutral-600">Descrição</th>
                                <th className="text-left py-3 px-3 text-xs font-semibold text-neutral-600">Categorias</th>
                                <th className="text-left py-3 px-3 text-xs font-semibold text-neutral-600">Conta/cartão</th>
                                <th className="text-left py-3 px-3 text-xs font-semibold text-neutral-600">Parcelas</th>
                                <th className="text-right py-3 px-3 text-xs font-semibold text-neutral-600">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TRANSACTIONS.map((transaction) => (
                                <tr key={transaction.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                                    <td className="py-3 px-3">
                                        <img src={transaction.member} alt="Member" className="w-6 h-6 rounded-full" />
                                    </td>
                                    <td className="py-3 px-3 text-xs text-neutral-900">{transaction.date}</td>
                                    <td className="py-3 px-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            <span className="text-xs font-medium text-neutral-900">{transaction.description}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-xs text-neutral-600">{transaction.category}</td>
                                    <td className="py-3 px-3 text-xs text-neutral-600">{transaction.account}</td>
                                    <td className="py-3 px-3 text-xs text-neutral-600">{transaction.installments}</td>
                                    <td className="py-3 px-3 text-right text-xs font-bold text-neutral-900">
                                        {formatCurrency(transaction.amount)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-600">Mostrando 1 a 5 de 17</p>
                    <div className="flex items-center gap-1">
                        <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">←</button>
                        <button className="w-7 h-7 rounded-lg bg-neutral-1000 text-white flex items-center justify-center text-xs">1</button>
                        <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">2</button>
                        <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">3</button>
                        <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">4</button>
                        <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">5</button>
                        <button className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center text-xs text-neutral-600">→</button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { CategoryCard } from '../components/dashboard/CategoryCard';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { CardsWidget } from '../components/dashboard/CardsWidget';
import { UpcomingExpensesWidget } from '../components/dashboard/UpcomingExpensesWidget';

const CATEGORIES = [
    { label: 'Aluguel', amount: 4000, percentage: 24, color: '#DFFE35' },
    { label: 'Alimentação', amount: 2000, percentage: 12, color: '#DFFE35' },
    { label: 'Mercado', amount: 1500, percentage: 5, color: '#DFFE35' },
    { label: 'Academia', amount: 250, percentage: 3, color: '#DFFE35' },
];

export default function Dashboard() {
    return (
        <div className="p-4 lg:p-8 space-y-6">
            <DashboardHeader />

            {/* Category Cards Carousel */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4 min-w-max">
                    {CATEGORIES.map((category) => (
                        <CategoryCard key={category.label} {...category} />
                    ))}
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SummaryCard type="balance" label="Saldo total" amount={2000} />
                <SummaryCard type="income" label="Receita" amount={12000} />
                <SummaryCard type="expenses" label="Despesas" amount={10000} />
            </div>

            {/* Chart and Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Placeholder for Chart - will be implemented next */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-bold text-neutral-1000">Cards & contas</h3>
                        <div className="flex items-center gap-4 text-sm">
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
                    <div className="h-64 flex items-center justify-center text-neutral-400">
                        Gráfico de área (será implementado)
                    </div>
                </div>

                {/* Widgets Column */}
                <div className="space-y-4">
                    <CardsWidget />
                    <UpcomingExpensesWidget />
                </div>
            </div>

            {/* Transactions Table Placeholder */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200">
                <h3 className="text-base font-bold text-neutral-1000 mb-4">Extrato detalhado</h3>
                <div className="text-neutral-400 text-center py-8">
                    Tabela de transações (será implementada)
                </div>
            </div>
        </div>
    );
}

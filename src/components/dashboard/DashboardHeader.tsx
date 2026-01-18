import { Search, SlidersHorizontal, Calendar, Plus } from 'lucide-react';

const MEMBERS = [
    { id: '1', name: 'Member 1', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Member 2', avatar: 'https://i.pravatar.cc/150?img=2' },
];

export function DashboardHeader() {
    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            {/* Search and Filters */}
            <div className="flex items-center gap-2 flex-1 max-w-md">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-neutral-300"
                    />
                </div>
                <button className="p-2 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                    <SlidersHorizontal className="w-4 h-4 text-neutral-900" />
                </button>
            </div>

            {/* Date Range Picker */}
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                <Calendar className="w-4 h-4 text-neutral-900" />
                <span className="text-sm text-neutral-900">01 Jan - 31 Jan 2026</span>
            </button>

            {/* Members Avatars */}
            <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                    {MEMBERS.map((member) => (
                        <div
                            key={member.id}
                            className="w-9 h-9 rounded-full border-2 border-white overflow-hidden hover:z-10 transition-transform hover:scale-110 cursor-pointer"
                        >
                            <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <button className="w-9 h-9 rounded-full border border-neutral-300 bg-white flex items-center justify-center hover:bg-neutral-50 transition-colors">
                    <Plus className="w-4 h-4 text-neutral-500" />
                </button>
            </div>

            {/* New Transaction Button */}
            <button className="px-4 py-2 bg-neutral-1000 text-white rounded-lg font-medium text-sm hover:bg-neutral-900 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Nova transação
            </button>
        </div>
    );
}

import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    LayoutDashboard,
    ArrowLeftRight,
    CreditCard,
    Target,
    User,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Tooltip } from '../ui/Tooltip';

const NAV_ITEMS = [
    { label: 'Home', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Transações', path: '/transactions', icon: ArrowLeftRight },
    { label: 'Cartões', path: '/cards', icon: CreditCard },
    { label: 'Objetivos', path: '/goals', icon: Target },
];

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <aside
            className={cn(
                "hidden lg:flex flex-col h-screen bg-white border-r border-neutral-200 fixed left-0 top-0 transition-all duration-300 ease-in-out z-40",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            {/* Header / Logo */}
            <div className="flex items-center h-20 px-6 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                        <div className="w-4 h-4 bg-brand rounded-full" />
                    </div>
                    {!isCollapsed && (
                        <span className="text-xl font-bold text-neutral-900 whitespace-nowrap overflow-hidden">
                            Mycash+
                        </span>
                    )}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-3 top-24 w-6 h-6 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors z-50"
            >
                {isCollapsed ? (
                    <ChevronRight className="w-4 h-4 text-neutral-500" />
                ) : (
                    <ChevronLeft className="w-4 h-4 text-neutral-500" />
                )}
            </button>

            {/* Navigation */}
            <nav className="flex-1 py-8 px-3 space-y-2">
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    const Icon = item.icon;

                    const LinkContent = (
                        <Link
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-brand text-neutral-900 shadow-sm" // Active State: Lime Background
                                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                            )}
                        >
                            <Icon
                                className={cn(
                                    "w-5 h-5 shrink-0 transition-colors",
                                    isActive ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-900"
                                )}
                            />
                            {!isCollapsed && (
                                <span className="font-medium whitespace-nowrap overflow-hidden">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );

                    return isCollapsed ? (
                        <Tooltip key={item.path} content={item.label} side="right">
                            {LinkContent}
                        </Tooltip>
                    ) : (
                        <div key={item.path}>{LinkContent}</div>
                    );
                })}
            </nav>

            {/* Footer / Profile */}
            <div className="p-4 border-t border-neutral-100 mb-4">
                {isCollapsed ? (
                    <Tooltip content="Ivan Vanzella" side="right">
                        <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mx-auto hover:ring-2 ring-brand transition-all">
                            <User className="w-5 h-5 text-neutral-600" />
                        </button>
                    </Tooltip>
                ) : (
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                            <User className="w-5 h-5 text-neutral-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-neutral-900 truncate">Ivan Vanzella</p>
                            <p className="text-xs text-neutral-500 truncate">Premium Member</p>
                        </div>
                        <button className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors">
                            <LogOut className="w-4 h-4 text-neutral-400" />
                        </button>
                    </div>
                )}
            </div>
        </aside>
    );
}

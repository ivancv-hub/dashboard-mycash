import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    LayoutDashboard,
    CreditCard,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Tooltip } from '../ui/Tooltip';

// Ícones exatos do projeto
const NAV_ITEMS = [
    { label: 'Home', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Cartões', path: '/cards', icon: CreditCard },
];

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <aside
            className={cn(
                "hidden lg:flex flex-col h-screen bg-white border-r border-neutral-200 fixed left-0 top-0 transition-all duration-300 ease-in-out z-40",
                isCollapsed ? "w-20 px-3" : "w-64 px-6"
            )}
        >
            {/* Header / Logo */}
            <div className="flex items-center h-24 mb-2">
                <div className="flex items-center gap-1 w-full">
                    {isCollapsed ? (
                        <div className="flex flex-col leading-none w-full items-center">
                            <span className="text-xl font-bold text-neutral-1000">My</span>
                            <span className="text-sm font-bold text-neutral-1000">cash+</span>
                        </div>
                    ) : (
                        <span className="text-3xl font-bold text-neutral-1000 tracking-tight">Mycash+</span>
                    )}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-3 top-10 w-6 h-6 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors z-50 cursor-pointer"
            >
                {isCollapsed ? (
                    <ChevronRight className="w-4 h-4 text-neutral-900" />
                ) : (
                    <ChevronLeft className="w-4 h-4 text-neutral-900" />
                )}
            </button>

            {/* Navigation */}
            <nav className="flex-1 space-y-3">
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    const Icon = item.icon;

                    const LinkContent = (
                        <Link
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3.5 rounded-full transition-all duration-200 group font-semibold text-base",
                                isActive
                                    ? "bg-[#DFFE35] text-neutral-1000 shadow-sm" // Lime-500 from Tokens
                                    : "text-neutral-1000 hover:bg-neutral-50"
                            )}
                        >
                            {/* Icon Container */}
                            <div
                                className={cn(
                                    "flex items-center justify-center transition-all",
                                    isCollapsed && isActive
                                        ? "bg-[#DFFE35] rounded-full w-10 h-10 -ml-2 text-neutral-1000"
                                        : "",
                                    isCollapsed && !isActive
                                        ? "w-10 h-10 -ml-2 flex items-center justify-center"
                                        : "w-5 h-5"
                                )}
                            >
                                <Icon className={cn("shrink-0", isCollapsed ? "w-5 h-5" : "w-5 h-5")} />
                            </div>

                            {!isCollapsed && (
                                <span className="whitespace-nowrap overflow-hidden">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );

                    return isCollapsed ? (
                        <Tooltip key={item.path} content={item.label} side="right">
                            <div className="flex justify-center w-full">
                                {LinkContent}
                            </div>
                        </Tooltip>
                    ) : (
                        <div key={item.path}>{LinkContent}</div>
                    );
                })}
            </nav>

            {/* Footer / Profile */}
            <div className="py-8 mt-auto">
                {isCollapsed ? (
                    <Tooltip content="Ivan Vanzella" side="right">
                        <div className="w-10 h-10 rounded-full overflow-hidden mx-auto border border-neutral-200">
                            <img src="https://github.com/ivancv-hub.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </Tooltip>
                ) : (
                    <div className="flex flex-col gap-1">
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-neutral-200 mb-2">
                            <img src="https://github.com/ivancv-hub.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-base font-bold text-neutral-1000 truncate leading-tight">Ivan Vanzella</p>
                        <p className="text-xs text-neutral-600 truncate">ivancarloscv@gmail.com</p>
                    </div>
                )}
            </div>
        </aside>
    );
}

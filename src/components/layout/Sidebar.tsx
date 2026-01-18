import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Tooltip } from '../ui/Tooltip';

// Nav items baseados no design do Figma (Node 2006:929)
const NAV_ITEMS = [
    { label: 'Home', path: '/dashboard', icon: Home },
    { label: 'Cartões', path: '/cards', icon: CreditCard },
];

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    return (
        <aside
            className={cn(
                /* Figma: width=300px, padding=32px, bg=surface-500 (white) */
                "hidden lg:flex flex-col h-screen bg-white border-r border-neutral-200 fixed left-0 top-0 transition-all duration-300 ease-in-out z-40",
                isCollapsed ? "w-20" : "w-[300px]", // Exato do Figma
                isCollapsed ? "px-4" : "px-8" // Padding 32px = 2rem = px-8
            )}
        >
            {/* LOGO - Figma: Component "Logo=Default" */}
            <div className="flex items-center pt-8 pb-8">
                {isCollapsed ? (
                    <div className="flex flex-col text-center w-full">
                        <span className="text-2xl font-bold text-neutral-1000 leading-tight">My</span>
                        <span className="text-base font-bold text-neutral-1000 leading-tight">cash+</span>
                    </div>
                ) : (
                    <h1 className="text-4xl font-bold text-neutral-1000">Mycash+</h1>
                )}
            </div>

            {/* TOGGLE BUTTON - Figma: Component "icon-sidebar" */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-8 w-6 h-6 bg-white border border-neutral-300 rounded-full flex items-center justify-center shadow-md hover:bg-neutral-50 transition-all z-50"
            >
                {isCollapsed ? (
                    <ChevronRight className="w-4 h-4 text-neutral-900" />
                ) : (
                    <ChevronLeft className="w-4 h-4 text-neutral-900" />
                )}
            </button>

            {/* NAVIGATION - Figma: itemSpacing=61px entre grupos */}
            <nav className="flex-1 flex flex-col gap-3">
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;

                    const LinkButton = (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                /* Figma: btn-sidebar component */
                                "flex items-center gap-3 px-4 py-4 rounded-full transition-all duration-200 font-semibold text-base",
                                isActive
                                    ? "bg-[#DFFE35] text-neutral-1000" /* Primary-500 exato do tokens.md */
                                    : "text-neutral-900 hover:bg-neutral-100"
                            )}
                        >
                            <Icon className="w-5 h-5 shrink-0" />
                            {!isCollapsed && <span className="truncate">{item.label}</span>}
                        </Link>
                    );

                    return isCollapsed ? (
                        <Tooltip key={item.path} content={item.label} side="right">
                            {LinkButton}
                        </Tooltip>
                    ) : (
                        LinkButton
                    );
                })}
            </nav>

            {/* PROFILE - Figma: Component "Usuario" + "E-mail-usuario" */}
            <div className="pb-8 pt-4 border-t border-neutral-200">
                {isCollapsed ? (
                    <Tooltip content="Ivan Vanzella" side="right">
                        <div className="w-10 h-10 rounded-full overflow-hidden mx-auto">
                            <img
                                src="https://github.com/ivancv-hub.png"
                                alt="Ivan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Tooltip>
                ) : (
                    <div className="flex flex-col gap-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden mb-1">
                            <img
                                src="https://github.com/ivancv-hub.png"
                                alt="Ivan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Tipografia: Label/Large (18px font-size, 600 weight) */}
                        <p className="text-lg font-semibold text-neutral-1000 leading-tight truncate">
                            Ivan Vanzella
                        </p>
                        {/* Tipografia: Paragraph/Small (14px, 400 weight) */}
                        <p className="text-sm text-neutral-600 leading-tight truncate">
                            ivancarloscv@gmail.com
                        </p>
                    </div>
                )}
            </div>
        </aside>
    );
}

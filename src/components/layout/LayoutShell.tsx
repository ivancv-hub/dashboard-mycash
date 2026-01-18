import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { useSidebar } from '../../contexts/SidebarContext';
import { cn } from '../../lib/utils';

interface LayoutShellProps {
    children: ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
    const { isCollapsed } = useSidebar();

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex">
            <Sidebar />
            <main className={cn(
                "flex-1 w-full transition-all duration-300",
                isCollapsed ? "lg:pl-20" : "lg:pl-[300px]"
            )}>
                <div className="max-w-[1600px] mx-auto min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
}

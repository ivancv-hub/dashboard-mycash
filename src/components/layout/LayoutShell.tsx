import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutShellProps {
    children: ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
    return (
        <div className="min-h-screen bg-[#F5F5F5] flex">
            <Sidebar />
            {/* 
        Main Content Area 
        - Mobile: w-full (no sidebar)
        - Desktop: ml-64 (expanded sidebar space) or ml-20 depending on state
        
        NOTE: Since Sidebar state is internal to the component, 
        we need a way to communicate width change for margin adjustment.
        For simplicity in this step, we will use a CSS variable or predefined margin.
        A better approach is lifting state or using context, which we can refine later.
        For now, let's assume expanded (ml-64) as default for desktop, 
        and we will fix the margin transition in the "Responsiveness" prompt or via context context.
      */}
            <main className="flex-1 w-full lg:pl-[300px] transition-all duration-300">
                <div className="max-w-[1600px] mx-auto min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
}

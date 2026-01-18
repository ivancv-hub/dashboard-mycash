import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn("bg-white rounded-3xl p-6 shadow-sm border border-neutral-200", className)}>
            {children}
        </div>
    );
}

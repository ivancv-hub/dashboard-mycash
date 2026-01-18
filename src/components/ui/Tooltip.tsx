import React, { useState } from 'react';
import { cn } from '../../lib/utils';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    side?: 'right' | 'top' | 'bottom' | 'left';
}

export function Tooltip({ content, children, side = 'right' }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div
                    className={cn(
                        "absolute z-50 px-3 py-1.5 text-sm text-white bg-neutral-900 rounded-md shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95 duration-200",
                        side === 'right' && "left-full ml-2",
                        side === 'left' && "right-full mr-2",
                        side === 'top' && "bottom-full mb-2",
                        side === 'bottom' && "top-full mt-2"
                    )}
                >
                    {content}
                </div>
            )}
        </div>
    );
}

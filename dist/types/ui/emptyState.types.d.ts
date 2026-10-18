import { ReactNode } from 'react';
export interface EmptyStateProps {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
    compact?: boolean;
    theme?: 'light' | 'dark';
    className?: string;
}

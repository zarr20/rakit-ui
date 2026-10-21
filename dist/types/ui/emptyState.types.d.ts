import { ReactNode } from 'react';
export type EmptyStatePreset = 'empty' | '404' | 'error' | 'no-connection' | 'search';
export interface EmptyStateProps {
    id?: string;
    preset?: EmptyStatePreset;
    icon?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
    compact?: boolean;
    theme?: 'light' | 'dark';
    className?: string;
}

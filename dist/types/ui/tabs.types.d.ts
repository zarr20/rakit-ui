import { ReactNode } from 'react';
export type TabVariant = 'default' | 'pills' | 'underline' | 'bordered';
export type TabSize = 'sm' | 'md' | 'lg';
export interface TabItem {
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    badge?: ReactNode;
    disabled?: boolean;
    content?: ReactNode;
    badgeVariant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
}
export interface TabsProps {
    items?: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    variant?: TabVariant;
    size?: TabSize;
    theme?: 'light' | 'dark';
    className?: string;
    tabListClassName?: string;
    contentClassName?: string;
    fullWidth?: boolean;
    extra?: ReactNode;
    children?: ReactNode;
}

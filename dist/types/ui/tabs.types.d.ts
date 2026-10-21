import { ReactNode } from 'react';
export type TabVariant = 'default' | 'pills' | 'underline' | 'bordered';
export type TabSize = 'xs' | 'sm' | 'md' | 'lg';
export type TabOrientation = 'horizontal' | 'vertical';
export interface TabItem<T extends string = string> {
    id: T;
    label: ReactNode;
    icon?: ReactNode;
    badge?: ReactNode;
    disabled?: boolean;
    content?: ReactNode;
    badgeVariant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
}
export interface TabsProps<T extends string = string> {
    items?: TabItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
    variant?: TabVariant;
    size?: TabSize;
    orientation?: TabOrientation;
    borderPosition?: 'left' | 'right';
    theme?: 'light' | 'dark';
    className?: string;
    tabListClassName?: string;
    contentClassName?: string;
    fullWidth?: boolean;
    extra?: ReactNode;
    children?: ReactNode;
}

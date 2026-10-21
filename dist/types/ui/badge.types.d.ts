import { HTMLAttributes, ReactNode } from 'react';
export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'subtle' | 'outline';
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    children: ReactNode;
    size?: BadgeSize;
    pill?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
}

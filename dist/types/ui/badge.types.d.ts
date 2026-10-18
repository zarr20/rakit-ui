import { HTMLAttributes, ReactNode } from 'react';
export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple';
export type BadgeSize = 'xs' | 'sm' | 'md';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    children: ReactNode;
    size?: BadgeSize;
    className?: string;
}
export interface MethodBadgeProps {
    method?: string;
    size?: 'xs' | 'sm';
    className?: string;
}
export interface StatusCodeBadgeProps {
    statusCode: number;
    className?: string;
}

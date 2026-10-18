import { ButtonHTMLAttributes, ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'ghost' | 'warning' | 'info' | 'purple' | 'subtle';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: ReactNode;
    className?: string;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    pill?: boolean;
}

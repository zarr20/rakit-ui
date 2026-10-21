import { ReactNode } from 'react';
export type FieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FieldLayout = 'vertical' | 'horizontal';
export interface FieldWrapperProps {
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    hint?: ReactNode;
    required?: boolean;
    optional?: boolean;
    disabled?: boolean;
    size?: FieldSize;
    layout?: FieldLayout;
    htmlFor?: string;
    className?: string;
    labelClassName?: string;
    children?: ReactNode;
}

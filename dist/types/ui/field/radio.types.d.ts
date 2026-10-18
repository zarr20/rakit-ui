import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldSize } from './fieldWrapper.types';
export interface RadioOption {
    label: ReactNode;
    value: string;
    description?: ReactNode;
    disabled?: boolean;
}
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    label?: ReactNode;
    description?: ReactNode;
    size?: FieldSize;
    variant?: 'default' | 'card';
    className?: string;
    wrapperClassName?: string;
}
export interface RadioGroupProps {
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    hint?: ReactNode;
    required?: boolean;
    optional?: boolean;
    orientation?: 'vertical' | 'horizontal';
    variant?: 'default' | 'card';
    size?: FieldSize;
    disabled?: boolean;
    className?: string;
}

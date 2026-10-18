import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldSize } from './fieldWrapper.types';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    size?: FieldSize;
    variant?: 'default' | 'card';
    className?: string;
    wrapperClassName?: string;
}
export interface CheckboxOption {
    label: ReactNode;
    value: string;
    description?: ReactNode;
    disabled?: boolean;
}
export interface CheckboxGroupProps {
    options: CheckboxOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    name?: string;
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    hint?: ReactNode;
    required?: boolean;
    optional?: boolean;
    orientation?: 'vertical' | 'horizontal';
    size?: FieldSize;
    variant?: 'default' | 'card';
    disabled?: boolean;
    className?: string;
}

import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldLayout, FieldSize } from './fieldWrapper.types';
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    hint?: ReactNode;
    required?: boolean;
    optional?: boolean;
    size?: FieldSize;
    layout?: FieldLayout;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    prefixText?: string;
    suffixText?: string;
    clearable?: boolean;
    onClear?: () => void;
    isPasswordToggle?: boolean;
    wrapperClassName?: string;
    inputWrapperClassName?: string;
}

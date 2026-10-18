import { ReactNode, TextareaHTMLAttributes } from 'react';
import { FieldLayout, FieldSize } from './fieldWrapper.types';
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    hint?: ReactNode;
    required?: boolean;
    optional?: boolean;
    size?: FieldSize;
    layout?: FieldLayout;
    showCount?: boolean;
    clearable?: boolean;
    onClear?: () => void;
    wrapperClassName?: string;
}

import { ReactNode } from 'react';
import { FieldLayout, FieldSize } from './fieldWrapper.types';
export interface SelectOption {
    label: string;
    value: string;
    description?: string;
    icon?: ReactNode;
    disabled?: boolean;
}
export interface SelectProps {
    options: (SelectOption | string)[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    hint?: ReactNode;
    required?: boolean;
    optional?: boolean;
    disabled?: boolean;
    size?: FieldSize;
    layout?: FieldLayout;
    searchable?: boolean;
    searchPlaceholder?: string;
    clearable?: boolean;
    emptyText?: string;
    className?: string;
    wrapperClassName?: string;
}
export interface MultiSelectProps {
    options: (SelectOption | string)[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    hint?: ReactNode;
    required?: boolean;
    optional?: boolean;
    disabled?: boolean;
    size?: FieldSize;
    layout?: FieldLayout;
    searchable?: boolean;
    searchPlaceholder?: string;
    clearable?: boolean;
    maxDisplayTags?: number;
    emptyText?: string;
    className?: string;
    wrapperClassName?: string;
}

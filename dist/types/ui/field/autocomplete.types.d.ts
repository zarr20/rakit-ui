import { ReactNode } from 'react';
import { FieldLayout, FieldSize } from './fieldWrapper.types';
export interface AutocompleteOption {
    label: string;
    value: string;
    description?: string;
    icon?: ReactNode;
    disabled?: boolean;
    [key: string]: unknown;
}
export interface AutocompleteProps {
    options: (AutocompleteOption | string)[];
    value?: string;
    onChange?: (value: string, option?: AutocompleteOption) => void;
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
    clearable?: boolean;
    loading?: boolean;
    emptyText?: string;
    leftIcon?: ReactNode;
    filterFn?: (option: AutocompleteOption, query: string) => boolean;
    renderOption?: (option: AutocompleteOption, isSelected: boolean) => ReactNode;
    className?: string;
    wrapperClassName?: string;
}

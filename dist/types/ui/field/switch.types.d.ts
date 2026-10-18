import { ReactNode } from 'react';
import { FieldSize } from './fieldWrapper.types';
export interface SwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: ReactNode;
    description?: ReactNode;
    disabled?: boolean;
    size?: FieldSize;
    checkedIcon?: ReactNode;
    uncheckedIcon?: ReactNode;
    className?: string;
    wrapperClassName?: string;
}

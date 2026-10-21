import { ReactNode } from 'react';
export type SegmentedControlSize = 'xs' | 'sm' | 'md' | 'lg';
export type SegmentedControlOrientation = 'horizontal' | 'vertical';
export interface SegmentedControlItem<T extends string = string> {
    value: T;
    label?: ReactNode;
    icon?: ReactNode;
    title?: string;
    disabled?: boolean;
}
export interface SegmentedControlProps<T extends string = string> {
    items: SegmentedControlItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
    size?: SegmentedControlSize;
    orientation?: SegmentedControlOrientation;
    fullWidth?: boolean;
    disabled?: boolean;
    theme?: 'light' | 'dark';
    className?: string;
    itemClassName?: string;
}

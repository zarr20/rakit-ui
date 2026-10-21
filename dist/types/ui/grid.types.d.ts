import { HTMLAttributes, ReactNode } from 'react';
export type GridColsNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridSpanNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full' | 'auto';
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ResponsiveProp<T> = T | {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    '2xl'?: T;
};
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
    cols?: ResponsiveProp<GridColsNumber>;
    gap?: ResponsiveProp<GridGap>;
    gapX?: ResponsiveProp<GridGap>;
    gapY?: ResponsiveProp<GridGap>;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}
export interface GridColProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
    span?: ResponsiveProp<GridSpanNumber>;
    offset?: ResponsiveProp<GridSpanNumber>;
    order?: ResponsiveProp<number>;
}

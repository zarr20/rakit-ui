import { ReactNode } from 'react';
export type TableAlign = 'left' | 'center' | 'right';
export type TableSticky = 'left' | 'right';
export type TableSortDirection = 'asc' | 'desc';
export type TableSize = 'sm' | 'md' | 'lg';
export interface TableColumn<T> {
    key: string;
    title: ReactNode;
    width?: string | number;
    align?: TableAlign;
    sortable?: boolean;
    sortValue?: (record: T) => string | number | boolean;
    sticky?: TableSticky;
    className?: string;
    headerClassName?: string;
    render?: (record: T, index: number) => ReactNode;
}
export interface TableProps<T> {
    data: T[];
    columns: TableColumn<T>[];
    rowKey?: (record: T, index: number) => string | number;
    emptyTitle?: ReactNode;
    emptyMessage?: ReactNode;
    emptyIcon?: ReactNode;
    defaultSortKey?: string;
    defaultSortDirection?: TableSortDirection;
    className?: string;
    tableClassName?: string;
    stickyHeader?: boolean;
    size?: TableSize;
    isLoading?: boolean;
    loadingMessage?: ReactNode;
    onRowClick?: (record: T, index: number) => void;
    rowClassName?: string | ((record: T, index: number) => string);
    bordered?: boolean;
    striped?: boolean;
}
export type DataTableColumn<T> = TableColumn<T>;
export type DataTableProps<T> = TableProps<T>;

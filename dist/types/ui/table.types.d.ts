import { ReactNode } from 'react';
export type TableAlign = 'left' | 'center' | 'right';
export type TableSticky = 'left' | 'right';
export type TableSortDirection = 'asc' | 'desc';
export type TableSize = 'sm' | 'md' | 'lg';
export interface TableRowSelection<T> {
    selectedRowKeys?: (string | number)[];
    onChange?: (selectedRowKeys: (string | number)[], selectedRecords: T[]) => void;
    getCheckboxProps?: (record: T) => {
        disabled?: boolean;
        [key: string]: any;
    };
}
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
    id?: string;
    data: T[];
    columns: TableColumn<T>[];
    rowKey?: (record: T, index: number) => string | number;
    emptyTitle?: ReactNode;
    emptyMessage?: ReactNode;
    emptyIcon?: ReactNode;
    emptySlot?: ReactNode;
    defaultSortKey?: string;
    defaultSortDirection?: TableSortDirection;
    className?: string;
    tableClassName?: string;
    stickyHeader?: boolean;
    size?: TableSize;
    isLoading?: boolean;
    loadingMessage?: ReactNode;
    loadingSlot?: ReactNode;
    skeletonRows?: number;
    rowSelection?: TableRowSelection<T>;
    selectedRowKeys?: (string | number)[];
    onSelectionChange?: (selectedKeys: (string | number)[], selectedRecords: T[]) => void;
    onRowClick?: (record: T, index: number) => void;
    rowClassName?: string | ((record: T, index: number) => string);
    bordered?: boolean;
    striped?: boolean;
}
export type DataTableColumn<T> = TableColumn<T>;
export type DataTableProps<T> = TableProps<T>;

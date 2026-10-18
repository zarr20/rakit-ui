import { TableProps } from '../../../types/ui/table.types';
export declare function Table<T>({ data, columns, rowKey, emptyTitle, emptyMessage, emptyIcon, defaultSortKey, defaultSortDirection, className, tableClassName, stickyHeader, size, isLoading, loadingMessage, onRowClick, rowClassName, bordered, striped, }: TableProps<T>): import("react").JSX.Element;
export declare const DataTable: typeof Table;
export type { TableProps, TableColumn, DataTableProps, DataTableColumn, TableSize, TableAlign, TableSticky, TableSortDirection, } from '../../../types/ui/table.types';

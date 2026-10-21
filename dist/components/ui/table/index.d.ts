import { TableProps } from '../../../types/ui/table.types';
export declare function Table<T>({ id, data, columns, rowKey, emptyTitle, emptyMessage, emptyIcon, emptySlot, defaultSortKey, defaultSortDirection, className, tableClassName, stickyHeader, size, isLoading, loadingMessage, loadingSlot, skeletonRows, rowSelection, selectedRowKeys: directSelectedKeys, onSelectionChange: directOnSelectionChange, onRowClick, rowClassName, bordered, striped, }: TableProps<T>): import("react").JSX.Element;
export declare const DataTable: typeof Table;
export type { TableProps, TableColumn, DataTableProps, DataTableColumn, TableRowSelection, TableSize, TableAlign, TableSticky, TableSortDirection, } from '../../../types/ui/table.types';

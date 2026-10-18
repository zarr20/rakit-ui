import { MouseEvent, ReactNode } from 'react';
export type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info' | 'loading';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type ToastTheme = 'colored' | 'light' | 'dark' | 'system';
export interface ToastAction {
    label: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary' | 'danger';
}
export interface ToastData {
    id?: string;
    type?: ToastType;
    title?: ReactNode;
    description?: ReactNode;
    /** Backwards compatibility alias for title / message */
    msg?: string;
    duration?: number;
    /** Backwards compatibility alias for duration */
    durationMs?: number;
    icon?: ReactNode;
    action?: ToastAction;
    cancel?: {
        label?: string;
        onClick?: () => void;
    };
    dismissible?: boolean;
    theme?: ToastTheme;
    className?: string;
    createdAt?: number;
}
export type ToastOptions = Partial<ToastData>;
export interface ToastContainerProps {
    position?: ToastPosition;
    toasts?: ToastData[];
    /** Backwards compatibility for single toast prop */
    toast?: ToastData | null;
    onDismiss?: (id: string) => void;
    theme?: ToastTheme;
    expandOnHover?: boolean;
    maxVisible?: number;
    gap?: number;
    showProgress?: boolean;
    className?: string;
    containerClassName?: string;
}
export interface ToastItemProps {
    toast: ToastData;
    index: number;
    total: number;
    isExpanded: boolean;
    position: ToastPosition;
    onDismiss: (id: string) => void;
    theme?: ToastTheme;
    showProgress?: boolean;
    gap?: number;
    className?: string;
}
export interface ToastPromiseMessages<T> {
    loading: ReactNode;
    success: ReactNode | ((data: T) => ReactNode);
    error: ReactNode | ((err: any) => ReactNode);
}

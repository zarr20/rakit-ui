import { ReactNode } from 'react';
import { ToastData, ToastOptions, ToastPromiseMessages } from '../../../types/ui/toast.types';
type Listener = () => void;
declare class ToastManager {
    private toasts;
    private listeners;
    private timers;
    private emitChange;
    subscribe(listener: Listener): () => void;
    getSnapshot: () => ToastData[];
    add(title: ReactNode, options?: ToastOptions): string;
    dismiss(id?: string): void;
    private clearTimer;
}
export declare const toastManager: ToastManager;
export interface ToastCallable {
    (title: ReactNode, options?: ToastOptions): string;
    success: (title: ReactNode, options?: ToastOptions) => string;
    error: (title: ReactNode, options?: ToastOptions) => string;
    warning: (title: ReactNode, options?: ToastOptions) => string;
    info: (title: ReactNode, options?: ToastOptions) => string;
    loading: (title: ReactNode, options?: ToastOptions) => string;
    promise: <T>(promise: Promise<T> | (() => Promise<T>), messages: ToastPromiseMessages<T>, options?: ToastOptions) => Promise<T>;
    dismiss: (id?: string) => void;
}
export declare const toast: ToastCallable;
export declare function useToastStore(): ToastData[];
export declare function useToast(): {
    toasts: ToastData[];
    toast: ToastCallable;
    dismiss: (id?: string) => void;
};
export {};

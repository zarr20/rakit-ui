import { ToastContainerProps } from '../../../types/ui/toast.types';
export declare function ToastContainer({ position, toasts: controlledToasts, toast: controlledSingleToast, onDismiss: controlledOnDismiss, theme, expandOnHover, maxVisible, showProgress, className, containerClassName, }: ToastContainerProps): import('react').ReactPortal | null;
export declare const Toaster: typeof ToastContainer;

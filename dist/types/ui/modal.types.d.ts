import { ReactNode } from 'react';
export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export interface ModalProps {
    id?: string;
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    size?: ModalSize;
    className?: string;
    contentClassName?: string;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    showCloseButton?: boolean;
    backdropBlur?: boolean;
    trapFocus?: boolean;
}

import { ReactNode } from 'react';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    size?: ModalSize;
    className?: string;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    showCloseButton?: boolean;
}

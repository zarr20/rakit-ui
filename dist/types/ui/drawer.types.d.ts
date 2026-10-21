import { HTMLAttributes, ReactNode } from 'react';
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    placement?: DrawerPlacement;
    size?: DrawerSize;
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
    contentClassName?: string;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    showCloseButton?: boolean;
    backdropBlur?: boolean;
    bordered?: boolean;
    id?: string;
}
export interface DrawerHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    showCloseButton?: boolean;
    onClose?: () => void;
    className?: string;
    children?: ReactNode;
}
export interface DrawerTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    children: ReactNode;
}
export interface DrawerDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    children: ReactNode;
}
export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}
export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

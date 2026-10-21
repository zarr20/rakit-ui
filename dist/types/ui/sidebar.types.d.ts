import { ElementType, HTMLAttributes, ReactNode, MouseEvent } from 'react';
import { LayoutSidebarProps } from './layout.types';
import { BadgeVariant } from './badge.types';
export interface SidebarProps extends LayoutSidebarProps {
    onToggleCollapse?: () => void;
    id?: string;
}
export interface SidebarContextValue {
    collapsed: boolean;
    isOpen: boolean;
    onClose?: () => void;
    onToggleCollapse?: () => void;
    position: 'left' | 'right';
}
export interface SidebarHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: ReactNode;
    subtitle?: ReactNode;
    icon?: ElementType<{
        className?: string;
    }> | ReactNode;
    action?: ReactNode;
    showCloseButton?: boolean;
    onClose?: () => void;
    children?: ReactNode;
}
export interface SidebarToggleProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'title'> {
    collapsed?: boolean;
    onToggle?: () => void;
    size?: 'xs' | 'sm' | 'md';
    title?: string;
}
export interface SidebarNavProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
}
export interface SidebarGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: ReactNode;
    children?: ReactNode;
}
export interface SidebarItemProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    icon?: ElementType<{
        className?: string;
    }> | ReactNode;
    label: ReactNode;
    active?: boolean;
    badge?: ReactNode;
    badgeVariant?: BadgeVariant;
    indicator?: boolean;
    disabled?: boolean;
    href?: string;
    as?: ElementType;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}
export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
    children?: ReactNode;
}
export interface SidebarSeparatorProps extends HTMLAttributes<HTMLHRElement> {
}

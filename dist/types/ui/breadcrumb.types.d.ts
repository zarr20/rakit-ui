import { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react';
export type BreadcrumbSize = 'xs' | 'sm' | 'md' | 'lg';
export type BreadcrumbSeparatorType = 'slash' | 'chevron' | 'arrow' | 'bullet' | ReactNode;
export interface BreadcrumbItemData {
    id?: string;
    label: ReactNode;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    icon?: ReactNode;
}
export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
    items?: BreadcrumbItemData[];
    separator?: BreadcrumbSeparatorType;
    size?: BreadcrumbSize;
    maxItems?: number;
    className?: string;
    children?: ReactNode;
    id?: string;
}
export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
    active?: boolean;
    className?: string;
    children?: ReactNode;
}
export interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    onClick?: () => void;
    as?: any;
    className?: string;
    children: ReactNode;
}
export interface BreadcrumbPageProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
    children: ReactNode;
}
export interface BreadcrumbSeparatorProps extends HTMLAttributes<HTMLLIElement> {
    children?: ReactNode;
    className?: string;
}

import { HTMLAttributes, ReactNode } from 'react';
/**
 * Standardized stack layer tokens for layout hierarchy and z-index ordering.
 * Guarantees consistent layering across all components and overlays.
 */
export type LayoutStackLayer = 'base' | 'sticky' | 'header' | 'sidebar' | 'backdrop' | 'drawer' | 'modal' | 'popover' | 'toast' | 'loading';
export declare const STACK_LAYER_Z_INDEX: Record<LayoutStackLayer, number>;
export declare const STACK_LAYER_CLASSES: Record<LayoutStackLayer, string>;
export type LayoutTheme = 'light' | 'dark';
export interface LayoutProps {
    theme?: LayoutTheme;
    fullScreen?: boolean;
    className?: string;
    children?: ReactNode;
}
export interface LayoutHeaderProps {
    height?: string;
    sticky?: boolean;
    bordered?: boolean;
    layer?: LayoutStackLayer;
    className?: string;
    children?: ReactNode;
}
export interface LayoutBodyProps {
    className?: string;
    children?: ReactNode;
}
export interface LayoutSidebarProps {
    id?: string;
    isOpen?: boolean;
    onClose?: () => void;
    collapsed?: boolean;
    onToggleCollapse?: () => void;
    width?: string;
    collapsedWidth?: string;
    position?: 'left' | 'right';
    mobileMode?: 'drawer' | 'hidden';
    bordered?: boolean;
    layer?: LayoutStackLayer;
    className?: string;
    children?: ReactNode;
}
export interface LayoutContentProps extends HTMLAttributes<HTMLElement> {
    padded?: boolean;
    className?: string;
    children?: ReactNode;
}
export interface LayoutBackdropProps {
    visible?: boolean;
    onClick?: () => void;
    blur?: boolean;
    scope?: 'full' | 'body';
    layer?: LayoutStackLayer;
    className?: string;
    children?: ReactNode;
}
export interface LayoutLoadingProps {
    visible?: boolean;
    message?: ReactNode;
    description?: ReactNode;
    variant?: 'spinner' | 'bar' | 'overlay';
    progress?: number;
    blur?: boolean;
    layer?: LayoutStackLayer;
    customIcon?: ReactNode;
    className?: string;
}
export interface StackLayerProps {
    layer?: LayoutStackLayer;
    zIndex?: number;
    fixed?: boolean;
    absolute?: boolean;
    fullScreen?: boolean;
    className?: string;
    children?: ReactNode;
}

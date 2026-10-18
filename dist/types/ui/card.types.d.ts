import { HTMLAttributes, ReactNode } from 'react';
export type CardPadding = 'none' | 'xSmall' | 'small' | 'medium' | 'large';
export type CardGap = 'none' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
export type CardVariant = 'default' | 'light' | 'bordered' | 'ghost' | 'flat' | 'elevated';
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    children?: ReactNode;
    className?: string;
    padding?: CardPadding;
    gap?: CardGap | boolean;
    variant?: CardVariant;
    hoverable?: boolean;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    isCollapsed?: boolean;
    onToggleCollapse?: (collapsed: boolean) => void;
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    iconBgColor?: string;
    badge?: ReactNode;
    actionSlot?: ReactNode;
    actions?: ReactNode;
    headerClassName?: string;
    bodyClassName?: string;
}
export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    children?: ReactNode;
    className?: string;
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    iconBgColor?: string;
    badge?: ReactNode;
    actionSlot?: ReactNode;
    actions?: ReactNode;
    collapsible?: boolean;
    showCollapseTrigger?: boolean;
}
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    children?: ReactNode;
    className?: string;
}
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
    padding?: CardPadding;
    gap?: CardGap | boolean;
}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}
export interface FeatureBannerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> {
    children?: ReactNode;
    icon?: ReactNode;
    iconBgColor?: string;
    title: ReactNode;
    badge?: ReactNode;
    description?: ReactNode;
    tone?: 'emerald' | 'slate' | 'light';
    actionSlot?: ReactNode;
    actions?: ReactNode;
}

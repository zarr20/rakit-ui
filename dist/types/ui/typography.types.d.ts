import { ElementType, HTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type TextColor = 'default' | 'secondary' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'inverse';
export type TextVariant = 'body' | 'lead' | 'caption' | 'label' | 'mono';
export interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
    as?: HeadingLevel;
    size?: HeadingSize;
    weight?: TextWeight;
    color?: TextColor;
    tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';
    className?: string;
    children: ReactNode;
    id?: string;
}
export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    as?: ElementType;
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    variant?: TextVariant;
    truncate?: boolean;
    italic?: boolean;
    underline?: boolean;
    delete?: boolean;
    mark?: boolean;
    className?: string;
    children: ReactNode;
    id?: string;
}
export interface ParagraphProps extends TextProps {
    prose?: boolean;
    gutterBottom?: boolean;
    lead?: boolean;
}
export interface KbdProps extends HTMLAttributes<HTMLElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
    children: ReactNode;
    id?: string;
}
export interface CodeTextProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children: ReactNode;
    id?: string;
}
export interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
    cite?: string;
    author?: string;
    color?: 'primary' | 'slate' | 'amber' | 'rose';
    bordered?: boolean;
    className?: string;
    children: ReactNode;
    id?: string;
}
export interface LinkTextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
    underline?: 'always' | 'hover' | 'none';
    className?: string;
    children: ReactNode;
    id?: string;
}

import { HTMLAttributes, ReactNode } from 'react';
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type ContainerPadding = 'none' | 'small' | 'medium' | 'large';
export type ContainerGap = 'none' | 'small' | 'medium' | 'large';
export type ContainerVariant = 'default' | 'card' | 'elevated' | 'bordered' | 'flat' | 'ghost';
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: ContainerSize;
    padding?: ContainerPadding;
    gap?: ContainerGap;
    variant?: ContainerVariant;
    centered?: boolean;
    className?: string;
    children?: ReactNode;
}
export type ActionBarPosition = 'top' | 'bottom' | 'sticky-top' | 'sticky-bottom' | 'floating';
export type ActionBarAlign = 'left' | 'right' | 'between' | 'center';
export type ActionBarDensity = 'tight' | 'normal' | 'relaxed';
export type ActionBarVariant = 'default' | 'floating' | 'subtle' | 'glass' | 'contrast';
export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {
    position?: ActionBarPosition;
    align?: ActionBarAlign;
    density?: ActionBarDensity;
    variant?: ActionBarVariant;
    bordered?: boolean;
    className?: string;
    children?: ReactNode;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
}
export interface ContainerHeaderProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}
export interface ContainerContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    padding?: ContainerPadding;
    gap?: ContainerGap;
    children?: ReactNode;
}
export interface ContainerFooterProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

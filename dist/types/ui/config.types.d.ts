import { CSSProperties, ReactNode } from 'react';
import { ButtonSize, ButtonVariant } from './button.types';
import { CardPadding, CardVariant } from './card.types';
import { BadgeSize, BadgeVariant } from './badge.types';
import { GridGap, GridColsNumber } from './grid.types';
import { FieldSize } from './field/fieldWrapper.types';
export interface ComponentStyleOverride {
    className?: string;
    style?: CSSProperties;
}
export interface ButtonConfigOverride extends ComponentStyleOverride {
    defaultVariant?: ButtonVariant;
    defaultSize?: ButtonSize;
    variants?: Partial<Record<ButtonVariant, string>>;
    sizes?: Partial<Record<ButtonSize, string>>;
}
export interface CardConfigOverride extends ComponentStyleOverride {
    defaultVariant?: CardVariant;
    defaultPadding?: CardPadding;
    variants?: Partial<Record<CardVariant, string>>;
    padding?: Partial<Record<CardPadding, string>>;
}
export interface BadgeConfigOverride extends ComponentStyleOverride {
    defaultVariant?: BadgeVariant;
    defaultSize?: BadgeSize;
    variants?: Partial<Record<BadgeVariant, string>>;
}
export interface GridConfigOverride extends ComponentStyleOverride {
    defaultGap?: GridGap;
    defaultCols?: GridColsNumber;
}
export interface FieldConfigOverride extends ComponentStyleOverride {
    defaultSize?: FieldSize;
}
export interface RakitComponentsConfig {
    button?: ButtonConfigOverride;
    card?: CardConfigOverride;
    badge?: BadgeConfigOverride;
    modal?: ComponentStyleOverride;
    table?: ComponentStyleOverride;
    tabs?: ComponentStyleOverride;
    grid?: GridConfigOverride;
    field?: FieldConfigOverride;
    codeEditor?: ComponentStyleOverride;
    layout?: ComponentStyleOverride;
    sidebar?: ComponentStyleOverride;
    drawer?: ComponentStyleOverride;
    typography?: ComponentStyleOverride;
    breadcrumb?: ComponentStyleOverride;
    container?: ComponentStyleOverride;
    emptyState?: ComponentStyleOverride;
}
export interface RakitConfig {
    prefix?: string;
    enableIdentifiers?: boolean;
    theme?: 'light' | 'dark' | 'system';
    components?: RakitComponentsConfig;
}
export interface RakitProviderProps {
    config?: RakitConfig;
    children: ReactNode;
}

import { ContainerContent } from './ContainerContent';
import { ContainerFooter } from './ContainerFooter';
import { ContainerHeader } from './ContainerHeader';
import { ContainerProps } from '../../../types/ui/container.types';
export declare function Container({ size, padding, variant, centered, className, children, ...props }: ContainerProps): import("react").JSX.Element;
export declare namespace Container {
    var ActionBar: typeof import("./ActionBar").ActionBar;
    var Header: typeof ContainerHeader;
    var Content: typeof ContainerContent;
    var Footer: typeof ContainerFooter;
}
export type { ActionBarProps, ContainerContentProps, ContainerFooterProps, ContainerHeaderProps, ContainerProps, } from '../../../types/ui/container.types';

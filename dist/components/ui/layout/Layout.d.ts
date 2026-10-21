import { LayoutBackdrop } from './LayoutBackdrop';
import { LayoutBody } from './LayoutBody';
import { LayoutHeader } from './LayoutHeader';
import { LayoutLoading } from './LayoutLoading';
import { StackLayer } from './StackLayer';
import { LayoutProps } from '../../../types/ui/layout.types';
export declare function Layout({ theme, fullScreen, className, children, }: LayoutProps): import("react").JSX.Element;
export declare namespace Layout {
    var Header: typeof LayoutHeader;
    var Body: typeof LayoutBody;
    var Sidebar: typeof import("..").Sidebar;
    var Content: import("react").ForwardRefExoticComponent<import("./LayoutContent").LayoutContentProps & import("react").RefAttributes<HTMLElement>>;
    var Backdrop: typeof LayoutBackdrop;
    var Loading: typeof LayoutLoading;
    var Layer: typeof StackLayer;
}
export type { LayoutProps } from '../../../types/ui/layout.types';

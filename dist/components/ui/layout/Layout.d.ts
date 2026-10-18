import { LayoutBackdrop } from './LayoutBackdrop';
import { LayoutBody } from './LayoutBody';
import { LayoutContent } from './LayoutContent';
import { LayoutHeader } from './LayoutHeader';
import { LayoutLoading } from './LayoutLoading';
import { LayoutSidebar } from './LayoutSidebar';
import { StackLayer } from './StackLayer';
import { LayoutProps } from '../../../types/ui/layout.types';
export declare function Layout({ theme, fullScreen, className, children, }: LayoutProps): import("react").JSX.Element;
export declare namespace Layout {
    var Header: typeof LayoutHeader;
    var Body: typeof LayoutBody;
    var Sidebar: typeof LayoutSidebar;
    var Content: typeof LayoutContent;
    var Backdrop: typeof LayoutBackdrop;
    var Loading: typeof LayoutLoading;
    var Layer: typeof StackLayer;
}
export type { LayoutProps } from '../../../types/ui/layout.types';

import { SidebarProps, SidebarContextValue } from '../../../types/ui/sidebar.types';
import { SidebarHeader } from './SidebarHeader';
import { SidebarToggle } from './SidebarToggle';
import { SidebarNav } from './SidebarNav';
import { SidebarGroup } from './SidebarGroup';
import { SidebarItem } from './SidebarItem';
import { SidebarFooter } from './SidebarFooter';
import { SidebarSeparator } from './SidebarSeparator';
export declare function Sidebar({ id, isOpen, onClose, width, collapsed, onToggleCollapse, collapsedWidth, position, mobileMode, bordered, layer, className, children, }: SidebarProps): import("react").JSX.Element;
export declare namespace Sidebar {
    var Header: typeof SidebarHeader;
    var Toggle: typeof SidebarToggle;
    var Nav: typeof SidebarNav;
    var Group: typeof SidebarGroup;
    var Item: typeof SidebarItem;
    var Footer: typeof SidebarFooter;
    var Separator: typeof SidebarSeparator;
    var Context: import("react").Context<SidebarContextValue | null>;
}

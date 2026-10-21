import { DrawerHeader } from './DrawerHeader';
import { DrawerTitle } from './DrawerTitle';
import { DrawerDescription } from './DrawerDescription';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { DrawerProps } from '../../../types/ui/drawer.types';
export declare function Drawer({ id, isOpen, onClose, placement, size, title, description, icon, children, footer, className, contentClassName, closeOnEsc, closeOnOverlayClick, showCloseButton, backdropBlur, bordered, }: DrawerProps): import('react').ReactPortal | null;
export declare namespace Drawer {
    var Header: typeof DrawerHeader;
    var Title: typeof DrawerTitle;
    var Description: typeof DrawerDescription;
    var Body: typeof DrawerBody;
    var Footer: typeof DrawerFooter;
}

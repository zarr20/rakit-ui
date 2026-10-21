import { ModalBody } from './ModalBody';
import { ModalDescription } from './ModalDescription';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalTitle } from './ModalTitle';
import { ModalProps } from '../../../types/ui/modal.types';
export declare function Modal({ id, isOpen, onClose, title, description, icon, children, footer, size, className, contentClassName, closeOnEsc, closeOnOverlayClick, showCloseButton, backdropBlur, trapFocus, }: ModalProps): import('react').ReactPortal | null;
export declare namespace Modal {
    var Header: typeof ModalHeader;
    var Title: typeof ModalTitle;
    var Description: typeof ModalDescription;
    var Body: typeof ModalBody;
    var Footer: typeof ModalFooter;
}
export { ModalHeader } from './ModalHeader';
export { ModalTitle } from './ModalTitle';
export { ModalDescription } from './ModalDescription';
export { ModalBody } from './ModalBody';
export { ModalFooter } from './ModalFooter';
export type { ModalProps, ModalSize } from '../../../types/ui/modal.types';

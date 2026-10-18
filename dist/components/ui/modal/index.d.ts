import { ModalProps } from '../../../types/ui/modal.types';
export declare function Modal({ isOpen, onClose, title, description, icon, children, footer, size, className, closeOnEsc, closeOnOverlayClick, showCloseButton, }: ModalProps): import('react').ReactPortal | null;
export { ModalHeader } from './ModalHeader';
export { ModalTitle } from './ModalTitle';
export { ModalDescription } from './ModalDescription';
export { ModalBody } from './ModalBody';
export { ModalFooter } from './ModalFooter';
export type { ModalProps, ModalSize } from '../../../types/ui/modal.types';

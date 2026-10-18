import { CodeEditorTheme } from '../../../types/ui/code-editor.types';
export declare function SplitterHandle({ theme, isDragging, onMouseDown, onTouchStart, onDoubleClick, className, }: SplitterHandleProps): import("react").JSX.Element;
export interface SplitterHandleProps {
    theme: CodeEditorTheme;
    isDragging: boolean;
    onMouseDown: (e: React.MouseEvent) => void;
    onTouchStart: (e: React.TouchEvent) => void;
    onDoubleClick: () => void;
    className?: string;
}

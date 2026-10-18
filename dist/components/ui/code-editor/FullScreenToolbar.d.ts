import { CodeEditorTheme } from '../../../types/ui/code-editor.types';
export declare function FullScreenToolbar({ theme, readOnly, historyIndex, historyLength, onUndo, onRedo, language, isValidJson, onFormat, onMinify, onCopy, copied, searchTerm, onSearchChange, }: FullScreenToolbarProps): import("react").JSX.Element;
export interface FullScreenToolbarProps {
    theme: CodeEditorTheme;
    readOnly?: boolean;
    historyIndex: number;
    historyLength: number;
    onUndo: () => void;
    onRedo: () => void;
    language?: string;
    isValidJson: boolean;
    onFormat: (indent?: number) => void;
    onMinify: () => void;
    onCopy: () => void;
    copied: boolean;
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

import { ReactNode } from 'react';
import { CodeEditorLanguage, CodeEditorProps } from '../../../types/ui/code-editor.types';
export interface CodeViewerFile {
    name: string;
    content: string;
    language?: CodeEditorLanguage;
    icon?: ReactNode;
}
export interface CodeViewerProps extends Partial<CodeEditorProps> {
    value?: string;
    files?: CodeViewerFile[];
    activeFileName?: string;
    onActiveFileChange?: (fileName: string) => void;
}
export declare function CodeViewer({ value, files, activeFileName, onActiveFileChange, language, title, theme, height, maxHeight, showToolbar, showCopyButton, showLineNumbers, className, tabsVariant, ...props }: CodeViewerProps): import("react").JSX.Element;
export declare const FileViewer: typeof CodeViewer;
export type FileViewerProps = CodeViewerProps;

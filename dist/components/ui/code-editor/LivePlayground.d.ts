import { ReactNode } from 'react';
import { CodeEditorTheme } from '../../../types/ui/code-editor.types';
export type LivePlaygroundViewport = 'desktop' | 'tablet' | 'mobile';
export interface LivePlaygroundProps {
    initialCode?: string;
    code?: string;
    onChange?: (code: string) => void;
    scope?: Record<string, any>;
    theme?: CodeEditorTheme;
    defaultViewMode?: 'split' | 'code' | 'preview';
    defaultViewport?: LivePlaygroundViewport;
    title?: ReactNode;
    height?: string | number;
    readOnly?: boolean;
    showToolbar?: boolean;
    className?: string;
    previewClassName?: string;
    editorClassName?: string;
    extraActions?: ReactNode;
}
export declare function LivePlayground({ initialCode, code: controlledCode, onChange, scope, theme: controlledTheme, defaultViewMode, defaultViewport, title, height, readOnly, showToolbar, className, previewClassName, editorClassName, extraActions, }: LivePlaygroundProps): import("react").JSX.Element;
export declare const CodePlayground: typeof LivePlayground;

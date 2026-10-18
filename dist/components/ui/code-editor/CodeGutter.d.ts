import { RefObject } from 'react';
import { CodeEditorTheme } from '../../../types/ui/code-editor.types';
export declare function CodeGutter({ gutterRef, lineNumbers, theme, className, }: CodeGutterProps): import("react").JSX.Element;
export interface CodeGutterProps {
    gutterRef: RefObject<HTMLDivElement | null>;
    lineNumbers: number[];
    theme?: CodeEditorTheme;
    className?: string;
}

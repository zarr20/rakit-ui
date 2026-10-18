import { CodeEditorTheme } from '../../../types/ui/code-editor.types';
export declare function FullScreenStatusBar({ theme, lineCount, charCount, language, isValidJson, parseError, }: FullScreenStatusBarProps): import("react").JSX.Element;
export interface FullScreenStatusBarProps {
    theme: CodeEditorTheme;
    lineCount: number;
    charCount: number;
    language: string;
    isValidJson: boolean;
    parseError: string | null;
}

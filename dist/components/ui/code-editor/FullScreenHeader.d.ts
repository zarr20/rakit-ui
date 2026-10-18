import { ReactNode } from 'react';
import { CodeEditorTheme, CodeEditorViewMode } from '../../../types/ui/code-editor.types';
export declare function FullScreenHeader({ title, subtitle, badge, language, isValidJson, viewMode, onViewModeChange, theme, onToggleTheme, readOnly, onSave, onClose, }: FullScreenHeaderProps): import("react").JSX.Element;
export interface FullScreenHeaderProps {
    title: ReactNode;
    subtitle?: ReactNode;
    badge?: ReactNode;
    language?: string;
    isValidJson: boolean;
    viewMode: CodeEditorViewMode;
    onViewModeChange: (mode: CodeEditorViewMode) => void;
    theme: CodeEditorTheme;
    onToggleTheme: () => void;
    readOnly?: boolean;
    onSave?: () => void;
    onClose: () => void;
}

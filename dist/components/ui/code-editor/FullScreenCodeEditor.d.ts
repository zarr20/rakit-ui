import { FullScreenCodeEditorProps } from '../../../types/ui/code-editor.types';
export declare function FullScreenCodeEditor({ isOpen, onClose, value, onSave, language, theme: initialTheme, title, subtitle, badge, readOnly, initialViewMode, initialSplitRatio, className, }: FullScreenCodeEditorProps): import('react').ReactPortal | null;
export declare const FullScreenJsonEditor: typeof FullScreenCodeEditor;
export type { FullScreenCodeEditorProps, FullScreenJsonEditorProps, } from '../../../types/ui/code-editor.types';

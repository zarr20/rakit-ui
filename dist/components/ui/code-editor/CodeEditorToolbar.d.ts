import { ReactNode } from 'react';
import { CodeEditorLanguage, CodeEditorTheme, CodeEditorToolbarProps, CodeEditorViewMode } from '../../../types/ui/code-editor.types';
import { TabItem, TabVariant } from '../../../types/ui/tabs.types';
export declare function CodeEditorToolbar({ theme, title, language, isValidJson, layout, tabs, activeTab, onChangeTab, tabsVariant, tabsPosition, tabsActions, statusPosition, statusBadge, actionsPosition, viewMode, onViewModeChange, showViewToggle, isTreeSupported, showFormatButton, onFormat, readOnly, showCopyButton, copied, onCopy, showFullScreenButton, onFullScreen, extraActions, topRowLeft, topRowRight, bottomRowLeft, bottomRowRight, leftContent, centerContent, rightContent, className, children, }: CodeEditorToolbarProps): import("react").JSX.Element;
export declare namespace CodeEditorToolbar {
    var Row: typeof CodeEditorToolbarRow;
    var Group: typeof CodeEditorToolbarGroup;
    var Tabs: typeof CodeEditorToolbarTabs;
    var Status: typeof CodeEditorToolbarStatus;
    var ViewToggle: typeof CodeEditorToolbarViewToggle;
    var Actions: typeof CodeEditorToolbarActions;
}
export declare function CodeEditorToolbarRow({ children, className, theme, density, }: CodeEditorToolbarRowProps): import("react").JSX.Element;
export declare function CodeEditorToolbarGroup({ children, className, align, }: CodeEditorToolbarGroupProps): import("react").JSX.Element;
export declare function CodeEditorToolbarTabs({ tabs, activeTab, onChangeTab, tabsVariant, theme, className, }: CodeEditorToolbarTabsProps): import("react").JSX.Element | null;
export declare function CodeEditorToolbarStatus({ title, language, isValidJson, statusBadge, className, }: CodeEditorToolbarStatusProps): import("react").JSX.Element;
export declare function CodeEditorToolbarViewToggle({ viewMode, onViewModeChange, isTreeSupported, theme, className, }: CodeEditorToolbarViewToggleProps): import("react").JSX.Element;
export declare function CodeEditorToolbarActions({ theme, language, isValidJson, viewMode, onViewModeChange, showViewToggle, isTreeSupported, showFormatButton, onFormat, readOnly, showCopyButton, copied, onCopy, showFullScreenButton, onFullScreen, extraActions, className, }: CodeEditorToolbarActionsProps): import("react").JSX.Element;
export declare function getToolbarButtonClass(isDark: boolean): string;
export interface CodeEditorToolbarRowProps {
    children: ReactNode;
    className?: string;
    theme?: CodeEditorTheme;
    density?: 'normal' | 'compact';
}
export interface CodeEditorToolbarGroupProps {
    children: ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
}
export interface CodeEditorToolbarTabsProps {
    tabs: TabItem[];
    activeTab?: string;
    onChangeTab?: (tabId: string) => void;
    tabsVariant?: TabVariant;
    theme?: CodeEditorTheme;
    className?: string;
}
export interface CodeEditorToolbarStatusProps {
    title?: ReactNode;
    language?: CodeEditorLanguage;
    isValidJson?: boolean;
    statusBadge?: ReactNode;
    className?: string;
}
export interface CodeEditorToolbarViewToggleProps {
    viewMode?: CodeEditorViewMode;
    onViewModeChange?: (mode: CodeEditorViewMode) => void;
    isTreeSupported?: boolean;
    theme?: CodeEditorTheme;
    className?: string;
}
export interface CodeEditorToolbarActionsProps {
    theme?: CodeEditorTheme;
    language?: CodeEditorLanguage;
    isValidJson?: boolean;
    viewMode?: CodeEditorViewMode;
    onViewModeChange?: (mode: CodeEditorViewMode) => void;
    showViewToggle?: boolean;
    isTreeSupported?: boolean;
    showFormatButton?: boolean;
    onFormat?: () => void;
    readOnly?: boolean;
    showCopyButton?: boolean;
    copied?: boolean;
    onCopy?: () => void;
    showFullScreenButton?: boolean;
    onFullScreen?: () => void;
    extraActions?: ReactNode;
    className?: string;
}

import { default as React, ReactNode } from 'react';
export interface LivePreviewProps {
    code: string;
    scope?: Record<string, any>;
    className?: string;
    fallback?: ReactNode;
    onError?: (error: Error | string | null) => void;
}
export declare function LivePreview({ code, scope: customScope, className, fallback, onError, }: LivePreviewProps): React.JSX.Element;

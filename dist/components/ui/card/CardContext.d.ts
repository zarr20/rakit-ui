import { ReactNode } from 'react';
export declare function CardProvider({ value, children }: CardProviderProps): import("react").JSX.Element;
export declare function useCardContext(): CardContextValue | null;
export interface CardContextValue {
    collapsible: boolean;
    isCollapsed: boolean;
    toggleCollapse: () => void;
}
export interface CardProviderProps {
    value: CardContextValue;
    children: ReactNode;
}

import { CardHeader } from './CardHeader';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardProps } from '../../../types/ui/card.types';
export declare function Card({ children, className, padding, gap, variant, hoverable, collapsible, defaultCollapsed, isCollapsed: controlledCollapsed, onToggleCollapse, title, description, icon, iconBgColor, badge, actionSlot, actions, headerClassName, bodyClassName, id, style, ...props }: CardProps): import("react").JSX.Element;
export declare namespace Card {
    var Header: typeof CardHeader;
    var Title: typeof CardTitle;
    var Description: typeof CardDescription;
    var Content: typeof CardContent;
    var Footer: typeof CardFooter;
    var FeatureBanner: typeof import("./FeatureBanner").FeatureBanner;
    var ActionBar: typeof import("..").ActionBar;
}
export { CardHeader } from './CardHeader';
export { CardTitle } from './CardTitle';
export { CardDescription } from './CardDescription';
export { CardContent } from './CardContent';
export { CardFooter } from './CardFooter';
export { FeatureBanner } from './FeatureBanner';
export { useCardContext } from './CardContext';
export type { CardProps, CardHeaderProps, CardTitleProps, CardContentProps, CardFooterProps, FeatureBannerProps, CardPadding, CardGap, CardVariant, } from '../../../types/ui/card.types';
export type { CardContextValue } from './CardContext';

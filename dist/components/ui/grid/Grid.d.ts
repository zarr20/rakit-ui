import { GridCol } from './GridCol';
import { GridProps } from '../../../types/ui/grid.types';
export declare function Grid({ children, className, cols, gap, align, justify, id, style, ...props }: GridProps): import("react").JSX.Element;
export declare namespace Grid {
    var Col: typeof GridCol;
}

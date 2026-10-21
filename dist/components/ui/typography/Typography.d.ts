import { default as React } from 'react';
import { Heading } from './Heading';
import { Text } from './Text';
import { Paragraph } from './Paragraph';
import { Kbd } from './Kbd';
import { CodeText } from './CodeText';
import { Blockquote } from './Blockquote';
import { LinkText } from './LinkText';
export interface TypographyComponent extends React.FC<React.HTMLAttributes<HTMLDivElement>> {
    Heading: typeof Heading;
    Text: typeof Text;
    Paragraph: typeof Paragraph;
    Kbd: typeof Kbd;
    Code: typeof CodeText;
    Blockquote: typeof Blockquote;
    Link: typeof LinkText;
}
export declare const Typography: TypographyComponent;

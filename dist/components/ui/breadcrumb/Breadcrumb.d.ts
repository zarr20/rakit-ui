import { default as React } from 'react';
import { BreadcrumbProps } from '../../../types/ui/breadcrumb.types';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbPage } from './BreadcrumbPage';
import { BreadcrumbSeparator } from './BreadcrumbSeparator';
export interface BreadcrumbComponent extends React.FC<BreadcrumbProps> {
    Item: typeof BreadcrumbItem;
    Link: typeof BreadcrumbLink;
    Page: typeof BreadcrumbPage;
    Separator: typeof BreadcrumbSeparator;
}
export declare const Breadcrumb: BreadcrumbComponent;

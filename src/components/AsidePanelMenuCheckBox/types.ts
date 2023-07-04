import {CommonPanel, Filters} from '../../pages/Statistics/store/types';

export interface AsidePanelMenuItemProps {
    id:  CommonPanel | Filters;
    title: string;
    isFilters?: boolean;
}
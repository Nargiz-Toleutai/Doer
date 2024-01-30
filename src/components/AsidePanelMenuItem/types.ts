import { CommonFilter, PriorityFilter } from '../../pages/Home/store/types';
import {CommonPanel, Filters} from '../../pages/Statistics/store/types';

export interface AsidePanelMenuItemProps {
    id: CommonFilter | PriorityFilter | CommonPanel | Filters;
    title: string;
    isPriority?: boolean;
    icon?: string,
    counter?: {
        completed: number;
        active: number;
    }
}
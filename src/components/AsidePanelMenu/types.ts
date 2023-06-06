import { CommonFilter, PriorityFilter } from '../../pages/Home/store/types';

export interface AsidePanelMenuItemProps {
    id: CommonFilter | PriorityFilter;
    title: string;
    isPriority?: boolean;
    counter: {
        completed: number;
        active: number;
    }
}
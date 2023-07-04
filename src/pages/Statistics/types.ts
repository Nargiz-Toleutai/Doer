import { CommonPanel, Filters } from './store/types';

export interface StatisticsItemProps {
    id: CommonPanel | Filters;
    title: string;
    isFilters?: boolean;
    checkBox?: boolean
}
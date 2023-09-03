export enum CommonFilter {
    Today = 'today',
    Tomorrow = 'tomorrow',
    Next7Days = 'next7Days',
    ThisMonth = 'thisMonth',
    Completed = 'completed'
}

export enum PriorityFilter {
    High = 'high',
    Medium = 'medium',
    Low = 'low',
}
export interface HomeState {
    commonFilterId: CommonFilter,
    priorityFilterId?: PriorityFilter,
}


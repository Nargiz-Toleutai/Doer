export enum CommonPanel {
    Daily = 'Daily',
    Week = 'Week',
    Month = 'Month',
}

export enum Filters {
    ShowActive = 'Show Active',
    ShowCompleted = 'Show Completed',
}

export interface StatisticsState {
    commonPanelId: CommonPanel,
    filtersId?: Filters,
}
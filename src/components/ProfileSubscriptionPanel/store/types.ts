export enum PlanType {
    Free = 'Free',
    Month = 'Month',
    SixMonths = '6 months',
    Year = 'Year',
}


export interface PlanTypeState {
    sectionId: PlanType,
}
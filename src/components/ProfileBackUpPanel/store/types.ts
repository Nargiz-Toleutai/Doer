export enum BackUpType {
    Export = 'Export',
    Scan = 'Scan',
    SheetExport = 'Sheet export',
    ResetData = 'Reset data',
}


export interface BackUpTypeState {
    sectionId: BackUpType,
}
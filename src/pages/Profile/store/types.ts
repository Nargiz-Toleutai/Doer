export enum MainProfile {
    Personal = 'personal',
    Customization = 'customization',
    Subscription = 'subscription',
    Backup = 'backup',
};


export interface ProfileState {
    sectionId: MainProfile,
};
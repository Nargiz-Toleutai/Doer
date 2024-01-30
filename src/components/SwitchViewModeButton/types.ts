export interface SwitchViewModeButtonProps {
  icon: string,
  id: View,
  title: string,
  name: string,
}

export interface SwitchButtonProps {
  checked?: boolean,
  onChange?: () => void,
  view?: boolean,
}

export enum View {
  List = 'list-view',
  Grid = 'grid-view',
}


export interface ViewState {
  listId: View.List,
  gridId: View.Grid;
}
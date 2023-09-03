import React from 'react';
// export interface SwitchButtonProps {
//   icon: string,
// }

export enum View {
  List = 'list-view',
  Grid = 'grid-view',
}


export interface ViewState {
  listId: View.List,
  gridId: View.Grid;
}
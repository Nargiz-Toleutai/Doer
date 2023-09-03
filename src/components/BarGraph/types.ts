import { CommonFilter } from '../../pages/Home/store/types';

type BarGraphData = {
  id: CommonFilter;
  title: string;
  value: number;
}[];

export interface BarGraphProps {
  data: BarGraphData;
}
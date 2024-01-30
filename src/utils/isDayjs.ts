import dayjs, { Dayjs } from 'dayjs';

export const isDayjs = (value: any): value is Dayjs => {
  return dayjs.isDayjs(value);
};
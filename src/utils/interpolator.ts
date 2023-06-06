export function interpolator(start: number, end: number, range: number): (point: number) => number {
    const step = (end - start) / range;
    return function(point: number): number {
      const interpolatedValue = start + step * point;
      return interpolatedValue;
    }
}
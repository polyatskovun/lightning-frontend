export function compareById(c1: { id: number }, c2: { id: number }): boolean {
  return c1 && c2 && c1.id === c2.id;
}

export function compareBySum(a: any, b: any, direction: boolean): number {
  if ((a > b && direction) || (a < b && direction)) {
    return 1;
  } else if ((a < b && direction) || (a > b && direction)) {
    return -1;
  } else {
    return 0;
  }
}

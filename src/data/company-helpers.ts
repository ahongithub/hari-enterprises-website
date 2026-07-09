import { company } from './company';

export { company };

/** e.g. "20+" years since founding, rounded down to a friendly figure. */
export function formatYearsSinceLabel(year: number): string {
  const years = new Date().getFullYear() - year;
  const rounded = Math.floor(years / 5) * 5; // 20, 25, 30 …
  return `${rounded}+`;
}

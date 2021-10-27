const day = 1000 * 60 * 60 * 24

export type Unities =
  | "year"
  | "month"
  | "day"
  | "hour"
  | "minute"
  | "second"
  | "ms"
export type Durations<T = any> = Record<Unities, T>

export const durations: Durations<number> = {
  day,
  year: day * 365.25,
  month: day * 30.4167,
  hour: day / 24,
  minute: day / 24 / 60,
  second: 1000,
  ms: 1,
}

export function isDuration(key: string): key is Unities {
  return durations.hasOwnProperty(key)
}

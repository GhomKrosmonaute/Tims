const day = 1000 * 60 * 60 * 24

export interface Durations<T = any> {
  year: T
  month: T
  day: T
  hour: T
  minute: T
  second: T
  ms: T
}

export type Duration = keyof Durations

export const durations: Durations<number> = {
  day,
  year: day * 365.25,
  month: day * 30.4167,
  hour: day / 24,
  minute: day / 24 / 60,
  second: 1000,
  ms: 1,
}

export function isDuration(key: string): key is Duration {
  return durations.hasOwnProperty(key)
}

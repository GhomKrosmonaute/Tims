import { languages } from "./languages"

export interface Options {
  format?: keyof typeof languages["fr"]["plural"]
  locale?: "fr" | "es" | "en"
  full?: boolean
}

declare module tims {
  export function past(ms: number, options?: Options): string
  export function between(ms1: number, ms2: number, options?: Options): string
  export function duration(ms: number, options?: Options): string
}

export default tims

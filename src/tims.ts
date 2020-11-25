import { languages, LanguageTemplate } from "./languages"
import { durations, Durations, isDuration } from "./durations"
import { Options } from "./typing"

export function past(ms: number, options?: Options): string {
  return duration(Date.now() - ms, options)
}

export function between(ms1: number, ms2: number, options?: Options): string {
  return duration(Math.max(ms1, ms2) - Math.min(ms1, ms2), options)
}

export function duration(ms: number, options: Options = {}): string {
  let { format, locale, full } = options

  const cache: Partial<Durations> = {}

  const counters: Durations = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    ms: 0,
  }

  if (!format) format = "second"
  if (!locale) locale = "en"

  for (const key in counters) {
    if (!isDuration(key)) continue

    while (ms >= durations[key]) {
      ms -= durations[key]
      counters[key]++
    }

    while (ms <= durations[key] * -1) {
      ms += durations[key]
      counters[key]++
    }

    if (!full && !counters[key]) {
      cache[key] = false
    } else {
      const plural = counters[key] > 1
      const empty = counters[key] === 0

      cache[key] = languages[locale][plural ? "plural" : "singular"][
        key
      ].replace(
        "{quantifier}",
        plural
          ? String(Math.floor(counters[key]))
          : languages[locale].quantifiers[empty ? "nothing" : "one"]
      )
    }
  }

  const output = []

  for (const key in cache) {
    if (!isDuration(key)) continue

    if (cache[key]) {
      output.push(cache[key])
    }
    if (key === format) {
      break
    }
  }

  if (output.length > 1) {
    let last = output.pop()
    output[output.length - 1] += ` ${languages[locale].and} ${last}`
  } else if (output.length === 0) {
    return languages[locale].singular[format].replace(
      "{quantifier}",
      languages[locale].quantifiers.nothing
    )
  }

  return output.join(", ")
}

export default {
  past,
  between,
  duration,
}

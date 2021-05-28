import { Durations } from "./durations"

export interface LanguageTemplate {
  and: string
  quantifiers: {
    one: string
    nothing: string
  }
  singular: Durations<string>
  plural: Durations<string>
}

export type Language = "fr" | "en" | "es"

export type Format = keyof typeof languages[Language]["plural"]

export const languages: { [key in Language]: LanguageTemplate } = {
  fr: {
    and: "et",
    quantifiers: {
      one: "un",
      nothing: "aucun",
    },
    singular: {
      year: "{quantifier}e année",
      month: "{quantifier} mois",
      day: "{quantifier}e journée",
      hour: "{quantifier}e heure",
      minute: "{quantifier}e minute",
      second: "{quantifier}e seconde",
      ms: "{quantifier} millième de seconde",
    },
    plural: {
      year: "{quantifier} ans",
      month: "{quantifier} mois",
      day: "{quantifier} jours",
      hour: "{quantifier} heures",
      minute: "{quantifier} minutes",
      second: "{quantifier} secondes",
      ms: "{quantifier} millièmes de seconde",
    },
  },
  en: {
    and: "and",
    quantifiers: {
      one: "one",
      nothing: "nothing",
    },
    singular: {
      year: "{quantifier} year",
      month: "{quantifier} month",
      day: "{quantifier} day",
      hour: "{quantifier} hour",
      minute: "{quantifier} minute",
      second: "{quantifier} second",
      ms: "{quantifier} thousand of a second",
    },
    plural: {
      year: "{quantifier} years",
      month: "{quantifier} months",
      day: "{quantifier} days",
      hour: "{quantifier} hours",
      minute: "{quantifier} minutes",
      second: "{quantifier} seconds",
      ms: "{quantifier} thousandths of a second",
    },
  },
  es: {
    and: "y",
    quantifiers: {
      one: "un",
      nothing: "no",
    },
    singular: {
      year: "{quantifier}o año",
      month: "{quantifier}o mes",
      day: "{quantifier}o día",
      hour: "{quantifier}a hora",
      minute: "{quantifier}a minutos",
      second: "{quantifier}a segundo",
      ms: "{quantifier}o milésima de segundo",
    },
    plural: {
      year: "{quantifier} año",
      month: "{quantifier} mes",
      day: "{quantifier} días",
      hour: "{quantifier} horas",
      minute: "{quantifier} minotos",
      second: "{quantifier} segundos",
      ms: "{quantifier} milésimas de segundo",
    },
  },
}

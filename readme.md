
# Tims 🕚 

[![NPM](https://nodei.co/npm/tims.png?compact=true)](https://npmjs.org/package/tims)

- typescript typings
- no dependency
- optimized and light code

## Install :

```bash
npm install tims@latest
```

## Options : 

Here are the default options below

```ts
interface Options {
  format?: "day" | "year" | "month" | "hour" | "minute" | "second" | "ms"
  locale?: "fr" | "es" | "en"
  full?: boolean
}
```

## Example (test.ts) :

```js
const tims = require('tims')

console.log( tims.duration( 2537348, { locale: 'fr' }))
console.log( tims.duration( 25373489, { locale: 'en' }))
console.log( tims.duration( 253734893, { locale: 'es' }))
console.log( tims.duration( 25373489, { locale: 'fr', format: 'ms' }))
console.log( tims.duration( 25373489, { locale: 'fr', full: true }))
```
```
  42 minutes et 17 secondes  
  7 hours, 2 minutes and 53 seconds  
  2 días, 22 horas, 28 minotos y 54 segundos  
  7 heures, 2 minutes, 53 secondes et 489 millièmes de seconde  
  aucune année, aucun mois, aucune journée, 7 heures, 2 minutes et 53 secondes
```

## Methods :

```ts
declare module tims {
  export function past(ms: number, options?: Options): string
  export function between(ms1: number, ms2: number, options?: Options): string
  export function duration(ms: number, options?: Options): string
}
```

# Enjoy 🕛

# Tims 🕚 

[![NPM](https://nodei.co/npm/tims.png?compact=true)](https://npmjs.org/package/tims)

Textual display of millisecond durations and in several languages.

> Tims is not a converter and is not intended to be precise. It only converts milliseconds to a textual duration description. If you need to manage dates accurately, use [dayjs](https://www.npmjs.com/package/dayjs) instead.

- typescript typings included
- no dependency
- optimized and light code

## Install

```shell
npm install tims@latest
```

## Usage

### Imports

```ts
// Typescript or ESModules
import tims from "tims"

// CommonJS
const tims = require("tims")
```

### Example

Use for display uptime in Spanish

```ts
const startedAt = new Date()

function displayUptime() {
  const uptimeText = tims.since(startedAt, { locale: "es" })
  console.log(uptimeText)
}
```

## Methods

### since( moment, options ): string

Get the sentence of time past since given moment

### between( moment, moment, options ): string

Get the sentence of time between given moments

### duration( duration, options ): string

Get the sentence of given duration

## Options

```ts
interface Options {
  format?: "day" | "year" | "month" | "hour" | "minute" | "second" | "ms"
  locale?: "fr" | "es" | "en"
  full?: boolean
}
```

# Enjoy 🕛
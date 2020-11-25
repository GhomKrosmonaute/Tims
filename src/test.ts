import tims from "./tims"

console.log(tims.duration(2537348, { locale: "fr" }))
console.log(tims.duration(25373489, { locale: "en" }))
console.log(tims.duration(253734893, { locale: "es" }))
console.log(tims.duration(25373489, { locale: "fr", format: "ms" }))
console.log(tims.duration(25373489, { locale: "fr", full: true }))


const tims = require(__dirname+'/tims.js')

console.log(tims.text(2537348,{lang:'fr'}))
console.log(tims.text(25373489,{lang:'en'}))
console.log(tims.text(253734893,{lang:'es'}))
console.log(tims.text(25373489,{lang:'fr',format:'ms'}))
console.log(tims.text(25373489,{lang:'fr',full:true}))
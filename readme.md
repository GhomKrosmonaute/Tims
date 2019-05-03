
# Tims 🕚 

## Install :

```bash
npm install tims
```

## Options : 

Here are the default options below

```json
{
	"lang":"en",
	"format":"second",
	"full":false
}
```

## Example (test.js) :

```js
const tims = require('tims')
console.log(tims.text(2537348,{lang:'fr'}))
console.log(tims.text(25373489,{lang:'en'}))
console.log(tims.text(253734893,{lang:'es'}))
console.log(tims.text(25373489,{lang:'fr',format:'ms'}))
console.log(tims.text(25373489,{lang:'fr',full:true}))
```

## Result :

> 42 minutes et 17 secondes  
> 7 hours, 2 minutes and 53 seconds  
> 2 días, 22 horas, 28 minotos y 54 segundos  
> 7 heures, 2 minutes, 53 secondes et 489 millièmes de seconde  
> aucune année, aucun mois, aucune journée, 7 heures, 2 minutes et 53 secondes

## Methods :

### text( *ms*, *options* )

- Displays a duration
- Return a String

### ago( *ms*, *options* )

- Displays the time taken since *ms*
- Return a String

### since( *from_ms*, *to_ms*, *options* )

- Displays an elapsed time from such ms to such ms
- Return a String

# Enjoy 🕛
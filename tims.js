const DAY = 1000*60*60*24
const langs = require(__dirname+"/languages.js")

module.exports = {
  ago : function(time,options){
    return this.text(Date.now()-time,options)
  },
  since : function(time,time2,options){
    return this.text(time2-time,options)
  },
  text : function(time,options={}){
    let { format, lang, full } = options
    let timeCount = time
    let outobj = {}
    let durations = {
      year : DAY*365.25,    
      month : DAY*30.4167,
      day : DAY,            
      hour : DAY/24,
      minute : DAY/24/60,   
      second : 1000,
      ms : 1
    }
    let count = {
      year : 0,       
      month : 0,
      day : 0,        
      hour : 0,
      minute : 0,     
      second : 0,
      ms : 0
    }
    if(!Object.keys(count).includes(format)){
      format = "second"
    }
    if(!Object.keys(langs).includes(lang)){
      lang = "en"
    }
    for(type in durations){
      while(timeCount >= durations[type]){
        timeCount -= durations[type]
        count[type] ++
      }
      while(timeCount <= durations[type] * -1){
        timeCount += durations[type]
        count[type] ++
      }
      if(!full && !count[type]){
        outobj[type] = false
      }else{
        outobj[type] = langs[lang][type][Number(count[type] > 1)]
          .replace("{word}",langs[lang].words[Number(count[type]!==0)])
          .replace("{num}",Math.floor(count[type]))
      }
    }
    let outtext = []
    for(type in outobj){
      if(outobj[type]){
        outtext.push(outobj[type])
      }
      if(type === format){
        break;
      }
    }
    if(outtext.length > 1){
      let last = outtext.pop()
      outtext[outtext.length-1] += ` ${langs[lang].words[2]} ${last}`
    }else if(outtext.length === 0){
      return langs[lang][format][0]
        .replace("{word}",langs[lang].words[0])
    }
    return outtext.join(', ')
  }
}
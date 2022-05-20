function formatDuration (seconds) {

  if(seconds === 0) return 'now'

  const copySeconds = seconds

  const timers = conversor(copySeconds)
  
  return phraseBuilder(timers)
}

const conversor = (seconds) => {
  const timers = {}
  
  for(let timer in timerMapper) {

    if(seconds >= timerMapper[timer]) {
      const time = Math.trunc(seconds / timerMapper[timer])

      seconds = seconds % timerMapper[timer]
      
      time && (timers[timer] = time)
    }
  }

  return timers
}

const phraseBuilder = (timers) => {
  const words = Object.entries(timers).map( ([key, value]) =>  value && `${value} ${value === 1 ? key.slice(0, -1) : key}`)
  
  const phrase = {
    1: `${words[0]}`,
    2: `${words[0]} and ${words[1]}`,
    3: `${words[0]}, ${words[1]} and ${words[2]}`,
    4: `${words[0]}, ${words[1]}, ${words[2]} and ${words[3]}`,
    5: `${words[0]}, ${words[1]}, ${words[2]}, ${words[3]} and ${words[4]}`
  }[words.length]

  return phrase
}

const timerMapper = {
  years: (365 * 86400),
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
}

module.exports = formatDuration

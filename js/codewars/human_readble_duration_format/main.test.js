const formatDuration = require('./main.js')

describe.each([
  [1, '1 second'],
  [62, '1 minute and 2 seconds'],
  [120, '2 minutes'],
  [3600, '1 hour'],
  [3662, '1 hour, 1 minute and 2 seconds']
])('%i seconds', (seconds, phrase) => {

  test(`return the phrase ${phrase}`,() => {

    const string = formatDuration(seconds)
    
    expect(string).toBe(phrase)
  })
})

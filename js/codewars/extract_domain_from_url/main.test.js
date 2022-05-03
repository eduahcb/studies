const domainName = require('./main.js')

describe('extract domain', () => {

	test.each([
    ['http://google.com', 'google'],
    ['http://google.co.jp', 'google'],
    ['www.xakep.ru', 'xakep'],
    ['https://youtube.com', 'youtube']

  ])('return the domain %s', (url, response) => {
    const domain = domainName(url)


    expect(domain).toBe(response)
  })
})

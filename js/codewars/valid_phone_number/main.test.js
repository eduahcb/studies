const validPhoneNumber = require('./main.js')


describe('Valid Phone number', () => {

  let test1 = {
    test2: () => ({
      test3: () => 'eai'
    })
  }

  test('returns true - valid phone number', () => {

    const isValid = validPhoneNumber('(123) 456-7890')

    expect(isValid).toBe(true)
  })

  test.each([
    ['(1111)555 2345', false],
    ['(098) 123 4567', false]
  ]
  )('returns false - invalid phone number', (phoneNumber, result) => {
    const isValid = validPhoneNumber(phoneNumber)

    expect(isValid).toBe(result)
  })
})

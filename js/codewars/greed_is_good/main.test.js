const scoreFunc = require('./main.js')

describe('Score', () => {

  describe.each([
    [[2, 3, 4, 6, 2], 0],
    [[4, 4, 4, 3, 3], 400],
    [[2, 4, 4, 5, 4], 450],
    [[ 1, 1,1, 3, 1 ], 1100],
    [[1, 1, 1, 1, 1], 1200]
  ])('for the dice %s', (dice, score) => {
    
    test(`the score should be ${score}`, () => {

      const result = scoreFunc(dice)
  
      expect(result).toBe(score)
    })


  })
})

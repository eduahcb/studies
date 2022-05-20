function score(dice){
  let score = 0

  const threeMapper = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600
  }

  const oneMapper = {
    1: 100,
    5: 50
  }

  const map = dice.reduce( (mapArray, currentValue) =>  mapArray.set(currentValue, (mapArray.get(currentValue) || 0) + 1), new Map())
  const iterator = map.entries()

  for(let i =0; i < map.size; i++){

    let [key, occurrences] = iterator.next().value

    if(occurrences >= 3) {
      score+= threeMapper[key]
      occurrences -= 3
    }
  
    score+= occurrences * oneMapper[key] || 0
  }

  return score
}

module.exports = score

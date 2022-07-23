const binarySearch = (list, item) => {
  let lower = 0
  let higher = list.length - 1 

  while (lower <= higher) {

    let middle  = Math.round((lower + higher) / 2)
    let kick = list[middle]
    
    if(kick === item) {
      return middle
    }

    if(kick > item)
      higher = middle - 1
    else 
      lower = middle + 1
  }

  return null
}

const simpleSearch = (list, item) => {
  for(let i = 0; i <= list.length; i++) {
    if(list[i] === item) return i
  }
} 



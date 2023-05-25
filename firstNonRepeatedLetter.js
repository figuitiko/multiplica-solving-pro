const firstNonRepeatedLetter = (str) => {
  const arrStr = str.split('')
  for (const val of arrStr) {
    const valuesInArray = arrStr.filter(item => item.toLowerCase() === val.toLowerCase())
    if (valuesInArray.length === 1) {
      return val
    }
  }
  return 'None'
}

console.log(firstNonRepeatedLetter('sTreSS'))

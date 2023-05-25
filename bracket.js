const bracket = (str) => {
  const stack = []
  let max = 0
  let current = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i])
    } else if (str[i] === ')') {
      if (stack.length === 0) {
        current = 0
      } else {
        stack.pop()
        current += 2
        max = Math.max(max, current)
      }
    }
  }
  return max
}

console.log(bracket)

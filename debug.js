function countLetters(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i]!==" ")
    total++;
    console.log(total)
  }
  return total;
}
console.log(countLetters("hello  world"));


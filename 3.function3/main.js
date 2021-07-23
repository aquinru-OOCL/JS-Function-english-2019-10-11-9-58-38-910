function alphabetSort(message){
  return message.split("").sort().join("");
}

console.log(alphabetSort('hello')); // 'ehllo'
var person = "OsamaQayyum";

//1st way
const StringLength1 = person.length;
console.log(StringLength1);

//2nd way without inbuilt function.
const StringLength = (string) => {
  let count = 0;
  for (let str of string) {
    count++;
  }
  return count;
};

console.log(StringLength(person));

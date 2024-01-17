var person = "OsamaQayyum";

console.log(person.substring(2, 7));

const substring = (string, start, letterCount) => {
  if (start < 0 || letterCount <= 0 || start >= string.length) {
    return "";
  }

  let result = "";

  for (let i = 0; i < string.length && start + i < letterCount; i++) {
    result = result + string[start + i];
  }

  return result;
};

console.log(substring(person, 2, 7));

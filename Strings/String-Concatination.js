// 1 .Concatenation:
// Concatenate two strings.

const person = "Osama";
const gender = "Boy";

// 1st way
const concatination1 = () => {
  console.log(person + " " + "is a good" + " " + gender);
};

concatination1();

// 2nd way
const concatination2 = () => {
  console.log(`${person} is a good ${gender}`);
};
concatination2();

//3rd way
const concatination3 = () => {
  console.log(person.concat(" is a good ", gender));
};
concatination3();

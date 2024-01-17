var person = "OsamaQayyum";

var Uppercase = person.toUpperCase();
console.log(Uppercase);

const Uppercase1 = (Str) => {
  let code_of_a = "a".charCodeAt([0]);
  let code_of_z = "z".charCodeAt([0]);
  let code_of_A = "A".charCodeAt([0]);
  let ChangeValue = "";
  let CodeDifference = code_of_a - code_of_A;

  for (let i = 0; i <= Str.length; i++) {
    if (code_of_a <= Str.charCodeAt([i]) && code_of_z >= Str.charCodeAt([i])) {
      ChangeValue += String.fromCharCode(Str.charCodeAt([i]) - CodeDifference);
    } else {
      ChangeValue += String.fromCharCode(Str.charCodeAt([i]));
    }
  }

  return ChangeValue;
};

console.log(Uppercase1(person));

//for Lowercase

var Lowercase = person.toLowerCase();
console.log(Lowercase);

// without in built function

const Lowercase1 = (Str) => {
  let code_of_a = "a".charCodeAt([0]);
  let code_of_z = "z".charCodeAt([0]);
  let code_of_A = "A".charCodeAt([0]);
  let code_of_Z = "Z".charCodeAt([0]);

  let ChangeValue = "";
  let CodeDifference = code_of_a - code_of_A;

  for (let i = 0; i <= Str.length; i++) {
    if (code_of_A <= Str.charCodeAt([i]) && code_of_Z >= Str.charCodeAt([i])) {
      ChangeValue += String.fromCharCode(Str.charCodeAt([i]) + CodeDifference);
    } else {
      ChangeValue += String.fromCharCode(Str.charCodeAt([i]));
    }
  }

  return ChangeValue;
};

console.log(Lowercase1(person));


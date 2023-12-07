const dataTypeError = "incorrect data type";

const addTwoNumbers = (a, b) =>
  [a, b].every((i) => typeof i === "number") ? a + b : dataTypeError;

const subtractTwoNumbers = (a, b) =>
  [a, b].every((i) => typeof i === "number") ? a - b : dataTypeError;

const royalFamilyGreetings = {
  Elizabeth: "Hello Queen Elizabeth",
  Philip: "Hello Prince Philip",
  Charles: "Hello Prince Charles, Prince of Wales",
  Anne: "Hello Princess Anne, hows it goin?",
  Edward: "Hello Prince Edward",
  Dianna: "Hello Princess Dianna",
  Camilla: "Hello Camilla",
  Catherine: "Hello Catherine",
  Harry: "Hello Harry, hows america?",
  William: "Hello William, hows harry?",
  Meghan: "Hello Meghan, hows hollywood?",
};

const notARoyalMemberError = "Not a Royal Member";

function greetRoyalFamily(name) {
  const arr = [
    { name: "Elizabeth", greeting: "Hello Queen Elizabeth" },
    { name: "Philip", greeting: "Hello Prince Philip" },
    { name: "Charles", greeting: "Hello Prince Charles, Prince of Wales" },
  ];

  const member = arr.find((i) => i.name === name);

  if (member) {
    return member.greeting;
  } else return notARoyalMemberError;
}

// function greetRoyalFamily(name) {
//   return royalFamilyGreetings[name] || notARoyalMemberError;
// }

module.exports = {
  dataTypeError,
  addTwoNumbers,
  subtractTwoNumbers,
  greetRoyalFamily,
  notARoyalMemberError,
};

module.exports = [
  {
    message: "What is the name of layouts?",
    name: "name",
    type: "input",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
    },
  },
];

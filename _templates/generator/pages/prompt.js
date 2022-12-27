module.exports = [
  {
    message: "What is the name of pages?",
    name: "name",
    type: "input",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
    },
  },
];

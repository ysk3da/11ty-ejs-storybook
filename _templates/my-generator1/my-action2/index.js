module.exports = {
  prompt: ({ prompter }) => {
    const args = [
      {
        type: 'select',
        name: 'category',
        message: 'category',
        choices: [
          'aaa',
          'bbb',
          'ccc'
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'name',
        initial: 'abcdefg'
      },
      {
        type: 'confirm',
        name: 'create2',
        message: 'create2'
      }
    ]

    return prompter
      .prompt(args)
      .then(({ category, name, create2 }) => {
          const now = new Date()
          const year = now.getFullYear()
          const month = now.getMonth() + 1
          const date = now.getDate()

          return { category, name, create2, year, month, date }
        }
      )
  }
}
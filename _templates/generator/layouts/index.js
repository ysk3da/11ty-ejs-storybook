const changeCase = require("change-case");
const fs = require('fs');
const indexPath = 'src/styles/layouts/_index.scss';
// 文字コードを直接指定
let indexScss = fs.readFileSync(indexPath, 'utf-8');

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'layout_name',
        message: 'What is the name of layout?'
      },
      {
        type: 'confirm',
        name: 'have_style',
        message: 'Is it have style?',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        if(answers.have_style){
          indexScss += `\n@forward '../../_includes/layouts/${answers.layout_name}/c-${changeCase.param(answers.layout_name)}';`;
          fs.writeFileSync(indexPath, indexScss, (err) => {
            if (err) throw err;
            console.log('layouts _index.scss success');
          });
        }
        return {...answers}
      })
  }
}
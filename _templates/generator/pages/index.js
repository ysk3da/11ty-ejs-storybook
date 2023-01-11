const changeCase = require("change-case");
const fs = require('fs');
const indexPath = 'src/styles/pages/_index.scss';
// 文字コードを直接指定
let indexScss = fs.readFileSync(indexPath, 'utf-8');

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: 'What is the name of page?'
      },
      {
        type: 'confirm',
        name: 'have_style',
        message: 'Is it have style?',
      },
      {
        type: 'confirm',
        name: 'have_story',
        message: 'Is it have stories?',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        if(answers.have_style){
          indexScss += `\n@forward '../../pages/${answers.page_name}/page-${changeCase.param(answers.page_name)}';`;
          fs.writeFileSync(indexPath, indexScss, (err) => {
            if (err) throw err;
            console.log('pages _index.scss success');
          });
        }
        return {...answers}
      })
  }
}
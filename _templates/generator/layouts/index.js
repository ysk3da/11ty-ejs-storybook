const fs = require('fs');
const indexPath = 'src/styles/layouts/_index.scss';
// 文字コードを直接指定
let indexScss = fs.readFileSync(indexPath, 'utf-8');

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      // {
      //   type: 'select',
      //   name: 'category',
      //   message: 'Which Atomic Design category?',
      //   choices: ['atoms', 'molecules', 'organisms', 'templates']
      // },
      {
        type: 'input',
        name: 'layout_name',
        message: 'What is the name of layout?'
      },
      // {
      //   type: 'input',
      //   name: 'dir',
      //   message: 'Where is the directory? (No problem in blank)',
      // },
      {
        type: 'confirm',
        name: 'have_style',
        message: 'Is it have style?',
      },
      // {
      //   type: 'confirm',
      //   name: 'have_props',
      //   message: 'Is it have props?',
      // },
      // {
      //   type: 'confirm',
      //   name: 'have_hooks',
      //   message: 'Is it have hooks?',
      // },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        // const { category, component_name, dir, have_props } = answers
        // const path = `${category}/${ dir ? `${dir}/` : `` }${component_name}`
        // const abs_path = `src/components/${path}`
        // const type_annotate = have_props ? "React.FC<Props>" : 'React.FC'
        // const props = have_props ? '(props)' : '()'
        // const tag = args.tag ? args.tag : 'div'
        // return { ...answers, path, abs_path, type_annotate, props, tag }
        if(answers.have_style){
          indexScss += `\n@forward '../../_includes/layouts/${answers.layout_name}/${answers.layout_name}';`;
          fs.writeFileSync(indexPath, indexScss, (err) => {
            if (err) throw err;
            console.log('layouts _index.scss success');
          });
        }
        return {...answers}
      })
  }
}
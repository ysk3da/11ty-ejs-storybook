import MyButton from './MyButton.ejs'; // コンポーネントを読み込む
import '../../../styles/components/MyButton.scss';

export default {
  title: 'MyButton', // storybookでリストに表示されるタイトル名
  component: MyButton // importしたコンポーネント
};

export const nomal = () => {
  // コンポーネントに渡す変数を宣言
  const label = 'Click Here';
  const type = 'button';
  const disabled = false;
  const modefireClass = '';
  const jsClass = '';

  return MyButton({ label, type, disabled, modefireClass, jsClass }); // 各変数を引数に入れてコンポーネントを表示
};
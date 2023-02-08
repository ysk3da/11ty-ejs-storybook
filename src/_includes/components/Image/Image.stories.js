
import ImageTemplate from './Image.ejs';
import './_c-image.scss';
import markdown from './Image.md';

export default {
  title: 'Components/Images',
  component: ImageTemplate,
  argTypes: {
    src: "path/to/imgFile",
    alt: "altText",
    width: 100, // no unit integer
    height: 100, // no unit integer
    loading: "eager | lazy",
    decoding: "sync | async | auto",
    srcset: "path/to/imgFile 100w, path/to/imgFile-200 200w", // 解像度に合わせた画像へのパスとそのときのレンダリングサイズを 整数 + w で記述
    sizes: "(max-width: 600px) 100px, 50vw", // 上記、srcset に対応したレンダリングサイズを指定
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return ImageTemplate({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'Image',
}
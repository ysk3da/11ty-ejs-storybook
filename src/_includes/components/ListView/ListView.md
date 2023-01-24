# ListView

ECサイトを作ることが多いので、一覧リストを作成する際のスタイルをメンバー内で共有する

## 元ネタ

- [Grid system (グリッドシステム) | bootstrap5](https://getbootstrap.jp/docs/5.0/layout/grid/)

## 仕組み

flexボックスを利用しています。

隙間は各要素の両側にpaddingであてて、両端の分は`.row`側のネガティブマージンによりカットしています。

はみ出る分は親要素（`.container`）で`overflow:hidden;`しています。

列数と隙間を変数で管理して、class名をコントロールすることで、手間を省いています。
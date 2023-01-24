# ListView

ECサイトを作ることが多いので、一覧リストを作成する際のスタイルをメンバー内で共有する

## 元ネタ

- [Grid system (グリッドシステム) | bootstrap5](https://getbootstrap.jp/docs/5.0/layout/grid/)

## 仕組み

flexボックスを利用しています。

隙間は各要素の両側にpaddingであてて、両端の分は`.row`側のネガティブマージンによりカットしています。

はみ出る分は親要素（`.container`）で`overflow:hidden;`しています。

列数と隙間を変数で管理して、class名をコントロールすることで、手間を省いています。

## リファレンス

- [【CSS】コンテンツ数に左右されない！display:flexで最後の要素だけ左寄せする方法](https://senoweb.jp/note/displayflex-tip/)

- [Sass：eachやforを使って繰り返し記述する手間を省く](https://www.nxworld.net/sass-each-and-for-snippets.html)
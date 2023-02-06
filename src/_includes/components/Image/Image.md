# Image

画像コンポーネントの考察

運用上は、属性である`loading`と`decoding`を使い分ける方法が良さそう。

- ファーストビューを外れる画像には`loading= "lazy"`を指定する
- ファーストビュー内の画像には`decoding="async"`を指定する

※ アイコンなどの小さな画像にはどちらも指定しないこと。

## デザイナーとの共有事項

以前とは異なり、表示サイズと同じサイズの画像を作成する。
また、高解像度ディスプレイに対応したサイズの画像も合わせて作成する。

※ 画像サイズの命名規則を決める必要がある。
※ デザイナーに画像の切り出し作業を負担してもらう or 各画像のサイズ一覧を作成してもらう必要がある（画像サイズは設計部分のためクリエイティブ側で決定）


## References

- [<img>: 画像埋め込み要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/img)
- [<picture>: 画像要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/picture)
- [<source>: メディアまたは画像のソース要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/source)
- [HTMLのsrcset属性やpictureタグを使ったレスポンシブイメージを解説](https://moshashugyo.com/media/responsive-img)
- [CSSで縦横比(アスペクト比)を固定できるaspect-ratioについて！具体的な使い道も紹介！](https://moshashugyo.com/media/aspect-ratio)
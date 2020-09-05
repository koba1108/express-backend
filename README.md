# expressでバックエンドAPIを作ってみるやつ

## 何をやるか
DBからデータを取得して、jsonで返却するバックエンド（API）を実装します

## やらない事
1. データベース設計や構築
2. クラウド環境などのいわゆるインフラ
3. ログイン認証やセキュリティ
4. 細かいエラー処理の話
```
全部やるには時間が足りないので、今回はスキップ。
※ 希望があれば別途時間作ってやりましょー
```

## 準備
1. githubで空のリポジトリを作る
2. nodejs の stable version をインストール（2020/9/5時点では v14.9.0 だった）
```
$ nodebrew install stable
```

## ステップ1
まずは express を起動してレスポンスを取得するところまでを確認しよう

1. package.jsonを作る
```
$ yarn init
yarn init v1.21.1
question name (express-backend):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url (https://github.com/koba1108/express-backend.git):
question author (koba1108 <paseli.koba@gmail.com>):
question license (MIT):
question private:
success Saved package.json
✨  Done in 16.18s.
```

2. expressをインストール
```
$ yarn add express
```

3. index.js を作る（手順1で設定したentry pointのファイル名に合わせる）
```
$ touch index.js
※ 右クリックして新規ファイル作成と同じ
```

4. index.js を編集（内容はソースを見てね）

5. 起動中に http://localhost:3000/ にアクセスし、レスポンスを確認

## ステップ2
ステップ1で確認したレスポンスをnuxt.jsのアプリで表示してみよう

1. nuxt.js の 初期化<br>
※ 今回は作成からやるのは面倒なので、既存のアプリにpageファイルを増やす手順でやっちゃおう

2. pageファイルを作って編集（内容はソースを見てね）

3. nuxtアプリを起動してページの表示を確認

## ステップ3
基本的にWEBアプリはステップ1と2をやっているだけのもの。<br>
それぞれを複雑に作って組み合わせたものを触っているから難しく感じちゃうけど、<br>
1,2回アプリ作ると大体のサービスは作り方を想像できるようになると思う。<br>
<br>
という事でまずはデータベースとexpressを繋げてみよう

1. mysqlクライアントをインストール
```
$ yarn add mysql
```

2. index.js を編集（内容はソースを見てね）<br>
※ 接続先は秘匿情報なので、slackで別途配ります

3. pageファイルを編集して `/users` の結果を表示する（内容はソースを見てね）

## 小ネタ
1. ファイル変更でコマンド実行し直すのめんどい、、、
```
nodemn を入れよう
$ yarn add nodemon
$ yarn nodemon index.js
```

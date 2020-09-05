# expressでバックエンドAPIを作ってみるやつ

## 何をやるか
DBからデータを取得して、jsonで返却するバックエンド（API）を実装します

## やらない事
1. データベースの構築・設計
2. クラウド環境の設定
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

## 作業開始
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


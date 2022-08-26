# forntend

## GraphQL schema の精製方法

`yarn graphql-codegen(alias ygc)`コマンドを叩くと、
codegen.yml ファイルに基づいて GraphQL サーバーから schema を生成する

### 注意事項

バックエンドだと認証が必須なので、
`infrastructure/router.go`の`engine.Use(Auth())`をコメントアウトして実行する。
今後認証なしでも ok なように改善したい。

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


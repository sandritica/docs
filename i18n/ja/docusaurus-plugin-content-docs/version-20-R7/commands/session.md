---
id: session
title: Session
displayed_sidebar: docs
---

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!--REF #_command_.Session.Params-->

| 引数  | 型                          |                             | 説明             |
| --- | -------------------------- | --------------------------- | -------------- |
| 戻り値 | 4D.Session | &#8592; | Session オブジェクト |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

## 説明

`Session` コマンドは、<!-- REF #_command_.Session.Summary -->カレントのユーザーセッションに対応する `Session` オブジェクトを返します<!-- END REF -->。

コマンドを呼び出したプロセスによって、カレントユーザーセッションは次のいずれかです:

- a web session (when [scalable sessions are enabled](WebServer/sessions.md#enabling-web-sessions)),
- リモートクライアントセッション
- ストアドプロシージャーセッション

For more information, see the [Session types](../command/session.md-types) paragraph.

サポートされていないコンテキスト (シングルユーザーアプリケーション、スケーラブルセッションが無効...) から呼び出されると、コマンドは *Null* を返します。

## Webセッション

Webセッションの `Session` オブジェクトは、どの Webプロセスからも利用できます:

- `On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッド
- セミダイナミックページにおいて、4Dタグ (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE) を介して処理されるコード
- "公開オプション: 4DタグとURL(4DACTION...)" を有効化されたうえで、4DACTION/ URL から呼び出されたプロジェクトメソッド
- モバイルリクエスト用の [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) と [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) データベースメソッド
- [RESTリクエストで呼び出された](../REST/ClassFunctions.md) ORDA関数。

Web ユーザーセッションに関する詳細な情報については、[Web Server Sessions](../WebServer/sessions.md) の章を参照してください。

## リモートクライアントセッション

リモートクライアントの `Session` オブジェクトは、次のいずれかから利用できます:

- [サーバー上で実行](../Project/code-overview.md#サーバー上で実行) 属性を持つプロジェクトメソッド (クライアントプロセスの "双子" プロセスで実行されます)
- トリガー
- `On Server Open Connection` および `On Server Shutdown Connection` データベースメソッド

リモートユーザーセッションの詳細については、[**リモートクライアントユーザーセッション**](../Desktop/clientServer.md#リモートユーザーセッション) の段落を参照ください。

## ストアドプロシージャーセッション

すべてのストアドプロシージャープロセスは、同じ仮想ユーザーセッションを共有します。  ストアドプロシージャーの `Session` オブジェクトは、次のいずれかから利用できます:

- [`Execute on server`](../commands-legacy/execute-on-server.md) コマンドで呼び出されたメソッド
- `On Server Startup`、`On Server Shutdown`、`On Backup Startup`、`On Backup Shutdown`、および `On System event` データベースメソッド

ストアドプロシージャーの仮想ユーザーセッションに関する情報については、[4D Serverと4Dランゲージ](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.ja.html) のページを参照ください。

## 例題

"公開オプション: 4DタグとURL(4DACTION...)" ブラウザーに次の URL を入力してメソッドを呼び出します:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session メソッド
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) // hasPrivilege 関数を呼び出します
          WEB SEND TEXT("4DACTION --> セッションは WebAdmin です")
       Else
          WEB SEND TEXT("4DACTION --> セッションは WebAdmin ではありません")
       End if
    Else
       WEB SEND TEXT("4DACTION --> セッションは null です")
 End case
```

### 参照

[Session storage](../commands-legacy/session-storage.md)\
[Session API](../API/SessionClass.md)\
[Web server user sessions](../WebServer/sessions.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1714                        |
| スレッドセーフ | &check; |



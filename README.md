## Steps

- Set up the project 

* Create the package.json file & install the node-telegram-bot-api module (do notice, that this api is different from the telegram-bot-api).

* In your index.js module

```JavaScript
const TelegramBot = require('node-telegram-bot-api')
const token = '...'
const bot = new TelegramBot(token, {polling: true})
```


### [Node Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api)

```
npm install telegram-bot-api
```
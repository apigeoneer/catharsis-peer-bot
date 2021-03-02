console.log('::: Starting catharsis-peer-bot :::');

const TelegramBot = require('node-telegram-bot-api');
const token = '1658491095:AAEsDPpX_oQ6XbViX245l4UFX9VKstpAjq4';
const bot = new TelegramBot(token, {polling: true});

var bookmarks = []       //stack

//import { monikers } from './monikers';            doesn not work
var monikers = ['love', 'sweet heart', 'darling', 'baby', 'precious',
 'cuteness', 'sexy', 'beaut', 'prettiness', 'luvs',
 'bunny', 'love lumps', 'angel', 'angel eyes', 'love bug',
 'sugar', 'sugar lumps', 'honey', 'sweetness', 'muffin',
 'buttercup', 'honey bunch', 'delicious', 'gummy bear', 'fruit loops',
 'canoodles', 'hotness',
 'pumpkin', 'lamb chop', 
 'sunshine', 'moonlight', 'cool breeze',
 'pookie', 'snookums', 'smootchie poo', 'smootchie', 'bubble',
 'sweaty palms', 'dimples', 'Pranay' ]

var msgs = ["the elves love you a ton.",
    "the silent stars are with you.",
    "our love will keep you glowing.",
    "my one & only sweaty palms",
    "the love you give always comes back.",
    "let the warmth never die.",
    "the mountains miss you when you're away.",
    "you're sweet as a carrot cake.",
    "love will set you free.",
    "my sunshine.",
    "my moonlight.",
    "precious."
]

var questions = ["Was Leo a good boy today?",
    "How's teh love life?",
    "How's mum?",
    "How's your dad doing?",
    "How's Priya doing?",
    "How are your friends doing?",
    "What's up at home?",
    "Enjoying classes?",
    "Enjoying lectures?",
    "Messi's the GOAT, isn't he?",
    "What's new in football?",
    "How was your day?",
    "How was today?",
    "Anything special today?",
    "Anything hurtful today?",
    "What's the tiredness level?",
    "It's okay to feel lonely sometimes. What do you think?",
    "It's okay to feel low sometimes. What do you think?",
    "Excited for something?",
    "Angry at someome?",
    "Tell me about the weather!",
    "Time changes, doesn't it? What/who do you feel has changed a lot lately?",
    "Something unbelievable happened recently?",
    "Where do you see yourself 5 years from now?",
    "Where do you see your family 5 years from now?",
    "Life is precious, isn't it? What motivates you to stay alive?",
    "What were ypu doing 5 years ago? Tell me a thing or two that has changed since then..",
    "How's the love life going?",
    "Who are the beautiful peeps in your life? What makes them beautiful?",
    "What'd be a perfect life?",
    "Tell me one thing you want rn.",
    "What/who brought you to tears lately?",
    "What was the last movie that made you cry?",
    "What was the last movie that made you think a lot?",
    "What's the current TV Series you're watching? What makes you stick to it?",
    "How's your health?",
    "Any health issues? If yes, how are you planning to overcome them?",
    "Exercising these days?",
    "Love will set you free, will it?",
    "Which place do you want to visit next?",
    "If you could be anywhere rn, where would you be?",
    "Cooked anything lately?",
    "What song are you vibing to these days?",
    "Describe any special, unique, or distinctive quality about you.",
    "What details of your life might help the admissions committee of your favourite university understand you or help set you apart from other applicants?",
    "When did you originally become interested in applying for this program (MBA/MIM)?",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]


// 0. matches '/echo' [whatever]
bot.onText(/\/echo (.+)/, (msg, match) => {

    // store the id of the user, we need it to be able to send a msg from our bot to the user.
    const chatId = msg.chat.id
    
    // store the string after the echo command i.e. the captured [whatever]
    const resp = match[1]

    // bot.sendMessage is used to send a msg.
    bot.sendMessage(chatId, resp);
})


// 1. matches '/hi' [whatever]
bot.onText(/\/Hi (.+)/, (msg, match) => {

    const chatId = msg.chat.id
    const resp = match[1]

    // generate a random integer - 0 to monikers.length
    const random = Math.floor(Math.random() * monikers.length);     

    bot.sendMessage(chatId, resp + 'hi ' + monikers[random] + '!');
})

/**
 * Reactions
 */

// 1. Responds to messages starting w/ 'hi'
bot.on('message', (msg) => {

    const chatId = msg.chat.id
    const random = Math.floor(Math.random() * msgs.length);  

    if (msg.text == 'Hi' || msg.text == 'Hi.' || msg.text == 'Hi!' || 
        msg.text == 'hi' || msg.text == 'hi.' || msg.text == 'hi!' || 
        msg.text == 'Hello' || msg.text == 'Hello.' || msg.text == 'Hello!' || 
        msg.text == 'hello' || msg.text == 'hello.' || msg.text == 'hello!' ||
        msg.text == 'Hey' || msg.text == 'Hey.' || msg.text == 'Hey!' || 
        msg.text == 'hey' || msg.text == 'hey.' || msg.text == 'hey!' ||
        msg.text == 'Hola' || msg.text == 'Hola.' || msg.text == 'Hola!' || 
        msg.text == 'hola' || msg.text == 'hola.' || msg.text == 'hola!') {
      bot.sendMessage(chatId, msg.text + ", " + monikers[random])
    }
})


// 2. Responds to messages starting w/ 'Good'
bot.on('message', (msg) => {

    const chatId = msg.chat.id
    const random = Math.floor(Math.random() * msgs.length);  

    if (msg.text == 'Good morning' || msg.text == 'Good morning.' || msg.text == 'good morning' || msg.text == 'good morning.' ||
        msg.text == 'Good afternoon' || msg.text == 'Good afternoon.' || msg.text == 'good afternoon' || msg.text == 'good afternoon.' ||   
        msg.text == 'Good night' || msg.text == 'Good night.' || msg.text == 'good night' || msg.text == 'good night.') {
      bot.sendMessage(chatId, msg.text + ", " + monikers[random])
    }
})


// 3. Responds to message 'bye'
bot.on('message', (msg) => {

    const chatId = msg.chat.id
    const random = Math.floor(Math.random() * msgs.length);  

    if (msg.text == 'Bye.' || msg.text == 'Bye' || msg.text == 'bye' || msg.text == 'bye.') {
      bot.sendMessage(chatId, 'bye, ' + msgs[random])
    }
})


/**
 * Commands
 */
// bot.onText(/\/bookmark/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const resp = match[1]
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regex above on the text content
//     // of the message
 
//     if (resp === undefined) {
//         bot.sendMessage(
//             chatId,
//             'Write something before bookmarking!',
//         );
//         return;
//     }
 
//     bookmarks.push(resp);
//     bot.sendMessage(
//         chatId,
//         'Your text is saved successfully!',
//     );
//  });


bot.onText(/\/start (.+)/, (msg, match) => {

    const chatId = msg.chat.id
    const resp = match[1]

     
});

bot.onText(/\/questio
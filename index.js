const { Telegraf } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.replyWithSticker("CAACAgIAAxkBAAMCX3HZ348Y5HWO5fTm63kRLbGf79EAAsI_AALgo4IHq7qUe8um6VsbBA"))
bot.command('help', (ctx) => ctx.replyWithMarkdown("``` /bypass : membypass drive yang terkena limit```"));
bot.command('bypass', (ctx) => {
    ctx.reply('Chotto matte Onii-chan')
    ctx.replyWithSticker('CAACAgIAAxkBAAMeX3HcqildSOsFDKZahKNM_STVvdgAArg_AALgo4IHrujN1uRZ3lsbBA')
    
    axios.get('https://gdbypass.host/api/?link='+ctx.message.text.split(' ')[1])
        .then(response => {
            const fileName = response.data.data.Filename
            const newLink = response.data.data.NewUnlimitedURL

            let result = '<pre>Filename : ' + fileName + '</pre>'
            result += '<pre>Newlink : ' + newLink + '</pre>'

            ctx.replyWithHTML(result)
            ctx.replyWithSticker('CAACAgIAAxkBAANKX3Hk7HaHqYzVzMmbopFx5RUsXuEAArc_AALgo4IHR4p8qfRTjqEbBA')
        })
        .catch(err => console.error(err))
})

bot.launch();
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api.lolhuman.xyz/api/random2/bj?apikey=Dawnfrostkey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '', '© Kannabot', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['blowjob']
handler.tags = ['hentai']

handler.command = /^(blowjob)$/i

handler.premium = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler


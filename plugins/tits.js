let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await Neko.nsfw.tits()).url
   conn.sendFile(m.chat, json, 'tits.jpg', '', m, false)
}
handler.help = ['tits']
handler.tags = ['hentai']
handler.command = /^tits$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
     	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
    heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=Dawnfrostkey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'K,kawaii~ > / / / <', wm, 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['nsfwloli']
handler.tags = ['hentai']
handler.command = /^nsfwloli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
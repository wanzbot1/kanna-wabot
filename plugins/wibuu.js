let fs = require('fs')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let stc = fs.readFileSync('./sticker/wibu.webp')
conn.fakeReply(m.chat, stc, `${who.split`@`[0]}@s.whatsapp.net`, '*Lari Cuk Ada Wibu !*', 'status@broadcast')
}

handler.customPrefix = /wibu|vvibu|Wibu|WIBU|VVIBU|VVibu/
handler.command = new RegExp

module.exports = handler
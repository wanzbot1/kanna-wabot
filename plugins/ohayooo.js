let fs = require('fs')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let stc = fs.readFileSync('./sticker/ohayo.webp')
conn.fakeReply(m.chat, stc, `${who.split`@`[0]}@s.whatsapp.net`, '*Dasar Wibu*', 'status@broadcast')
}

handler.customPrefix = /(ohayo|OHAYO|Ohayo)/
handler.command = new RegExp

module.exports = handler
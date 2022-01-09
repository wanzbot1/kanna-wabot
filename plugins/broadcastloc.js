const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
    let logo = global.logo
    let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
    conn.reply(m.chat, `_Send a broadcast message to ${chats.length} chats_\nestimation complete ${chats.length * 1.5} seconds`, m)
    for (let id of chats) {
        await delay(1500)
        await conn.send2ButtonLoc(id, logo,'*—「 Broadcast 」—*\n' + text, wm, '⋮☰ Menu', '.menu', 'Donasi', '.donasi')
    }
    m.reply('_*Broadcast Finished*_')
}
handler.help = ['bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))

let wm = global.botwm
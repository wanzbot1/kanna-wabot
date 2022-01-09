const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, command}) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan laporan', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*✎ ${command}*\n📇 *Nomor :* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n✉️ *Pesan :* ${text}`
    conn.sendMessage('6283143393763@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, `✔️${command} telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.`, m)
}
handler.help = ['bug <laporan>', 'report <laporan>']
handler.tags = ['main']
handler.command = /^(bug|report|requeast)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command, text }) => {
    heum = await fetch(`https://mhankbarbar.herokuapp.com/api/nekopoi?url=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`)
   let kata = `*Nekopoi Link Tersedia* : ${res.data.judul}\n*Result* : ${res.data.result}\n*Dilihat* : ${res.data.dilihat}\n*Thumbnail* : ${res.data.tumbnail}`.trim()
   conn.sendMessage(m.chat, kata, m)
//sendButtonImg(jid, content, url, footer, button1, row1, options = {}) {
}
handler.help = ['nekopoi <link>']
handler.tags = ['hentai']
handler.command = /^nekopoi$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

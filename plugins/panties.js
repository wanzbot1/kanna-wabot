let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/panties?apikey=d81ce7556c32afe3`
  conn.sendFile(m.chat, res, 'panties.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['panties'].map(v => v + ' ')
handler.tags = ['hentai']

handler.command = /^(panties)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler


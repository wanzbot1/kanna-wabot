let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hardianto-chan.herokuapp.com/api/anime/random?sfw=woof&apikey=hardianto`
  conn.sendFile(m.chat, res, 'pussy.jpg', ``, m, false)
}
handler.help = ['fury'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(fury)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
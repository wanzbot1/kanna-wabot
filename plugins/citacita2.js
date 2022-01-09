let fetch = require("node-fetch")
let arr = []
fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
  .then(res => res.text())
  .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
  let cita = arr[Math.floor(Math.random() * arr.length)]
  if (!cita) throw false
  await conn.sendFile(m.chat, cita, cita, null, m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['citacita']
handler.tags = ['fun', 'quotes']
handler.command = /^citacita$/i

module.exports = handler

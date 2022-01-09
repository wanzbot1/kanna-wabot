let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let res = await fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=Dawnfrostkey&query=loli`)
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  conn.sendButtonImg(m.chat, await (await fetch(json.result)).buffer(), `Kyaa, , kawaii !   > / / / <`, `${wm}`, 'Next', `#loli`, m, 0, { thumbnail: await (await fetch(json.result)).buffer() })
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
let wm = global.botwm
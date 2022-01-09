// Pngocok handal

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, '', `
┏┉⌣ ┈ ̥- ̶ ̯ ͡.. ̷ ̴✽ ̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆    *${json.title}*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈ ̥- ̶ ̯ ͡.. ̷ ̴✽ ̶⌣ ✽ ̶
🎙️ *Author:* ${json.author}
💻 *Link:* ${json.links.genius}

                   🎶 *Lyrics* 🎶
${json.lyrics}
`, m)
}
handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet', 'edukasi']
handler.command = /^(lirik|lyrics|lyric)$/i

module.exports = handler

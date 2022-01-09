const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} rasel.ganz`

  let res = await fetch(global.API('zekais', '/igs', { username: args[0] }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', `
*📛 Nama:* ${json.data.fullname}
*💌 Bio:* \n${json.data.bio}
*👥 Followers:* ${json.data.follower}
*👯 Following:* ${json.data.following}
*🖼️ Posts:* ${json.data.timeline}
*🕴️ Private:* ${json.data.private ? '✔️' : '✖️'}
*💻 Link:* \nhttp://instagram.com/${json.data.username}
`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['internet']
handler.command = /^(igsta?lk)$/i
handler.limit = true
module.exports = handler
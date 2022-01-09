let handler  = async (m, { conn, usedPrefix: _p }) => {
let fetch = require('node-fetch')
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Source+code'
let info = `╭═[ *SCRIPT* ]═────···
┴
│ *Script :* 60K (No node_module)
│ *Base :*
│ ╰ https://github.com/nurutomo/wabot-aq
│ *RestApi :* 
│ ╰ https://hardianto.xyz
┬
╰──────────═┅═──────────
[❗] Jangan diperjual belikan tanpa seizin owner
`.trim()
await conn.send2Button(m.chat, info, `${botol}`, '⋮☰ Back', '.menu', 'Owner', '.nowner', m)
conn.reply(info)
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

let botol = global.botwm

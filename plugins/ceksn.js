const { createHash } = require('crypto')

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`
*SN:* ${sn}
`.trim())
}

handler.help = ['ceksn']
handler.tags = ['exp','cek']
handler.command = /^(ceksn)$/i
handler.premium = true
handler.register = true
module.exports = handler
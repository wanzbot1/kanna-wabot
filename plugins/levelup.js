let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, max } = levelling.xpRange(user.level, user.exp, global.multiplier)
    return 
    let str = `
Level *${user.level} (${user.exp}/${max}) 📊*
Kurang *${min} XP ✨* lagi!
`.trim()
conn.sendButton(m.chat, str, wm, 'MY', '.my', m)
  }
  user.level++
  let str2 = `
Selamat, anda telah naik level! 📊
*${user.level - 1}* ➠ *${user.level}*
  `.trim()
conn.sendButton(m.chat, str2, wm, 'MY', '.my',m)
}

handler.help = ['levelup']
handler.tags = ['rpg']

handler.command = /^levelup$/i

module.exports = handler

let wm = global.botwm
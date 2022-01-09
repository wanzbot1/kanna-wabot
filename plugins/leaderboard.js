let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedExp = Object.entries(global.db.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedatm = Object.entries(global.db.data.users).sort((a, b) => b[1].atm - a[1].atm)
  let sortedlimit = Object.entries(global.db.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedLim = Object.entries(global.db.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
  let sortedrole = Object.entries(global.db.data.users).sort((a, b) => b[1].role - a[1].role)
  let sortedtprem = Object.entries(global.db.data.users).sort((a, b) => b[1].tprem - a[1].tprem)
  let sortedglimit = Object.entries(global.db.data.users).sort((a, b) => b[1].tigame - a[1].tigame)
  let usersexp = sortedExp.map(v => v[0])
  let userstprem = sortedtprem.map(v => v[0])
  let usersglimit = sortedglimit.map(v => v[0])
  let userslimit = sortedlimit.map(v => v[0])
  let usersrole = sortedrole.map(v => v[0])
  let usersatm = sortedatm.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
    let text = `
*✧──────[ LEADERBOARD LEVEL ]──────✧*
        ミ Kamu: *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}* 彡

${sortedlevel.slice(0, len).map(([user, data], i) => '◪ *' + (i + 1) + '. @' + user.split`@`[0] + '*\n┝◆ *Level :* ' + data.level + ' Lvl' + '\n┝◆ *Exp :* ' + data.exp + ' *exp*' + '\n╰◆ *Role:* ' + data.role + '\n').join`\n`}

*✧─────[ LEADERBOARD BALANCE ]─────✧*
        ミ Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}* 彡

${sortedmoney.slice(0, len).map(([user, data], i) => '◪ *' + (i + 1) + '. @' + user.split`@`[0] + '*\n┝◆ *Balance :* ' + data.money + ' 💲' + '\n╰◆ *Atm :* ' + data.atm + ' 💲' + '\n').join`\n`}

*✧─────[ LEADERBOARD LIMIT ]─────✧*
         ミ Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}* 彡

${sortedlimit.slice(0, len).map(([user, data], i) => '◪ *' + (i + 1) + '. @' + user.split`@`[0] + '*\n┝◆ *Limit :* ' + data.limit + '\n╰◆ *Glimit:* ' + data.glimit + '\n').join`\n`}

`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersglimit.slice(0, len),...usersglimit.slice(0, len),...usersrole.slice(0, len),...userstprem.slice(0, len),...usersatm.slice(0, len), ...userslevel.slice(0, len), ...usersmoney.slice(0, len),...usersLim.slice(0, len)]
    }
  })
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

let botol = global.botwm
const xpperlimit = 350
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^blimit/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `-Rp.${xpperlimit * count} 💹\n+ ${count} Limit 🎫`, m)
  } else conn.reply(m.chat, `[❗] Uang anda tidak mencukupi untuk membeli ${count} limit\n▸ Mainkan Game untuk dapatkan beberapa uang!`, m)
}
handler.help = ['blimit <jumlah limit>']
handler.tags = ['xp']
handler.command = /^blimit ([0-9]+)|blimit|buyall$/i
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


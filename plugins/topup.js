let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
	let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        let users = global.db.data.users
	global.db.data.users[who].money += count * 1
                        conn.reply(m.chat, `Berhasil mentopup ${who} money sebesar ${count}`.trim(), m)
                        }
                        
handler.help = ['topup <Args>']
handler.tags = ['rpg']
handler.command = /^topup$/i
handler.mods = true
handler.premium = true

module.exports = handler
let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': false,
		'buka': false,
		'on': false,
		'1': false,
		'close': true,
		'tutup': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `*───────[ GROUP SETTING ]───────*
	`.trim(),`                     ${wm}\n` + date, 'Open', ',grup 1', 'Close', ',grup 0')
		throw false
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['grup <1/0>']
handler.tags = ['group']
handler.command = /^gr(oup|up)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler

let wm = global.botwm
let date = global.botdate
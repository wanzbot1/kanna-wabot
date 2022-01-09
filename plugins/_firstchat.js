let moment = require('moment-timezone')
let fetch = require('node-fetch')
let wm = global.botwm
let logo = global.logo
let handler = m => m

handler.all = async function (m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.send3ButtonLoc(m.chat, logo, `
*hai, ${ucapan()}*

${user.banned ? 'kamu dibanned' : 'Saya adalah KANNABOT, salah satu bot Whatsapp. harap tidak spam/telpon/minta save kemonor ini. Ada yang bisa saya bantu? (ㆁωㆁ)'}
`.trim(), wm, user.register ? '⋮☰ Menu' : 'Verify', user.register ? '.menu' : `.daftar ${username}.13`, 'Rules', '.rules', 'Owner', '.owner', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari ☀️"
    if (time >= 4) {
        res = "Good Morning 🌄"
    }
    if (time > 10) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Night 🌙"
    }
    return res
}
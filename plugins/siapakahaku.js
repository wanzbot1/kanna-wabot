let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

*⏰ Timeout:* ${(timeout / 1000).toFixed(2)} detik
*🎁 Bonus:* ${poin} XP
*🔎 Hint:* ${usedPrefix}who
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, `${wm}`, 'Bantuan', '.who'),
        json, poin,
        setTimeout(async () => {
            if (conn.siapakahaku[id]) await conn.sendButton(m.chat, `⏰ Waktu habis!\n*✉️ Jawaban:* ${json.jawaban}`, `${wm}`, 'Siapakah Aku', '.siapaaku')
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

module.exports = handler

let wm = global.botwm
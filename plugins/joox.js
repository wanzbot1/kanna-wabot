const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm.. judul nya apa?\n\ncontoh:\n${usedPrefix + command} akad`
    if (isUrl(text)) throw `uhm.. judul kak bukan pake url\n\ncontoh:\n${usedPrefix + command} akad`

    let res = await fetch(global.API('pencarikode', '/download/joox', { search: text }, 'pais'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { judul, artist, album, img_url, mp3_url, filesize, duration } = json.result
    let pesan = `               「 𝗝𝗢𝗢𝗫 𝗣𝗟𝗔𝗬 」
╭> 𝗝𝘂𝗱𝘂𝗹 : ${judul}
├> 𝗔𝗿𝘁𝗶𝘀 : ${artist}
├> 𝗔𝗹𝗯𝘂𝗺 : ${album}
├> 𝗦𝗶𝘇𝗲 : ${filesize}
╰> 𝗗𝘂𝗿𝗮𝘀𝗶 : ${duration}

    `.trim()
    conn.sendFile(m.chat, img_url, 'eror.jpg', pesan, m, 0, { thumbnail: await (await fetch(img_url)).buffer() })
    conn.sendFile(m.chat, mp3_url, 'error.mp3', '', m, 0, { asDocument: global.db.data.chats[m.chat].useDocument, mimetype: 'audio/mp4' })
    conn.sendButton('        Data di temukan !', pesan, 'Menu', '.menu')
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
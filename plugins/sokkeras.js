let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/sok-keras.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*CIH SOK KERAS LUH*', 'status@broadcast')
}

handler.customPrefix = /^(sok keras)$/i
handler.command = new RegExp

module.exports = handler
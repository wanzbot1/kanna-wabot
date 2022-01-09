let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Gift')).buffer(), `╭─「 BUY GIFT CODE 」                                      ┝⊰▸ 📖 *Keterangan :*
│• Fitur Gift adalah fitur kode yang berisi
│hadiah! Anda bisa mendapatkan exp & limit
│sepuasnya! Hingga masa berlaku kodegiftnya
│habis!
│
┝⊰◈ *🛒 Harga :*
│• 5K / Minggu (7 Hari)
│• 15K / Bulan (4 Minggu)
│• 25K / VIP (Permanen)
│• +5k (Costum CodeGift)
│
┝⊰◉ *💳 Pembayaran :*
│• Pulsa (IM3) :
│+6285712420674
╰──·····──┦
`.trim(), `${wm}`, 'Owner', '.owner')
handler.help = ['buygift']
handler.tags = ['gift']
handler.command = /^buygift$/i

module.exports = handler

let wm = global.botwm

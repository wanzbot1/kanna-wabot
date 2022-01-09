let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ *〘 𝗣𝗮𝗸𝗲𝘁 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *Paket1*
║┊ ⌲ *Paket2*
║┊ ⌲ *Pemula*
║┊ ⌲ *Hemat*
║┊ ⌲ *Harta*
║┊ ⌲ *Crate*
╰═ ┅ ═══════

◪ *Paket1*
+100 Diamond
+5 Legendary
+900k money
+50 limit
*Harga:* 10k

◪ *Paket2*
+150 Gold
+15 Legendary
+7JT Money
+300 Limit
+100 Diamond
*Harga:* 20k

◪ *Pemula* <khusus newbie>(pembelian pertama)
+100 Gold
+5 Arloji
+4JT money
+30 Legendary
*Harga:* 10K

◪ *Hemat* ~30%~
+200 Iron
+100 Gold
+40 Legendary
+11JT money
+500 Limit
*Harga:* 25k ~30k~

◪ *Harta*
+50 Arloji
+1500 Diamond
+500JT money
+300 Gold
+700K exp
+1K Limit
+100 Level
*Harga:* 40k

◪ *Crate*
+1k Legendary
+8k Mythic
+100 Pet
+1K exp
*Harga:* 5k

▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Shop')).buffer(), ext, `${wm}`, 'Payment', '.payment', 'Owner', '.owner', '◂- Back To Menu', '.menu', m)

}
handler.help = ['topup']
handler.tags = ['rpg']
handler.command = /^(topup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
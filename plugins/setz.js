function handler(m) {
  m.reply(`${wait}`)
  this.send2Button(m.chat, `*「 SET MODE 」*`, `•◉ Mode : ${global.opts['self'] ? 'Self' : 'Publik'}\n\n${botol}`, 'PUBLIC-MODE', '.on public', 'SELF-MODE', '.off public')
}
let botol = global.botwm
let wait = global.wait
handler.help = ['set', 'mode']
handler.tags = ['owner']

handler.command = /^(set|mode)$/i
handler.owner = true

module.exports = handler
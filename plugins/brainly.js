const brainly = require('brainly-scraper-v2')
let handler = async function (m, { conn, text }) {
  if (!text) throw 'Soalnya?'
  let res = await brainly(text)
  let answer = `┏┉⌣ ┈  ̥-  ̶  ̯  ͡..  ̷  ̴✽  ̶┄┈┈┈┈┈┈┈┈┈┈┉┓\n┆ *BRAINLY SEARCH*\n└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈  ̥-  ̶  ̯  ͡..  ̷  ̴✽  ̶⌣ ✽  ̶\n\n` + res.data.map((v, i) => `*‷✧ Pertanyaan Ke ${i + 1}*\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*▸ Jawaban Ke ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n๑───────────────────────────────๑\n\n')
  await m.reply('Searching...')
  conn.sendButton(m.chat, answer, wm, 'Google', `.google ${text}`, m)
  conn.reply(answer)
}
handler.help = ['brainly <soal>','belajar <soal>','mtk <soal>','ipa <soal>','ips <soal>','ppkn <soal>','inggris <soal>','pertanyaan <soal>']
handler.tags = ['edukasi']
handler.command = /^(brainly|belajar|mtk|ipa|ips|ppkn|inggris|pertanyaan)$/i

handler.limit = true

module.exports = handler

let wm = global.botwm
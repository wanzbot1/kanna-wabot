let PhoneNumber = require('awesome-phonenumber')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let botol = global.botwm
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, tigame, user, level, role, money, premium, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
╭◈ *「 LIMIT 」*
├▸ 📇 *Name* : ${username}
├▸ 🌟 *Premium* : ${premium ? "Yes" :"No"}
├▸ 🎫 *Limit* : ${limit}
├▸ 🎟 ️ *Limit Game* : ${tigame}
╰────·····──⋆
`.trim()
    let mentionedJid = [who]
    conn.sendButton(m.chat, str, `untuk membeli limit ketik /𝗯𝗹𝗶𝗺𝗶𝘁 <𝗻𝗼𝗺𝗶𝗻𝗮𝗹>\n◈ Contoh : /𝙗𝗹𝗶𝗺𝗶𝘁 5`, `INVENTORY`, `.inv`, m, false, { contextInfo: { mentionedJid }})
    conn.reply[str]
  }
}
handler.help = ['limit']
handler.tags = ['xp']
handler.register = true
handler.command = /^limit$/i
module.exports = handler
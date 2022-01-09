let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let wm = global.botwm
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lasthourly)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lasthourly > 3600000) {
    let str = `+200 money 💹\n+1 Potion 🥤`
        conn.send2Button(m.chat, str, wm, 'Daily', '.claim', 'Weekly', '.weekly', m)
        conn.reply(str)
        global.db.data.users[m.sender].money += 200
        global.db.data.users[m.sender].potion += 1
        global.db.data.users[m.sender].lasthourly = new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *⏱️${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
    }
}
handler.help = ['hourly']
handler.tags = ['rpg']
handler.command = /^(hourly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let botol = global.botwm
function button(teks, user) {
    const buttons = []
    
    let hourly = new Date - user.lasthourly > 3600000
    let claim = new Date - user.lastclaim > 86400000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({hourly, claim, monthly, weekly})
    
    if (monthly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/monthly'}, type: 1})
    if (weekly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/weekly'}, type: 1})
    if (claim) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/claim'}, type: 1})
    if (hourly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/hourly'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: `${botol}`,
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}

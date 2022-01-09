let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  await m.reply('⚡ Testing speed...')
  let neww = performance.now()
  let speed = neww - old
  let txt = `
🤖 Merespon dalam ${speed} millidetik
${readMore}

───────[ *P H O N E  S T A T I S T I C* ]───────
*🪀 Whatsapp V:* ${conn.user.phone.wa_version}
*🛑 Ram:* ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
*📈 MCC:* ${conn.user.phone.mcc}
*📉 MNC:* ${conn.user.phone.mnc}
*📊 OS Version:* ${os.platform()} ${conn.user.phone.os_version}
*📫 Merk Hp:* ${conn.user.phone.device_manufacturer}
*📮 Versi Hp:* ${conn.user.phone.device_model}


───────[ *S E R V E R  S T A T I S T I C* ]───────
*🛑 RAM:* ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}

*📑 NodeJS Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
  conn.sendButton(m.chat, txt, wm, '⋮☰ INFO', '.info', m)
}
handler.help = ['speed','ping']
handler.tags = ['info']

handler.command = /^(speed|ping)$/i
module.exports = handler

let wm = global.botwm

const more = String.fromCharCode(8206)
const readMore = more.repeat(4101)
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dispam', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam2 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam3 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam4 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam5 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spem6 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam7 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam8 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam9 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`
    let spam10 = `*───────────[ WA SPAMMER ]───────────*\n👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n💌 Pesan : ${pesan}──────────────────────`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam2, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam3, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam4, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam5, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam6, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam7, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam8, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam9, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam10, MessageType.text)

    let logs = `✔️ Berhasil mengirim spam wa ke nomor ${korban} 10 kali`
    conn.reply(m.chat, logs, m)
}
handler.help = ['spam <nomor|pesan>', 'spamwa <nomor|pesan>']
handler.tags = ['spam']
handler.command = /^(spam|spamwa)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

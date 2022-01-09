let fetch = require('node-fetch')
let axios = require('axios')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)

	let res = await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=Dawnfrostkey&query=${text}`)
	 json = await res.json()
  let {
    title,
    genre,
    rating,
    link,
    desc,
  } = json.result
	 	let hasil = `*🎥Film Dari ${text}*\n\n🏷️Judul : ${title}\n🔖Genre: : ${genre}\n⭐Rating : ${rating}\n🎥Link Movie : ${link}\n📖Sinopsis : ${desc}`.trim()
    conn.sendButtonImg(m.chat, await (await fetch(json.result.thumbnail)).buffer(), hasil, '© nekobotz', 'Internet', '.? internet', m)
}
handler.help = ['filmanime', 'film'].map(v => v + '<film>')
handler.tags = ['internet', 'anime']

handler.command = /^film(anime)?$/i

handler.limit = true

module.exports = handler
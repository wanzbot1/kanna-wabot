let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nsaya adalah KannaBot, KannaBot adalah Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), `${wm}`, '⋮☰ Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

module.exports = handler

let wm = global.botwm
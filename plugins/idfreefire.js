let handler = async (m, { conn, text }) => {
	let monsters = [
		{ area: 1, text: "Goblin" },
		{ area: 1, text: "Slime" },
		{ area: 1, text: "Wolf" },
		{ area: 2, text: "Nymph" },
		{ area: 2, text: "Skeleton" },
		{ area: 2, text: "Wolf" },
		{ area: 3, text: "Baby Demon" },
		{ area: 3, text: "Ghost" },
		{ area: 3, text: "Zombie" },
		{ area: 4, text: "Imp" },
		{ area: 4, text: "Witch" },
		{ area: 4, text: "Zombie" },
		{ area: 5, text: "Ghoul" },
		{ area: 5, text: "Giant Scorpion" },
		{ area: 5, text: "Unicorn" },
		{ area: 6, text: "Baby Robot" },
		{ area: 6, text: "Sorcerer" },
		{ area: 6, text: "Unicorn" },
		{ area: 7, text: "Cecaelia" },
		{ area: 7, text: "Giant Piranha" },
		{ area: 7, text: "Mermaid" },
		{ area: 8, text: "Giant Crocodile" },
		{ area: 8, text: "Nereid" },
		{ area: 8, text: "Mermaid" },
		{ area: 9, text: "Demon" },
		{ area: 9, text: "Harpy" },
		{ area: 9, text: "Killer Robot" },
		{ area: 10, text: "Dullahan" },
		{ area: 10, text: "Manticore" },
		{ area: 10, text: "Killer Robot" },
		{ area: 11, text: "Baby Dragon" },
		{ area: 11, text: "Young Dragon" },
		{ area: 11, text: "Scaled Baby Dragon" },
		{ area: 12, text: "Kid Dragon" },
		{ area: 12, text: "Not so young Dragon" },
		{ area: 12, text: "Scaled Kid Dragon" },
		{ area: 13, text: "Definitely not so young Dragon" },
		{ area: 13, text: "Teen Dragon" },
		{ area: 13, text: "Scaled Teen Dragon" },
	]
	let player = global.db.data.users[m.sender]
	let ptext = conn.getName(m.sender)

	let cdm = `${MeNit(new Date - player.Thunt)}`
	let cds = `${DeTik(new Date - player.Thunt)}`
	let cd1 = Math.ceil(01 - cdm)
	let cd2 = Math.ceil(60 - cds)

	let area_monsters = monsters.filter(monster => { return monster.area === player.area })
	let monster = area_monsters[Math.floor(Math.random() * area_monsters.length)]
	let monsterName = monster.text.toUpperCase()

	if (new Date - global.db.data.users[m.sender].lasthunt > 120000) {
		let coins = parseInt(Math.floor(Math.random() * 401))
		let exp = parseInt(Math.floor(Math.random() * 601))
		let sum = 82 * player.area - 59
		let dmg = (player.sword  * 5 + player.armor * 5 - sum)
		dmg = dmg < 0 ? Math.abs(dmg) : 0

		player.healt -= dmg
		player.lasthunt = new Date * 1 // waktu hunt 2menit

		if (player.healt < 0) {
			let msg = `*${ptext}* Anda Mati Di Bunuh Oleh ${monsterName}`
			if (player.level > 0) {
				player.level -= 1
				msg += `\nLevel Anda Turun 1 Karena Mati Saat Berburu!`
			}
			player.healt = 100
			m.reply(msg)
			return
		}

		player.money += coins * 1
		player.exp += exp * 1

		let pesan = `*${ptext}* Menemukan Dan Membunuh *${monsterName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)} coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${dmg}Hp, Tersisa ${player.healt}/${100}`
		m.reply(pesan)
	} else throw `Tunggu *00:${cd1}:${cd2}* Untuk Berburu Lagi`
}

handler.help = ['hunt']
handler.tags = ['rpg']
handler.command = /^hunt/i

handler.disabled = false

handler.fail = null

module.exports = handler

function MeNit(ms) {
	let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
	return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function DeTik(ms) {
	let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
	return [s].map(v => v.toString().padStart(2, 0)).join(':')
}

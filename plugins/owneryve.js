let handler = function (m) {
	this.sendContact(m.chat, '6285712420674', 'Owner NekoBotz :)', m)
}

handler.customPrefix = ['🍭Owner Kannabot'] 
handler.command = new RegExp

module.exports = handler
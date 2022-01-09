//https://api.lolhuman.xyz/api/rank?apikey=Dawnfrostkey&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=LoL%20Human&level=99&ranking=1&currxp=999&xpneed=999

const uploadImage = require('../lib/uploadImage')

let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {
	
	

let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let name = conn.getName(m.sender)
let ppq = await fetch('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
ppq = await conn.getProfilePicture(m.sender)
//let pp = await ppq.download()
//let url = await uploadImage(ppq)
try {
  } catch (e) {

  } finally {
let res = `http://hardianto-chan.herokuapp.com/api/rankcard?profile=${ppq}&name=${name}&bg=https://i.ibb.co/4YBNyvP/images-76.jpg&needxp=${max}&curxp=${exp}&level=${level}&logorank=https://i.ibb.co/Wn9cvnv/FABLED.png`
let caption = `
*❏ Your Profile!:*
*❏ Name:* ${name}
*❏ Role :* ${role}
*❏ Level:* ${level}
*❏ Exp :* ${exp} --> ${max}
*❏ limit:* ${limit}
`
conn.sendFile(m.chat, res, 'test.jpg', caption, m, false)
} 
    
    }
handler.help = ['rank']
handler.tags = ['info']
handler.command = /^(rank|rankcard)$/i

handler.register = true
handler.fail = null

module.exports = handler

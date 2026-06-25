const { cmd } = require('../lib/command')
const axios = require('axios')
const bot = require('../lib/bot')

const API_URL = "https://jerrycoder.oggyapi.workers.dev/down/insta-v1"

//============================Instagram Download============================
cmd({
pattern: "insta",
alias: ["ig", "instagram"],
desc: "Download Instagram Video/Photo",
category: "download",
react: "📷",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

try {

if (!q) return reply("❌ Example:\n.insta https://www.instagram.com/reel/xxxxx")

const isInsta = /(instagram\.com|ig\.me)/i.test(q)
if (!isInsta) return reply("❌ Valid Instagram URL එකක් දෙන්න!")

await reply("⬇️ *Downloading Instagram media...*")

const res = await axios.get(API_URL, {
params: { url: q },
timeout: 60000
})

const data = res.data?.data
const urls = data?.urls
const thumbnail = data?.thumbnail

if (!urls || urls.length === 0) return reply("❌ Download failed. Try again!")

const dlUrl = urls[0]

/* ⬇️ Buffer media එක download කරලා send කරන්න */
const mediaBuffer = await axios.get(dlUrl, {
responseType: 'arraybuffer',
timeout: 120000,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
})

const caption = `
╔ஜ۩▒█ TASHINDU MD █▒۩ஜ╗
┃📷 INSTAGRAM MEDIA
┃✅ Downloaded සාර්ථකයි!
╰━━━━━━━━━━━━━━⊷

> ${bot.COPYRIGHT}
`

await conn.sendMessage(from, {
video: Buffer.from(mediaBuffer.data),
mimetype: "video/mp4",
caption: caption
}, { quoted: mek })

console.log(`♻ Instagram Command Used : ${from}`)

} catch(e) {
console.log("INSTA ERROR:", e.message)
reply("❌ Instagram error. Try again!")
}

})

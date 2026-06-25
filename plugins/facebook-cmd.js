const { cmd } = require('../lib/command')
const axios = require('axios')
const bot = require('../lib/bot')

const API_URL = "https://apis.davidcyriltech.my.id/facebook2"

//============================Facebook Download============================
cmd({
pattern: "facebook",
alias: ["fb", "fbdl"],
desc: "Download Facebook Video",
category: "download",
react: "✨",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

try {

if (!q) return reply("❌ Example:\n.facebook https://www.facebook.com/share/v/xxxxx")

const isFB = /(facebook\.com|fb\.watch)/i.test(q)
if (!isFB) return reply("❌ Valid Facebook URL එකක් දෙන්න!")

await reply("⬇️ *Downloading Facebook video...*")

const res = await axios.get(API_URL, {
params: { url: q },
timeout: 60000
})

const data = res.data?.video
const downloads = data?.downloads

if (!downloads || downloads.length === 0) return reply("❌ Download failed. Try again!")

// Get HD if available, otherwise SD
const videoData = downloads.find(d => d.quality === "HD") || downloads[0]
const dlUrl = videoData?.downloadUrl

if (!dlUrl) return reply("❌ Download link හොයාගන්න බැරි උනා!")

/* ⬇️ Buffer video එක download කරලා send කරන්න */
const videoBuffer = await axios.get(dlUrl, {
responseType: 'arraybuffer',
timeout: 120000,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
})

const caption = `
╔ஜ۩▒█ TASHINDU MD █▒۩ஜ╗
┃🧚‍♂️ FACEBOOK VIDEO
┃📹 Quality: ${videoData?.quality}
┃✅ Downloaded සාර්ථකයි!
╰━━━━━━━━━━━━━━⊷

> ${bot.COPYRIGHT}
`

await conn.sendMessage(from, {
video: Buffer.from(videoBuffer.data),
mimetype: "video/mp4",
caption: caption
}, { quoted: mek })

console.log(`♻ Facebook Command Used : ${from}`)

} catch(e) {
console.log("FB ERROR:", e.message)
reply("❌ Facebook error. Try again!")
}

})

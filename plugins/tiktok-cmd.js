const { cmd } = require('../lib/command')
const axios = require('axios')
const bot = require('../lib/bot')

const API_KEY = "df12cab3877acda3"
const API_URL = "https://api-dark-shan-yt.koyeb.app/download/tiktok"

//============================TikTok Download============================
cmd({
pattern: "tiktok",
alias: ["tt", "tik"],
desc: "Download TikTok Video",
category: "download",
react: "📱",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

try {

if (!q) return reply("❌ Example:\n.tiktok https://vm.tiktok.com/xxxxx")

const isTikTok = /(tiktok\.com|vm\.tiktok\.com)/i.test(q)
if (!isTikTok) return reply("❌ Valid TikTok URL එකක් දෙන්න!")

await reply("⬇️ *Downloading TikTok video...*")

const res = await axios.get(API_URL, {
params: { apikey: API_KEY, url: q },
timeout: 60000
})

const data = res.data?.data
const dlUrl = data?.play
if (!dlUrl) return reply("❌ Download failed. Try again!")

const authorName = "Tashindu-md🇱🇰"
const caption = `
╔ஜ۩▒█ TASHINDU MD █▒۩ஜ╗
┃📱 TIKTOK VIDEO
┃👤 Author: ${authorName}
┃⏱️ Duration: ${data?.duration}s
┃👁️ Views: ${data?.stats?.play_count?.toLocaleString() || 'N/A'}
┃❤️ Likes: ${data?.stats?.digg_count?.toLocaleString() || 'N/A'}
╰━━━━━━━━━━━━━━⊷
`

await conn.sendMessage(from, {
video: { url: dlUrl },
mimetype: "video/mp4",
caption: caption
}, { quoted: mek })

console.log(`♻ TikTok Command Used : ${from}`)

} catch(e) {
console.log("TIKTOK ERROR:", e.response?.data || e.message)
reply("❌ TikTok error. Try again!")
}

})

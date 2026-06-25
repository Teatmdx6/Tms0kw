const { cmd } = require('../lib/command')
const axios = require('axios')
const yts = require('yt-search')
const bot = require('../lib/bot')

const API_KEY = "prince"
const API_URL = "https://api.princetechn.com/api/download/ytdlv2"

// Store video URLs temporarily
const videoCache = {}

//============================YouTube Video Download============================
cmd({
pattern: "ytv",
alias: ["ytvideo", "video"],
desc: "Download YouTube Video",
category: "download",
react: "🎬",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

try {

if (!q) return reply("❌ Example:\n.ytv pasoori\n.ytv https://youtu.be/xxxxx")

const isUrl = /(youtube\.com|youtu\.be)/i.test(q)
let videoUrl = q
let vid

if (!isUrl) {
const search = await yts(q)
if (!search.videos.length) return reply("❌ No video found")
vid = search.videos[0]
videoUrl = vid.url
} else {
const id = q.split('v=')[1] || q.split('/').pop()
vid = await yts({ videoId: id })
}

const cacheId = Date.now().toString()
videoCache[cacheId] = videoUrl

const caption = `
╔ஜ۩▒█ TASHINDU MD █▒۩ஜ╗
┃🎬 VIDEO FOUND
┃📌 Title: ${vid.title}
┃⏱️ Duration: ${vid.timestamp}
┃👁️ Views: ${vid.views?.toLocaleString() || 'N/A'}
┃⚡ Downloading...
╰━━━━━━━━━━━━━━⊷
`

await conn.sendMessage(from, {
image: { url: vid.thumbnail },
caption: caption
}, { quoted: mek })

await reply("⬇️ *Downloading video...*")

const res = await axios.get(API_URL, {
params: { apikey: API_KEY, url: videoUrl },
timeout: 60000
})

const dlUrl = res.data?.result?.video_url
const title = res.data?.result?.title

if (!dlUrl) return reply("❌ Download failed. Try again!")

await conn.sendMessage(from, {
video: { url: dlUrl },
mimetype: "video/mp4",
caption: `🎬 *${title}*\n\n> ${bot.COPYRIGHT}`
}, { quoted: mek })

console.log(`♻ YTV Command Used : ${from}`)

setTimeout(() => delete videoCache[cacheId], 5 * 60 * 1000)

} catch(e) {
console.log("YTV ERROR:", e.message)
reply("❌ Video error. Try again!")
}

})

//============================YouTube Song Download============================
cmd({
pattern: "song",
alias: ["yta", "ytaudio", "ytmp3", "music"],
desc: "Download YouTube Song (MP3)",
category: "download",
react: "🎵",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

try {

if (!q) return reply("❌ Example:\n.song pasoori\n.song https://youtu.be/xxxxx")

const isUrl = /(youtube\.com|youtu\.be)/i.test(q)
let videoUrl = q
let vid

if (!isUrl) {
const search = await yts(q)
if (!search.videos.length) return reply("❌ No song found")
vid = search.videos[0]
videoUrl = vid.url
} else {
const id = q.split('v=')[1] || q.split('/').pop()
vid = await yts({ videoId: id })
}

const caption = `
╔ஜ۩▒█ TASHINDU MD █▒۩ஜ╗
┃🎵 SONG FOUND
┃📌 Title: ${vid.title}
┃⏱️ Duration: ${vid.timestamp}
┃👁️ Views: ${vid.views?.toLocaleString() || 'N/A'}
┃⚡ Downloading...
╰━━━━━━━━━━━━━━⊷
`

await conn.sendMessage(from, {
image: { url: vid.thumbnail },
caption: caption
}, { quoted: mek })

await reply("⬇️ *Downloading song...*")

const res = await axios.get(API_URL, {
params: { apikey: API_KEY, url: videoUrl },
timeout: 60000
})

const dlUrl = res.data?.result?.audio_url
const title = res.data?.result?.title

if (!dlUrl) return reply("❌ Download failed. Try again!")

await conn.sendMessage(from, {
audio: { url: dlUrl },
mimetype: "audio/mpeg",
ptt: false,
fileName: `${title}.mp3`
}, { quoted: mek })

console.log(`♻ SONG Command Used : ${from}`)

} catch(e) {
console.log("SONG ERROR:", e.message)
reply("❌ Song error. Try again!")
}

})

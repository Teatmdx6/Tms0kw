const axios = require('axios')
const { cmd } = require('../lib/command')
const bot = require('../lib/bot')

//============================Translate Command============================
cmd({
pattern: "trt",
alias: ["translate", "trans"],
desc: "Translate text between languages",
category: "other",
react: "⚡",
use: '<language code> <text>',
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

try {

if (!q) return reply("❌ Example:\n.trt si hello world\n.trt en සිංහල")

const args = q.split(' ')
if (args.length < 2) return reply("❌ Usage: .trt [language code] [text]\n\nLanguage codes: en, si, es, fr, de, ar, ja, zh, etc.")

const targetLang = args[0]
const textToTranslate = args.slice(1).join(' ')

await reply("🔄 *Translating...*")

const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`

const response = await axios.get(url, { timeout: 30000 })
const translation = response.data.responseData.translatedText

if (!translation) return reply("❌ Translation failed. Try again!")

const translationMessage = `
╔ஜ۩▒█ TASHINDU MD █▒۩ஜ╗
┃🌍 TRANSLATION
┃━━━━━━━━━━━━━━
┃📝 Original: ${textToTranslate}
┃
┃🔤 Translated: ${translation}
┃
┃🌐 Language: ${targetLang.toUpperCase()}
╰━━━━━━━━━━━━━━⊷

> ${bot.COPYRIGHT}
`

return reply(translationMessage)

} catch(e) {
console.log("TRANSLATE ERROR:", e.message)
return reply("❌ Translation error. Try again!")
}

})

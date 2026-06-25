const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/Arsln-MD/TASHINDU-MD",
REPO_NAME: process.env.REPO_NAME || "TASHINDU-MD",
BOT_NAME: process.env.BOT_NAME || "TASHINDU-MD",
DESCRIPTION: process.env.DESCRIPTION || "TASHINDU MD SRI LANKAN POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94743363230",
OWNER_NAME: process.env.OWNER_NAME || "WTSMD Official",
ST_SAVE: process.env.ST_SAVE || "TASHINDU-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "TASHINDU-MD-BY-WTSMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY TASHINDU-MD`* _*POWERD BY*_ *TASHINDUMD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "TASHINDU-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ TASHINDU-MD BY TASHINDU-MD OFFICIAL*",
VERSION: process.env.VERSION || "1.0.0",
NEWSLETTER: process.env.NEWSLETTER || "12036334873987203@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VarfjW04tRmwfb8x306",
INSTA: process.env.INSTA || "https://Instagram.com/arslandofficial",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bzflqq.png",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/bzflqq.png",
CONVERT_IMG: process.env.CONVERT_IMG || "https://files.catbox.moe/bzflqq.png",
AI_IMG: process.env.AI_IMG || "https://files.catbox.moe/bzflqq.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://files.catbox.moe/bzflqq.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://files.catbox.moe/bzflqq.png",
MAIN_IMG: process.env.MAIN_IMG || "https://files.catbox.moe/bzflqq.png",
GROUP_IMG: process.env.GROUP_IMG || "https://files.catbox.moe/bzflqq.png",
FUN_IMG: process.env.FUN_IMG || "https://files.catbox.moe/bzflqq.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://files.catbox.moe/bzflqq.png",
OTHER_IMG: process.env.OTHER_IMG || "https://files.catbox.moe/bzflqq.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://files.catbox.moe/bzflqq.png",
NEWS_IMG: process.env.NEWS_IMG || "https://files.catbox.moe/bzflqq.png",
PP_IMG: process.env.PP_IMG || "https://files.catbox.moe/bzflqq.png"
};

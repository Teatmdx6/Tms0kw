const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "TASHINDU-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZrblBsdTdWeUlrKzV3YjBWcTYyR1paMUhpZXhuNWs2b1orc3hjeWJVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGlicnZmSHVwblFBUmhJc1BvVHJwTEk4b1NTcGlrYmpleUwyNnJ3SlR3MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQkg2ejRDaFMwYnlWZDhwZ0VBTUI0THRJR0Y4SU1TUUdrWUwrNkFCTkY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvaGdiSUNJeVBRVjdyaWxOWmc5V3l6OEVMaVRwQ3FDaC9xRWRBeU51TmpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJKLzRsKzRwdXptZjAyQzlUZVB4dURnV2l5MTkzbllCc3ErUVdPYW5PbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitqNmN1ZkZyQXk5ZUp2bnNuSERUa3kvSTNGdCtuYkgxVUVLd0dhaDRTajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0N5dXFabC9VRlhBTWE5K2JJVncxVnRlcUNRVnJyM25xWWo3a2g5aVBFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmovTGtROElsdVRNc1JkOHYrYUdialZ2NnExVFBNckJKVXQyM2VLOW5VUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAzYXg3bWh3L0IxVnZwV3lwWm9jL0Y1aDJuNHhKMWErcHdobW5XVHk4Q3FJVnFDTFU0T0dxd2pRa0M4Wk1VcFIyUkZJZ3pZNXVBM3ZrbkErdm9ScUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJwTWFPVTZQQkdnUWgxQ0JJaG9YSktNMDFQWVBVMG43aDNZUVJxR2RBdFVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5MDU3NDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNUUwNDE0MDE4RDQ3OTQ4QTYyOEYxRUU5NTEwQzg4MCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxOTcwMDQxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc3OTA1NzQ3MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUxQ0U3REEzRTUzODMxMUEwRUIyMjBENkNGRTE5NzgiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTk3MDA0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzkwNTc0NzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1QjRCRTkzODJFQkM1QUMxM0ZDNUQ2RjhDNjkwNUU1IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODE5NzAwNDF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc5MDU3NDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNThENUFENTJBRDEzOTI1QjI5MjI0OUU0QTI5RThBRCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxOTcwMDQyfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZZQ1dWU0dWIiwibWUiOnsiaWQiOiI5NDc3OTA1NzQ3MDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik11a2FkZGVyYXQiLCJsaWQiOiIyNjQ3MDM5MDExOTI0Mzc6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09peGxNa0ZFUExvMnRFR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNXSTFEOGJoSXpIUkhhbVRnMUtERXRTMHF5VVNWclV6dzFOd2gxTERGRG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBXTDZobFZuS24vdlhGQjVPVjlTNVAzTlo4Z25KU0p2ZDZnUVVqMDNncm15SVE1NExqS09MVFBocmFxY0JiR3g3TVVUMCtpakNjVHdFZWVVemdIakF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyR0diTXNkdmhUVHJBQ2pNOVF0WWU1bVdhSWR4b2QzVit0eWI3WjNhWjFPS3dxaTZRSVFOQ3VudVBzVnoxVisvd20yWUtxREFiWlRXV2xUd1hRYUtCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2NDcwMzkwMTE5MjQzNzozQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYRmlOUS9HNFNNeDBSMnBrNE5TZ3hMVXRLc2xFbGExTThOVGNJZFN3eFE2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFFnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODE5NzAwNDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXpLIn0=",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TASHINDU-MD 🤍*",
AUTO_REPLY: process.env.AUTO_REPLY || "true",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "TASHINDU-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "TASHINDU-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94743363230",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "TASHINDU-MD",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94743363230",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};








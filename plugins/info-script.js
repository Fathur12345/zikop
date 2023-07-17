import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
🚩 Mau Script bot ini??

chat owner contact
wa.me/6281260431003`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler

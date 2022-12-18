let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ DONASI LAH BROH
⫹⫺ Via Dana : 6283192405363
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/KasanStore

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

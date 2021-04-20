const Discord = require("discord.js");
const config = require("../settings/config.json")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()
.setTitle("Bot Info")
.setColor(config.cyan)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.addField("Toplam Sunucu", `\`${client.guilds.cache.size}\``)
.addField("Toplam Kullanıcı", `\`${client.users.cache.size}\``)
.addField("Toplam Kanal", `\`${client.channels.cache.size}\``)
.addField("Hafıza Kullanımı",`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\``)
.setFooter("Quelter")
message.channel.send(cse)
message.react("📊")
}
module.exports.help = {
name: "stats",
  aliases: ["s"]
}
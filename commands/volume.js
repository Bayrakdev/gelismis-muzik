const Discord = require("discord.js");
const config = require("../settings/config.json")
module.exports.run= async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel)return message.reply("Üzgünüm ama bir ses kanalında deilsin", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("Oynatılan bir şarkı yok.", message.channel);
    if (!args[0])return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Bir sayı belirtmeniz gerikiyor.').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return message.reply('Sayıyı 150 nin üzerine veya 0 ın altına indiremezsin.',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new Discord.MessageEmbed()
    .setDescription(`Ses ayarlandı.: **${args[0]/1}/150**`)
    .setAuthor("Ses Değişti.")
    .setColor("#7289DA")
    return message.channel.send(xd);
}
module.exports.help = {
name: "volume",
aliases: ["vol", "vols", "v"]
}
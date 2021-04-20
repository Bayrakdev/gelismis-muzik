const Discord = require("discord.js");
const config = require("../settings/config.json");

module.exports.run = async (client, message, args) => {
  let ertassla = new Discord.MessageEmbed()
    .setAuthor(client.user.username + " Commands")
    .setColor(config.cyan)
    .setDescription(
      `**Avatar: Kendinizin ve etiketlediğinizin kişinin fotoğrafını atar. ** \`[+pp]\`\n\n**Play: 	Çalmak istediginiz sarkiyi baslatir. ** \`[+play]\`\n\n**Now Playing: Çalan şarkıyı gösterir. ** \`[+np]\`\n\n**Pause: Çalan şarkıyı durdurur. **\`[+pause]\`\n\n**Resume: Çalan şarkıyı devam ettirir. **\`[+resume]\`\n\n**Stop: stops the song. **\`[+stop]\`\n\n**Skip: Çalan şarkıyı kapatır. **\`[+skip]\`\n\n**Queue: Kuyruğu gösterir. **\`[+queue]\`\n\n**Botun bilgilerini gösterir.  **\`[+stats]\`\n\n**Invite: https://discord.com/oauth2/authorize?client_id=798501682056003594&scope=bot&permissions=8** \n\n\``
    )
    .setFooter(` Quelter`, `${client.user.avatarURL()}`)
    .setTimestamp();
  message.channel.send(ertassla);
};
module.exports.help = {
  name: "yardım",
  aliases: []
};

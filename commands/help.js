const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setAuthor("Huskbot", "https://i.imgur.com/uHbGejg.png")
  .setThumbnail("https://i.imgur.com/uHbGejg.png")
  .setFooter("Huskbot by: Master#4915", "https://i.imgur.com/uHbGejg.png")
  .setColor("#ffffff")
  .addField("Komennot:", "ban\nhelp\nkick\nping\nsay\nwarn");

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}

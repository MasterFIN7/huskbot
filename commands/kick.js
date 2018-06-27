const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("En löydä käyttäjää!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Ei.");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tätä henkilöä ei voi potkia!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#ff0000")
  .setAuthor("Huskbot", "https://i.imgur.com/uHbGejg.png")
  .setFooter("Huskbot by: Master#4915", "https://i.imgur.com/uHbGejg.png")
  .addField("Potkittu käyttäjä", `${kUser} ID: ${kUser.id}`)
  .addField("Potkaisia", `<@${message.author.id}> ID: ${message.author.id}`)
  .addField("Potkaistu", message.channel)
  .addField("Aika", message.createdAt)
  .addField("Syy", kReason);

  let kickChannel = message.guild.channels.find(`name`, "bans");
  if(!kickChannel) return message.channel.send("En löydä kanavaa!");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

  return;
}

module.exports.help = {
  name: "kick"
}

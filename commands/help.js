
exports.run = (client, msg, args, config, prefix, color) => {
    const Discord = require('discord.js-selfbot');
   
	let list = commandlist;
    let commandlist = [`:diamonds: **${prefix}spam on** - Spams random strings at random intervals in channel.`, `:diamonds: **${prefix}spam off** - Stops spamming.`,
        `:diamonds: **${prefix}restart** - Restarts the bot`,
        `:diamonds: **${prefix}purge** <**Amount**> - Deletes messages.`
    ];

    for (i = 0; i < commandlist.length; i++) {
        list = list + commandlist[i] + "\n";
    }
    let embed = new Discord.MessageEmbed()
        .setTitle(`**HELP COMMAND**`)
        .setColor(color)
        .setFooter("Help List, Page 1/1")
        .addField(`:diamonds: **Commands** :diamonds:`, `${list}`)

    msg.channel.send(embed);
}
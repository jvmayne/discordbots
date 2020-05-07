
const Discord = require('discord.js')
const MessageEmbed = require('discord.js')
const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL', 'GUILD_MEMBER', 'USER']
});
const config = require('../config/config.json');

client.on('ready', () => {
  console.log(client.user.tag + " has logged in.");
});

// Create an event listener for new guild members

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'test-channel');

  const channel1 = member.guild.channels.cache.find(ch1 => ch1.name === 'where-you-going');

  // find role

  const role = member.guild.roles.cache.find(role => role.name === 'Role-Choosing');

  // add to role
  member.roles.add(role);

  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel1.send(`Welcome to the server, ${member}`);

  client.on('message', message => {

    if (message.content === '!whatever!') {
      const role1 = member.guild.roles.cache.find(role1 => role1.name === 'Whatever');
      member.roles.add(role1);
    }

    if (message.content === '!ff14!') {
      const role1 = member.guild.roles.cache.find(role1 => role1.name === 'FF14');
      member.roles.add(role1);
    }

    if (message.content === '!music!') {
      const role1 = member.guild.roles.cache.find(role1 => role1.name === 'Music');
      member.roles.add(role1);
    }

    if (message.content === '!pokemon!') {
      const role1 = member.guild.roles.cache.find(role1 => role1.name === 'Pokemon');
      member.roles.add(role1);
    }

    if (message.content === '!animalc!') {
      const role1 = member.guild.roles.cache.find(role1 => role1.name === 'Animal Crossing');
      member.roles.add(role1);
    }
  });

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    channel1.send(exampleEmbed);

});

// client.on('message', message => {
//   const exampleEmbed = new Discord.MessageEmbed()
//   	.setColor('#0099ff')
//   	.setTitle('Some title')
//   	.setURL('https://discord.js.org/')
//   	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
//   	.setDescription('Some description here')
//   	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
//   	.addFields(
//   		{ name: 'Regular field title', value: 'Some value here' },
//   		{ name: '\u200B', value: '\u200B' },
//   		{ name: 'Inline field title', value: 'Some value here', inline: true },
//   		{ name: 'Inline field title', value: 'Some value here', inline: true },
//   	)
//   	.addField('Inline field title', 'Some value here', true)
//   	.setImage('https://i.imgur.com/wSTFkRM.png')
//   	.setTimestamp()
//   	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
//
//   channel.send(exampleEmbed);
// });

// emoji - working
// client.on('message', message => {
//   if (message.content === '!generalchannels') {
//     const l = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
//     message.channel.send(l);
//   }
// });

// emoji - working
// client.on('message', message => {
//   if(message.content === "l") {
//      const l = client.emojis.cache.find(emoji => emoji.name === "hilarious");
//      message.reply(`${l}`);
//   }
// });

client.login(config.TOKEN);

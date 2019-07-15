const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
const devs = ['379952455003406338'];


client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**✅ ${user.tag} kicked from the server ! ✈ **  `)

}
});
















client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});





client.on('message', message => {

    if(message.content === prefix + "close") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__Room was closed__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "open") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__Room was open__:white_check_mark:**")
           });
             }
             
      
    
});




client.on('message', ra3d => {
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`Please choose how many colors`');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });



client.on('message', message => {
           var currentTime = new Date(),
           hours = currentTime.getHours() + 0 ,
           minutes = currentTime.getMinutes(),
           seconds = currentTime.getSeconds(),
           years = currentTime.getFullYear(),
           month = currentTime.getMonth() + 1,
           day = currentTime.getDate(),
           week = currentTime.getDay();
      
            

           if (minutes < 10) {
               minutes = "0" + minutes;
           }
           var suffix = "AM";
           if (hours >= 12) {
               suffix = "PM";
               hours = hours - 12;
           }
           if (hours == 0) {
               hours = 12;
           }
               if(message.content.startsWith('!time')) {
                   const embed = new Discord.RichEmbed()
          .addField(`🕐 Time `,` ** 「  ${hours} : ${minutes} : ${suffix} 」**`)
.addField(` :satellite: Date `,`**「 ${years} : ${month} : ${day} 」**`)

          
message.channel.send(embed)
}
});   








client.on('message', message => { //By |.iiMostafaYT#1001
    if (message.content.startsWith("!bot")) { //By |.iixdavied#9908
    message.channel.send({ //By |.iixdavied#9908
        embed: new Discord.RichEmbed() //By |.iixdavied#9908
            .setAuthor(client.user.username,client.user.avatarURL) //By |.iixdavied#9908
            .setThumbnail(client.user.avatarURL) //By |.iixdavied#9908
            .setColor('RANDOM') //By |.iiMostafaYT#1001
            .setTitle('Info Hyped bot.') //By |.iixdavied#9908
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //By |.iixdavied#9908
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //By |.iixdavied#9908
            .addField('**Servers**', [client.guilds.size], true) //By |.iixdavied#9908
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) //By |.iixdavied#9908
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) //By |.iixdavied#9908
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) //By |.iixdavied#9908
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) //By |.iixdavied#9908
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) //By |.iixdavied#9908
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) //By |.iixdavied#9908
            .addField('**Arch**' , `[ ${process.arch} ]` , true) //By |.iixdavied#9908
            .addField('**Platform**' , `[ ${process.platform} ]` , true) //By |.iixdavied#9908
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) //By |.iixdavied#9908
                  .addField('**My Language**' , `[ Java Script ]` , true) //By |.iixdavied#9908
                  .setFooter('By | .iixdavied#9908') //By |.iixdavied#9908
    }) //By |.iixdavied#9908
} //By |.iixdavied#9908
}); //By |.iixdavied#9908









  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setTitle('Message Edited')
       .addField('Before Edit',`${message.cleanContent}`)
       .addField('After Edit',`${newMessage.cleanContent}`)
       .addField('Edit In',`<#${message.channel.id}>`)
       .addField('By', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});




 client.on('message', async message => {
 
   if (message.content.startsWith("!new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(d1631e)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!closed")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتبconfirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === 'confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('لم يتم تقفيل التكت').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});




client.on("message", (message) => {
    if (message.content.startsWith("!cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
                  message.channel.send('__**Done ✅**__')                
    }
    });


client.on("message", (message) => {
    if (message.content.startsWith("!ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
                  message.channel.send('__**Done ✅**__')            
    }
    });







client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});





client.on("message", msg => {
    var prefix = "!";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});






client.on('message', message => {
    if (message.content.startsWith("!av")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});








client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });




client.on('message', message => {
    if(message.content == '!member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });







client.on("message", message => {
if(message.content.startsWith(prefix + "vmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(true).then(() => {
message.channel.send(`Successfully Muted ${mnt} :+1:`)
}).catch(console.error);
}
if(message.content.startsWith(prefix + "unvmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
}).catch(console.error);
}
});




client.on('message', message => {
     if (message.content === "!support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/4hKrskv**")
     
     
  message.channel.sendEmbed(embed);
    }
});







client.on('message',message =>{
		var command = message.content.toLowerCase().split(" ")[0];
		  var args = message.content.toLowerCase().split(" ");
		  var userM = message.mentions.users.first()
		  if(command == prefix + 'unban') {
			  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
			  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
			  if(!args[1]) return  message.channel.send(':no_entry: | Please type the ID of user');
			  if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');
			  message.guild.fetchBans().then(bans => {
				  var Found = bans.find(m => m.id === args[1]);
				  if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
				  message.guild.unban(args[1]);
				  message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
				 
				  let banInfo = new Discord.RichEmbed()
				  .setTitle('**New Unbanned User !**')
				  .setThumbnail(message.author.avatarURL)
				  .setColor('GREEN')
				  .setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
				  .setTimestamp()
				  .setFooter(userM.user.tag, userM.user.avatarURL)
				 
				  let incidentchannel = message.guild.channels.find(`name`, "incidents");
				  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
				  incidentchannel.send(banEmbed);
				  }
	   
			  )}
			})














client.on('message', message => {
	var prefix = "!";
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});













client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","BeatBoxer"));
    });








client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '379952455003406338') return;

if (message.content.startsWith(prefix + 'g')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});






client.on('message', eyad => {
  if (eyad.content.startsWith('!vban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("❎ | **انت لا تمتلك الخاصيه المطلوبه**");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})








client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "!savatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });




client.on('message', async edward => {
    // i said , Best Arabic Developer is ABADY .
    client.ed = await client.users.get("379952455003406338");// AKAME Malicious Codes
    var edwardEmbed = new Discord.RichEmbed()
    .setColor("#7289DA")// AKAME
    .setAuthor(edward.guild.name,edward.guild.iconURL)
    .setFooter(`Malicious Codes , Akame Copyright;`,client.ed.displayAvatarURL)
    .setThumbnail(edward.guild.iconURL);
    var user = edward.mentions.members.first();// AKAME Malicious Codes
    var filter;
    var smartu;
    var role;
    var type;
    var textCo;// AKAME Malicious Codes
    var voiceCo;
    filter = m => m.author.id == edward.author.id && !m.content.startsWith(prefix);
    var es = edward.content.slice(prefix.length).split(" ")[0];
    var command = es.toLowerCase();
   if (command != "mute") return undefined;
   if (!edward.guild.me.hasPermission("ADMINISTRATOR")) return edward.channel.send({embed: edwardEmbed
       .setDescription(`:sparkles: | ${edward.author} Error;\`\`\`diff\n- Sorry , but i miss ADMINISTRATOR permission.\`\`\``)
   });//wut u looking at ? stop clear my copyright bitch!
   if (!user) {
       edward.channel.send({embed: edwardEmbed
           .setDescription(`** ${edward.author} | :cyclone: mention someone please .**`)// AKAME Malicious Codes
       });
      await edward.channel.awaitMessages(filter,{
                time: 10000,// AKAME Malicious Codes
                errors: ["time"],
                max: 1
            }).then(respo => {
            user = respo.first().mentions.members.first()}).catch(error => {
                ms.delete(); // smartu everywhere  nah ?
            });
   }// AKAME
     if (user && user.id != edward.author.id) {
         smartu = "Smartu Team is here man . u cant edit this message nah . , this isn't easter egg , akame , sweetie , M7md , OwO";
         var ms = await edward.channel.send({embed: edwardEmbed
             .setDescription(`**:sparkles: | React with Type;**\nText; 💭\nVoice; 📢`)
         });
            var textRe = "💭";// stop boring me YATO . Arabic devs like shit.  
            await ms.react(textRe);// AKAME
            var voiceRe = "📢";
            await ms.react(voiceRe);// AKAME Malicious Codes
            var textFilt = (reaction, user) => {
                return reaction.emoji.name === `${textRe}` && user.id === edward.author.id;// AKAME Malicious Codes
            };
            var voiceFilt = (reaction, user) => {
                return reaction.emoji.name === `${voiceRe}` && user.id === edward.author.id;
            };
            voiceCo = ms.createReactionCollector(voiceFilt, {
                max: 1// AKAME Malicious Codes
            });
            textCo = ms.createReactionCollector(textFilt, {
                max: 1
            });
            textCo.on('collect', async resp => {// AKAME Malicious Codes
                 type = "text";
                 mute(user);
            });
             voiceCo.on('collect', async resp => {
                type = "voice";
                mute(user);
            })}// AKAME
            var mute = async function(some) {
                if (!smartu || smartu != "Smartu Team is here man . u cant edit this message nah . , this isn't easter egg , akame , sweetie , M7md , OwO") return undefined;
                if (type == "text") {
                    role = edward.guild.roles.find(s => s.name == "Muted");
                    edwardEmbed// AKAME
                    .setDescription(`:leaves: | \`\`\`diff\n+ ${user.user.username} has been text muted!\`\`\``);// AKAME Malicious Codes
        edward.delete();
        ms.edit({embed: edwardEmbed}).then(msg => msg.delete(15000));
        user.addRole(role);
        ms.clearReactions();// AKAME
                } else if (type == "voice") {
                    // oh shit . reebel will steal my code . any way i placed my copyrights already . haha i got u .
                    if (!user.voiceChannel) return ms.edit(`${edward.author} | Sorry but ${user} is not in voiceChannel.`);// AKAME
                     edwardEmbed
                    .setDescription(`:leaves: | \`\`\`diff\n+ ${user.user.username} has been voice muted!\`\`\``);// AKAME
        edward.delete();
        ms.edit({embed: edwardEmbed}).then(msg => msg.delete(15000));// AKAME Malicious Codes
        user.setMute(true);// AKAME
        ms.clearReactions();// AKAME Malicious Codes
                }};
});










client.on('message', eyad => {
  if (eyad.content.startsWith('!uvban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 الان يمكنك الدخول الي الرومات الصوتيه:)
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
الان يمكنك الدخول الي الرومات الصوتيه
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
})






      
      
client.login(process.env.BOT_TOKEN);

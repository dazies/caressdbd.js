const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello hell!");
});

app.listen(3000, () => {
  console.log("Project is ready!");
});

const dbd = require("dbd.js");
const bot = new dbd.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[prefix]",
});
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command(command)
} 
}
bot.variables({
  prefix: "*",
	errorcol: "",
  rch: "",
  rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
  lvl: "0",
  exp: "0",
  rexp: "40",
  rsystem: "0",
  Snipe: "",
  hugs: "",
  kisses: "",
  XP: "0",
  Bank: "0",
  Wallet: "0",
  psuffix: "0",
  tv: "0",
  duffle: "0",
  bag: "0",
  smartphone: "0",
  laptop: "0",
  car: "0",
  truck: "0",
  helicopter: "0",
  apartment: "0",
  house: "0",
  mansion: "0",
  DailyChest: "0",
  lucky: "0",
  spiteful: "0",
  afk: "",
  afkwhy: "No reason given",
});
















//bot status start
bot.status({
  text: "Invite your friends!",

  type: "LISTENING",

  time: 12
});

bot.status({
  text: "Caress",

  type: "WATCHING",

  time: 12
});

bot.status({
  text: "Made by dazies! <3",

  type: "PLAYING",

  time: 12
});

//bot status end

 



bot.joinCommand({
  channel: "816039349317140480",
  code: `$title[Welcome to $serverName!]
  $description[<@$authorID>
	There is now $membersCount members]
  $color[36393E]
  $footer[Invite your friends!!  ♡ ♡ ♡]
  $addTimestamp
	$thumbnail[$authorAvatar]`
});
bot.onJoined();


bot.leaveCommand({
  channel: "816039367042531378",
  code: `$title[$username has left $servername]
  $description[ <@$authorID>
	There is now $membersCount members]
  $color[36393E]
  $footer[ There is now $membersCount members | come again!  ♡ ♡ ♡]
  $addTimestamp
	$thumbnail[$authorAvatar]`
});
bot.onLeave();





bot.command({
  name: "<@806148573874880552>",
  code: `$title[Bot Name]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[RANDOM]`,
  nonPrefixed: true
});

bot.command({
  name: "<@!806148573874880552>",
  code: `$title[Bot Name]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[RANDOM]`,
  nonPrefixed: true
});


//rps awaited
bot.awaitedCommand({
  name: "rock",
  code: `
$randomText[
➖│I chose \`rock\` too, it's a tie.;
⛔│I chose \`paper\`, you lost.;
✅│I chose \`scissors\`, you won.]
$randomText[Well Played!;Good Game!]
`
});

bot.awaitedCommand({
  name: "paper",
  code: `$randomText[
✅│I chose \`rock\`, you won.;
➖│I chose \`paper\` too, it's a tie.;
⛔│I chose \`scissors\`, you lost.]
$randomText[Well Played!;Good Game!]
`
});

bot.awaitedCommand({
  name: "scissor",
  code: `$randomText[
⛔│I chose \`rock\`, you lost.;
✅│I chose \`paper\`, you won.;
➖│I chose \`scissors\` too, it's a tie.]
$randomText[Well Played!;Good Game!]
`
});
//rps end

//help command awaited 
bot.awaitedCommand({
 name: "helpHome",
 code: `$editMessage[$message[1];{color:GREEN}{author:Help}{title:Home}{description:**Help Command Pages:**\n🔄 - Return to Home Page (You're here!)\n❓ - Information\n💵 - Economy\n😂 - Fun\n😎 - Staff\n🎵 - Music\n➕ - Setup}{footer:Please wait for all reactions to show up before reacting!}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpInfo",
 code: `$editMessage[$message[1];{color:GREEN}{author:Help}{title:Information}{description:Information Commands}{field:*<command>:acpfp, afk, avatar, bot, calculate, caress, covid, dazies, help, invites, navigate, ping, rank, servericon, serverinfo, snipe, test, translate, urban, userinfo, weather, google, anime, manga, rules :yes}{footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpEco",
 code: `$editMessage[$message[1];{color:GREEN}{author:Help}{title:Economy}{description:Economy Commands}{field:*<command>:bal, beg, buy-apartment, buy-bag, buy-car, buy-helicopter, buy-house, buy-laptop, buy-lucky, buy-mansion, buy-phone, buy-spiteful, buy-truck, buy-tv, daily, deposit, fish, flip-apartment, flip-house, givemoney, heist, lbbank, lbwallet, open-daily, open-lucky, open-spiteful, profile, reset, rob, scrap-car, scrap-helicopter, scrap-truck, search, shop, steal, withdraw, work:yes}{footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpFun",
 code: `$editMessage[$message[1];{color:GREEN}{author:Help}{title:Fun}{description:Fun Commands}{field:*<command>:cat, coinflip, covidtest, dog, epicgamer, esteal, fourtune-cookie, guess, hack, howgay,  hug, joke, kill, kiss, loverate, meme, panda, pp, quote, randcolor, randemoji, rate, rps, say, ship, tableflip,roast, waifu, owoify, sarcastic, fact, cmm, rip, invert, drip, slap, emergency, simp, reverse, milkyou, tweet, worthless :yes}{footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpStaff",
 code: `$editMessage[$message[1];{color:GREEN}{author:Help}{title:Staff}{description:Staff Commands}{field:*<command>:ban, clear, giveaway, kick, poll, reboot, unban:yes}{footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpMusic",
 code: `$editMessage[$message[1];{color:GREEN}{author:Help}{title:Music}{description:Music Commands}{field:*<command>:clearqueue, loop, nowplaying, pause, play, queue, resume, skip, stop, volume:yes}{footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpSetup",
 code: `$editMessage[$message[1];{color:GREEN}{author:Help}{title:Setup}{description:Setup Commands}{field:*<command>:setprefix, setrank, setrankmsg:yes}{footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

//rank awaited commands
bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]` 
})
 
bot.command({
 name: "$alwaysExecute",
 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})
 
bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})

//awaited rank end


















/*
        Update Commands:

        on channel delete
        on channel update
        on channel create
        on role update
        on role create
        on userupdate
        on invite delete
        on invite create
        on ban remove
        on ban add
        on message delete

*/
//basic logging start
bot.channelUpdateCommand({
  channel: "808448738267889684",
  code: `$title[Channel Name Updated]
        $description[Old Name: $oldChannel[name]\n
        New Name: $newChannel[name]]$footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onChannelUpdate();

bot.channelDeleteCommand({
  channel: "808448738267889684",
  code: `$title[Channel Deleted:\n
        $oldChannel[name]] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onChannelDelete();

bot.channelCreateCommand({
  channel: "808448738267889684",
  code: `$title[Channel Created:]
        $descrption[$newChannel[name]] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onChannelCreate();

bot.roleUpdateCommand({
  channel: "808448738267889684",
  code: `$title[Role Name Updated:]
        $description[Old Name: $oldRole[name]\n
        New Name: $newRole[name]] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onRoleUpdate();

bot.roleDeleteCommand({
  channel: "808448738267889684",
  code: `$title[Role Deleted:]
        $description[Old Name: $oldRole[name]] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onRoleDelete();

bot.roleCreateCommand({
  channel: "808448738267889684",
  code: `$title[Role Created:]
        $description[$newRole[name]] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onRoleCreate();

bot.userUpdateCommand({
  channel: "808448738267889684",
  code: `$title[$username has updated their avatar]
        $description[$oldUser[avatar]] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onUserUpdate();

bot.inviteCreateCommand({
  channel: "808448738267889684",
  code: `$title[ Created Invite Info:]
    $description[Creator: $inviteUserID
    URL: $inviteURL
    Channel ID: $inviteChannelID] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp
    `
});
bot.onInviteCreate();

bot.inviteDeleteCommand({
  channel: "808448738267889684",
  code: `$title[Deleted Invite Info:]
    $description[Creator: $inviteUserID\n
    URL: $inviteURL\n
    Uses: $inviteUses\n
    Channel ID: $inviteChannelID] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp
    `
});
bot.onInviteDelete();

bot.banRemoveCommand({
  channel: "808448738267889684", //Add getServerVar to get the servers log channel (if they set it ofcourse)
  code: `$title[$username was unbanned in $serverName] $footer[$parseDate[29835039430;date]] $thumbnail[$authorAvatar] $addTimestamp`
});
bot.onBanRemove();

bot.banAddCommand({
  channel: "808448738267889684",
  code: `$title[$username was banned in $serverName] $footer[$parseDate[29835039430;date]] $addTimestamp $thumbnail[$authorAvatar]`
});
/*    Code Breakdown
$username - The user who got banned
$serverName - the server where the user got banned from
*/
bot.onBanAdd();



//afk command awaited
bot.command({
  name: "$alwaysExecute",
  code: `You are now no longer AFK! 
$setUserVar[afk;false]
$setUserVar[afkwhy;No reason given.]
$onlyIf[$getUserVar[afk]==true;]`
});

bot.command({
  name: "$alwaysExecute",
  code: `
$username | $username[$mentioned[1]] is AFK! Reason if any: $getUserVar[afkwhy;$mentioned[1]]
$onlyIf[$getUserVar[afk;$mentioned[1]]==true;],
nonPrefixed: true`
});
//afk command end



//bot on ready command
bot.readyCommand({
    channel: "808448738267889684",
    code: `
    $title[I have been rebooted!]
    $description[*I'm ready to be used!*]
    **If im spaming, my owner is editing my commands.**
    $footer[I might have new commands!! use command "*hh" to find out!]
    $addTimestamp
    $color[36393E]
      $thumbnail[$randomText[
  https://media.giphy.com/media/fwo7bzEVxbYS4eSNVd/giphy.gif;
  https://media.giphy.com/media/j3mdQpQ9SKxFOWs9gy/giphy.gif;
  https://media.giphy.com/media/J5qQHCpkBiMXsoxDdA/giphy.gif;
  https://media.giphy.com/media/XHdootWqxBuHMUBH5m/giphy.gif;
  https://media.giphy.com/media/kDSnoXA3t6BYtfr9M6/giphy.gif;
  https://media.giphy.com/media/3ohzgSHpvk6b8M7f9e/giphy.gif;
  https://media.giphy.com/media/4NeWHgAWmufJBjQIwm/giphy.gif;
  https://media.giphy.com/media/Pc8pzbqrKBpSM/giphy.gif;
  https://media.giphy.com/media/QmJei3WeJeBs4/giphy.gif;
  https://media.giphy.com/media/BoYXg1G0dX6F2/giphy.gif;
  https://media.giphy.com/media/zlpjKYFesS5lQQaywe/giphy.gif;
  https://media.giphy.com/media/9pffrT1fatfOg/giphy.gif;
  https://media.giphy.com/media/11mwBM4qjFBBwA/giphy.gif;
  https://media.giphy.com/media/1sctVDC9niKqY/giphy.gif;
  https://media.giphy.com/media/vEZHw3s2488UrNT0jC/giphy.gif;
  https://media.giphy.com/media/EhIcaEV7pHeIusJtV7/giphy.gif;
  https://media.giphy.com/media/YnFF7g3nDvL25BxNer/giphy.gif;
  https://media.giphy.com/media/CLXtw6XNyQvywmCQho/giphy.gif;
  https://media.giphy.com/media/MgocKoqeFwOY6I3u2d/giphy.gif;
  https://media.giphy.com/media/zscxAsOaoqvT4x2Z0y/giphy.gif;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F2516dfb2-f4b1-4c7c-a5d1-ba9112f5e760.image.png?v=1613080544110;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F7947b25c-5c5c-4481-9aa1-6c2cde964999.image.png?v=1613080611150;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fa6072831-3d25-48be-bea1-dd163e2e9d7f.image.png?v=1613080638620;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F744dcb6e-3cf3-43ff-bce7-f557b143ea08.image.png?v=1613080665710;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F86dec3aa-42c4-46ee-8d71-a5159ceb931c.image.png?v=1613080686307;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F6d410520-e6cf-4d44-b99f-be518a10d3b0.image.png?v=1613081346012;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F40975e20-6b62-4b21-980f-c4e7df6c8888.image.png?v=1613081380417;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Ff1303668-4166-4bec-856a-eaf9268e0627.image.png?v=1613081463538;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F5ecbaf37-6dbd-4527-8811-7c5df977be24.image.png?v=1613081499588;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F36ececcd-b549-4c4a-ac8a-cc116f3a640b.image.png?v=1613081523524;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fd8db090f-3506-4fbe-b551-c94f5c807098.image.png?v=1613081597415;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Ffd9cab1f-fa1d-4936-9ec3-b2e11f41f0ca.image.png?v=1613081691476;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F06523136-8d27-44c3-9702-c17441cb114c.image.png?v=1613081731570;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F27e805cc-2b0e-4704-9968-4b5a80d2928e.image.png?1613081773087;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F9e17308c-160a-49cb-bd9d-00b92abf675e.image.png?v=1613081808401;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fca423313-0882-48e7-a480-955a435848d5.image.png?1613081813881;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fthumbnails%2F9065c82a-20ea-4b11-b6aa-5e97337ba583.image.png?1613081825398;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fd6df01f2-889f-4d8c-a311-e316209e5127.image.png?1613081830130;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fthumbnails%2F3a73bd13-27da-425b-8773-62c414c628a6.image.png?1613081883262;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fthumbnails%2F405295f6-8673-4936-800f-c3a61dd60261.image.png?1613081888544;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Ffc0a411d-f98f-4d2c-a1d1-04ad9fdef207.image.png?1613081894492;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F39f4fd63-6dec-4a5c-aa87-d0b57bee6a81.image.png?1613081905395;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fthumbnails%2F63588943-0369-40f8-a0a6-b1f7d75ea2cd.image.png?1613081915417;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F15dbebe1-e894-48f9-9ae4-0eee16fd4b2e.image.png?1613081923764;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fthumbnails%2Fb7990b4e-7c0a-4ffd-82ab-bbfa385bad5d.image.png?1613081924628;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F7c0a1d1d-a4c5-4456-a044-30271e4150db.image.png?1613081997953;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Fee48b8cc-7a4d-45ef-943d-f3f7ff784317.image.png?1613082161417;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2Ff6f294aa-6329-4b5b-a89e-10491915e1a8.image.png?1613082164999;
  https://cdn.glitch.com/1566e8aa-86d0-4813-82fd-e9b536cacae7%2F0d9822ed-b699-46d0-a245-8c43b6f6c8fd.image.png?1613082174428
  ]]
    `
})
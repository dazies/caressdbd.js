module.exports = ({
 name: "help",
 code: `
 $if[$message[1]==information]
 $sendMessage[{color:GREEN}{author:Help}{title:Information}{description:Information Commands}{field:*<command>:acpfp, afk, avatar, bot, calculate, caress, covid, dazies, help, invites, navigate, ping, rank, servericon, serverinfo, snipe, test, translate, urban, userinfo, weather, emojis:yes}{footer:🔄 - Return to Home Page};no]
 $elseIf[$message[1]==economy]
 $sendMessage[{color:GREEN}{author:Help}{title:Economy}{description:Economy Commands}{field:*<command>:bal, beg, buy-apartment, buy-bag, buy-car, buy-helicopter, buy-house, buy-laptop, buy-lucky, buy-mansion, buy-phone, buy-spiteful, buy-truck, buy-tv, daily, deposit, fish, flip-apartment, flip-house, givemoney, heist, lbbank, lbwallet, open-daily, open-lucky, open-spiteful, profile, reset, rob, scrap-car, scrap-helicopter, scrap-truck, search, shop, steal, withdraw, work:yes}{footer:🔄 - Return to Home Page};no]
 $endelseIf
 $elseIf[$message[1]==fun]
 $sendMessage[{color:GREEN}{author:Help}{title:Fun}{description:Fun Commands}{field:*<command>:anime, cat, coinflip, covidtest, dog, epicgamer, esteal, fourtune-cookie, guess, hack, howgay,  hug, joke, kill, kiss, loverate, meme, panda, pp, quote, randcolor, randemoji, rate, rps, say, ship, tableflip, waifu:yes}{footer:🔄 - Return to Home Page};no]
 $endelseIf
  $elseIf[$message[1]==staff]
 $sendMessage[{color:GREEN}{author:Help}{title:Staff}{description:Staff Commands}{field:*<command>:ban, clear, giveaway, kick, poll, reboot, unban:yes}{footer:🔄 - Return to Home Page};no]
 $endelseIf
   $elseIf[$message[1]==music]
 $sendMessage[{color:GREEN}{author:Help}{title:Music}{description:Music Commands}{field:*<command>:clearqueue, loop, nowplaying, pause, play, queue, resume, skip, stop, volume:yes}{footer:🔄 - Return to Home Page};no]
 $endelseIf
   $elseIf[$message[1]==setup]
 $sendMessage[{color:GREEN}{author:Help}{title:Setup}{description:Setup Commands}{field:*<command>:setprefix, setrank, setrankmsg:yes}{footer:🔄 - Return to Home Page};no]
 $endelseIf
 $else
 $reactionCollector[$splitText[1];$authorID;1m;🔄,❓,💵,😂,😎,🎵,➕;helpHome,helpInfo,helpEco,helpFun,helpStaff,helpMusic,helpSetup;yes]
 $textSplit[$sendMessage[{color:GREEN}{author:Help:$authorAvatar}{title:Home}{description:**Help Command Pages:**\n🔄 - Return to Home Page (You're here!)\n❓ - Information\n💵 - Economy\n😂 - Fun\n😎 - Staff\n🎵 - Music\n➕ - Setup}{footer:Requested by $userTag[$authorID]:$authorAvatar}{timestamp:ms};yes]; ]
 $endif
 $cooldown[5s;You're on cooldown! Please wait %time%.]
 $suppressErrors[{color:FF0000}{title:Something went wrong...}{description:If you see this, something probably went wrong. Please immediately report this to the developer!}]`
})
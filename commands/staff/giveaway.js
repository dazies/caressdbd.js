module.exports = ({
  name: "giveaway",
  code: `
$editMessage[$getServerVar[pene];{title:Giveaway Finished :tada:}{description:Pized: \`$sliceMessage[1]\` :tada:
Hosted by: **$userTag[$authorID]**
Winner: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;None, there were no participants.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RED}{footer:Giveaway Finished.:$authorAvatar}]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;There were not enough participants.];false;El ganador del premio \`$sliceMessage[1]\` es: <@$randomText[$joinSplitText[;]]>, Felicidades!!!]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[pene];:tada:;id];$clientID,;];,]
$wait[$message[1]]
$setServerVar[pene;$sendMessage[{title:React with :tada: to participate!.}{description::tada: Pized: \`$sliceMessage[1]\` :tada:
Hosted by: **$userTag[$authorID]**
Time: **$message[1]**}{timestamp}{color:RED}{reactions::tada:};yes]]
$onlyIf[$sliceMessage[1]!=;{title:Looking for Arguments}{description:You have not put any prize to draw. Follow this format: 
\`\`\`
- $getServerVar[prefix]giveaway <time> <award>.\`\`\`
\`Arguments with <> are required\`
}{color:ORANGE}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title:Invalid format}{description:The time format you just entered is not valid. Follow this example:
\`\`\`
1s means 1 second
1m means 1 minute
1h means 1 hour
1d means 1 day
\`\`\`}{color:ORANGE}]

$onlyPerms[admin;{title:Insufficient Permissions}{description:You don't have permission to \`ADMINISTRADOR\` to make use of this command.}{color:RED}]
`
});
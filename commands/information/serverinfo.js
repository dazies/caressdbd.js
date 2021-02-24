module.exports = ({
  name: "server",
  aliases: ["server-info", "srinfo", "serverinfo"],
  code: ` 
$title[$serverName[$guildID]] 
$description[ 
:crown:Owner: 
**<@$ownerID>** 
🌍Region: 
**$serverRegion** 
🔒Verification Level: 
**$serverVerificationLevel** 
🎆Boosts:
**$serverBoostCount** 
🤖Bots Count:
**$botCount** 
Members Count: 
 **$membersCount[$guildID;all;no]** 
😀Emojis Count: 
**$emojiCount**
Server Emojis: 
$serverEmojis] 
$color[RANDOM]
$thumbnail[$serverIcon]`
});
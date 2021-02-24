module.exports = ({
  name: "reboot",
  aliases: ["rbt"],
  code: `$title[I am rebooting right now.]
$botTyping
$reboot[server.js]
$addCmdReactions[🎉;✔]
$onlyBotPerms[managemessages;**I don't have \`ADMIN\` permissions to use this command**]}); //server.js aka our main file, this will restart the bot
$onlyForIDs[517923296923090946;:x: You can't run this command]`
});
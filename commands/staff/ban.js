module.exports = ({
  name: "ban",
  code: `$ban[$findUser[$message[1]];By $userTag[$authorID] Reason: $sliceMessage[1];7]
$username[$findUser[$message[1]]] **has been banned ✅**
$onlyBotPerms[ban;**⛔ I don't have ban perms**]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ Please give me user ID or mention someone**]
$onlyPerms[ban;**⛔ You need ban permission**]`
});
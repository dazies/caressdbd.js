module.exports = ({
  name: "afk",
  code: `$setUserVar[afk;true] $setUserVar[afkwhy;$noMentionMessage]
$wait[10s]
$username | You are now AFK. Reason if any: $noMentionMessage`
});
module.exports = ({
  name: "esteal",
  aliases: "se",
  code: `
$title[Emoji Added]
$color[RANDOM]
$description[Successfully add emoji $addEmoji[https://cdn.discordapp.com/emojis/$findNumbers[$message[1]];$message[2];yes] with name $message[2]]
$footer[By $username[$authorID]]
$addTimestamp
$suppressErrors[❌Not a valid emoji or an emoji ID, Correct usage Steal (emoji) (name)]
$onlyIf[$charCount[$message[2]]>=2;❌Your emoji name must be longer than two characters]
$onlyIf[$findNumbers[$message[1]]!=;;❌Not a valid emoji or an emoji ID]
$onlyIf[$message[2]!=;❌Please provide a name to add this emoji]
$onlyIf[$message[1]!=;❌Please provide an emoji to add]
$onlyPerms[manageemojis;❌You don't have enough permissions to add emojis to the server]`
});
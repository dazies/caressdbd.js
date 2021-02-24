module.exports = ({
  name: "hug",
  code: `
$description[<@$authorID> Hugs <@$mentioned[1]>]

$image[$jsonRequest[https://nekos.life/api/v2/img/hug;url]]

$color[39393E]
$footer[$username[$authorID] hugged others $sum[$getVar[hugs;$authorID];1] time's now]

$deletecommand

$setVar[hugs;$sum[$getVar[hugs;$authorID];1];$authorID]

$onlyIf[$message!=;]

$onlyIf[$message[1]!=everyone;]

$onlyIf[$userExists[$mentioned[1]]==true;This user does not exist, Please mention a user that exists]

$onlyIf[$authorID!=$mentioned[1];You can't hug yourself, It's impossible]

`
});
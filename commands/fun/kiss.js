module.exports = ({
  name: "kiss",
  code: `
$description[<@$authorID> Kisses <@$mentioned[1]>]

$image[$randomText[https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif;https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif;https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif;https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif;https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif;https://media.giphy.com/media/uAvMPK3narqc8/giphy.gif;https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif;https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif;https://media.giphy.com/media/cOdysiCacdyIU/giphy.gif;https://media.giphy.com/media/aww4aazk5NHSU/giphy.gif;https://media.giphy.com/media/B0wIH1r2SLeVi/giphy.gif]]

$color[39393E]
$footer[$username[$authorID] kiss others $sum[$getVar[kisses;$authorID];1] time's now]

$deletecommand

$setVar[kisses;$sum[$getVar[kisses;$authorID];1];$authorID]

$onlyIf[$message!=;]

$onlyIf[$message[1]!=everyone;]

$onlyIf[$userExists[$mentioned[1]]==true;This user does not exist, Please mention a user that exists]

$onlyIf[$authorID!=$mentioned[1];You can't kiss yourself, It's impossible]

`
});
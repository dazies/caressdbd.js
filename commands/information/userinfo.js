module.exports = ({
  name: "info",
  code: `
$thumbnail[$userAvatar[$findUser[$message]]]
$title[User Info]
$description[[$username[$findUser[$message]]\\]($userAvatar[$findUser[$message];2048;yes])
**Name:**
$username[$findUser[$message]]#$discriminator[$findUser[$message]]
**ID:**
$mentioned[1;yes]
**Created at:**
$creationDate[$findUser[$message];date]
($creationDate[$findUser[$message];time])
**Joined:**
$memberJoinedDate[$findUser[$message];time] ago.
**Badges:**
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];Early Verified Developer;$customEmoji[Developer]];House Balance;$customEmoji[Balance]];House Brilliance;$customEmoji[Brilliance]];House Bravery;$customEmoji[Bravery]];Verified Developer;];Discord Partner;$customEmoji[Partner]];Early Supporter;$customEmoji[Early]];Verified Bot;$customEmoji[BotCheck]]
**Platform:**
$customEmoji[$platform[$findUser[$message]]] $platform[$mentioned[1;yes]]
**Status:**
$customEmoji[$status[$findUser[$message]]] $status[$mentioned[1;yes]]
**Custom Status:**
$getCustomStatus[$findUser[$message]]
**Highest Role:**
<@&$highestRole[$findUser[$message]]>
**Roles:**
$userRoles[$findUser[$message];mentions]
**Permissions:**
$userPerms[$findUser[$message]]
]
$color[00FCFF]`,
  aliases: ["who", "whois", "user", "urinfo", "userinfo", "whoami"]
});
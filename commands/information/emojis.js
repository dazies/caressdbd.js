module.exports = ({
 name: "eval",
 code: `$eval[
$color[00ff89]
$author[DBD.JS CODE EVAL;https://images-ext-1.discordapp.net/external/uQUyf1lDAJ-P-chqmBXxA16SS76hXuiHHyHNklfajrU/https/cdn.discordapp.com/emojis/314405560701419520.png]
$addField[:outbox_tray: Output:;\`\`\`$eval[$message;yes]\`\`\`]
$addField[:inbox_tray: Input:;\`\`\`$message\`\`\`]
]

$suppressErrors[{color:FF0000}{author:Error}{description:An error occurred. Could not successfully evaluate this code. An error has been logged in the console.}{footer:eval command | Developer
Command}]

$onlyForIDs[517923296923090946;{author:Error}{description:You are not my owner, you do not have the permission to execute this command.}{footer:Developer
Command}]`
});
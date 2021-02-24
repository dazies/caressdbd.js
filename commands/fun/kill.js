module.exports = ({
  name: "kill",
  code: `$title[🔪 killing 🔪]
$argsCheck[>1;You must mention someone to kill, suicide ain’t good..]
$thumbnail[$authorAvatar]
$description[You stabbed <@$mentioned[1]>]
$footer[Stabbed them]
$addTimestamp
$color[86cf7c]`
});
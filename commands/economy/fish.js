module.exports = ({
		
name: "fish",
code: `$color[RANDOM]
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet];$random[50;100]]]
$title[$username is fishing]
$description[You fished a $randomText[🥿;👠;👡;👢;👞;👟;🥾;🦀;🦑;🐙;🦞;🦐;🐠;🐟;🐡;🐬;🦈;🐳;🐋;🐊;🦢;🦆] and you get $$random[50;100;200;500]]
$globalCooldown[15m;**⏳ You can fish again in %time%**]`
})
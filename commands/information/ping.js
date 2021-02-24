module.exports = ({
 name: "ping",
 description: "Shows the bot's latency.",
 usage: "ping",
 code: `$if[$ping<51]
 $title[:ping_pong: Ping!]
 $description[:white_circle: = $pingms]
 $color[dadada]
$addTimestamp
$elseIf[$ping<150]
$title[:ping_pong: Ping!]
 $description[:green_circle: = $pingms]
 $color[GREEN]
$addTimestamp
$endelseif
$elseIf[$ping<300]
$title[:ping_pong: Ping!]
 $description[:yellow_circle: = $pingms]
 $color[YELLOW]
$addTimestamp
$endelseif
$elseIf[$ping<500]
$title[:ping_pong: Ping!]
 $description[:orange_circle: = $pingms]
 $color[ORANGE]
 $addTimestamp
$endelseif
$elseIf[$ping<1000]
$title[:ping_pong: Ping!]
 $description[:red_circle: = $pingms]
 $color[RED]
 $addTimestamp
$endelseif
$elseif[$ping>1000]
$title[:ping_pong: Ping!]
 $description[:black_circle: = $pingms]
 $color[BLACK]
$addTimestamp
$endelseif
$endif`
});
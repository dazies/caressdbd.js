module.exports = ({
name: "stonks",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/stonks/?image=$userAvatar[$mentioned[1;yes]]]
$title[Stonks!]
$color[$random[11111;99999]]`
});
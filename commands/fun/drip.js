module.exports = ({
name: "drip",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/drip/?image=$userAvatar[$mentioned[1;yes]]]
$title[OnO]
$color[$random[11111;99999]]
$onlyIf[$mentioned[1]!=;{description:Please mention a user!}{title:Error!}]`
});
module.exports = ({
name: "slap",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/slap/?image=$userAvatar[$mentioned[1]]?image2=$authorAvatar]
$title[Ouch . .]
$color[$random[11111;99999]]
$onlyIf[$mentioned[1]!=;{description:Please mention a user!}{title:Error!}]`
});
module.exports = ({
name: "simp",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/simp/?image=$userAvatar[$mentioned[1]]]
$title[SIMP]
$color[$random[11111;99999]]
$onlyIf[$mentioned[1]!=;{description:Please mention a user!}{title:Error!}]`
});

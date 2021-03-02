module.exports = ({
name: "milkyou",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/milkyou/?image2=$userAvatar[$mentioned[1;yes]]?image=$authorAvatar]
$title[M i l k]
$color[$random[11111;99999]]
$onlyIf[$mentioned[2]!=;{description:Please mention a user!}{title:Error!}]
$onlyIf[$mentioned[1]!=;{description:Please mention a user!}{title:Error!}]`
});
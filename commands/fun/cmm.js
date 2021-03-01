module.exports = ({
name: "cmm",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/changemymind/?text=$replaceText[$message; ;+]]
$title[ChangeMyMind]
$color[$random[11111;99999]]`
});
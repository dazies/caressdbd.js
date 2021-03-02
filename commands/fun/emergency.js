module.exports = ({
name: "emergency",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/meeting/?text=$message]
$title[Emergency Meeting]
$color[$random[11111;99999]]
$onlyIf[$message!=;{description:Please provide some text!}{title:Error!}]`
});
module.exports = ({
name: "reverse",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/reverse/?text=$message]
$title[Nope]
$color[$random[11111;99999]]
$onlyIf[$message!=;{description:Please provide some text!}{title:Error!}]`
});

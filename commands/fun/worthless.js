module.exports = ({
name: "worthless",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/worthless/?text=$message]
$title[Worthless]
$color[$random[11111;99999]]
$onlyIf[$message!=;{description:Please provide some text!}{title:Error!}]`
});

module.exports = ({
name: "tweet",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/trump/?text=$message]
$title[Trump New Tweet]
$color[$random[11111;99999]]
$onlyIf[$message!=;{description:Please provide some text!}{title:Error!}]`
});

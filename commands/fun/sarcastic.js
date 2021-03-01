module.exports = ({
name: "sarcastic",
code: `
$jsonRequest[https://api.fc5570.ml/api/sarcastic?text=$replaceText[$message; ;%20];message]
$onlyIf[$message[1]!=;You need to type something!]
`
})
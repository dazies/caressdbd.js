module.exports =({
	  name: "translate",
  code: `
name: "translate",
code: $jsonRequest[https://normal-api.ml/translate?text=$replaceText[$message[2]; ;$20;-1]&to=$message[1];translated]`
});
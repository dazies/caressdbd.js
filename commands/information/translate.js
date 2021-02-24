module.exports =({
	  name: "translate",
  code: `
Text: $message
Translated text: $jsonRequest[https://api.somecool.repl.co/translate?text=$message;translated]
Translated from: $jsonRequest[https://api.somecool.repl.co/translate?text=$message;translated_from]`
});
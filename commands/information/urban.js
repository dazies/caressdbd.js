module.exports = ({
  name: "urban",
  code: `
 $color[F49907]
 $author[Urban Dictionary;https://media.discordapp.net/attachments/753365040274341898/760967967327518761/urban-dictionary-android.jpeg.jpg]
 
 $description[:mag_right: Searching Urban...
━━━━━━━━━━━━━━━━━━━━━]
 
 $addField[Written On;$jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;firstresult.written_on]]
 $addField[Downvote;$jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;firstresult.thumbs_down] 👎]
 $addField[Upvote;$jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;firstresult.thumbs_up] 👍]
 $addField[Example;$jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;firstresult.example]]
 $addField[Definition;$jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;firstresult.definition]]
 $addField[Author;$jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;firstresult.author]]
 $addField[Term;[$jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;term]\\]($jsonRequest[https://api.dbdjs.repl.co/urban/definition?term=$message;firstresult.permalink])]
 
 $addTimestamp
 `
});
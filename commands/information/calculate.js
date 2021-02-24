module.exports =({
  name: "calculate",
  code: `
 $djsEval[
 try {
 const m = require('mathjs')
 const ans = m.evaluate('$message')
 d.message.channel.send('Answer is ' + ans)
 } catch {
 d.message.channel.send('Provide valid calculation!')
 }
 ]
 `
});
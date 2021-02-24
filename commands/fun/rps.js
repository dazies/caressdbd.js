module.exports = ({
  name: "rps",
  code: `$awaitMessages[$authorID;10s;rock,paper,scissor;rock,paper,scissor;You ran out of time]
Rock Paper Scissors!
Choose an option.
\`rock\` / \`paper\` / \`scissor\`
$deleteIn[10s]
`
});
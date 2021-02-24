module.exports = ({
  name: "guess",
  code: `
$if[$message==$random[1;10]]
You guessed right!

$else

You failed, the number was $random[1;10]!

$endif
$onlyIf[$message<=10;You can only choose between 1-10!]
$onlyIf[$message>=1;You can only choose between 1-10!]
$onlyIf[$isNumber[$message]==true;Only numbers are allowed!]`
});
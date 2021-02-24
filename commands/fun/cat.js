module.exports = ({
  name: "cat",
  code: `
$description[**$jsonRequest[https://no-api-key.com/api/v1/animals/cat;fact]**]

$image[$jsonRequest[https://no-api-key.com/api/v1/animals/cat;image]]
`
});
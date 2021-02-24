module.exports = ({
  name: "panda",
  code: `
$description[**$jsonRequest[https://no-api-key.com/api/v1/animals/panda;fact]**]

$image[$jsonRequest[https://no-api-key.com/api/v1/animals/panda;image]]
`
});
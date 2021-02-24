module.exports = ({
  name: "dog",
  code: `
$description[**$jsonRequest[https://no-api-key.com/api/v1/animals/dog;fact]**]

$image[$jsonRequest[https://no-api-key.com/api/v1/animals/dog;image]]
`
});
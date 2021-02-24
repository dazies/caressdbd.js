module.exports =({
	  name: "covid",
  code: `$title[Covid-19 Global Stats]
 $description[**Cases**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;cases]] Cases
**Deaths**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;deaths]] Deaths
**Today Cases**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayCases]] Today Cases
**Recovered**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;recovered]] Recovered]
$thumbnail[https://dshs.texas.gov/uploadedImages/Content/Consumer_and_External_Affairs/coronavirus/banner.png]
$footer[Pandemic Statistics.]
$color[RANDOM]`
});
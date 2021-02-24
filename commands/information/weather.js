module.exports = ({
  name: "weather",
  code: `$title[Weather In $message] 
$description[
Location: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]**
Temperature: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;]**
Humidity: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]**
Wind Speed: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]**
Wind Display: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;]**
Observation Time: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;observation_time;]**
]
$argsCheck[>1;❌Please type a location!]
$color[#f2f2f2]`
});
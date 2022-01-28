function getWeatherData(wData) {
  $('.results').html(`
    <div class="results">
      <h1>${wData.name} </h1>
      <li>${wData.weather[0].description}</li>
      <br>
      <li>High of ${wData.main.temp_max} Celsius </li>
      <br>
      <li>A low of ${wData.main.temp_min} Celsius </li>
      <br>
      <li>Temperature: ${wData.main.temp} Celsius</li>
      <br>
      <li>Feels like: ${wData.main.feels_like} Celsius</li>
    </div>
    `)
}
var apikey= "3424f202441d62b5905c9e77fdd2111e";






$(document).ready(function() {
  // WRITE YOUR CODE HERE.
  //console.log("HelloWorld!")

      $('form').on('submit', function() {
        event.preventDefault()
          $("#titleTwo").hide(100);
          $("#title").hide(100);
          $(".searchdiv").hide(100);
          $(".contact-div").hide(100);
          $(".socialmedia").hide(100);
          $("#buttonagain").css("display", "flex");
          $(".results").css("display", "flex");
          //$(".results").css("border", "2px solid white");
          //$(".results").addClass("resultsshadow");
          //$(".results").addClass("resultsback");

        });

      $("#buttonagain").click(function () {
              location.reload(true);
          });

          $('.searchForm').submit(function(e) {
            e.preventDefault()
            //getWeatherData(data)
          var userInput= $(".names") .val()
            $.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${userInput}&appid=${apikey}`, function (data){
              console.log(data)
              getWeatherData(data)
            })
          })

          $('.searchForm').submit(function(e) {
            e.preventDefault()
            //getWeatherData(data)
          var userInput= $(".names") .val()
            $.get(`https://www.worldtides.info/api/v2${userInput}&appid=${apikey}`, function (data){
              console.log(data)
              getTimeZone(data)
            })
          })



      });

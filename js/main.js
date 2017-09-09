// JavaScript for digital clock
$(document).ready(function(){

 function showTime(){ 

    var today = new Date();
    var date  = today.getDate(); //day of the month
    var day   = today.getDay(); //day of the week
    console.log(day);
    var month = today.getMonth() //month of the year
    var year  = today.getFullYear(); //year
    var hour  = today.getHours();
    var min   = today.getMinutes();
    var sec   = today.getSeconds();

    // Set variables for weekdays and months
    var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    //Text on the screen
    var dateToday = 'Today is ' + weekDays[day] + ' ' + months[month] + ' ' + day + ', ' + year;

    //Add zero to seconds if less than 10
    if(sec < 10){
      sec = '0'+ sec;
    }
    //If hour is greater than 12 or shows military time, convert to regular time, add AM or PM
    if(hour > 12){
      var hourPM = hour - 12;
      var currTime = hourPM + ':' + min + ':' + sec + ' PM';
    } else {
      currTime = hour + ':' + min + ':' + sec + ' AM';
    }

    // Display date and time in DOM
    document.getElementById('date').textContent = dateToday;
    document.getElementById('time').innerHTML = 'The time is ' + currTime; 

  //Call the function every second so that clock keeps ticking 
    setTimeout(function() {
        showTime()
    }, 1000)
  }

  //Event lister that starts function when the page loads
  document.getElementById('time').addEventListener('onload', showTime(), false)

});

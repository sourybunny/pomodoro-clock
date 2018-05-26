$( document ).ready(function() {
    $("#time1").text(pomomin+":"+pomosec+'0');
  $(".content").html('<i class="fa fa-user-o fa-3x" aria-hidden="true"></i><br>start working!');
});

function formatTime(time){
  if(time<10){
    time="0"+time;
  }
  return time;
}

//set initial break time and session time
var breaknum=5;
$("#break-length").text(breaknum);
var pomodoro=25;
$("#session-length").text(pomodoro);


//increment session time
$("#session-plus").on("click",function(){
pomodoro=pomodoro+1;
 $("#session-length").text(pomodoro);
      pomomin=pomodoro;
    // pomosec=formatTime(pomosec);
  $("#time1").text(formatTime(pomomin)+":"+pomosec+'0');
})
 //decrement session time
$("#session-minus").on("click",function(){
pomodoro=pomodoro-1;
  if(pomodoro<1){
    pomodoro=1;
  }
   $("#session-length").text(pomodoro);
    pomomin=pomodoro;
  $("#time1").text(formatTime(pomomin)+":"+pomosec+'0');
})


//increment break time
$("#break-plus").on("click",function(){
breaknum=breaknum+1;
   $("#break-length").text(breaknum);
})
//decrement break time
$("#break-minus").on("click",function(){
breaknum=breaknum-1;
  if(breaknum<1){
    breaknum=1;
  }
     $("#break-length").text(breaknum);
})


//set final pomodoro to pomomin and break time to breakmin
var pomomin=pomodoro;
var pomosec=0;
var breakmin=breaknum;
var breaksec=0;
var t1,t2;


$("#start").on("click",function(){
 startPomodoro();
})

function startPomodoro(){
  $(".buttons").hide();
  $("h3").text("Pomodoro started");
  $(".content").html('<i class="fa fa-laptop fa-4x"></i><br>keep working!');
  pomosec=0;
  pomomin=pomodoro;
  clearInterval(t1);
  clearInterval(t2);
  t1=setInterval(decrementPomodoro,1000);
}

function decrementPomodoro(){
  pomosec--;
  if(pomosec<0){
    pomosec=60;
    pomomin-=1;
    if(pomomin<0){
      pomosec=0;
      pomomin=0;
      // clearInterval(t1);
      // startPomodoro();
      document.getElementById("bell").play();
      startBreak();
    } 
  }

 $("#time1").text(formatTime(pomomin)+":"+formatTime(pomosec));
}



function startBreak(){
  $("h3").text("relax");
   $(".content").html('<i class="fa fa-coffee fa-4x" aria-hidden="true"></i><br>chai break!');
  breaksec=0;
  breakmin=breaknum;
  clearInterval(t1);
  clearInterval(t2);
  t2=setInterval(decrementBreak,1000);
}

// //break
function decrementBreak(){
  breaksec--;
  if(breaksec<0){
    breaksec=60;
    breakmin-=1;
    if(breakmin<0){
      breaksec=0;
      breakmin=0;
      // clearInterval(t1);
      document.getElementById("bell").play();
      startPomodoro();
    } 
  }  
 $("#time1").text(formatTime(breakmin)+":"+formatTime(breaksec));
}
  

//reset timer
  $("#reset").on("click",function(){
    reset();
  })


  function reset(){
    $("h3").text("");
    $(".content").html('<i class="fa fa-user-o fa-3x" aria-hidden="true"></i><br>start working!');
    $(".buttons").show();
    clearInterval(t1);
    clearInterval(t2);
    pomodoro=25;
    pomomin=pomodoro;
    pomosec=0;
    $("#session-length").text(pomodoro);
    $("#time1").text(formatTime(pomomin)+":"+formatTime(pomosec));
  }





//   $("#time2").text(min+":"+sec);
   
// }
// t2=setInterval(decrementBreak,1000);
// function breakTime(){
//   s=0;
//   m=pomodoro;

//   decrementBreak();
// }
// function pomodoroTime(){
//   sec=0;
//   min=breaknum;
//   decrementPomodoro();
// }
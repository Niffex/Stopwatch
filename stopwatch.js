window.onload = function(){

  var seconds=00;
  var tens=00;

  var endTens = document.getElementById("tens");
  var endSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

 function startTimer(){
   tens++;

   if(tens <= 9){
     endTens.innerHTML= "0" + tens;
   }

   if(tens > 9){
     endTens.innerHTML= tens;
   }

   if (tens > 99){
     console.log("seconds");
     seconds++;
     endSeconds.innerHTML = "0" + seconds;
     tens = 0;
     endTens.innerHTML = "0" + 0;
   }


   if(seconds>9){
     endSeconds.innerHTML = seconds;
   }
}

   buttonStart.onclick = function(){
     clearInterval(Interval);
     Interval=setInterval(startTimer,10);

   }

     buttonStop.onclick = function (){
       clearInterval(Interval);

     }

   buttonReset.onclick = function(){
     clearInterval(Interval);
     tens= "00" ;
     seconds= "00";
     endTens.innerHTML=tens;
     endSeconds.innerHTML=seconds;
   }







 }

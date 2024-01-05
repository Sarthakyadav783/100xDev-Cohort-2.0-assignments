
// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

//did not want to create index.html ..

let counter =0;
let interval;
function updateCounter(){
  counter ++;
  console.log(counter);
}
function startCounter(){
   interval=setInterval(updateCounter,1000);

}
function stopCounter(){
  if (counter==100){
    clearInterval(interval);//stop the interval when the counter reaches 100

  }
  

}

startCounter();
stopCounter();
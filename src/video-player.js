const video = document.getElementById('video');
const btn_play = document.getElementById('play-button');
const juice = document.getElementById('juice');
console.log("este es el script");

function playAction(){
  btn_play.classList.toggle('fa-play');
  if(video.paused){
    video.play();
  }
  else{
    video.pause();
    
  }
}

function updateJuice(){
  let currentTimePercent = (video.currentTime / video.duration) * 100;
  juice.style.width = currentTimePercent + "%";
}

btn_play.addEventListener('click',playAction);

video.addEventListener('timeupdate', updateJuice)



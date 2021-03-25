
let obj = document.createElement("audio");
    obj.src = "Audio/1.mp3";


if($('.selected').checked){
  $('.selected').on('click', function () {
      obj.pause();
  });
}
else{
  $('.selected').on('click', function () {
      obj.play();
  });
}

function land(){
  $("#landing").css("visibility","hidden");
}

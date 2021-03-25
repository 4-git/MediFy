function soundAlarm(){
        let amount = 1;
        let audio = new Audio("Audio/1.mp3");

        function playAudio() {
			audio.volume = 0.3;
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
        for(let i =0 ;i<amount;i++){

            setTimeout(playAudio,800*i)
        }

}


if($(".selected").focus()){
  soundAlarm();
}

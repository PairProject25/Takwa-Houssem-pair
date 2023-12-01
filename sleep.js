function feed(){
  
    var img = document.getElementById("img3");
    img.src="https://media.tenor.com/Y8WQ1xwb0LkAAAAi/sleepy-cat.gif"
    if (this.tiredness === 0) {
      return "I'm fine";
    }
    this.tiredness--;
    this.hunger++;
    this.happiness++;
    return "Thank you";
    
  };

var audio = document.getElementById("myAudio")

  $('#bouton1').click(function() {
    audio.play()
   
  })
  


  
 

function Cat() {
  var obj = {};
  obj.happiness = Math.floor(Math.random() * 10 + 1);
  obj.tiredness = Math.floor(Math.random() * 10 + 1);
  obj.hunger = Math.floor(Math.random() * 10 + 1);
  obj.loneliness = Math.floor(Math.random() * 10 + 1);
  obj.feed = feed;
  obj.sleep = sleep;
  obj.pet = pet;
  return obj;
}

 
var mycatty=Cat()

 function feed() {
  var img = document.getElementById("img1");
  img.src="https://media.tenor.com/WaQ9Avqbp38AAAAj/kikicat-kikiapp.gif"
  if (mycatty.hunger === 0) {
    mycatty.hunger--;
    mycatty.happiness++
    mycatty.tiredness++
    document.getElementById("the  hunger").innerText = "Hunger increased. Current hunger"
  }
}


 

  function sleep () {
  var img = document.getElementById("img3");
  img.src="https://media.tenor.com/Y8WQ1xwb0LkAAAAi/sleepy-cat.gif"
  if (mycatty.tiredness === 0) {
    mycatty.hunger++
    mycatty.happiness++
    mycatty.tiredness--
  }
}

 
function pet () {
  var img = document.getElementById("img2");
  img.src="https://media.tenor.com/g2H6xx_Ds94AAAAi/dog-gag.gif"
 
  mycatty.tiredness++
  mycatty.loneliness--
  mycatty.happiness++
  mycatty.hunger++

}

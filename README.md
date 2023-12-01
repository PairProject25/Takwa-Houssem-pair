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

 

var feed = function () {
  if (this.hunger === 0) {
    return "I'm full";
  }
  this.hunger--;
  this.happiness++;
  this.tiredness++;
  return "Miaaaaw, thank you";
};

 

var sleep = function () {
  if (this.tiredness === 0) {
    return "I'm fine";
  }
  this.tiredness--;
  this.hunger++;
  this.happiness++;
  return "Thank you";
};

 

var pet = function () {
  if (this.loneliness === 0) {
    return "I'm fine";
  } else if (this.hunger === 10) {
    return "I'm really hungry";
  } else if (this.happiness === 10) {
    return "I'm VERY happy";
  }
  this.tiredness++;
  this.loneliness--;
  this.happiness++;
  this.hunger++;
  return "Thank you";
}
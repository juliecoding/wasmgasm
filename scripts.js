//Gives a random number up to 256.
function colorGen() {
  return Math.floor(Math.random() * 256);
}

//Loops one million times, creating a 1px x 1px colored square and appending it to the selected div each time.
for (var i = 0; i < 1000000; i++) {
  var colorOfChance = `rgb(${colorGen()},${colorGen()},${colorGen()}`
  var trouble = document.createElement('div');
  trouble.setAttribute("style", "height:1px; width:1px;background-color:" + colorOfChance);
  document.getElementById('startedFromTheBottom').append(trouble);
}

//Gives a random number up to 256.
function colorGen() {
  return Math.floor(Math.random() * 256);
}

//Loops one hundred times, creating a 1px x 1px colored square and appending it to the selected div each time.
//setInterval(nonsense, 2000);

function nonsense() {
  for (var i = 0; i < 100; i++) {
    var colorOfChance = `rgb(${colorGen()},${colorGen()},${colorGen()}`
    var trouble = document.createElement('div');
    trouble.setAttribute("style", "height:10px; width:10px;background-color:" + colorOfChance);
    document.getElementById('startedFromTheBottom').append(trouble);
  }
}

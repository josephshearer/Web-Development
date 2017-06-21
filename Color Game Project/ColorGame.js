var colors = [];

var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
var numOfSquares = 6;

init();

function init(){
  setUpModeBtnListeners();
  setUpSquareListeners();

  reset();
}

function setUpModeBtnListeners()
{
  for(var i = 0; i<modeBtns.length; i++)
  {
    modeBtns[i].addEventListener("click", function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }
}

function setUpSquareListeners()
{
  for(var i = 0; i < squares.length; i++)
  {
    //add click listener to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      //compare to picked color.
      if(clickedColor === pickedColor)
      {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else
      {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  //generate new colors
  colors = generateRandomColors(numOfSquares)
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change color of squares
  for(var i = 0; i < squares.length; i++)
  {
    //add initial colors to squares
    if(colors[i])
    {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else
    {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  //loop through all squares.
  for(var i = 0; i < colors.length; i++)
  {
    squares[i].style.backgroundColor = color;
  }
  //change color to match correct square.
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
  //make array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i<num; i++){
    //get random colors
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor(){
  //pick red 0 -255
  var red = Math.floor(Math.random() * 256);
  //pick green 0 - 255
  var green = Math.floor(Math.random() * 256);
  //pick blue 0-255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

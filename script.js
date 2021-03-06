var colors= [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 225)",
]
var colors = generateRandomcolors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colordisplay.textContent = pickedcolor;
for(var i=0; i<squares.length; i++)
{
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function()
    {
    var clickedcolor= this.style.background;
    if (clickedcolor == pickedcolor){
      messageDisplay.textContent = "CORRECT";
      changecolors(clickedcolor);
      h1.style.background = clickedcolor;
  }
    else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

function changecolors(color) {
  for ( var i=0; i<squares.length; i++)
  {
    squares[i].style.background = color;
  }
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomcolors(num){
    var arr =[];
   for ( var i =0; i<=num; i++)
   {
arr.push(randomcolor())
   }
    return arr;
}

function randomcolor()
{
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";    // GIVE SPACES 
}
//Refrences https://www.youtube.com/watch?v=OtSiwcq67j4
//Refrences https://repl.it/@Flaex/Pixel-art-maker
//Refrences https://github.com/ervaibhavkumar/Udacity-Pixel-Art-Maker
//Refrences https://github.com/hellofromtonya/ufend-pixel-art-maker
//Refrences https://github.com/Worm4047/pixel-art-maker
//Refrences https://www.youtube.com/watch?v=unkPI17Ql80

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var pixelCanvas = document.getElementById("pixelCanvas");
  pixelCanvas.innerHTML = "";
 
  // Select size input height width 
  var inputHeight = document.getElementById("inputHeight").value;
  var inputWidth = document.getElementById("inputWidth").value;

  for (var x = 0; x < inputHeight; x++) {
    var row = pixelCanvas.insertRow(x);
    
    for (var z = 0; z < inputWidth; z++) {
      var cell= row.insertCell(z);
      //A function which fills color in the cell that was clicked and changes the color.
      cell.addEventListener('click', function(colpic) {
          // Select color input
        colpic.target.style.backgroundColor = document.getElementById("colorPicker").value;
      });
    }
  }
}
// Submit button is clicked .
$('#inputSubmit').click(function(colpic) {
    colpic.preventDefault();
    // When size is submitted by the user, call makeGrid()
    makeGrid();
});

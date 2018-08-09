function randomNumberGen() {
  return Math.floor(Math.random() * 6) + 1 // Generates the random number between 1 and 6
}

function rollDice(randNum) {

  var innerSquare = document.querySelectorAll("div.innerSquare");
  var newClass = "innerSquare dot";

  for (var i = 0; i < innerSquare.length; i++) {
    innerSquare[i].className = "innerSquare";
  }
  
  switch (randNum) {
    case 1: // When randNum is 1, change the class name to newClass
      innerSquare[4].className = newClass;
      break;

    case 2:
      innerSquare[0].className = newClass;
      innerSquare[8].className = newClass;
      break;

    case 3:
      innerSquare[0].className = newClass;
      innerSquare[4].className = newClass;
      innerSquare[8].className = newClass;
      break;

    case 4:
      innerSquare[0].className = newClass;
      innerSquare[2].className = newClass;
      innerSquare[6].className = newClass;
      innerSquare[8].className = newClass;
      break;

    case 5:
      innerSquare[0].className = newClass;
      innerSquare[2].className = newClass;
      innerSquare[4].className = newClass;
      innerSquare[6].className = newClass;
      innerSquare[8].className = newClass;
      break;

    case 6:
      innerSquare[0].className = newClass;
      innerSquare[2].className = newClass;
      innerSquare[3].className = newClass;
      innerSquare[5].className = newClass;
      innerSquare[6].className = newClass;
      innerSquare[8].className = newClass;
      break;
    }
}

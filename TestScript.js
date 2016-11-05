
function test1() {
  var answerActual1 = document.getElementById("answerPage1").value;

  if (answerActual1==25) {
    document.getElementById("Alert1").innerHTML=  answerActual1 + "  is the answer!";
  }

  else if (isNaN (answerActual1)) {
    document.getElementById("Alert1").innerHTML=  answerActual1 + "  is not a number!";
  }

  else {
    document.getElementById("Alert1").innerHTML=  answerActual1 + "  is not the number you are looking for!";
  }
}


function test2() {
  var answerActual2 = document.getElementById("answerPage2").value;


  if (answerActual2==100) {
    document.getElementById("Alert2").innerHTML=  answerActual2 + "  is the answer!";
  }

  else if (isNaN (answerActual2)) {
    document.getElementById("Alert2").innerHTML=  answerActual2 + "  is not a number!";
  }

  else {
    document.getElementById("Alert2").innerHTML=  answerActual2 + "  is not the number you are looking for!";
  }
}

function test3() {
  var answerActual3 = document.getElementById("answerPage3").value;

  if (answerActual3==8) {
    document.getElementById("Alert3").innerHTML=  answerActual3 + "  is the answer!";
  }

  else if (isNaN (answerActual3)) {
    document.getElementById("Alert3").innerHTML=  answerActual3 + "  is not a number!";
  }

  else {
    document.getElementById("Alert3").innerHTML=  answerActual3 + "  is not the number you are looking for!";
  }
}

//Tyler Gomes //

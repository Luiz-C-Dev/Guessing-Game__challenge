const randomNumber = Math.round(Math.random() * 100);
const field = $("#inputNumberBox");
const inputed = field.val();
const button = $("#tryButton");
const displayedNumberBox = $(".display-number-box");
const displayedNumber = $("#displayNumber");
let correctlyNumber = false;

$(function () {
  verifyAttempts();
});

field.on("input", function () {
  const inputed = $(this).val();
  if (parseInt(inputed) > 100) {
    field.val(100);
  }
});

function verifyAttempts() {
  button.on("click", function () {
    const inputed = field.val();
    if (!correctlyNumber) {
      if (inputed == randomNumber) {
        correctlyNumber = true;
        correctAttempt();
      } else {
        failedAttempt();
      }
    } else {
      console.log(
        "Você já acertou o número. Não é necessário tentar novamente."
      );
    }
  });
}

function failedAttempt() {
  if (inputed != randomNumber) {
    addNewTip();
  }
}

function correctAttempt() {
  const fieldVal = $("#inputNumberBox").val();
  const inputed = field.val();

  if (inputed == randomNumber) {
    displayedNumber.text(fieldVal);
    displayedNumberBox.addClass("correctly-answer");
    displayedNumberBox.removeClass("incorrectly-answer");
    $(".correctly-phrase").show();
  }
}

function addNewTip() {
  const inputed = field.val();
  const liBigger = $("<li> O número secreto é MAIOR que " + inputed + ".</li>");
  const liSmaller = $(
    "<li> O número secreto é MENOR que " + inputed + ".</li>"
  );
  if (inputed < randomNumber) {
    $("#guessHistory").prepend(liBigger);
  }
  if (inputed > randomNumber) {
    $("#guessHistory").prepend(liSmaller);
  }
}

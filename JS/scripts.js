function beepBoopOrNeighbor(num, name) {
  for(x=1; x<=num; x++) {
    if(x.toString().includes("3")) {
      console.log(`Won't you be my neighbor ${name}?`);
    } else if(x.toString().includes("2")) {
    console.log("Boop!");
    } else if(x.toString().includes("1")) {
      console.log("Beep!");
    } else {
      console.log(x);
    }
  }
}

$( document ).ready(function() {
  $("#userInputForm").submit(function() {
    event.preventDefault()

    const parsedUserInput = parseInt($("#userNumInput").val());
    const userNameInput = $("#userNameInput").val();

    beepBoopOrNeighbor(parsedUserInput, userNameInput);
  });
});
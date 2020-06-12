function beepBoopOrNeighbor(num) {
  for(x=1; x<=num; x++) {
    if(x.toString().includes("3")) {
      console.log("this has a three");
    } else if(x.toString().includes("2")) {
    console.log("This has a 2");
    } else if(x.toString().includes("1")) {
      console.log("This has a 1");
    } else {
      console.log(x);
    }
  }
}

$( document ).ready(function() {
  $("#userInputForm").submit(function() {
    event.preventDefault()

    const parsedUserInput = parseInt($("#userNumInput").val());
    beepBoopOrNeighbor(parsedUserInput);
  });
});
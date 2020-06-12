function beepBoopOrNeighbor(num, name) {
  let results
  for(x=1; x<=num; x++) {
    if(x.toString().includes("3")) {
      $("#resultsContainer").append(`<p>Won't you be my neighbor ${name}?</p>`);
    } else if(x.toString().includes("2")) {
      $("#resultsContainer").append("<p>Boop!</p>");
    } else if(x.toString().includes("1")) {
      $("#resultsContainer").append("<p>Beep!</p>");
    } else {
      $("#resultsContainer").append(`<p>${x}</p>`);
    }
  }
}

$( document ).ready(function() {
  $("#userInputForm").submit(function() {
    event.preventDefault()

    const parsedUserInput = parseInt($("#userNumInput").val());
    const userNameInput = $("#userNameInput").val();

    beepBoopOrNeighbor(parsedUserInput, userNameInput);

    $("#containerDiv").hide();
    $("#resultsContainer").show();
  });
});
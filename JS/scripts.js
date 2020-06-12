function beepBoopOrNeighbor(num, name) {
  let results
  for(x=1; x<=num; x++) {
    if(x.toString().includes("3")) {
      $("#resultsDiv").append(`<p>Won't you be my neighbor ${name}?</p>`);
    } else if(x.toString().includes("2")) {
      $("#resultsDiv").append("<p>Boop!</p>");
    } else if(x.toString().includes("1")) {
      $("#resultsDiv").append("<p>Beep!</p>");
    } else {
      $("#resultsDiv").append(`<p>${x}</p>`);
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
    $("#resultsDiv").show();
  });
});
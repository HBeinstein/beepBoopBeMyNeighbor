function beepBoopOrNeighbor(num, name) {
  let results = [];
  for(x=1; x<=num; x++) {
    if(x.toString().includes("3")) {
      results.push(`<p>Won't you be my neighbor <span>${name}?</span></p>`);
    } else if(x.toString().includes("2")) {
      results.push("<p><span>Boop!</span></p>");
    } else if(x.toString().includes("1")) {
      results.push("<p><span>Beep!</span></p>");
    } else {
      results.push(`<p>${x}</p>`);
    }
  }
  return results;
}

$( document ).ready(function() {
  $("#userInputForm").submit(function() {
    event.preventDefault()

    const parsedUserInput = parseInt($("#userNumInput").val());
    const userNameInput = $("#userNameInput").val();

    const resultOutput = beepBoopOrNeighbor(parsedUserInput, userNameInput);

    for(i=0; i<resultOutput.length; i++) {
      $("#resultsList").append(resultOutput[i]);
    };

    $("#containerDiv").hide();
    $("#resultsContainer").show();
    $("#resetButtonTop").show();
    $("#resetButtonLeft").show();
    $("#resetButtonRight").show();
    $("#resetButtonBottom").show();

      $(".resetButton").click(function() {
        location.reload();
      });
  });
});
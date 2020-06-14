function beepBoopOrNeighbor(num, name) {
  let results = [];
  for(i=1; i<=num; i++) {
    if(i.toString().includes("3")) {
      results.push(`<p>Won't you be my neighbor <span>${name}?</span></p>`);
    } else if(i.toString().includes("2")) {
      results.push("<p><span>Boop!</span></p>");
    } else if(i.toString().includes("1")) {
      results.push("<p><span>Beep!</span></p>");
    } else {
      results.push(`<p>${i}</p>`);
    }
  }
  return results;
}

$( document ).ready(function() {
  $("#userInputForm").submit(function() {
    event.preventDefault()

    if($("#userNumInput").val().trim().length === 0){
      alert('Please enter a number!')
      $("#userNumInput").val('');
    } else if (parseInt($("#userNumInput").val()) > 5000) {
      alert("Please enter a number less than 1000!")
      $("#userNumInput").val('');
    } else if(isNaN($("#userNumInput").val())) {
      alert("Please enter a number!")
      $("#userNumInput").val('');
    } else if($("#userNumInput").val() === "0") {
      alert("Sorry, I can't count to 0, please enter a new number!");
      $("#userNumInput").val('');
    } else {
      const parsedUserInput = parseInt($("#userNumInput").val());
      const userNameInput = $("#userNameInput").val();
      const resultOutput = beepBoopOrNeighbor(parsedUserInput, userNameInput);

    for(i=0; i<resultOutput.length; i++) {
      $("#resultsList").append(resultOutput[i]);
    };

    $("#containerDiv").hide();
    $("#resultsContainer").show();
    $(".resetButton").show();

    $(".resetButton").click(function() {
      location.reload();
      })
    }
  })
})
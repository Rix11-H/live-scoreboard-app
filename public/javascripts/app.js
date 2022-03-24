const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });


document.querySelector(".scoreboard__form").addEventListener("submit", e => {
    let select = document.querySelector("select");
    let team = select.options[select.selectedIndex].value;
    let scoreInput = document.querySelector(".form__input input").value;
    console.log(team);
    console.log(scoreInput);
    e.preventDefault();

    primus.write({ 
        team: team,
        score: scoreInput, 
    }); 

});
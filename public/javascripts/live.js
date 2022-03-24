const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  primus.on("data", data => { //checken of data terugkomt van de server
    console.log("er is data");
    console.log(data);
        switch(data.team) {
      case "hh":
        document.querySelector(".hh").innerHTML = data.score;
        break;
      case "bb":
        document.querySelector(".bb").innerHTML = data.score;
        break;
      case "mm":
        document.querySelector(".mm").innerHTML = data.score;
        break;
      case "ww":
        document.querySelector(".ww").innerHTML = data.score;
        break;
      case "ff":
        document.querySelector(".ff").innerHTML = data.score;
        break;


  }

   });

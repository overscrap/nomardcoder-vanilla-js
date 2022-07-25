const btnPlay = document.querySelector("form input[type=submit]");
const game = {
    play: function(event){
        const randomNum = document.querySelector("#randomNum").value;
        const chooseNum = document.querySelector("#chooseNum").value;
        const showHide = document.querySelector("#showHide");
        const answer1 = document.querySelector("#answer1");
        const answer2 = document.querySelector("#answer2");
        const result = document.querySelector("#result");
        let msg = "";
        let color = "";

        event.preventDefault();

        if(randomNum == ""){
            alert("Please enter a randomNum value.");
            showHide.className = "hide";
            return;
        }
        if(chooseNum == ""){
            alert("Please enter a chooseNum value.");
            showHide.className = "hide";
            return;
        }
        if(parseInt(randomNum) < 0){
            alert("Please enter a number greater than 0.");
            showHide.className = "hide";
            return;
        }

        let machineNum = Math.floor(Math.random() * randomNum + 1);

        if(showHide.classList.value == "hide"){
            showHide.className = "show";
        }

        answer1.innerHTML = chooseNum;
        answer2.innerHTML = machineNum;
        
        if(parseInt(chooseNum) == parseInt(machineNum)){
            result.classList.remove("red");
            msg = "you win!"
            color = "blue";
        }else{
            result.classList.remove("blue");
            msg = "you lose!";
            color = "red";
        }
        result.classList.add(color);
        result.innerHTML = msg;
    }
}

btnPlay.addEventListener("click", game.play);


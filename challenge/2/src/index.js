//보라 C412FA 파랑 125FFA 노랑 EFFF00
const body = document.querySelector("body");

const superEventHandler = {
    onresize: function () {
        let windowSize = window.innerWidth;
        body.classList.remove("blue");
        body.classList.remove("pupple");
        body.classList.remove("yellow");

        if(windowSize < 700){
            body.classList.add("blue");
        }else if(windowSize >= 700 && windowSize < 1400){
            body.classList.add("pupple");
        }else{
            body.classList.add("yellow");
        }
        
    }
};

window.addEventListener("resize", superEventHandler.onresize);

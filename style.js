let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    letcurrentTime = new Date();

    hrs.innerHTML = (currentTime.getHOURS()<10?"0":"") + currentTime.getHOURS();
    min.innerHTML = (currentTime.getMINUTES()<10?"0":"") + currentTime.getMINUTES();
    sec.innerHTML = (currentTime.getSECONDS()<10?"0":"") + currentTime.getSECONDS();
},1000)
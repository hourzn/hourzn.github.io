window.onload = random;
/* when window loads, run my random function*/
function random() {
    alert("u got a virus now just kidding")
    document.getElementById("randomnum").innerHTML = Math.floor(Math.random() * 50);;
}

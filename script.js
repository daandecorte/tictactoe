let p = document.querySelectorAll("p");
let button = document.querySelector("button");
let h = document.querySelector("h1");

let teken = "X";

for(let i = 0;i<p.length;i++) {
    p[i].onclick = () => {
        if(p[i].innerHTML != "X" && p[i].innerHTML != "O") {

            p[i].innerHTML = teken;
            if(teken == "X") teken="O";
            else if(teken == "O") teken="X";
            h.innerHTML = "Beurt: " + teken;
            checkWinnaar();
        }
    }
}

button.onclick = () => {
    for(let i = 0 ; i<p.length;i++) {
        p[i].innerHTML = "";
    }
    teken = "X";
    h.innerHTML = "Beurt: X"
}

function checkWinnaar() {
    if(p[0].innerHTML==p[1].innerHTML && p[1].innerHTML==p[2].innerHTML && p[0].innerHTML != "") h.innerHTML = p[0].innerHTML + " Wint"
    if(p[3].innerHTML==p[4].innerHTML && p[4].innerHTML==p[5].innerHTML && p[3].innerHTML != "") h.innerHTML = p[3].innerHTML + " Wint"
    if(p[6].innerHTML==p[7].innerHTML && p[7].innerHTML==p[8].innerHTML && p[6].innerHTML != "") h.innerHTML = p[6].innerHTML + " Wint"

    if(p[0].innerHTML==p[3].innerHTML && p[3].innerHTML==p[6].innerHTML && p[0].innerHTML != "") h.innerHTML = p[0].innerHTML + " Wint"
    if(p[1].innerHTML==p[4].innerHTML && p[4].innerHTML==p[7].innerHTML && p[1].innerHTML != "") h.innerHTML = p[1].innerHTML + " Wint"
    if(p[2].innerHTML==p[5].innerHTML && p[5].innerHTML==p[8].innerHTML && p[2].innerHTML != "") h.innerHTML = p[2].innerHTML + " Wint"

    if(p[0].innerHTML==p[4].innerHTML && p[4].innerHTML==p[8].innerHTML && p[0].innerHTML != "") h.innerHTML = p[0].innerHTML + " Wint"
    if(p[2].innerHTML==p[4].innerHTML && p[4].innerHTML==p[6].innerHTML && p[2].innerHTML != "") h.innerHTML = p[2].innerHTML + " Wint"
}
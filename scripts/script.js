
let nastroiki = document.getElementById("shester");
nastroiki.addEventListener("click",panel);






//asv
function smiles(img) {
    let msg_cont = document.createElement("div");
    msg_cont.className = "message";
    let image = document.createElement("img");
    image.src = "../imag/avacat.jpg";
    image.className = "imgava";
    msg_cont.append(image);
    let textname = document.createElement("div");
    textname.className = "message_name";
    textname.innerText = "Max";
    msg_cont.append(textname);
    let messages_in_chat = document.getElementById("messages");
    let smile = document.createElement("img");
    smile.src = img.src;
    smile.width = img.width;
    smile.height = img.height;
    msg_cont.append(smile);
    messages_in_chat.append(msg_cont);
}

function nachalo_chat() {
    if (msgs.length == 0) {
        let sad = document.createElement("img");
        sad.src = "imag/sadsmile.webp";
    }
}
function panel(){
    let panel = document.getElementById("panel_s_prava");
if (panel.style.visibility=="hidden" || panel.style.visibility=="")
panel.style.visibility="visible";

else
    panel.style.visibility="hidden";
}

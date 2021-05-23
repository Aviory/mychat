let text_input = document.getElementById("input");
text_input.addEventListener('keydown', function (event) {
    if (event.code == 'Enter')
        to_server();
});
document.getElementById("chat").addEventListener('scroll', function () {
    console.log(pageYOffset);
});

let msgs = new Array();

function on_msg_click(event) {
    let msg_cont = event.currentTarget;

    if (msg_cont.children.length == 2) {
        var rubbish = document.createElement("img");
        rubbish.src = "smiles/мусор.png";
        msg_cont.append(rubbish);
        rubbish.addEventListener("click", slush_on_musor);
    } else if (msg_cont.children.length == 3) {
        if (event.currentTarget.children[2].hidden == true)
            event.currentTarget.children[2].hidden = false;
        else
            event.currentTarget.children[2].hidden = true;

    }
}


function addmsg(name, msg) {
    let msg_cont = document.createElement("div");
    msg_cont.className = "message";
    msg_cont.addEventListener("click", on_msg_click);
    let text_msg = document.createElement("div");
    text_msg.className = "message_text";
    text_msg.innerText = msg;
    text_input.value = "";
    let textname = document.createElement("div");
    textname.className = "message_name";
    textname.innerText = name;
    let text_cont = document.createElement("div");
    text_cont.className = "text_cont";
    text_cont.append(textname);
    text_cont.append(text_msg);
    let image = document.createElement("img");
    image.src = "smiles/avacat.jpg";
    image.className = "imgava";
    msg_cont.append(image);
    msg_cont.append(text_cont);
    let messages_in_chat = document.getElementById("messages");
    messages_in_chat.append(msg_cont);
}

function to_server() {
    let input = document.getElementById("input");
    let text_input = input.value;
    let name = "Max";
    var body = "name=" + name + "&text=" + text_input;
    input.value = "";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'server/add_to_server.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {//Это наш калбек, который вызывает сервер
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            let a = xhr.response;//xhr.response - тут ответ сервера
            get_messages();
        }
    };
    xhr.send(body);
}


function get_messages() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'server/get_messages.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {//Это наш калбек, который вызывает сервер
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            let a = JSON.parse(xhr.response);//xhr.response - тут ответ сервера
            msgs = []
            for (let i = 0; i < a.length; i++) {
                var msg = new Object();
                msg.name = a[i].name;
                msg.message = a[i].message;
                msgs.push(msg);

            }
            print_messages();
            nach_tochka_msg = msgs.length - 10;
        }
    };
    xhr.send();
}


function print_messages() {
    let i = 0;
    if (msgs.length > 10)
        i = msgs.length - 10;

    document.getElementById("messages").innerHTML = "";
    for (; i < msgs.length; i++) {
        addmsg(msgs[i].name, msgs[i].message);
    }


}



let nach_tochka_msg = 0;

function strelki(side) {
    if (side == "вверх") {
        if (nach_tochka_msg > 0)
            nach_tochka_msg -= 1;
    } else {
        if (nach_tochka_msg < msgs.length - 10)
            nach_tochka_msg += 1;
    }
    document.getElementById("messages").innerHTML = "";
    for (let i = nach_tochka_msg; i < nach_tochka_msg + 10; i++) {
        addmsg(msgs[i].name, msgs[i].message);
    }


}


function slush_on_musor(event) {
    let msg_text = event.target.previousElementSibling.lastChild.innerText;
    let msg_name = event.target.previousElementSibling.firstChild.innerText;
    var body = "name=" + msg_name + "&text=" + msg_text;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'server/delet_msg.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {//Это наш калбек, который вызывает сервер
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            let a = xhr.response;//xhr.response - тут ответ сервера
            get_messages();
        }
    };
    xhr.send(body);
}
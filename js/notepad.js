if (localStorage["data"] != undefined) {
    console.log("Defined already");
}
else {
    console.log("Was undefined")
    localStorage["data"] = "";
}

document.getElementById("notepad").value = localStorage["data"];

function saveNotepad() {
    localStorage["data"] =  document.getElementById("notepad").value;
}

setInterval(saveNotepad, 6000);
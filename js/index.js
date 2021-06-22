var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function clickNoProjetos() {
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    console.log("Clicou no botão sobre")
    texto1.style.display = "block";
    texto2.style.display = "none";
}
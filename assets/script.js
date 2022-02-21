console.log("conectado");
var prato = "Escolha um Prato";
function selecionaTemaki() {
/*  document.getElementById('temaki').style.borderColor = '#00c943'; adiciona borda verde*/
    prato = document.getElementById('titulo-temaki').textContent; 
    document.getElementById('compra-temaki').style.backgroundColor = "#red"; /*muda cor do botao*/
    document.getElementById('compra-temaki').textContent = "( x ) Remover";/*muda texto do botao*/

    var botao = document.getElementById('compra-temaki');/*criar cariável para botao*/
    botao.setAttribute("onclick","removerSelecionado();");/*troca a função*/
};
function removerSelecionado() {
    prato = "Escolha um produto..."; 
    document.getElementById('temaki').style.borderColor = 'white';
    document.getElementById('compra-temaki').style.backgroundColor = "red";
    document.getElementById('compra-temaki').textContent = "Escolher";
    
    var botao = document.getElementById('compra-temaki');
    botao.setAttribute("onclick","selecionaTemaki();");
};










function selecionaAcai() {
    let prato = "Temaki de Salmão"; 
    document.getElementById('acai').style.borderColor = '#00c943';
    document.getElementById('temaki').style.borderColor = 'white'; 
    document.getElementById('pizza').style.borderColor = 'white'; 
    document.getElementById('combo').style.borderColor = 'white';
};

function selecionaCombo() {
    document.getElementById('combo').style.borderColor = '#00c943';
    document.getElementById('acai').style.borderColor = 'white'; 
    document.getElementById('pizza').style.borderColor = 'white'; 
    document.getElementById('temaki').style.borderColor = 'white';
};

function selecionaPizza() {
    document.getElementById('pizza').style.borderColor = '#00c943';
    document.getElementById('acai').style.borderColor = 'white'; 
    document.getElementById('temaki').style.borderColor = 'white'; 
    document.getElementById('combo').style.borderColor = 'white';
};




function realizarPedido() {
    if (prato === "Escolha um Prato") {
        alert("Escolha um produto...");
    }
    else {
        alert(prato);
    }
}
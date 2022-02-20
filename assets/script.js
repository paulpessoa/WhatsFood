console.log("conectado");


function selecionaTemaki() {
    document.getElementById('temaki').style.borderColor = '#00c943';
    document.getElementById('acai').style.borderColor = 'white'; 
    document.getElementById('pizza').style.borderColor = 'white'; 
    document.getElementById('combo').style.borderColor = 'white'; 
};

function selecionaAcai() {
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
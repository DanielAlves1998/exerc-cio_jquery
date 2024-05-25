const form = document.getElementById('form-lista');
const NomeTarefa = [];
let linhas = '';


const Tabelaraiz = document.querySelector('ul');

Tabelaraiz.addEventListener('click', function (e) {
    if(e.target.classList.contains('checked')){
        e.target.classList.remove('checked');
    }else{
        e.target.classList.add('checked');
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    AddTarefa();
    atualizaTabela();
    
})


    
        NomeTarefa.push(InputTarefa.value);

        linha += `<li> ${InputTarefa.value}</li>`;
    
        linhas += linha;
        
        InputTarefa.value = '';

function atualizaTabela(){
    const Tabelaraiz = document.querySelector('ul');
    Tabelaraiz.innerHTML = linhas;
}
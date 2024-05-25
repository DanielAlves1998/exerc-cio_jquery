$(document).ready(function() {
    const NomeTarefa = [];
    let linhas = '';

    $('#form-lista').submit(function(e) {
        e.preventDefault();
        const inputTarefa = $('#input-tarefa').val();
        NomeTarefa.push(inputTarefa);
        linhas += `${inputTarefa}`;
        $('#input-tarefa').val('');
        atualizaTabela();
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('checked');
    });

    function atualizaTabela() {
        $('ul').html(linhas);
    }
})
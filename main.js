$(document).ready(function () {

    //adicionar tarefa
    $('#addTarefaBtn').on('click', function() {
        var tarefaText = $('#tarefaInput').val();
        if (tarefaText.length > 0) addTarefa(tarefaText)
        $('#tarefaInput').val('');
    });

    //função para adicionar tarefa
    function addTarefa(text) {
        $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>');
    }

    //marcar/desmarcar tarefa como concluida
    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

//remover tarefa
    $(document).on('click', 'span', function (e) {
        e.stopPropagation();  //evitar a propagação do evento para o elemento pai (li)
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
    });
})
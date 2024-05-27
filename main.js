$(document).ready(function() {

    //adicionar tarefa
    $('#addTarefaBtn').on('click', function() {
        var tarefaText = $('#tarefaInput').val();
        
        if (tarefaText.lenghth > 0) addTarefa(tarefaText)
    });

    //função para adicionar tarefa
    function addTarefa(text) {
        $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>');
    }
})
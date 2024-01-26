$(document).ready(function() {
    $("header button").click(function(){
        $("form").slideDown();
    })

    $("#botao-cancelar").click(function(){
        $("form").slideUp();
    })

    $("form").on("submit", function(e){
        e.preventDefault();
        const Tarefa = $("#nova-Tarefa").val();
        const novoElemento = $("<li></li>").text(Tarefa);
        $("#minhaLista").append(novoElemento);
    })


    $('ul').on('click', 'li', function() {
        $(this).toggleClass('strikethrough');
    });
})

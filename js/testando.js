
  $(function() {

    //Adiciona estilo as abas
    $( "#tabs" ).tabs();

    $('#pesquisar').click(function(){
        //TODO - Adicionar funcionalidade ao botão Pesquisar
    });

    $('')

    var availableTags = [
      "casa",
      "cruz",
      "menino",
      "mão",
      "verde",
      "azul",
      "carro"
    ];

    $( "#tags" ).autocomplete({
      source: availableTags
    });

    //Tooltips - Link Home
    $(this).tooltip({
      track: true
    });

    //Estilo dos botões
    $( "input[type=button], button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
    });


     $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();

    $('#pesquisar').click(function(){
        var palavra = $('#tags').val();
        var arr = palavra.split(' ');
        alert(palavra)
        alert(arr[0]);

        $('<option>') // Cria um elemento option
        .text(arr[0])
        .appendTo('#lista-palavras'); // Adiciona ele ao elemento
        
    });


    $("table").tablesorter({
    // enable debug mode
      debug: true
    });
    
    $("#myTable").tablesorter();


});


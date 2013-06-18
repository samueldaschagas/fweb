
  $(function() {

    //Adiciona estilo as abas
    $( "#tabs" ).tabs();


    var tags = [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby", "teste" ];
    $( "#tags" ).autocomplete({
      source: function( request, response ) {
              var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
              response( $.grep( tags, function( item ){
                  return matcher.test( item );
              }) );
      }
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
    theme: 'blue',
    // initialize zebra striping of the table
    widgets: ["zebra"],
    // change the default striping class names
    // updated in v2.1 to use widgetOptions.zebra = ["even", "odd"]
    // widgetZebra: { css: [ "normal-row", "alt-row" ] } still works
    widgetOptions : {
      zebra : [ "normal-row", "alt-row" ]
    }
  });


});


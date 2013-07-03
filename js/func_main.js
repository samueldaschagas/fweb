$(function() {

    //Adiciona estilo as abas
    var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });

    //Adiciona Tooltips mostrando o title quando passa o mouse em algum elemento
    $(this).tooltip({
         track: true
    });

    //Estilo dos botões
    $( "input[type=button], button" )
        .button()
        .css({ fontFamily: "sans-serif", fontVariant: "small-caps" })
        .click(function( event ) {
          event.preventDefault();
        });

   //Evento do teclado enter no campo x, força o click no botão y
   var forcarBotao = function(campo, botao){
       campo.keypress(function(e){
          var codigoTeclaPressionada = e.which;
          var codigoEnter = 13;
          //var teclaPressionada = String.fromCharCode(codigoTeclaPressionada);

          if(codigoTeclaPressionada === codigoEnter)
             botao.trigger('click');
       });
   };

   //Função auto-executável que força os botões a serem clicados
   (function(){
       forcarBotao($('#text-palavra'), $('#pesquisar'));
       forcarBotao($('#text-1'), $('#form-pesquisar-1'));
       forcarBotao($('#text-2'), $('#form-pesquisar-2'));
   })();

});


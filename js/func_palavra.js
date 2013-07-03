$(function(){

    /*
      TODO LIST 
    
      - Mostrar caracteristicas da palavra - Tabela, e significado;
      - Colocar valores do genero, numero, etc (No .js da tabela)
      - Implementar botões Alterar, Excluir, Adicionar, Adicionar palavra
      - Rever limpar formulário.

    */
    //  $('#logo').mouseenter(function(){
    //   $(this).effect("shake");
    // })

    //Função executada ao clicar no botão #pesquisar
    $('#pesquisar').click(function(){

        var arrayPalavras = ['casa', 'casarao', 'carro', 'lista','menino', 'cruz'];

        var campo = $('#text-palavra');
        var select = $('#lista-palavras');
        var palavra = campo.val().toLowerCase();
        var palavrasEncontradas = varrerListaDePalavras(palavra, arrayPalavras);
        
        select.empty();
        if(palavrasEncontradas.length == 0){
            dialogMessage("Palavra não encontrada", "Digite uma nova palavra!")
        }else{
            mapearPalavrasEncontradas(palavrasEncontradas, campo, select);
        }
    });

    //Função usada para procurar a palavra na #lista-palavras
    var varrerListaDePalavras = function(palavra, lista){
      var encontradas = new Array();

      for (var i = 0; i < lista.length; i++) {
        //Verifica se a palavra está na lista
        if((lista[i].indexOf(palavra) !== -1) && palavra != '' ){
            var palavraPertence = true;
            //Verifica agora se a palavra é uma substring inicial de alguma palavra contida na lista
            for (var j = 0; j < palavra.length; j++) {
               if( lista[i][j] !== palavra[j]){
                    palavraPertence = false;
                    break;
               }
            }
            if(palavraPertence){
               encontradas.push(lista[i])
            }
        }
      }

      return encontradas;
    }

    //Mapear listas
    var mapearPalavrasEncontradas = function(lista, campo, select){
      //ALTERAR - COLOCAR MAIS GENÉRICA

        for (var i = 0; i < lista.length; i++) {
            $('<option>') // Cria um elemento option
            .text(lista[i])
            .appendTo(select); // Adiciona ele a lista de seleção
        }
    }

    //Obter qual elemento foi selecionado na #lista-palavras
    $("#lista-palavras").change(function () {
        var palavra = $("#lista-palavras option:selected").text();
        
        // $("#nome-palavra").attr('value', palavra)
        document.getElementById("nome-palavra").value = palavra;
    });
    
   //Passa uma categoria da #lista-categorias-1 para a #lista-categorias-2
   $('#btt-front').click(function(){
      var listaOrigem = "#lista-categorias-1";
      var listaDestino = "#lista-categorias-2";
      moveCategoria(listaOrigem, listaDestino);
   });

   //Passa uma categoria da #lista-categorias-2 para a #lista-categorias-1
   $('#btt-back').click(function(){
      var listaOrigem = "#lista-categorias-2";
      var listaDestino = "#lista-categorias-1";
      moveCategoria(listaOrigem, listaDestino);
   });

   //Função usada para selecionar o titulo e a mensagem a ser exibida na caixa de diálogo
   var dialogMessage = function(titulo, mensagem){
      var caixaDeDialogo = $("#dialog-message");
      
      caixaDeDialogo.text(mensagem);

      caixaDeDialogo.dialog({
        title: titulo,
        modal: true,
        buttons: {
          Ok: function() {
            $( this ).dialog( "close" );
          }
        }
      });
   };

   //Move categoria de uma lista para a outra
   var moveCategoria = function(listaOrigem, listaDestino){

      var elementoSelecionado = $( listaOrigem + " option:selected");
      
      if(elementoSelecionado.text() === ""){
          dialogMessage("Elemento não selecionado", "Selecione um item na lista de origem!")  
      }else{
              //Remove elemento selecionado da #lista-categorias-1
          elementoSelecionado.remove()
          //Adicionar o mesmo elemento removido, a lista-categorias-2
          $('<option>').text(elementoSelecionado.text()).appendTo(listaDestino);
      }
   }

   //Função executada ao clicar no botão #form-pesquisar-1
    $('#form-pesquisar-1').click(function(){

        var arrayPalavras = ['substantivo', 'verbo', 'pronome', 'adjetivo','preposicao'];

        var campo = $('#text-1');
        var select = $('#lista-categorias-1');
        var palavra = campo.val().toLowerCase();
        var palavrasEncontradas = varrerListaDePalavras(palavra, arrayPalavras);
        
        select.empty();
        if(palavrasEncontradas.length == 0){
            dialogMessage("Palavra não encontrada", "Digite uma nova palavra!")
        }else{
            mapearPalavrasEncontradas(palavrasEncontradas, campo, select);
        }
    });

    //Função executada ao clicar no botão #form-pesquisar-2
    $('#form-pesquisar-2').click(function(){
      
        var arrayPalavras = ['casa', 'casarao', 'carro', 'lista','menino', 'cruz'];

        var campo = $('#text-2');
        var select = $('#lista-categorias-3');
        var palavra = campo.val().toLowerCase();
        var palavrasEncontradas = varrerListaDePalavras(palavra, arrayPalavras);
        
        select.empty();
        if(palavrasEncontradas.length == 0){
            dialogMessage("Palavra não encontrada", "Digite uma nova palavra!")
        }else{
            mapearPalavrasEncontradas(palavrasEncontradas, campo, select);
        }
    });

   //Limpa todos os campos texto, menos o campo #nome-palavra
   $('#limpar-formulario').click(function(){
        $('input[type="text"]').val('')
        $('select').empty();

   })


   //Função executada quando clicamos no botão Adicionar Palavra
   $('#add-palavra').click(function(){
        verficarCampos();
        dialogMessage("Palavra cadastrada", "A palavra foi cadastrada com sucesso!")
   });

   //Verifica quais campos faltaram ser preenchidos - Em desenvolvimento
   var verficarCampos = function(){
       var msg = '';

       if($('#nome-palavra').val() === ''){
          msg += "\nPreencha o campo Nome.\n";
       }if($('#text-1').val() === ''){
          msg += "Selecione os atributos da palvra\n";
          $('#text-1')
          .effect("bounce");
       }
   }

}); 

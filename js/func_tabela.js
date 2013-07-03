$(function(){

  /*=========================
    EVENTOS NA TABELA
    =========================*/

  /*Background do elemento de índice da lista de td muda para a cor amarela
  var lista = $('td').eq(1).text();
  $('td').eq(2).css('background-color','yellow');*/

  //Muda cor do elemento td de índice 1 para vermelho quando passar a seta do mouse em cima do elemento
  $('td').eq(1).mouseenter(function(){
        $('td').eq(1).css('background-color','red');
  });

  //Muda cor do elemento td de índice 1 para branco quando tira a seta do mouse em cima do elemento
  $('td').eq(1).mouseout(function(){
        $('td').eq(1).css('background-color','white');
  });

  //Funcionalidade de ordenar uma coluna por ordem alfabetica
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

  /*=====================================
    OBTENDO ELEMENTOS DA TABELA - PALAVRA
    =====================================*/

  var list = $('td'), //Lista de todos os elementos da tabela
      listGenero, listPessoa, listNumero, listTempo; 

  var getListGenero = function(){
      listGenero = new Array();

      console.log('\n#Gênero\n')
      for (var i = 0; i < list.length; i += 4) {
          console.log(list.eq(i).text())
          listGenero.push(list.eq(i).text())
      };

      console.log(listGenero)
      return listGenero;

  }();

  var getListPessoa = function(){
      listPessoa = new Array();

      console.log('\n#Pessoa\n')
      for (var i = 1; i < list.length; i += 4) {
          console.log(list.eq(i).text())
          listPessoa.push(list.eq(i).text())
      };

      console.log(listPessoa)
      return listPessoa;

  }();

  var getListNumero = function(){
      listNumero = new Array();

      console.log('\n#Numero\n')
      for (var i = 2; i < list.length; i += 4) {
          console.log(list.eq(i).text())
          listNumero.push(list.eq(i).text())
      };

      console.log(listNumero)
      return listNumero;

  }();

  var getListTempo = function(){
      listTempo = new Array();

      console.log('\n#Tempo\n')
      for (var i = 3; i < list.length; i += 4) {
          console.log(list.eq(i).text())
          listTempo.push(list.eq(i).text())
      };

      console.log(listTempo[1])
      console.log(listTempo)
      return listTempo;

  }();

  list.eq(2).click(function(){
     list.eq(2).css('background-color','red')
  })

  /*for (var i = 0; i < list.length; i++) {
          //Todos os valores
          console.log(list.eq(i).text())
  } TODAS AS PALAVRAS DA TABELA*/

})
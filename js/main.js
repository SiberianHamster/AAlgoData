
  $(".clickme").click(function(){
    increaseArrayForSorting();
    bogoSortThis();
  });

  function increaseArrayForSorting(){
    var nextNumberToAddToDOM = ($(".liList").length)+1;
    $(".sortlist").append("<li class='liList'>" + nextNumberToAddToDOM + "</li>");
  }

  function  bogoSortThis(){
    var isItSorted = false;
    var howManyTimesTried = 0;
    var currentListCount = ($(".liList").length);

    while (isItSorted == false) {
      howManyTimesTried++;


      for (var i=currentListCount; i>=0; i--){
        var rand = Math.floor(Math.random() * (i)+1);
        $(".liList:nth-child("+i+")").after($(".liList:nth-child("+rand+")"));
      }


      var i = 1;
      while (i<=currentListCount){
        if (($(".liList:nth-child("+i+")").html() == i)){
          i++;
          isItSorted=true;
        }
        else{
          isItSorted=false
          i=currentListCount+1;
        }
      }
    }
    var x = currentListCount;
    var AverageScenario = 1;
    while(x>0){
      AverageScenario = AverageScenario * x;
      x--;
    }
    $(".resulttable").append("<tr class='tablerow'><td>" + currentListCount + "</td><td>" + howManyTimesTried + "</td><td>" + AverageScenario + "</td></tr>");
    if (howManyTimesTried==1) {
      $(".imageholder").replaceWith('<img class="imageholder" src="img/2.jpg">')
    }
    else {
      $(".imageholder").replaceWith('<img class="imageholder" src="img/1.jpg">')
    }
  }

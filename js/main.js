
  $(".clickme").click(function(){
    increaseNumbertoSort();
    bogoSortThis();
  });

  function increaseNumbertoSort(){
    var newNumbertoAdd = ($(".liList").length)+1;
    $(".sortlist").append("<li class='liList'>" + newNumbertoAdd + "</li>");
  }

  function  bogoSortThis(){
    var itIsSorted = false;
    var howManyTimesTried = 0;
    var maxLiCount = ($(".liList").length);

    while (itIsSorted == false) {
      howManyTimesTried++;
      for (var i=maxLiCount; i>=0; i--){
        var rand = Math.floor(Math.random() * (i)+1);
        $(".liList:nth-child("+i+")").after($(".liList:nth-child("+rand+")"));
      }
      var i = 1;
      while (i<=maxLiCount){
        if (($(".liList:nth-child("+i+")").html() == i)){
          i++;
          itIsSorted=true;
        }
        else{
          itIsSorted=false
          i=maxLiCount+1;
        }
      }
    }
    var x = maxLiCount;
    var AverageScenario = 1;
    while(x>0){
      AverageScenario=AverageScenario*x;x--;
    }
    $(".resulttable").append("<tr class='tablerow'><td>" + maxLiCount + "</td><td>" + howManyTimesTried + "</td><td>" + AverageScenario + "</td></tr>");
    if (howManyTimesTried==1) {
      $(".imageholder").replaceWith('<img class="imageholder" src="img/2.jpg">')
    }
    else {
      $(".imageholder").replaceWith('<img class="imageholder" src="img/1.jpg">')
    }
  }

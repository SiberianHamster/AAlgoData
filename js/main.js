$(".clickme").click(function(){
  increaseNumbertoSort();
  bogoSortThis();
});

function increaseNumbertoSort(){
  var newNumbertoAdd = ($(".liList").length)+1;
  $(".sortlist").append("<li class='liList'>" + newNumbertoAdd + "</li>");
  //add new chlid row to table
}

function  bogoSortThis(){
  var itIsSorted = false;
  var howManyTimesTried = 0;

  while (itIsSorted == false) {
    var maxLiCount = ($(".liList").length);
    for (i=maxLiCount; i>=0; i--){
      var rand = Math.floor(Math.random() * (i)+1);
      $(".liList:nth-child("+i+")").after($(".liList:nth-child("+rand+")"));
    }

    var i = 1;
    if($(".liList:nth-child("+i+")").html() == i){
      if (i<=maxLiCount){
        i++;
      }
      else{itIsSorted=true
      }
    }
    else{
      itIsSorted=false;
    }

    howManyTimesTried++;
  }
}

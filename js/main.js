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
    console.log("how many times " + howManyTimesTried)

    for (var i=maxLiCount; i>=0; i--){
      var rand = Math.floor(Math.random() * (i)+1);
      $(".liList:nth-child("+i+")").after($(".liList:nth-child("+rand+")"));
    } console.log("done randomizing")

    var i = 1;

    while (i<=maxLiCount){
      console.log("i "+i);
      console.log("maxLiCount "+maxLiCount);
      if (($(".liList:nth-child("+i+")").html() == i)){
        i++;
        itIsSorted=true;
        console.log("true")
      }
      else{itIsSorted=false
        i=maxLiCount+1;
        console.log("false")
      }
    }
  }
}

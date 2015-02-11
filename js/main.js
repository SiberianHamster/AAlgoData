$(function(){

  var isItSorted = false;
  var howManyTimesTried = 0;
  var currentListCount;
  var i=currentListCount;

  function increaseArrayForSorting(){
    var nextNumberToAddToDOM = ($(".liList").length) + 1;
    $(".sortlist").append("<li class='liList'>" + nextNumberToAddToDOM + "</li>");
    return currentListCount = ($(".liList").length)
  }

  function checkMeForSortness(){
    var i = 1;
    while (i<=(($(".liList").length))){
      if (($(".liList:nth-child("+i+")").html() == i)){
        i++;
        if(i >= $(".liList").length){
          console.log("Number of Tries " + howManyTimesTried)

    // var x = currentListCount;
    // var AverageScenario = 1;
    // while(x>0){
    //   AverageScenario = AverageScenario * x;
    //   x--;
    // }
    // $(".resulttable").append("<tr class='tablerow'><td>" + currentListCount + "</td><td>" + howManyTimesTried + "</td><td>" + AverageScenario + "</td></tr>");
    // if (howManyTimesTried==1){
    //   $(".imageholder").replaceWith('<img class="imageholder" src="img/2.jpg">')
    // }
    // else {
    //   $(".imageholder").replaceWith('<img class="imageholder" src="img/1.jpg">')
    // }



        }
      }
      else{
        isItSorted=false
        i=currentListCount + 1;
        howManyTimesTried++;
        setTimeout(randomMe, 1000, i);
      }
    }

  }

  var randomMe = function (i){
    var rand = Math.floor(Math.random() * (i) + 1);
    $(".liList:nth-child(" + i + ")").after($(".liList:nth-child(" + rand + ")"));
    i--;
    if (i) {
      setTimeout(randomMe, 0, i);
    }
    else {
      checkMeForSortness()
    }
  }

      // var x = currentListCount;
    // var AverageScenario = 1;
    // while(x>0){
    //   AverageScenario = AverageScenario * x;
    //   x--;
    // }
  //   $(".resulttable").append("<tr class='tablerow'><td>" + currentListCount + "</td><td>" + howManyTimesTried + "</td><td>" + AverageScenario + "</td></tr>");
  //   if (howManyTimesTried==1) {
  //     $(".imageholder").replaceWith('<img class="imageholder" src="img/2.jpg">')
  //   }
  //   else {
  //     $(".imageholder").replaceWith('<img class="imageholder" src="img/1.jpg">')
  //   }
  // }

  $(".clickme").click(function(){
    howManyTimesTried = 0;
    increaseArrayForSorting();
    randomMe(currentListCount);
  })
});

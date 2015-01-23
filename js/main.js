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

  // loop the entire function until we set Done to True.
  // keep count of how many times we did this and replace to last child row of table


    var maxLiCount = ($(".liList").length);
    // loop this section until maxLiCount=0
        // random from 0 to maxLiCount
        // eq that random to the end
        // swap the end -1 to where random was
        //decriment maxlicount by 1

    //loop the check while i < maxLicount or i=li's i
        // each,  eq of i of li = i until li = maxLiCount
        // anytime if i>maxLiCount set done to true

}





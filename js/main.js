$(".clickme").click(function(){
  increaseNumbertoSort();
  bogoSortThis();
});

function increaseNumbertoSort(){
  var newNumbertoAdd = ($(".liList").length);
  $(".sortlist").append("<li class='liList'>" + newNumbertoAdd + "</li>");
  //add new chlid row to table
}

function  bogoSortThis(){

var maxLiCount = ($(".liList").length);
for (i=maxLiCount; i>=0; i--){
        console.log("i= " + i);
        console.log("rand= " + rand);

        var rand = Math.floor(Math.random() * (i)+1);
        $(".liList:eq("+i+")").after($(".liList:eq("+rand+")"))

}









}





        // eq that random to the end
        // swap the end -1 to where random was
        //decriment maxLiCount by 1

    //loop the check while i < maxLiCount or i=li's i
        // each,  eq of i of li = i until li = maxLiCount
        // anytime if i>maxLiCount set done to true






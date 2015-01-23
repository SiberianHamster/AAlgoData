$(".clickme").click(function(){
  increaseNumbertoSort();
  bogoSortThis();
});

function increaseNumbertoSort(){
  var newNumbertoAdd = ($(".liList").length)+1;
  $(".sortlist").append("<li class='liList'>" + newNumbertoAdd + "</li>");
}

function  bogoSortThis(){
    // Randomnizer() random array
   // Checknizer() check array for sortness}
}





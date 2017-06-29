//Check off specific todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

$("ul li span").click(function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
});

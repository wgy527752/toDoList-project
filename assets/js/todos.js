//check off specific todos by clicking
$("ul").on("click", "li", function(){
	//if li is gray, turn it black else turn it grey
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 	13){
		var todoText = $(this).val();
		$(this).val("");
		//create new li in ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//for new todo
$("input[type='text']").keypress(function(event){
	//13 is the value of enter key
	if(event.which === 13){
		//grabbing new todo text from input
		let todoText= $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


let ul = $("ul");
ul.on("click", "li", function () {
    $(this).toggleClass("done");
});

ul.on("click", ".delete", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});

$("input[type='text']").keypress(function(event){
   if(event.which === 13){
       let todoText = $(this).val();
       ul.append("<li><span class=\"delete\"><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>")
       $(this).val("");
   }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle(500);
});
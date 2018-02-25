$(function(){
    $("#jianshulink").click(function()
    {
        window.location = "http://www.jianshu.com/u/22205c0c60c3";
    });

    $(".linkToContainer").click(function()
    {
        $(".linkToContainer").removeClass("active");
        $(this).addClass("active");
        var container = $(this).attr("data-container");
        $(".container").addClass("hidden");
        $("#" + container).removeClass("hidden");
    });
});
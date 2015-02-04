$(document).ready(function() {
    
/*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

/*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

/*-- Start quiz when button is pushed --*/
    
    $("#startQuiz").click(function() {
        $("#startQuiz").hide();
        $(".q1Header").show();
        $(".questions p").show();
        $(".answers").show();
        $("input").show();
        $("#submitAnswer").show();
        $("#progress20").show();
        $("#progress40").show();
        $("#progress60").show();
        $("#progress80").show();
    });

});
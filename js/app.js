$(document).ready(function() {
    
    var numberCorrect = 0;
    var currentQuestion = 0;
    
/*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

/*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

/*-- Start quiz when button is pushed for non-interactive version 
    
    $("#startQuiz").click(function() {
        $(".qHeader").show();
        $(".questions p").show();
        $(".answers").show();
        $("input").show();
        $("#submitAnswer").show();
        $("#progress20").show();
        $("#progress40").show();
        $("#progress60").show();
        $("#progress80").show();
    }); 
    --*/

/*--quiz questions and answer array--*/
    var question1 = new Object();
    question1.title = "Question 1";
    question1.question = "Which company does Elon Musk own?";
    question1.answers = ["Dell", "Basecamp", "Tesla", "GE"];
    question1.correct = 2;
    
    var question2 = new Object();
    question2.title = "Question 2";
    question2.question = "What group typically invests in startup companies?";
    question2.answers = ["Venture Capital", "Private Equity", "Hedge Funds", "Parents"];
    question2.correct = 0;
    
    var question3 = new Object();
    question3.title = "Question 3";
    question3.question = "Which company provides breakfast, lunch, and dinner for employees?";
    question3.answers = ["Yahoo", "Goldman Sachs", "Patagonia", "Google"];
    question3.correct = 3;
    
    var question4 = new Object();
    question4.title = "Question 4";
    question4.question = "CMO stands for...?";
    question4.answers = ["Chief Me Officer", "Chief Market Officer", "Chief Marketing Officer", "Chief Merge Officer"];
    question4.correct = 2;
    
    var question5 = new Object();
    question5.title = "Question 5";
    question5.question = "What would Steve Jobs always wear for product announcements?";
    question5.answers = ["White collared shirt", "Black turtleneck", "Suit", "V-neck shirt"];
    question5.correct = 1;
    
    var questions = [question1, question2, question3, question4, question5];
       
    /*-load first question when button is pressed-*/
    
    $("#startQuiz").click(function() {
        $("#startQuiz").fadeOut('slow');
        $(".qHeader").html(question1.title).fadeIn('slow');
        $("#q").html(question1.question).fadeIn('slow');
        $(".answers").html(question1.answers).fadeIn('slow');
        $("#submitAnswer").show();
        $("#progress20").show();
        $("#progress40").show();
        $("#progress60").show();
        $("#progress80").show();
        
    });
    
    

});
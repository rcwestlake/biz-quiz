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

/*--quiz questions array--*/
    var questionList = [{
        question: "Which company does Elon Musk own?",
        answers: ["Dell", "Basecamp", "Tesla", "GE"], 
        qNum: 0, 
        correct: 2
        },
        {
        question: "What group typically invests in startup companies?",
        answers: ["Venture Capital", "Private Equity", "Hedge Funds", "Parents"], 
        qNum: 1, 
        correct: 0
        }, 
        {
        question: "Which company provides breakfast, lunch, and dinner for employees?",
        answers: ["Yahoo", "Goldman Sachs", "Patagonia", "Google"],
        qNum: 2, 
        correct: 3    
        }, 
        {
        question: "CMO stands for...?",
        answers: ["Chief Me Officer", "Chief Market Officer", "Chief Marketing Officer", "Chief Merge Officer"],
        qNum: 3,
        correct: 2
        },
        {
         question: "What would Steve Jobs always wear for product announcements?",
        answers: ["White collared shirt", "Black turtleneck", "Suit", "V-neck shirt"],
        qNum: 4, 
        correct: 1
                  
    }]
        
    

});
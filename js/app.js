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
    --*/

/*--quiz questions array--*/
    var question1 = new Object();
    question1.title = "Question 1";
    question1.question = "Which company does Elon Musk own?";
    question1.answers = ["Dell", "Basecamp", "Tesla", "GE"];
    question1.correct = 2;
    
    var questionList = [{
        title: "Question 1",
        question: "Which company does Elon Musk own?",
        answers: ["Dell", "Basecamp", "Tesla", "GE"], 
        qNum: 0, 
        correct: 2
        },
        {
        title: "Question 2",
        question: "What group typically invests in startup companies?",
        answers: ["Venture Capital", "Private Equity", "Hedge Funds", "Parents"], 
        qNum: 1, 
        correct: 0
        }, 
        {
        title: "Question 3",    
        question: "Which company provides breakfast, lunch, and dinner for employees?",
        answers: ["Yahoo", "Goldman Sachs", "Patagonia", "Google"],
        qNum: 2, 
        correct: 3    
        }, 
        {
        title: "Question 4",    
        question: "CMO stands for...?",
        answers: ["Chief Me Officer", "Chief Market Officer", "Chief Marketing Officer", "Chief Merge Officer"],
        qNum: 3,
        correct: 2
        },
        {
        title: "Question 5",    
        question: "What would Steve Jobs always wear for product announcements?",
        answers: ["White collared shirt", "Black turtleneck", "Suit", "V-neck shirt"],
        qNum: 4, 
        correct: 1
                  
    }]
    
    $("#startQuiz").click(function() {
        $("#startQuiz").fadeOut('slow');
        
        
    });
    
    

});
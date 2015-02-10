 var settoGray = function() {
        $('#button1').css('background-color', '#525257');
        $('#button2').css('background-color', '#525257');
        $('#button3').css('background-color', '#525257');
        $('#button4').css('background-color', '#525257');
    }
    
    var settoWhite = function() {
        $('#progress20').css('background-color', 'white');
        $('#progress40').css('background-color', 'white');
        $('#progress60').css('background-color', 'white');
        $('#progress80').css('background-color', 'white');
    }

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

/*-- Go back to main screen when game is over*/
    
    $("a.endGameClose").click(function() {
        $(".endGame").fadeOut('slow');
        $("#startQuiz").fadeIn('slow');
        $(".qHeader").html(q1.title).fadeOut('slow');
        $("#q").html(q1.question).fadeOut('slow');
        $("#answer1").html(q1.answers[0]).fadeOut('slow');
        $("#answer2").html(q1.answers[1]).fadeOut('slow');
        $("#answer3").html(q1.answers[2]).fadeOut('slow');
        $("#answer4").html(q1.answers[3]).fadeOut('slow');
        $(".answers").hide();
        $("#submitAnswer").hide();
        index = 0;
        $("#progress20").hide();
        $("#progress40").hide();
        $("#progress60").hide();
        $("#progress80").hide(); 
    
    });
    

/*--quiz questions and answer array--*/
    
    function Question(title, question, answers, correctAnswer) {
        this.title = title;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.userAnswer = -1;
        this.nextQuestion;    
     
    
     this.setNextQuestion = function(nextQuestion) {
        this.nextQuestion = nextQuestion;   
    }
        
    this.setAnswer = function(userAnswer) {
        this.userAnswer = userAnswer;
    }
        
     this.isCorrect = function() {
         return this.correctAnswer === this.userAnswer;
     }
    }
    
    var q1 = new Question('<h2>Question 1</h2>', "Which company does Elon Musk own?", ["Dell", "Basecamp", "Tesla", "GE"], 2);
    
    var q2 = new Question("<h2>Question 2</h2>", "What group typically invests in startup companies?",["Venture Capital", "Private Equity", "Hedge Funds", "Parents"],0);
    
    var q3 = new Question("<h2>Question 3</h2>", "Which company provides breakfast, lunch, and dinner for employees?", ["Yahoo", "Goldman Sachs", "Patagonia", "Google"], 3);
    
    var q4 = new Question("<h2>Question 4</h2>", "CMO stands for...?", ["Chief Me Officer", "Chief Market Officer", "Chief Marketing Officer", "Chief Merge Officer"], 2);
    
    var q5 = new Question("<h2>Question 5</h2>", "What would Steve Jobs always wear for product announcements?", ["White collared shirt", "Black turtleneck", "Suit", "V-neck shirt"], 1);
    
    var currentQuestion = q1;
    
    q1.setNextQuestion(q2);
    q2.setNextQuestion(q3);
    q3.setNextQuestion(q4);
    q4.setNextQuestion(q5);
       
    /*-load first question when button is pressed-*/
    
    console.log(q1.title);
    
    $("#startQuiz").click(function() {
        $("#startQuiz").fadeOut('slow');
        $(".qHeader").html(q1.title).fadeIn('slow');
        $("#q").html(q1.question).fadeIn('slow');
        $("#answer1").html(q1.answers[0]).fadeIn('slow');
        $("#answer2").html(q1.answers[1]).fadeIn('slow');
        $("#answer3").html(q1.answers[2]).fadeIn('slow');
        $("#answer4").html(q1.answers[3]).fadeIn('slow');
        $(".answers").show();
        $("#submitAnswer").show();
        $("#progress20").show();
        $("#progress40").show();
        $("#progress60").show();
        $("#progress80").show();
         window.scrollTo(200, 400);
        
    });
    
    var buttonFill = ['#progress20', '#progress40', '#progress60', '#progress80']
    var index = 0;
    
    $("#submitAnswer").click(function() {
        settoGray();
        currentQuestion = currentQuestion.nextQuestion;
        if (currentQuestion == undefined) {
            var iterator = q1; 
            var numberCorrect = 0;
            while (iterator != undefined) {
                if (iterator.isCorrect()) {
                    numberCorrect++;   
                }
                iterator = iterator.nextQuestion;
            }
            currentQuestion = q1;
            $(".endGame").fadeIn('slow');
            $('#numbCorrect').html(numberCorrect).show();
            window.scrollTo(0, 0);
            settoWhite();
        }
        else {
            $(buttonFill[index]).css('background-color', 'rgba(231, 93, 60, 0.93)');
            index++;                 
            $(".qHeader").html(currentQuestion.title).fadeIn('slow');
            $("#q").html(currentQuestion.question).fadeIn('slow');
            $("#answer1").html(currentQuestion.answers[0]).fadeIn('slow');
            $("#answer2").html(currentQuestion.answers[1]).fadeIn('slow');
            $("#answer3").html(currentQuestion.answers[2]).fadeIn('slow');
            $("#answer4").html(currentQuestion.answers[3]).fadeIn('slow');   
        }
       
        
    });
    
    $('#button1').click(function() {
        currentQuestion.setAnswer(0);
        settoGray();
        $('#button1').css('background-color', '#46a37c');
    });
    
     $('#button2').click(function() {
        currentQuestion.setAnswer(1);
        settoGray();
        $('#button2').css('background-color', '#46a37c');
        
    });
    
     $('#button3').click(function() {
        currentQuestion.setAnswer(2);
        settoGray();
        $('#button3').css('background-color', '#46a37c');
        
    });
    
     $('#button4').click(function() {
        currentQuestion.setAnswer(3);
        settoGray();
        $('#button4').css('background-color', '#46a37c');
        
    });
    
        //restart quiz if 'Play Again' button is pressed
    
    $('#playAgain').click(function() {
        console.log(buttonFill[index]);
        $("#startQuiz").fadeIn('slow');
        $(".qHeader").html(q1.title).fadeOut('fast');
        $("#q").html(q1.question).fadeOut('fast');
        $("#answer1").html(q1.answers[0]).fadeOut('slow');
        $("#answer2").html(q1.answers[1]).fadeOut('slow');
        $("#answer3").html(q1.answers[2]).fadeOut('slow');
        $("#answer4").html(q1.answers[3]).fadeOut('slow');
        $(".answers").hide();
        $("#submitAnswer").hide();
        $(".progress button").css('background-color', 'white');
        index = 0;
        $("#progress20").hide();
        $("#progress40").hide();
        $("#progress60").hide();
        $("#progress80").hide();  
        currentQuestion = q1;
        
    
    });
    

});
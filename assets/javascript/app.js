var panel = $('#quiz-area');
var countStartNumber = 30;


$(document).on('click', '#start-over', function() {
  game.reset();
});

$(document).on('click', '#start', function() {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
  game.loadQuestion();
});



var questions = [{
  question: "What kind of jeans do you prefer?",
  answers: ["Skinny Jeans", "Baggy Jeans", "Boot Cut Jeans"],
  correctAnswer: "skinny jeans",

}, {
  question: "What kind of cigarettes do you smoke?",
  answers: ["Marlboro Lights", "American Spirits", "Newports"],
  correctAnswer: "American Spriits",
}, {
  question: "How do you prefer to get around?",
  answers: ["Prius", "Hummer", "Lamborghini"],
  correctAnswer: "Prius",
 
}, {
  question: "Which of these beers would you bring to a party?",
  answers: ["Budwiser", "Corona", "Brooklyn"],
  correctAnswer: "Brooklyn",
}, {
  question: "Which of these authors would you prefer reading?",
  answers: ["Ernest Hemingway", "Geroge Orwall", "Jack Keraouac"],
  correctAnswer: "Jack Keraouac",
 
}];


var game = {
  questions:questions,
  counter:countStartNumber,
  correct:0,
  incorrect:0,  
 
 countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      game.timeUp();
    }
  },


  loadQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    for (var i = 0; i <questions[this.question]; i++){
      panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
 
  timeUp: function (){
    clearInterval(timer);
    $('#counter-number').html(game.counter);

    panel.html('<h2>Out of Time!</h2>');
    

    if (game.question === questions.length - 1){
      setTimeout(game.results);
    } else {
      setTimeout(game.results);
    }
  },
  results: function() {
    clearInterval(timer);

    panel.html('<h2>All done, heres how you did!</h2>');
    $('#counter-number').html(game.counter);
    panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
    panel.append('<br><button id="start-over">Start Over?</button>');
  },

  
  reset: function(){
    this.question = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};
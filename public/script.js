const btn=document.getElementById('btn')
btn.addEventListener('click',checkAnswers)
function checkAnswers() {
    var totalQuestions = 10;
    var correctAnswers = 0;
    var wronganswer=0;
    var notselected=0;

    // Check answers for each question
    for (var i = 1; i <= totalQuestions; i++) {
      var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
      if (selectedOption) {
        if (selectedOption.value === 'correct') {
          correctAnswers++;
          document.getElementById('answer' + i).style.color = 'green';
          document.getElementById('answer' + i).innerHTML = 'Correct!';
        } else {
          wronganswer++
          document.getElementById('answer' + i).style.color = 'red';
          document.getElementById('answer' + i).innerHTML = 'Incorrect!';
        }
      } else {
        notselected++
        document.getElementById('answer' + i).style.color = 'red';
        document.getElementById('answer' + i).innerHTML = 'No answer selected!';
      }
    }

    // Display score
    var score = (correctAnswers / totalQuestions) * 100;
    document.getElementById('score').innerHTML = 'Score: ' + score + '%';
    if(wronganswer>=1 && notselected>=1){
      document.getElementById('correctanswer').innerHTML= 'Correct Answer: '+ correctAnswers;
      document.getElementById('wronganswer').innerHTML= 'Wrong Answer: '+ wronganswer;
      document.getElementById('notselected').innerHTML= 'Not selected : '+ notselected;
      document.getElementById('notselected').style.top='6rem';
    }
    else if(wronganswer>=1){
      document.getElementById('correctanswer').innerHTML= 'Correct Answer: '+ correctAnswers;
      document.getElementById('wronganswer').innerHTML= 'Wrong Answer: '+ wronganswer;
    }
    else if(notselected>=1){
      document.getElementById('correctanswer').innerHTML= 'Correct Answer: '+ correctAnswers;
      document.getElementById('notselected').innerHTML= 'Not selected : '+ notselected;
      document.getElementById('notselected').style.top='4rem';
    }
}
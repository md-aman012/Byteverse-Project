//navbar js

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//quiz js

const questions = [
    "Do you currently have a temperature above 100.4°F (38°C)?",
    "Is your cough persistent or worsening over the past few days?",
    "Are you feeling unusually tired, even after resting or sleeping?",
    "Are you experiencing muscle or joint pain throughout your body?",
    "Is your headache strong enough to interfere with daily activities?",
    "Do you feel short of breath even while at rest or doing light activity?",
    "Is your throat painful when swallowing or speaking?",
    "Are you feeling nauseous consistently, even without eating?",
    "Have you been eating significantly less than usual over the past couple of days?",
    "Are you feeling lightheaded or like the room is spinning?"
 ];
 
 let currentQuestion = 0;
 let answers = []; // Array to store user responses
 
 function showQuestion() {
   document.getElementById("question-text").textContent = questions[currentQuestion];
 }
 
 function nextQuestion(answer) {
   answers.push(answer); // Store user response (true/false or "Yes"/"No")
   currentQuestion++;
   if (currentQuestion < questions.length) {
     showQuestion();
   } else if(currentQuestion = 10){
    
   }
   
   else {
     showResults();
   }
 }
 
 function showResults() {
   let resultHtml = "<h2>Thanks for completing the quiz!</h2><ul>";
//    questions.forEach((q, i) => {
//      resultHtml += `<li><strong>${q}</strong> — ${answers[i]}</li>`;
//    });
//    resultHtml += "</ul>";
   document.getElementById("question-box").innerHTML = resultHtml;
 }
 
 // Initialize the first question
 showQuestion();
 
const start = document.querySelector(".btn-start")
const quizcontainer = document.getElementById("quiz-container")
start.addEventListener("click", () =>{
    quizcontainer.style.cssText = "display: block;";
})

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


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
  
  let report = document.querySelector('#report');
  let currentQuestion = 0;
  let answers = []; // Array to store user responses
  let main = document.querySelector('#quiz-container');
  let getresult = document.getElementById("button");
  

  getresult.addEventListener('click', () => {
    report.style.display = "block";
  })

  function showQuestion() {
    document.getElementById("question-text").textContent = questions[currentQuestion];
  }
  
  function nextQuestion(answer) {
    answers.push(answer); // Store user response (true/false or "Yes"/"No")
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
  }
  
  function showResults() {
    let resultHtml = "<h2>Thanks for completing the quiz!</h2><ul>";
    getresult.style.display = "block";
    document.getElementById("question-box").innerHTML = resultHtml;
  }
  
  // Initialize the first question
  showQuestion();
  
  let ultra = {}; // Object to store responses
  
  async function GETData(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=fever`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const net = await response.json();
                ultra.net = net;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDataa(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Cough`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const neta = await response.json();
                ultra.neta = neta;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDatab(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Fatigue`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const netb = await response.json();
                ultra.netb = netb;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDatac(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Body%20Pain`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const netc = await response.json();
                ultra.netc = netc;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDatad(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Headache`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const netd = await response.json();
                ultra.netd = netd;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDatae(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Shortness%20of%20breath`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const nete = await response.json();
                ultra.nete = nete;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDataf(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Sore%20Throat`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const netf = await response.json();
                ultra.netf = netf;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDatag(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Nausea`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const netg = await response.json();
                ultra.netg = netg;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDatah(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Loss%20of%20Appetite`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const neth = await response.json();
                ultra.neth = neth;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  async function GETDatai(answer) {
    if (answer === 'Yes') {
        try {
            const response = await fetch(`http://localhost:3000/api/find?name=Dizziness`, {
                method: 'GET',
            });
  
            if (response.ok) {
                const neti = await response.json();
                ultra.neti = neti;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  }
  
  getresult.addEventListener('click', async () => {
      // Wait for all data to be fetched
      await Promise.all([
          GETData(answers[0]),
          GETDataa(answers[1]),
          GETDatab(answers[2]),
          GETDatac(answers[3]),
          GETDatad(answers[4]),
          GETDatae(answers[5]),
          GETDataf(answers[6]),
          GETDatag(answers[7]),
          GETDatah(answers[8]),
          GETDatai(answers[9]),
      ]);
    
      // Log the structure of the ultra object to see what data we have
      console.log('Ultra Object:', ultra);
      
  
     
      ////new
      let diseaseCount = {};
  
  // Iterate over the ultra object and count occurrences of each disease
  Object.keys(ultra).forEach((key) => {
      const diseases = ultra[key];
      diseases.forEach((diseaseObj) => {
          const diseaseName = diseaseObj.disease;
          if (diseaseCount[diseaseName]) {
              diseaseCount[diseaseName]++;
          } else {
              diseaseCount[diseaseName] = 1;
          }
      });
  });
  
  // Sort the diseases by frequency (from highest to lowest)
  const sortedDiseases = Object.entries(diseaseCount)
      .sort((a, b) => b[1] - a[1]); // Sort by count in descending order
  
  // Get the top disease
  const [topDisease, topCount] = sortedDiseases[0] || ["No disease", 0];
  
  // Display the top disease
  let resultHtml = "<h1>Most Occurring Disease:</h1>";
  resultHtml += `<h2>${topDisease}: ${topCount} Symptoms matched</h2>`;

  
  // Show the result
  document.getElementById("question-box").innerHTML = resultHtml;
  if (topDisease === "Common Cold") {
    const remedyBox = document.querySelector('.common_cold');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Influenza (Flu)") {
    const remedyBox = document.querySelector('.influenza');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Acute Bronchitis") {
    const remedyBox = document.querySelector('.acute_bronchitis');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Sinusitis (Viral)") {
    const remedyBox = document.querySelector('.sinusitis');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Pharyngitis (Strep Throat)") {
    const remedyBox = document.querySelector('.pharyngitis');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Gastroenteritis (Viral)") {
    const remedyBox = document.querySelector('.gastroenteritis');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Labyrinthitis"){
    const remedyBox = document.querySelector('.labyrinthitis');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if(topDisease === "Meningitis (Viral)") {
    const remedyBox = document.querySelector('.meningitis');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Early Stage Measles"){
    const remedyBox = document.querySelector('.measles');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "COVID-19 (Mild)") {
    const remedyBox = document.querySelector('.covid19');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Post-Viral Syndrome") {
    const remedyBox = document.querySelector('.post_viral_syndrome');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Dehydration") {
    const remedyBox = document.querySelector(".dehydration");
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Anemia") {
    const remedyBox = document.querySelector('.anemia');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Migraine") {
    const remedyBox = document.querySelector('.migraine');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Food Poisoning") {
    const remedyBox = document.querySelector('.food_poisoning');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Panic Attack") {
    const remedyBox = document.querySelector('.panic_attack');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Vertigo") {
    const remedyBox = document.querySelector('.vertigo');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Upper Respiratory Infection (URI)") {
    const remedyBox = document.querySelector('.uri');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Lower Respiratory Infection (LRI)") {
    const remedyBox = document.querySelector('.lri');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Allergic Reaction") {
    const remedyBox = document.querySelector('.allergic_reaction');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Ear Infection (Otitis Media)") {
    const remedyBox = document.querySelector('.ear_infection');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Viral Pneumonia") {
    const remedyBox = document.querySelector('.viral_pneumonia');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
if (topDisease === "Kidney Infection (Pyelonephritis)") {
    const remedyBox = document.querySelector('.kidney_infection');
    if (remedyBox) {
        remedyBox.style.display = 'block'; // Show it!
        remedyBox.classList.add('remedies'); // Apply styling if needed
        document.querySelector('#report').appendChild(remedyBox);
        console.log(`Top disease detected: "${topDisease}"`);

    }
}
 

   
  });
      // Flatten the results by iterating over 'ultra' object and extracting the 'result' property
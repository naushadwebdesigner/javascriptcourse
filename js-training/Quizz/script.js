let question = document.querySelector('#question');
let optionsEl = document.querySelector("#options");
let nextBtn = document.querySelector("#nextBtn");

let gameObj = {
  score: 0,
  currentIndex: 0,

  quizData: [
    {
      question: "Which is largest animal in the world?",
      options: ["Shark", "Blue whale", "Elephant", "Giraffe"],
      answer: "Blue whale"
    },
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      answer: "Tokyo"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "None of these"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which is the smallest continent?",
      options: ["Australia", "Europe", "Antarctica", "South America"],
      answer: "Australia"
    },
    {
      question: "Which company developed the React library?",
      options: ["Google", "Facebook", "Microsoft", "Apple"],
      answer: "Facebook"
    }
  ],

  // Initialize game
  init: function () {
    // attach event only once
    nextBtn.addEventListener("click", this.nextQuestions.bind(this));
    this.load();
  },

  // Load question
  load: function () {
    nextBtn.style.display = "none";
    question.textContent = `${this.currentIndex + 1} - ${this.quizData[this.currentIndex].question}`;
    optionsEl.innerHTML = "";

    let options = this.quizData[this.currentIndex].options;
    options.forEach((option) => {
      let optionDiv = document.createElement("div");
      optionDiv.className = "option";
      optionDiv.textContent = option;
      optionsEl.appendChild(optionDiv);
    });

    this.loadBtns();
  },

  // Option click events
  loadBtns: function () {
    let btns = document.querySelectorAll(".option");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btns.forEach(b => b.classList.add("disabled")); // disable all options
        let correctAnswer = this.quizData[this.currentIndex].answer;

        if (e.target.textContent === correctAnswer) {
          e.target.classList.add("correct");
          this.score++;
        } else {
          e.target.classList.add("wrong");
          btns.forEach((btn) => {
            if (btn.textContent === correctAnswer) {
              btn.classList.add("correct");
            }
          });
        }

        nextBtn.style.display = "block";
      });
    });
  },

  // Next question
  nextQuestions: function () {
    this.currentIndex++;
    if (this.currentIndex < this.quizData.length) {
      this.load();
    } else {
      this.showResult();
    }
  },

  // Show final score
  showResult: function () {
    question.textContent = `🎉 Quiz Completed! Your Score: ${this.score}/${this.quizData.length}`;
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

// start game
gameObj.init();

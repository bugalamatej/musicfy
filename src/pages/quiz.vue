<template>
    <div class="container">
        <button class="leave-button" @click="$router.push({ name: 'Main' })">Leave</button>
      <div v-if="!gameStarted">
        <h1 class="title">Welcome to the Musicfy Quiz!</h1>
        <button class="start-button" @click="startGame">Start Game</button>
      </div>
      <div v-else>
        <h2 class="question-count">Question {{currentQuestionIndex + 1}} of {{totalQuestions}}</h2>
        <h3 class="question">{{currentQuestion.question}}</h3>
        <div class="options-container">
          <div v-for="(option, index) in currentQuestion.options" :key="index" class="option">
            <input type="radio" :id="'option'+index" :value="option" v-model="selectedOption" class="radio-btn">
            <label :for="'option'+index" class="option-label">{{option}}</label>
          </div>
        </div>
        <button class="next-button" @click="nextQuestion">Next</button>
      </div>
      <div v-if="gameOver">
        <h1 class="title">Game Over!</h1>
        <h2 class="score">Your Score: {{score}}</h2>
        <button class="restart-button" @click="restartGame">Restart Game</button>
      </div>
    </div>
 
  </template>
  <script>
  import axios from "axios";
  
  
  export default {

  
    data() {
      return {
        questions: [],
        currentQuestionIndex: 0,
        selectedOption: null,
        score: 0,
        totalQuestions: 10,
        gameStarted: false,
        gameOver: false,
      };
    },
    mounted() {
      this.fetchQuestions();
    },
    methods: {
      async fetchQuestions() {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&category=12&type=multiple"
        );
        this.questions = response.data.results.map((question) => {
          return {
            question: question.question.replace(/&quot;/g, '"'),
            options: [...question.incorrect_answers, question.correct_answer].sort(
              () => Math.random() - 0.5
            ).map((option) => option.replace(/&quot;/g, '"')),
            answer: question.correct_answer.replace(/&quot;/g, '"'),
          };
        });
      },
      startGame() {
        this.gameStarted = true;
        this.questions = this.questions.sort(() => Math.random() - 0.5);
      },
      nextQuestion() {
        if (this.selectedOption === this.currentQuestion.answer) {
          this.score++;
        }
        if (this.currentQuestionIndex < this.totalQuestions - 1) {
          this.currentQuestionIndex++;
          this.selectedOption = null;
        } else {
          this.gameOver = true;
        }
      },
      restartGame() {
        this.gameOver = false;
        this.currentQuestionIndex = 0;
        this.selectedOption = null;
        this.score = 0;
        this.fetchQuestions();
      },
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
    },
  };
  </script>

  <style scoped>
  .container {
    background-image: url('../assets/images/musicfy-logo-removebg-preview.png');
    background-repeat: no-repeat;
    background-size: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    font-family: 'Montserrat', sans-serif;
  }
  
  .title {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #222;
  }
  
  .start-button, .next-button, .restart-button, .leave-button {
    font-size: 1.5rem;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #222;
    color: #f5f5f5;
    cursor: pointer;
    transition: all 0.3s ease;  
  }

  .leave-button{
    position: absolute;
    bottom: 30px!important;
    right: 30px !important;
  }

  .next-button{
    position: absolute;
    bottom: 30px!important;
    left: 30px !important;
  }
  
  .start-button:hover, .next-button:hover, .restart-button:hover {
    background-color: #f5f5f5;
    color: #222;
  }
  
  .question-count {
    font-size: 1.5rem;
    color: #222;
  }
  
  .question {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #222;
    text-align: center;
  }
  
  .options-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .option {
    display: flex;
    align-items: center;
    margin: 1rem;
  }
  
  .radio-btn {
    margin-right: 0.5rem;
    cursor: pointer;
  }
  
  .option-label {
    font-size: 1.5rem;
    color: #222;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .option-label:hover {
    color: #222;
    text-decoration: underline;
  }
  
  .score {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #222;
  }
  
  @media screen and (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
    .question-count {
      font-size: 1.2rem;
    }
    .question {
      font-size: 1.8rem;
    }
    .option-label {
      font-size: 1.2rem;
    }
    .score {
      font-size: 2rem;
    }
  }
  </style>
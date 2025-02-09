import { useState } from 'react';
import QUESTIONS from '../question'
import quizCompleteImg from '../assets/quiz-complete.png'

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const shuffledAnswers=[...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswers.sort(()=>Math.random()-0.5);
  const quizIsComplete=activeQuestionIndex===QUESTIONS.length

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
if(quizIsComplete){
  return<div id="summary">
    <img src={quizCompleteImg} alt='trophy-icon'/>
    <h2>
      Quiz Completed!
    </h2>
  </div>
}
  // Check if the quiz is completed
  if (activeQuestionIndex >= QUESTIONS.length) {
    return <div>Quiz completed! Thank you for your participation.</div>;
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

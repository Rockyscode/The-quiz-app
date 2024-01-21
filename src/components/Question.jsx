import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import questions from "../questions";
import { useState } from "react";

export default function Question({ onSelectAnswer, onSkipAnswer, index }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (chosenAnswer) => {
    setAnswer({
      selectedAnswer: chosenAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: chosenAnswer,
        isCorrect: questions[index].answers[0] === chosenAnswer,
      });
      setTimeout(() => {
        onSelectAnswer(chosenAnswer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswer) {
    answerState = answerState.isCorrect ? "correct" : "wrong";
  }
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeOut={onSkipAnswer} />
      <h2>{questions[index].text}</h2>
      <Answers
        answers={questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

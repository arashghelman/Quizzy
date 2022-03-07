import { useState, useEffect } from "react";

export const useAnswers = (questions) => {
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const answers = questions?.map((question) => ({
      questionId: question.questionId,
      optionId: "",
      isCorrect: false,
    }));

    setAnswers(answers);
  }, [questions]);

  const select = (questionId, optionId) => {
    const updatedAnswers = answers.map((answer) => ({ ...answer }));
    const answer = updatedAnswers.find(
      (answer) => answer.questionId === questionId
    );
    answer.optionId = optionId;
    answer.isCorrect = questions
      .find((question) => question.questionId === questionId)
      .options?.find((option) => option.optionId === optionId).isCorrect;

    setAnswers(updatedAnswers);
  };

  const setQuizResult = () => {
    const questionsCount = questions.length;
    let correctAnswersCount = 0;

    answers.forEach((answer) => answer.isCorrect && correctAnswersCount++);

    const score = ((correctAnswersCount * 100) / questionsCount).toFixed(1);
    const wrongAnswersCount = questionsCount - correctAnswersCount;

    setResult({ score, correctAnswersCount, wrongAnswersCount });
  };

  return { answers, result, select, setQuizResult };
};

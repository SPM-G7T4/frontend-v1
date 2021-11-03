import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import Question from "../models/Question";
import ListController from "../controllers/ListController";
import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";

import styles from "./QuizDetails.module.scss";

export default function QuizBuilder() {
  const { courseId, classId, sectionId } = useParams();
  const [questions, setQuestions] = useState([
    new Question({
      text: "There are two types of printers.",
      options: ["True", "False"]
    })
  ]);

  const listController = new ListController(questions, setQuestions);

  return (
    <div className={styles.quiz}>
      <div className={styles['title']}>Create Quiz for <span className="text-primary">{courseId}, Class {classId}, Section {sectionId}</span></div>
      <div className={styles['question-area']}>
        <ol>
          {questions.map((question, i) => (
            <QuizQuestion
              key={question.id}
              question={question}
              setQuestion={question => listController.set(i, question)}
              removeQuestion={() => listController.remove(i)}
              moveQuestionUp={() => listController.moveUp(i)}
              moveQuestionDown={() => listController.moveDown(i)}
            />
          ))}
        </ol>
      </div>
      <Button onClick={() => listController.add(new Question())}>
        <FaPlus style={{marginRight: "0.5rem"}} />
        Add MCQ Question
      </Button>
      <Button style={{marginLeft: "0.5rem"}} onClick={() => listController.add(new Question())}>
        <FaPlus style={{marginRight: "0.5rem"}} />
        Add True/False Question
      </Button>
    </div>
  );
}

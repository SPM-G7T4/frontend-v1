import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import { FaSave, FaPencilAlt, FaTrashAlt, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

export default function QuizQuestion({
  question,
  setQuestion,
  removeQuestion,
  moveQuestionUp,
  moveQuestionDown
}) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <li>
      {editing ? (
        <QuestionForm question={question} setQuestion={setQuestion} />
      ) : (
        <div style={{marginBottom: "1rem"}}>
          <p>{question.text}</p>
          {question.hasOptions ? (
            question.options.map((option, i) => (
              <Form.Label key={i} style={{display: "block"}}>
                <input
                  type={question.inputType}
                  id={option}
                  name={option}
                  value={option}
                  disabled
                />
                {option}
              </Form.Label>
            ))
          ) : (
            <textarea disabled />
          )}
        </div>
      )}
      <div>
        <Button variant="outline-primary" onClick={toggleEditing} style={{marginRight: "0.5rem"}}>
          {editing ? (
            <>
              <FaSave style={{marginRight: "0.5rem"}} />
              Save Question
            </>
          ) : (
            <>
              <FaPencilAlt style={{marginRight: "0.5rem"}} />
              Edit Question
            </>
          )}
        </Button>
        <Button variant="outline-danger" onClick={removeQuestion}>
          <FaTrashAlt style={{marginRight: "0.5rem"}} />
          Delete Question
        </Button>
      </div>
      <br />
      <div>
        Move Question:{" "}
        <Button variant="outline-secondary" onClick={moveQuestionUp} style={{marginRight: "0.5rem"}}>
          <FaAngleUp />
          Up
        </Button>
        <Button variant="outline-secondary" onClick={moveQuestionDown}>
          <FaAngleDown />
          Down
        </Button>
      </div>
    </li>
  );
}

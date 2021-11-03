import React from "react";
import ListController from "../controllers/ListController";
import { FaPlus, FaTrashAlt, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

export default function QuestionForm({ question, setQuestion }) {
  function handleChangeText(e) {
    setQuestion(question.merge({ text: e.target.value }));
  }

  function setOptions(options) {
    setQuestion(question.merge({ options }));
  }

  const listController = new ListController(question.options, setOptions);

  return (
    <div>
      <label>Question Text:</label>
      <Form.Control type="text" value={question.text} onChange={handleChangeText} />

      {question.hasOptions && (
        <fieldset>
          <Form.Label as="legend" column sm={2}>
            Options
          </Form.Label>

          {question.options.map((option, i) => (
            <div className="d-flex mb-2" key={i}>
              <Form.Control
                type="text"
                placeholder="Enter option"
                name={option}
                value={option}
                onChange={e => listController.set(i, e.target.value)}
              />
              <Button variant="outline-primary" style={{marginLeft: "0.2em"}} onClick={() => listController.moveUp(i)}>
                <FaAngleUp />
              </Button>
              <Button variant="outline-primary" style={{marginLeft: "0.2em"}} onClick={() => listController.moveDown(i)}>
                <FaAngleDown />
              </Button>
              <Button variant="outline-danger" style={{marginLeft: "0.2em"}} onClick={() => listController.remove(i)}>
                <FaTrashAlt />
              </Button>
            </div>
          ))}
          <p>
            <Button variant="outline-primary" onClick={() => listController.add("")}>
              <FaPlus style={{marginRight: "0.5rem"}} />
              Add Option
            </Button>
          </p>
        </fieldset>
      )}
    </div>
  );
}
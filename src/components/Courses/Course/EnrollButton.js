import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EnrollButton = () => {
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Request");

  return (
    <Button
      variant="primary"
      disabled={disable}
      onClick={() => {
        setDisable(true);
        setButtonText("Requested");
      }}
    >
      {buttonText}
    </Button>
  );
};

export default EnrollButton;

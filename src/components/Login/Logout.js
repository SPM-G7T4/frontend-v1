import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const Logout = () => {
  const history = useHistory();
  
  function logoutUser() {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <Button variant="primary" onClick={logoutUser}>
      Logout
    </Button>
  )
};

export default Logout;

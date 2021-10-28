import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Login.module.scss";

import { Container, Button, Image, Form } from "react-bootstrap";

import logoHead from "../../assets/logo-aio.png";

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  let history = useHistory();

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hrToken = {
      name: 'Jo En Chua',
      email: 'joen@smu.edu.sg',
      password: '123',
    };

    let learnerToken = {
      name: 'Sean Choon',
      email: 'sean@smu.edu.sg',
      password: '123',
    };

    let trainerToken = {
      name: 'Jia Le Ong',
      email: 'jiale@smu.edu.sg',
      password: '123',
    };

    switch (emailInput) {
      case hrToken.email:
        sessionStorage.setItem('auth-token', 'admin');
        sessionStorage.setItem('email', hrToken.email);
        sessionStorage.setItem('name', hrToken.name);
        history.push('/');
        break;

      case learnerToken.email:
        sessionStorage.setItem('auth-token', 'learner');
        sessionStorage.setItem('email', learnerToken.email);
        sessionStorage.setItem('name', learnerToken.name);
        history.push('/');
        break;

      case trainerToken.email:
        sessionStorage.setItem('auth-token', 'trainer');
        sessionStorage.setItem('email', trainerToken.email);
        sessionStorage.setItem('name', trainerToken.name);
        history.push('/');
        break;

      default:
        alert('wrong email or password combination');
    }
  };

  return (
    <>
      <div className={styles.login}>
        <Container fluid>
          <div className="text-center">
            <div className={styles.img}>
              <Image src={logoHead} fluid />
            </div>
            <div className={styles.title}>Log in to All in One</div>
          </div>
          <Form autoComplete="off" onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="fields"
                type="email"
                value={emailInput}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="fields"
                type="password"
                value={passwordInput}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            <div className={styles.auth}>
              <div>
                <strong>Learner Email:</strong> sean@smu.edu.sg
                <br />
                <strong>Password:</strong> 123
              </div>
              <div>
                <strong>HR Email:</strong> joen@smu.edu.sg
                <br />
                <strong>Password:</strong> 123
                <br />
              </div>
              <div>
                <strong>Trainer Email:</strong> jiale@smu.edu.sg
                <br />
                <strong>Password:</strong> 123
                <br />
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Login;

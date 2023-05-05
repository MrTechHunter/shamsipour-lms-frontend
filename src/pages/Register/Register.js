import { Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Alert_Comp from "../../components/Alert/Alert_Comp";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import Toast_Comp from "../../components/Toast/Toast_Comp";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const history = useHistory();

  const {user} = useSelector((state) => state.auth);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/auth/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        console.log(result);
        if (result.errors) {
          setError(result.errors);
        } else {
          setToast(true);
          setError(null);
          setTimeout(() => {
            history.push("/login");
          }, 3000);
          clearTimeout();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if(user && user.role=="Student")
    {
      history.push('/')
    }
    else if(user && user.role==="Admin")
    {
      history.push('/admin-dashboard')
    }
    else if(user && user.role==="Teacher")
    {
      history.push('/teacher-dashboard')
    }

  }, [user])

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Container>
        <Toast_Comp
          setToast={setToast}
          renderToast={toast}
          msg="Registration Success Please Login"
        />
        <Row>
          <Col md={6} className="mx-auto mt-4 ">
            <Paper className="p-4 shadow rounded">
              <Typography
                className="text-center text-primary mb-3"
                variant="h5"
              >
                ثبت نام
              </Typography>
              {loading && <Spinner_comp />}
              {error && error.user && (
                <Alert_Comp variant="danger" msg={error.user} />
              )}

              <Form onSubmit={formSubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>نام کاربری</Form.Label>
                  <Form.Control
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="نام کاربری"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.userName}
                  </span>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>ایمیل</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="ایمبل"
                  />
                  <span style={{ color: "red" }}>{error && error.email}</span>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>رمزعبور</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="رمزعبور"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.password}
                  </span>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>تایید رمزعبور</Form.Label>
                  <Form.Control
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="تایید رمزعبور"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.confirmPassword}
                  </span>
                </Form.Group>
                <Typography style={{ color: "GrayText" }} variant="subtitle2">
                  از قبل حساب کاربری دارید؟ &nbsp;
                  <Link to="/login">ورود به حساب کاربری</Link>
                </Typography>
                <Button
                  className="mt-2"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  ثبت
                </Button>
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;

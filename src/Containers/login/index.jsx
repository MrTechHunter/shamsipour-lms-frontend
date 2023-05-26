import React from "react";
import { Form, Formik } from "formik";
import { useLoginMutation } from "../../Redux/service/authApi";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import validationSchema from "./validation";
import initialValues from "./initialValues";

const Login = () => {
  const [login] = useLoginMutation();
  const submitHandler = ({ email, password }) => {
    login({
      email: email,
      password: password,
    });
  };
  return (
    <div className="pt-20">
      <Typography variant="h4" component="h4" color={"black"}>
        ورود به سامانه
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form name="login">
              <div className="flex flex-wrap gap-x-4 gap-y-4">
                <TextField
                  name="email"
                  label="ایمیل"
                  onChange={formik.handleChange}
                  fullWidth
                  variant="standard"
                />
                <TextField
                  name="password"
                  label="رمزعبور"
                  onChange={formik.handleChange}
                  fullWidth
                  variant="standard"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberMe"
                      onChange={formik.handleChange}
                    />
                  }
                  label="مرا به خاطر بسپار"
                  sx={{
                    color: "black",
                  }}
                />
              </div>
              <div className="mt-4">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={!formik.isValid}
                >
                  ورود
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

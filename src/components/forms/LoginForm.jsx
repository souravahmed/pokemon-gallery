import {
  Box,
  Paper,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import React from "react";
import { useToggle } from "../../hooks";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Input } from "../";
import { ValidationUtil } from "../../utils";
import { useNavigate } from "react-router-dom";
import { FORM_ERROR } from "final-form";
import { useDispatch } from "react-redux";
import { userLoginRequest } from "../../store";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const { email, password } = values;
    dispatch(userLoginRequest({ email, password }, onSuccessLoginHandler));
    return { [FORM_ERROR]: "Login Failed" };
  };

  const onSuccessLoginHandler = () => {
    navigate("/");
  };

  const [showPassword, toggleHandler] = useToggle();

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        submitError,
      }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Box
            sx={{
              backgroundColor: "rgb(247, 249, 252)",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper sx={{ width: "520px", padding: "2rem" }}>
              <Stack alignItems="center" spacing={1.5} marginBottom="2rem">
                <Avatar alt="logo" sx={{ width: "80px", height: "80px" }} />
                <Typography variant="h4">Image Gallery</Typography>
                <Typography variant="subtitle2">
                  Sign in to your account to continue
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Field
                  name="email"
                  component={Input}
                  label="Email"
                  placeholder="admin@gmail.com"
                  InputProps={{ type: "email" }}
                  validate={ValidationUtil.composeValidators(
                    ValidationUtil.requiredValidator,
                    ValidationUtil.emailValidator
                  )}
                ></Field>
                <Field
                  name="password"
                  component={Input}
                  label="Password"
                  placeholder="Test12345"
                  validate={ValidationUtil.requiredValidator}
                  InputProps={{
                    type: showPassword ? "text" : "password",
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleHandler}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {submitError && (
                  <Typography
                    sx={{ color: "red", textAlign: "center", fontWeight: 600 }}
                  >
                    {submitError}
                  </Typography>
                )}
              </Stack>
              <Stack spacing={1}>
                <Button
                  sx={{ marginTop: "30px" }}
                  fullWidth={true}
                  variant="contained"
                  type="submit"
                >
                  Sign In
                </Button>
                <Typography variant="h6" textAlign="center">
                  Or
                </Typography>
                <Button
                  sx={{ marginTop: "30px" }}
                  fullWidth={true}
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </Stack>
            </Paper>
          </Box>
        </form>
      )}
    />
  );
};

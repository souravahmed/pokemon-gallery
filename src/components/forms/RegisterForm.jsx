import {
  Box,
  Paper,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import React from "react";
import { useToggle } from "../../hooks";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Input } from "../";
import { ValidationUtil } from "../../utils";
import { useNavigate } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { userLoginRequest, userRegisterRequest } from "../../store";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(userRegisterRequest({ ...values }, onSuccessLoginHandler));
  };

  const onSuccessLoginHandler = () => {
    navigate("/");
  };

  const [showPassword, toggleHandler] = useToggle();

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
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
                <Typography variant="h4">Image Gallery</Typography>
                <Typography variant="subtitle2">
                  We are so glad to see you register !!!
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Field
                  name="email"
                  component={Input}
                  label="Email"
                  InputProps={{ type: "email" }}
                  validate={ValidationUtil.composeValidators(
                    ValidationUtil.requiredValidator,
                    ValidationUtil.emailValidator
                  )}
                />
                <Field
                  name="mobile_number"
                  component={Input}
                  label="Mobile Number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  validate={ValidationUtil.composeValidators(
                    ValidationUtil.requiredValidator,
                    ValidationUtil.mobileNumberValidator
                  )}
                />
                <Field
                  name="password"
                  component={Input}
                  label="Password"
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
              </Stack>
              <Stack spacing={1}>
                <Button
                  sx={{ marginTop: "30px" }}
                  fullWidth={true}
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  Register
                </Button>
                <Typography variant="h6" textAlign="center">
                  Or
                </Typography>
                <Button
                  sx={{ marginTop: "30px" }}
                  fullWidth={true}
                  variant="contained"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
              </Stack>
            </Paper>
          </Box>
        </form>
      )}
    />
  );
};

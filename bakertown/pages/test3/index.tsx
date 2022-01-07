import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Link,
  ButtonBase,
} from "@material-ui/core";
import CheckBox from "@material-ui/core/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import React from "react";
import { signin } from "../../../../../pages/_app";
import login from "../../../../../public/imgs/login.jpg";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 400,
    margin: "100px auto",
  };

  const avartarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const btstlye = {
    margin: "8px 0",
  };

  const sectionStyle = {
    backgroundImage: `url(${login})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  async function handlesSignIn() {
    setLoading(true);
    try {
      await signin(emailRef.current.value, passwordRef.current.value);
      alert("로그인 되셨습니다.");
      router.push("/");
    } catch {
      alert("이미 로그인 이메일입니다.");
    }
    setLoading(false);
  }
  return (
    <section style={sectionStyle}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avartarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>sign in</h2>
          </Grid>
          <TextField
            ref={emailRef}
            label="Useremail"
            placeholder="Enter useremail"
            fullWidth
          />
          <TextField
            ref={passwordRef}
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
          />
          <FormControlLabel
            control={<CheckBox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={handlesSignIn}
            type="submit"
            color="primary"
            style={btstlye}
            variant="contained"
            fullWidth
          >
            sign in
          </Button>
          <Typography>
            <ButtonBase>Forgot password?</ButtonBase>
          </Typography>
          <Typography>
            Do you have an account?
            <ButtonBase>Sign Up</ButtonBase>
          </Typography>
        </Paper>
      </Grid>
    </section>
  );
};

export default Login;

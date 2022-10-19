import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Banner from "../components/Banner";
import {
  Container,
  Wrapper,
  FormContainer,
  Title,
  Subtitle,
  Form,
  Input,
  Btn,
  Create,
} from "../styles/login.styles";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

export const toastStyles = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Login = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { dispatch } = useAuthContext();

  const handleChange = (e) => {
    let newInput = {
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...newInput });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const user = res.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Login successfully", toastStyles);
        router.push("/");
        return res;
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/wrong-password":
            return toast.error("Incorrect password", toastStyles);
            break;
          case "auth/internal-error":
            return toast.error("Please enter a valid password", toastStyles);
            break;
          case "auth/invalid-email" || "auth/missing-email":
            return toast.error(
              "Please enter a valid email address",
              toastStyles
            );
            break;
          default:
            return toast.error(
              "Please enter all fields correctly",
              toastStyles
            );
        }
      });
  };

  const sendResetEmail = () => {
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        toast.success(
          "Please check your email for the password reset link",
          toastStyles
        );
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/missing-email":
            return toast.error("Please enter your email", toastStyles);
            break;
          case "auth/user-not-found":
            return toast.error("User not found", toastStyles);
            break;
          default:
            return toast.error("Please enter a valid email", toastStyles);
        }
      });
  };

  return (
    <Container>
      <Banner title="my account" inActiveLink="my account" />
      <Wrapper>
        <FormContainer>
          <Title>Login</Title>
          <Subtitle>Please login using your account details</Subtitle>
          <Form onSubmit={handleLogin}>
            <Input
              placeholder="Your Email Address"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Your Password"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <a href="#" onClick={sendResetEmail}>
              Forgot your password?
            </a>
            <Btn type="submit">Sign in</Btn>
            <p>
              don't have an account?{" "}
              <Create href="/signup">create account</Create>
            </p>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import Banner from "../components/Banner";
import { useRouter } from "next/router";
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
} from "../styles/signup.styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    let newInput = {
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...newInput });
  };

  const toastStyles = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        toast.success("Account created successfully", toastStyles);
        router.push("/login");
        return res;
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        } else if (err.code === "auth/weak-password") {
          toast.error("Password should be at least six characters long");
        } else {
          toast.error(
            "Please check if inputs were entered correctly",
            toastStyles
          );
        }
      });
  };

  return (
    <Container>
      <Banner title="create account" inActiveLink="create account" />
      <Wrapper>
        <FormContainer>
          <Title>Sign up</Title>
          <Subtitle>Please fill in the fields below correctly</Subtitle>
          <Form onSubmit={handleSignup}>
            <Input
              placeholder="Your Full Name"
              type="text"
              required
              name="fullname"
              onChange={(e) => handleChange(e)}
            />
            <Input
              placeholder="Your Email Address"
              type="email"
              required
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <Input
              placeholder="Your Password"
              type="password"
              required
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <Btn type="submit">create account</Btn>
            <p>
              have an account? <Create href="/login">login</Create>
            </p>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Signup;

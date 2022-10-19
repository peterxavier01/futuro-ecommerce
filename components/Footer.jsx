import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

import Logo from "../public/logo.png";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <IconContainer>
          <Link href="#">
            <a>
              <Image src={Logo} alt="Futuro logo" width={100} height={40} />
            </a>
          </Link>
          <BtnContainer>
            <input type="text" placeholder="Enter your email address" />
            <button>Sign up</button>
          </BtnContainer>
          <p>Contact Info</p>
          <p>Plot 124, Arixton View, Nigeria</p>
        </IconContainer>
        <Category>
          <h4>Categories</h4>
          <div>
            <p>Laptops & Computers</p>
            <p>Food & Groceries</p>
            <p>Speakers & Mics</p>
            <p>Video Games & Consoles</p>
            <p>Mobile Phones & Tablets</p>
          </div>
        </Category>
        <QuickLinks>
          <div>
            <h4>Quick Links</h4>
            <div>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>My Account</p>
            </div>
          </div>
        </QuickLinks>
      </Wrapper>
      <CopyrightContainer>
        <Copyright>
          <div>
            <p>2022 Copyright &copy; Futuro | All Rights reserved</p>
          </div>
          <SocialIconContainer>
            <div>
              <RiTwitterLine />
            </div>
            <div>
              <RiLinkedinLine />
            </div>
            <div>
              <AiOutlineInstagram />
            </div>
          </SocialIconContainer>
        </Copyright>
      </CopyrightContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgFooterLight};
  color: ${(props) => props.theme.subTextColor};
  transition: all 0.3s ease-in;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: var(--max-width);
  flex-wrap: wrap;
  gap: 1.5em;
  padding: 1.5em 1em;
  margin-bottom: 1em;

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    gap: 2em;
  }

  p {
    font-size: 0.9rem;
  }
`;

const IconContainer = styled.div`
  a {
    font-size: 1.3rem;
    color: var(--medium-gray);
    font-weight: 700;
    margin-bottom: 0.7em;
    display: block;
  }

  p:first-of-type {
    margin-bottom: 0.2em;
  }
`;

const BtnContainer = styled.div`
  margin-bottom: 1em;
  input {
    background-color: var(--white);
  }

  input,
  button {
    outline: none;
    padding: 0.5em;
    border: none;
  }

  button {
    color: var(--white);
    background-color: var(--primary-color);
  }
`;

const Category = styled.div`
  h4 {
    margin-bottom: 1em;
    color: ${(props) => props.theme.textColor};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      cursor: pointer;
    }
  }
`;

const QuickLinks = styled.div`
  h4 {
    margin-bottom: 1em;
    color: ${(props) => props.theme.textColor};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      cursor: pointer;
    }
  }
`;

const CopyrightContainer = styled.div`
  background-color: ${(props) => props.theme.bgFooterDark};
`;

const Copyright = styled.div`
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 1em;
  gap: 0.5em;

  p {
    font-size: 0.9rem;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  gap: 1em;

  div {
    background-color: ${(props) => props.theme.primaryColor};
    color: var(--white);
    padding: 0.5em;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      border: 1px solid ${(props) => props.theme.primaryColor};
      background-color: transparent;
      color: var(--primary-color);
      transition: ease-in-out 0.3s;
    }
  }
`;

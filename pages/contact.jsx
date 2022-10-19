import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import styled from "styled-components";
import Banner from "../components/Banner";
import { contactInfo } from "../data";
import { tabletUp } from "../responsive";
import ContactUs from "../public/contact.svg";
import {
  fadeIn,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "../utils/animations";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Futuro</title>
      </Head>

      <Container>
        <Banner title="Contact Us" inActiveLink="Contact" />
        <Wrapper>
          <RowOneWrapper>
            <RowOne>
              <ColOne
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Title variants={fadeInLeft}>more information about us</Title>
                <Body variants={fadeInLeft}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem similique quaerat corporis reprehenderit neque
                  voluptatum itaque sit cumque aliquam distinctio.
                </Body>
                <DotContainer variants={fadeInLeft}>
                  <Dot bgColor="coral" />
                  <Dot bgColor="blue" />
                  <Dot bgColor="teal" />
                </DotContainer>
              </ColOne>
              <ColTwo
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Title variants={fadeInRight}>Contact options</Title>
                <ContactWrapper>
                  {contactInfo.map((item) => (
                    <ContactInfoContainer key={item.id} variants={fadeInRight}>
                      <ContactInfo>
                        <ContactDot bgColor={item.bgColor} />
                      </ContactInfo>
                      <ContactInfo>
                        <Text>{item.textOne}</Text>
                        <Text>{item.textTwo}</Text>
                      </ContactInfo>
                    </ContactInfoContainer>
                  ))}
                </ContactWrapper>
              </ColTwo>
            </RowOne>
          </RowOneWrapper>

          <RowTwoWrapper>
            <RowTwo
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ColOne variants={fadeInUp}>
                <FormContainer>
                  <Title>Get in touch</Title>
                  <Body>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non, reprehenderit maiores totam quam expedita doloribus.
                  </Body>
                  <Form>
                    <InputWrapper>
                      <Input type="text" placeholder="Your Name*" />
                      <Input type="text" placeholder="Your E-mail" />
                    </InputWrapper>
                    <Input type="text" placeholder="Subject*" />
                    <TextArea placeholder="Type Your Message*" />
                    <Btn>Send Mail</Btn>
                  </Form>
                </FormContainer>
              </ColOne>
              <ColTwo variants={fadeInDown}>
                <Image src={ContactUs} alt="contact us" />
              </ColTwo>
            </RowTwo>
          </RowTwoWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contact;

const Container = styled.div``;

const Wrapper = styled.div``;

const RowOneWrapper = styled.div`
  background-color: ${(props) => props.theme.bgInverse};
  transition: all 0.3s ease-in;
`;

const RowOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: flex-start;
  width: 100%;
  padding-block: 3em;
  color: ${(props) => props.theme.textColor};
  max-width: var(--max-width);
  margin: 0 auto;
  padding-inline: 1em;

  ${tabletUp({ paddingBlock: "5em", flexDirection: "row" })}
`;

const ColOne = styled(motion.div)`
  width: 100%;

  ${tabletUp({ width: "50%" })}
`;

const ColTwo = styled(motion.div)`
  width: 100%;

  ${tabletUp({ width: "50%" })}
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2em;
  row-gap: 1.5em;
  flex-wrap: wrap;
`;

const Title = styled(motion.h2)`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 32px;
  text-transform: capitalize;
  margin-bottom: 0.8em;
`;

const Body = styled(motion.p)`
  line-height: 25px;
  color: ${(props) => props.theme.subTextColor};
`;

const DotContainer = styled(motion.div)`
  display: flex;
  gap: 0.8em;
  margin-top: 1.5em;
`;

const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  display: block;
  background-color: ${(props) => props.bgColor};
`;

const ContactInfoContainer = styled(motion.div)`
  display: flex;
  gap: 1em;
  align-items: center;
  margin-bottom: 1.5em;
`;

const ContactInfo = styled.div``;

const ContactDot = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.subTextColor};

  :first-of-type {
    margin-bottom: 0.3em;
    font-weight: 600;
  }
`;

const RowTwoWrapper = styled.div`
  background-color: ${(props) => props.theme.bgTertiary};
  transition: all 0.3s ease-in;
`;

const RowTwo = styled(motion.div)`
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: column;
  padding-block: 3em;
  gap: 2em;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-inline: 1em;

  ${tabletUp({ paddingBlock: "5em", flexDirection: "row" })}
`;

const FormContainer = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const InputWrapper = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  ${tabletUp({ flexWrap: "nowrap" })}
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  outline: none;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  color: ${(props) => props.theme.textColorDarker};
  background-color: ${(props) => props.theme.bgInverse};
  font-size: 0.85rem;

  :focus {
    outline: 2px solid var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;

const Btn = styled.button`
  background-color: var(--primary-color);
  color: var(--white);
  padding: 1em 2em;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid var(--primary-color);
  width: fit-content;

  :hover {
    background-color: var(--white);
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  padding: 1em;
  outline: none;
  min-height: 200px;
  border: 1px solid var(--medium-gray);
  border-radius: 5px;
  background-color: ${(props) => props.theme.bgInverse};
  color: ${(props) => props.theme.textColorDarker};
  font-size: 0.85rem;

  :focus {
    outline: 2px solid var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;

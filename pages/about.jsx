import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import Banner from "../components/Banner";
import AboutImg from "../public/pic3.jpg";
import { desktopUp, tabletUp } from "../responsive";
import Header from "../components/Header";
import { ourFeatures } from "../data";
import Testimonials from "../components/Testimonials";
import { fadeIn, fadeInLeft, fadeInRight } from "../utils/animations";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Futuro</title>
      </Head>

      <Container>
        <Banner title="About us" inActiveLink="About" />
        <AboutWrapper>
          <AboutContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ImgContainer variants={fadeInLeft}>
              <Image src={AboutImg} height={350} alt="about us" />
              <ImgCover />
            </ImgContainer>
            <Content variants={fadeInRight}>
              <Title>Get to know all about our history</Title>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt harum aliquam nisi debitis totam dolores asperiores vel
                culpa blanditiis recusandae?
              </Body>
              <Btn>Contact us</Btn>
            </Content>
          </AboutContent>
        </AboutWrapper>

        <FeaturesWrapper>
          <Features>
            <Header text="Our Features" />
            <CardContainer
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ourFeatures.map((item) => (
                <Card key={item.id} variants={fadeInRight}>
                  <Image src={item.icon} alt="icon" width={50} height={50} />
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.body}</CardBody>
                </Card>
              ))}
            </CardContainer>
          </Features>
        </FeaturesWrapper>
        <Testimonial>
          <Header text="Our clients say" />
          <Testimonials />
        </Testimonial>
      </Container>
    </>
  );
};

export default About;

const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.secondaryBg} !important;
  padding-bottom: 1em;
`;

const AboutWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bgInverse};
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-block: 3em;
  color: ${(props) => props.theme.textColor};
  max-width: var(--max-width);
  margin: 0 auto;
  padding-left: 1.5em;
  padding-right: 1.5em;

  ${tabletUp({ flexDirection: "row", paddingBlock: "5em" })}
`;

const ImgContainer = styled(motion.div)`
  position: relative;
  width: 100%;

  img {
    z-index: 2;
    border-radius: 5px;
  }
`;

const Title = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 0.5em;
  text-transform: capitalize;

  ${tabletUp({ fontSize: "1.5rem" })}
`;

const Content = styled(motion.div)`
  width: 100%;

  ${tabletUp({ width: "100%" })}
`;

const Body = styled.p`
  font-size: 0.95rem;
  line-height: 22px;
  margin-bottom: 1em;
  color: ${(props) => props.theme.subTextColor};

  width: 100%;

  ${tabletUp({ width: "80%" })}
  ${desktopUp({ width: "60%" })}
`;

const Btn = styled.button`
  background-color: var(--primary-color);
  color: var(--white);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  padding: 0.8em 1.5em;

  :hover {
    background-color: var(--white);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

const ImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  right: 10px;
  border-radius: 5px;
  z-index: 1;
`;

const FeaturesWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondaryBg};
`;

const Features = styled.div`
  padding-bottom: 3em;
  padding-top: 4em;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-left: 1.5em;
  padding-right: 1.5em;

  ${tabletUp({ paddingBottom: "5em" })}
`;

const CardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
`;

const Card = styled(motion.div)`
  padding: 3em 1em;
  display: flex;
  gap: 1em;
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.bgInverse};
  transition: all 0.35s linear;
  border-bottom: 2px solid transparent;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  :hover {
    border-bottom: 2px solid var(--primary-color);
    transition: all 0.2s ease-in-out;
  }
`;

const CardTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const CardBody = styled.p`
  font-size: 0.95rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.subTextColor};
`;

const Testimonial = styled.div`
  padding-top: 4em;
  padding-bottom: 3em;
  padding-left: 1em;
  padding-right: 1em;
  background-color: ${(props) => props.theme.bgMain};

  ${tabletUp({ paddingBottom: "5em" })}
`;

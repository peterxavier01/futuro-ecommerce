import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import { desktopUp, tabletUp } from "../responsive";
import Sofa from "../public/pic1.jpg";

import { uniqueFeatures } from "../data";
import { fadeInDown, fadeInUp } from "../utils/animations";

const UniqueFeatures = () => {
  return (
    <Container>
      <Wrapper initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ColOne variants={fadeInDown}>
          <Image src={Sofa} alt="sofa" />
        </ColOne>
        <ColTwo variants={fadeInUp}>
          <Title>Unique Features of all our products</Title>
          <Body>
            {uniqueFeatures.map((item) => (
              <Content key={item.id}>
                <Dot bgColor={item.bgColor}></Dot>
                <Text>{item.text}</Text>
              </Content>
            ))}
          </Body>
          <BtnContainer>
            <Btn>Add to Cart</Btn>
            <BtnTextContainer>
              <BtnText>D & D Comfy Sofa</BtnText>
              <BtnText>$40.99</BtnText>
            </BtnTextContainer>
          </BtnContainer>
        </ColTwo>
      </Wrapper>
    </Container>
  );
};

export default UniqueFeatures;

const Container = styled.div`
  padding-block: 3em;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textColor};

  ${tabletUp({ paddingBlock: "5em" })}
`;

const Wrapper = styled(motion.div)`
  max-width: var(--max-width) !important;
  margin: o auto;
  gap: 2em;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  ${tabletUp({ gridTemplateColumns: "1fr 1fr" })}
`;

const ColOne = styled(motion.div)`
  img {
    width: 280px !important;
    height: 280px !important;
    border-radius: 50% !important;

    :hover {
      scale: 0.98;
      transition: all 0.3s ease-in-out;
    }

    ${tabletUp({ width: "350px !important", height: "350px !important" })};
    ${desktopUp({ width: "450px !important", height: "450px !important" })};
  }
`;

const ColTwo = styled(motion.div)``;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 30px;

  ${tabletUp({ fontSize: "38px" })}
`;

const Body = styled.div`
  margin-block: 2em;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.8em;
`;

const Dot = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 100px;
  display: block;
  background-color: ${({ bgColor }) => bgColor};
`;

const Text = styled.p`
  color: ${(props) => props.theme.subTextColor};
  font-size: 0.95rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const BtnTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`;

const Btn = styled.button`
  background-color: var(--primary-color);
  border: 2px solid var(--primary-color);
  color: var(--white);
  padding: 1em 2em;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;

  :hover {
    background-color: var(--white);
    border: 2px solid var(--primary-color);
    transition: all 0.3s ease-in-out;
    color: var(--primary-color);
  }
`;

const BtnText = styled.p`
  font-weight: 600;

  :first-of-type {
    font-size: 0.9rem;
  }

  :nth-of-type(2) {
    font-size: 1rem;
    color: var(--primary-color);
  }
`;

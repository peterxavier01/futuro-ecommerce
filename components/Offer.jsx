import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { offers } from "../data";
import { tabletUp } from "../responsive";
import { fadeIn, fadeInRight } from "../utils/animations";
import Header from "./Header";

const Offer = () => {
  return (
    <Container>
      <Header text="What Futuro has to offer" />
      <Wrapper
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {offers.map((offer) => (
          <Card key={offer.id} variants={fadeInRight}>
            <Icon>{offer.icon}</Icon>
            <Title>{offer.title}</Title>
            <Body>{offer.body}</Body>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Offer;

const Container = styled.div`
  padding: 1em;
  padding-block: 3em;
  background-color: ${(props) => props.theme.secondaryBg};

  ${tabletUp({ paddingBlock: "5em" })}
`;

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 2em;
`;

const Card = styled(motion.div)`
  height: 250px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1em;
  gap: 15px;
  background-color: ${(props) => props.theme.bgInverse};
  border-bottom: 1px solid transparent;
  color: ${(props) => props.theme.textColor};

  :hover {
    border-bottom: 2px solid var(--primary-color);
    transition: all 100ms ease-in;
  }
`;

const Icon = styled.div`
  font-size: 35px;
`;

const Title = styled.h4`
  font-size: 1.2rem;
`;

const Body = styled.p`
  color: ${(props) => props.theme.subTextColor};
`;

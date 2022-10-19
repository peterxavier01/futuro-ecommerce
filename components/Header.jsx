import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { tabletUp } from "../responsive";
import { fadeInDown } from "../utils/animations";

const Header = ({ text, justifyContent }) => {
  return (
    <Container justifyContent={justifyContent}>
      <Text
        variants={fadeInDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {text}
      </Text>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-content: center;
  text-align: center;
  margin-bottom: 1em;
`;

const Text = styled(motion.h2)`
  font-size: 30px;
  text-transform: capitalize;
  color: ${(props) => props.theme.textColor};

  ${tabletUp({ fontSize: "38px" })}
`;

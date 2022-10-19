import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { tabletUp } from "../responsive";
import { motion } from "framer-motion";
import { springInLeft } from "../utils/animations";

const Banner = ({ title, inActiveLink }) => {
  return (
    <Container>
      <Wrapper
        variants={springInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Title>{title}</Title>
        <Breadcrumb>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Separator>/</Separator>
          <InActiveLink>{inActiveLink}</InActiveLink>
        </Breadcrumb>
      </Wrapper>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgFooterDark};
  transition: all 0.3s ease-in;
  padding: 3em 1em;

  ${tabletUp({ paddingBlock: "4em" })}
`;

const Wrapper = styled(motion.div)`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.textColorDarker};
  text-transform: capitalize;
  margin-bottom: 0.3em;

  ${tabletUp({ fontSize: "35px" })}
`;

const Breadcrumb = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 600;

  a {
    color: ${(props) => props.theme.subTextColor};

    :hover {
      text-decoration: underline;
    }
  }
`;

const InActiveLink = styled.p`
  color: ${(props) => props.theme.primaryColor};
  text-transform: capitalize;
`;

const Separator = styled.span`
  font-weight: normal;
  color: ${(props) => props.theme.subTextColor};
`;

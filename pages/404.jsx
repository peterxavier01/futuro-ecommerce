import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Banner from "../components/Banner";
import styled from "styled-components";

import NotFound from "../public/404.svg";
import { tabletUp } from "../responsive";

const Custom404 = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Banner title="404 not found" inActiveLink="404 not found" />
      <Wrapper>
        <ImgContainer>
          <Image src={NotFound} alt="page not found" height={500} />
          <Text>Oops! the page you requested for was not found</Text>
          <Btn onClick={goToHome}>Back to home</Btn>
        </ImgContainer>
      </Wrapper>
    </Container>
  );
};

export default Custom404;

const Container = styled.div`
  color: var(--medium-gray);
`;

const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
  padding-block: 3em;

  ${tabletUp({ paddingBlock: "5em" })}
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h4`
  font-size: 28px;
  text-transform: capitalize;
  margin-bottom: 1em;
`;

const Btn = styled.button`
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: var(--white);
  padding: 1em 1.5em;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;

  :hover {
    background-color: var(--white);
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

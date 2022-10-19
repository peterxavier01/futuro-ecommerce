import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";

import { tabFeatures } from "../data";
import TabProduct from "../public/pic13.png";
import { desktopUp, tabletUp } from "../responsive";

const TabItemTwo = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>32% discount off all products</Title>
        <Subtitle>Kems Pillows</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          distinctio nobis consequatur, facere ea ipsam! Lorem ipsum dolor sit
        </Text>
        <FeaturesContainer>
          {tabFeatures.map((item) => (
            <Features key={item.id}>
              <AiOutlineCheck />
              <FeaturesText>{item.text}</FeaturesText>
            </Features>
          ))}
        </FeaturesContainer>
        <Link href="/product/444">
          <a>
            <Btn>View Collection</Btn>
          </a>
        </Link>
      </TextContainer>
      <ImgContainer>
        <Image
          src={TabProduct}
          alt="product"
          height={400}
          objectFit="cover"
          objectPosition="bottom"
        />
      </ImgContainer>
    </Wrapper>
  );
};

export default TabItemTwo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  width: 100%;

  ${tabletUp({ flexDirection: "row" })}
`;

const TextContainer = styled.div`
  color: ${(props) => props.theme.subTextColor};
  width: 100%;

  ${tabletUp({ width: "50%" })}
`;

const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 27px;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 1em;
`;

const Text = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1em;
`;

const FeaturesContainer = styled.div`
  margin-bottom: 2em;
`;

const Features = styled.div`
  margin-bottom: 1em;
  display: flex;
  gap: 4px;
  align-items: center;
`;

const FeaturesText = styled.p`
  font-size: 0.95rem;
`;

const Btn = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: var(--white);
  padding: 1em 1.5em;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.primaryColor};

  :hover {
    background-color: var(--white);
    border: 1px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
    transition: all 0.3s ease-in-out;
  }
`;

const ImgContainer = styled.div`
  background-color: ${(props) => props.theme.bgImg};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 280px !important;
  height: 280px !important;

  :hover {
    scale: 0.98;
    transition: all 0.3s ease-in-out;
  }

  ${tabletUp({ width: "350px !important", height: "350px !important" })}
  ${desktopUp({ width: "450px !important", height: "450px !important" })}
`;

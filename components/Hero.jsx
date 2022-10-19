import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import styled from "styled-components";
import { heroContent } from "../data";
import { desktopUp, tabletUp } from "../responsive";
import { fadeInLeft, fadeInRight } from "../utils/animations";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <Slider activeIndex={activeIndex}>
        {heroContent.map((item) => (
          <Wrapper key={item.id} bgColor={item.bgColor}>
            <Text
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>{item.subtitle}</p>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              <button>Shop Now</button>
            </Text>
            <ImgContainer
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image src={item.src} alt="hero" />
              <Discount>
                <p>52% Off</p>
              </Discount>
            </ImgContainer>
          </Wrapper>
        ))}
      </Slider>
      <NavContainer>
        <NavBtn
          onClick={() => handleClick(0)}
          className={activeIndex === 0 ? "activeIndex" : ""}
        />
        <NavBtn
          onClick={() => handleClick(1)}
          className={activeIndex === 1 ? "activeIndex" : ""}
        />
        <NavBtn
          onClick={() => handleClick(2)}
          className={activeIndex === 2 ? "activeIndex" : ""}
        />
      </NavContainer>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  transform: translateX(${(props) => props.activeIndex * -100}vw);
  transition: all 1.3s ease;

  ${tabletUp({ flexDirection: "row" })}
`;

const Wrapper = styled.div`
  display: grid;
  min-width: 100vw !important;
  grid-template-columns: 1fr;
  position: relative;
  place-items: center;
  gap: 2rem;
  padding: 1em;
  padding-top: 2em;
  padding-bottom: 5em;
  transition: all 0.3s ease-in;
  background-color: ${(props) => props.theme.bgHero};

  ${tabletUp({
    gridTemplateColumns: "1fr 1fr",
    minWidth: "100vw",
    top: "0px",
  })}
`;

const Text = styled(motion.div)`
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;

  p:first-of-type {
    color: ${(props) => props.theme.primaryColor};
    margin-bottom: 0.5em;
    text-transform: capitalize;
  }

  h1 {
    margin-bottom: 0.5em;
    text-transform: capitalize;
    color: ${(props) => props.theme.textColor};
  }

  p:last-of-type {
    color: ${(props) => props.theme.subTextColor};
    margin-bottom: 1em;
  }

  button {
    background-color: ${(props) => props.theme.primaryColor};
    padding: 1em;
    width: 150px;
    border-radius: 5px;
    color: var(--white);
    outline: none;
    border: 2px solid var(--primary-color);
    font-weight: 500;

    &:hover {
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      background-color: transparent;
      transition: all 0.3s;
    }
  }

  ${desktopUp({ marginLeft: "3em" })}
`;

const ImgContainer = styled(motion.div)`
  position: relative;
  img {
    border-radius: 50%;
    width: 250px !important;
    height: 250px !important;

    ${tabletUp({ width: "350px !important", height: "350px !important" })}
    ${desktopUp({ width: "470px !important", height: "470px !important" })}
  }
`;

const Discount = styled.div`
  background-color: var(--light-blue);
  width: 80px;
  height: 80px;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 700;
  top: 0%;
  text-align: center;
  border-radius: 100px;
  right: 10%;

  ${tabletUp({ width: "100px", height: "100px", fontSize: "1.1rem" })}
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  top: -50px;

  ${tabletUp({ top: "-70px" })}
`;

const NavBtn = styled.div`
  border: 1px solid ${(props) => props.theme.primaryColor};
  width: 15px;
  height: 15px;
  rotate: 45deg;

  :hover {
    background-color: ${(props) => props.theme.primaryColor};
    transition: all 0.3s;
  }

  ${tabletUp({ width: 20, height: 20 })}
`;

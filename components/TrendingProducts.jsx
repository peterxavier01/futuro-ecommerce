import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import Header from "./Header";

import { productStack, trendingProducts } from "../data";
import { tabletUp } from "../responsive";

import DiscountOne from "../public/pic20.png";
import DiscountTwo from "../public/pic23.png";
import { fadeIn, fadeInDown, fadeInUp } from "../utils/animations";

const TrendingCard = () => (
  <>
    {trendingProducts.map((item) => (
      <Card key={item.id} variants={fadeInDown}>
        <CardImgContainer>
          <Link href="/product/333">
            <a>
              <Image src={item.src} height={400} alt="product" />
            </a>
          </Link>
        </CardImgContainer>
        <CardBody>
          <Title>{item.title}</Title>
          <PriceContainer>
            <Price>{item.price}</Price>
            <SlashPrice>{item.slashPrice}</SlashPrice>
          </PriceContainer>
        </CardBody>
      </Card>
    ))}
  </>
);

const TrendingProducts = () => {
  return (
    <Container>
      <Wrapper>
        <Header text="trending products" />
        <GridContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <RowOne variants={fadeIn}>
            <TrendingCard />
          </RowOne>
          <RowTwo variants={fadeIn}>
            <Discount variants={fadeInUp}>
              <DiscountTitle>30% off for all products</DiscountTitle>
              <DiscountLink>
                <Link href="/product/333">
                  <a> View collection</a>
                </Link>
              </DiscountLink>
              <Image src={DiscountOne} alt="discounted product" />
            </Discount>
            <Discount variants={fadeInUp}>
              <DiscountTitle>30% off for all products</DiscountTitle>
              <DiscountLink>
                <Link href="/product/333">
                  <a> Shop Now</a>
                </Link>
              </DiscountLink>
              <Image
                src={DiscountTwo}
                alt="discounted product"
                height={450}
                objectFit="cover"
                objectPosition="bottom"
              />
            </Discount>
            <StackContainer variants={fadeInUp}>
              {productStack.map((item) => (
                <Stack key={item.id}>
                  <StackImgContainer>
                    <Link href="/product/333">
                      <a>
                        <Image src={item.src} height={450} objectFit="cover" />
                      </a>
                    </Link>
                  </StackImgContainer>
                  <StackTitle>{item.title}</StackTitle>
                </Stack>
              ))}
            </StackContainer>
          </RowTwo>
        </GridContainer>
      </Wrapper>
    </Container>
  );
};

export default TrendingProducts;

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  padding-block: 3em;
  padding-left: 1em;
  padding-right: 1em;
  background-color: ${(props) => props.theme.secondaryBg};
  transition: all 0.3s ease-in;

  ${tabletUp({ paddingBlock: "5em" })}
`;

const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const GridContainer = styled(motion.div)`
  margin-top: 2em;
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

const RowOne = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  justify-items: center;
`;

const RowTwo = styled(motion.div)`
  ${tabletUp({
    display: "grid",
    gap: "2em",
    gridTemplateColumns: "repeat(3,1fr)",
  })}
`;

const Discount = styled(motion.div)`
  padding: 1em;
  background-color: ${(props) => props.theme.bgMain};
  transition: all 0.3s ease-in;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 1em;
  border-radius: 5px;

  :hover {
    transition: all 0.3s ease-in-out;
    scale: 0.98;
  }

  ${tabletUp({ marginBottom: "0em" })}

  :last-of-type {
    margin-bottom: 0;
  }
`;

const DiscountTitle = styled.p`
  font-size: 27px;
  margin-bottom: 0.5em;
  text-transform: lowercase;
`;

const DiscountLink = styled.div`
  a {
    color: var(--primary-color);
    text-decoration: underline;
  }
`;

const StackContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Stack = styled.div`
  display: grid;
  margin-bottom: 0.5em;
  gap: 1em;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);

  :last-of-type {
    margin-bottom: 0em;
  }
`;

const StackTitle = styled.p`
  column-span: 2;
  text-transform: capitalize;
  font-size: 20px;
`;

const StackImgContainer = styled.div`
  background-color: ${(props) => props.theme.bgMain};
  transition: all 0.3s ease-in;
  border-radius: 5px;

  :hover {
    transition: all 0.3s ease-in-out;
    scale: 0.98;
  }

  ${tabletUp({
    width: "120px",
    height: "100px",
  })}
`;

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.bgInverse};
  transition: all 0.3s ease-in;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom: 1em;
  border-radius: 5px;
  padding: 0.5em;

  :hover {
    scale: 0.98;
    transition: all 0.3s ease-in-out;
  }
`;

const CardImgContainer = styled.div``;

const CardBody = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  text-transform: capitalize;
`;

const PriceContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  margin-top: 0.5em;
`;

const Price = styled.p``;

const SlashPrice = styled.p`
  text-decoration: line-through;
  font-size: 0.9rem;
`;

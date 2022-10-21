import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { desktopUp, tabletUp } from "../responsive";
import { fadeInUp } from "../utils/animations";

const LatestCards = ({ src, name, price, slashPrice, id }) => (
  <Card
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <CardImgContainer>
      <Link href={`/product/${id}`}>
        <a>
          <Image src={src} height={280} width={400} />
        </a>
      </Link>
      <IconContainer>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </IconContainer>
    </CardImgContainer>
    <CardContent>
      <Title>{name}</Title>
      <PriceContainer>
        <Price>${price}</Price>
        <SlashPrice>${slashPrice}</SlashPrice>
      </PriceContainer>
    </CardContent>
  </Card>
);

const LatestProducts = ({ products }) => {
  return (
    <Container>
      <Header text="Latest Products" />
      <Wrapper>
        {products &&
          JSON.parse(products)
            .filter((filterProducts) => filterProducts.category === "latest")
            .map((product) => (
              <LatestCards
                key={product.id}
                name={product.name}
                price={product.price}
                slashPrice={product.discPrice}
                src={product.img}
                id={product.id}
              />
            ))}
      </Wrapper>
    </Container>
  );
};

export default LatestProducts;

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1em;
  margin-block: 3em;

  ${tabletUp({ marginBlock: "5em" })}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  row-gap: 4em;
  justify-items: center;
  margin-top: 2em;

  ${desktopUp({ gridTemplateColumns: "repeat(3, 1fr)" })}
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 1em;
  display: flex;
  flex-direction: column;
  gap: 15px;
  opacity: 0;
`;

const Card = styled(motion.div)`
  :hover ${IconContainer} {
    opacity: 1;
    transition: all 0.5s;
  }

  :hover {
    scale: 1.02;
    transition: all 0.3s ease-in-out;
  }
`;

const CardImgContainer = styled.div`
  position: relative;

  img {
    border-radius: 5px;
  }
`;

const Icon = styled.div`
  background-color: var(--white);
  border-radius: 100px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--medium-gray);
  z-index: 2;
  cursor: pointer;

  :hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  padding-bottom: 0.1em;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-bottom: 2px solid var(--light-gray);
`;

const Price = styled.p``;

const SlashPrice = styled.p`
  color: red;
  text-decoration: line-through;
  font-size: 0.8rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

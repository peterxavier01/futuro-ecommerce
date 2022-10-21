import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import Header from "./Header";
import { tabletUp } from "../responsive";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const FeaturedCard = ({ src, name, price, code, id }) => (
  <Card>
    <CardImgContainer>
      <Link href={`/product/${id}`}>
        <a>
          <Image src={src} placeholder="empty" height={280} width={400} />
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
      <h4>{name}</h4>
      <Divider>
        <Line bgColor="red" />
        <Line bgColor="green" />
        <Line bgColor="blue" />
      </Divider>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Code - {code}</p>
      <p>${price}</p>
    </CardContent>
  </Card>
);

const FeaturedProducts = ({ products }) => {
  return (
    <Container>
      <Header text="Featured Products" />
      <Wrapper
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {JSON.parse(products)
          .filter((filterProduct) => filterProduct.category === "featured")
          .map((product) => (
            <FeaturedCard
              key={product.id}
              src={product.img}
              name={product.name}
              code={product.voucherCode}
              price={product.price}
              id={product.id}
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default FeaturedProducts;

const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  padding-block: 3em;

  ${tabletUp({ paddingBlock: "5em" })}
`;

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  justify-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1em;
  padding-top: 1em;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  gap: 10px;
  margin: 1em;
  opacity: 0;
`;

const Card = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme.bgInverse};
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  :hover ${IconContainer} {
    opacity: 1;
    transition: all 0.5s;
  }

  :hover {
    scale: 0.98;
    transition: all 0.3s ease-in-out;
  }
`;

const CardContent = styled.div`
  padding: 1em;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.textColor};

  h4 {
    color: ${(props) => props.theme.primaryColor};
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  p:nth-of-type(2) {
    font-weight: 700;
  }
`;

const CardImgContainer = styled.div`
  position: relative;

  img {
    width: 100% !important;
  }
`;

const Icon = styled.div`
  background-color: var(--white);
  color: var(--medium-gray);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border-radius: 100px;
`;

const Divider = styled.div`
  display: flex;
  gap: 8px;
`;

const Line = styled.span`
  width: 30px;
  height: 5px;
  display: block;
  background-color: ${({ bgColor }) => bgColor};
`;

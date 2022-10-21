import React from "react";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import Banner from "../../components/Banner";
import {
  AiFillInstagram,
  AiFillStar,
  AiFillYoutube,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { BsTwitter } from "react-icons/bs";

import ProductOne from "../../public/pic23.png";
import ProductTwo from "../../public/pic20.png";
import ProductThree from "../../public/pic22.png";
import { desktopUp, tabletUp } from "../../responsive";
import RelatedProducts from "../../components/RelatedProducts";

const OrderButton = ({ text, icon }) => (
  <BtnContainer>
    <Btn>{text}</Btn>
    <BtnIcon>{icon}</BtnIcon>
  </BtnContainer>
);

const Product = () => {
  return (
    <Container>
      <Head>
        <title>Product Details | Futuro</title>
      </Head>
      <Banner title="Product Details" inActiveLink="product details" />
      <Wrapper>
        <ProductContainer>
          <ProductWrapper>
            <ProductStack>
              <StackItem>
                <Image src={ProductOne} alt="product" />
              </StackItem>
              <StackItem>
                <Image src={ProductTwo} alt="product" />
              </StackItem>
              <StackItem>
                <Image src={ProductThree} alt="product" />
              </StackItem>
            </ProductStack>
            <ProductImgContainer>
              <Image src={ProductOne} alt="product" />
            </ProductImgContainer>
            <ProductDetails>
              <Title>Exquisite Mens Watches</Title>
              <RatingWrapper>
                <Star>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </Star>
                <Number>(23)</Number>
              </RatingWrapper>
              <PriceWrapper>
                <Price>$32.00</Price>
                <SlashPrice>$56.99</SlashPrice>
              </PriceWrapper>
              <ColorWrapper>
                <Subtitle>Color</Subtitle>
                <Color></Color>
              </ColorWrapper>
              <Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                corrupti debitis minus quos esse necessitatibus!
              </Body>
              <Order>
                <OrderButton
                  text="Add to cart"
                  icon={<AiOutlineShoppingCart />}
                />
                <OrderButton
                  text="Add to favorites"
                  icon={<AiOutlineHeart />}
                />
              </Order>
              <CategoryWrapper>
                <Subtitle>Categories</Subtitle>
                <Categories>
                  <Category>Home appliances</Category>
                  <Category>Electronics</Category>
                  <Category>Electrical appliances</Category>
                  <Category>Accessories</Category>
                </Categories>
              </CategoryWrapper>
              <TagWrapper>
                <Subtitle>Tags</Subtitle>
                <Tags>
                  <Tag>light</Tag>
                  <Tag>lamp</Tag>
                </Tags>
              </TagWrapper>
              <SocialsWrapper>
                <Subtitle>Share</Subtitle>
                <Socials>
                  <Social>
                    <BsTwitter />
                  </Social>
                  <Social>
                    <AiFillInstagram />
                  </Social>
                  <Social>
                    <AiFillYoutube />
                  </Social>
                </Socials>
              </SocialsWrapper>
            </ProductDetails>
          </ProductWrapper>
        </ProductContainer>

        <RelatedProductsWrapper>
          <RelatedProducts />
        </RelatedProductsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  img {
    width: 100% !important;
    display: block;
  }
`;

const Wrapper = styled.div``;

const ProductContainer = styled.div`
  background-color: ${(props) => props.theme.bgInverse};
  transition: all 0.3s ease-in;
  padding-block: 3em;
  padding-inline: 1em;
  border-bottom: 1px solid hsla(0, 0%, 83%, 0.3);

  ${tabletUp({ paddingBlock: "5em" })}
`;

const ProductWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: grid;
  padding: 1em;
  grid-template-columns: 1fr;
  max-width: var(--max-width);
  margin: 0 auto;
  background-color: ${(props) => props.theme.secondaryBg};
  transition: all 0.3s ease-in;

  ${tabletUp({ paddingBlock: "5em", gridTemplateColumns: "250px 300px auto" })}

  ${desktopUp({ gridTemplateColumns: "250px 400px auto" })}
`;

const ProductStack = styled.div`
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  display: none;

  ${tabletUp({ display: "grid" })}
`;

const ProductImgContainer = styled.div`
  padding: 1em;
  margin-right: 0;
  background-color: ${(props) => props.theme.bgMain};
  transition: all 0.3s ease-in;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;

  ${tabletUp({
    marginRight: "0em",
    marginBottom: 0,
    gridColumnStart: 2,
    gridColumnEnd: "-1",
  })}

  ${desktopUp({ gridColumnEnd: "-2", marginRight: "1em" })}

  :hover {
    background-color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

const ProductDetails = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.subTextColor};

  ${tabletUp({ gridColumnStart: 1, gridColumnEnd: "-1", marginTop: "1em" })}

  ${desktopUp({ gridColumnStart: 3, marginTop: "0em" })}
`;

const StackItem = styled.div`
  margin-right: 0;
  margin-bottom: 1em;
  background-color: ${(props) => props.theme.bgMain};
  transition: all 0.3s ease-in;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;

  :hover {
    background-color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }

  :last-of-type {
    ${tabletUp({ marginBottom: "0" })}
  }

  ${tabletUp({ marginRight: "1em", marginBottom: "1em" })}
`;

const Title = styled.h2`
  margin-bottom: 0.5em;
  color: ${(props) => props.theme.textColor};
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 0.3em;
  align-items: center;
  margin-bottom: 0.5em;
`;

const Star = styled.div`
  svg {
    color: gold;
  }
`;

const Number = styled.span`
  font-weight: 600;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
`;

const Price = styled.p`
  font-weight: 600;
`;

const SlashPrice = styled.p`
  color: var(--red);
  font-size: 0.85rem;
  text-decoration: line-through;
`;

const Body = styled.p`
  margin-bottom: 1.5em;
  font-size: 0.95rem;
`;

const Order = styled.div`
  margin-bottom: 1.5em;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

const ColorWrapper = styled.div``;

const Color = styled.div``;

const Subtitle = styled.h4`
  margin-bottom: 1em;
  font-size: 1.05rem;
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

const Categories = styled.div`
  display: flex;
  gap: 0.8em;
  flex-wrap: wrap;
  align-items: center;
`;

const Category = styled.p`
  font-size: 0.8rem;
  background-color: var(--bg-main);
  color: var(--medium-gray);
  border-radius: 5px;
  padding: 0.4em;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.8em;
  flex-wrap: wrap;
  align-items: center;
`;

const Tag = styled.p`
  font-size: 0.8rem;
  background-color: var(--bg-main);
  color: var(--medium-gray);
  border-radius: 5px;
  padding: 0.4em;
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const Socials = styled.div`
  display: flex;
  gap: 1em;
`;

const Social = styled.div`
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 1rem;
  height: 30px;
  width: 30px;
  border: 1px solid var(--primary-color);
  border-radius: 100px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--white);
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

// Order Button styles
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  background-color: var(--white);
  width: fit-content;
  padding: 0.5em;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  cursor: pointer;

  :hover {
    scale: 1.05;
    transition: all 0.2s ease-in-out;
  }
`;

const Btn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: var(--primary-color);
  font-weight: 700;
`;
const BtnIcon = styled.div`
  display: flex;
  align-items: center;
`;

const RelatedProductsWrapper = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  padding-inline: 1em;
`;

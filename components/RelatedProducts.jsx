import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Header from "./Header";

import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { relatedProducts } from "../data";
import { tabletUp } from "../responsive";

const stars = [
  AiFillStar,
  AiFillStar,
  AiFillStar,
  AiFillStar,
  AiFillStar,
  AiOutlineStar,
];

const ProductCard = ({ src, title, price }) => (
  <Card>
    <ImgContainer>
      <Link href="/product/663">
        <a>
          <Image src={src} alt="related product" height={400} />
        </a>
      </Link>
    </ImgContainer>
    <CardInfoWrapper>
      <CardInfo>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </CardInfo>
      <RatingWrapper>
        {stars.map((Star, index) => (
          <Rating key={index}>{<Star />}</Rating>
        ))}
      </RatingWrapper>
    </CardInfoWrapper>
  </Card>
);

const RelatedProducts = () => {
  return (
    <Container>
      <Wrapper>
        <Header text="Related Products" justifyContent="flex-start" />

        <ProductContainer>
          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{
              disableOnInteraction: false,
              delay: 3500,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
          >
            {relatedProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  src={item.src}
                  title={item.name}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ProductContainer>
      </Wrapper>
    </Container>
  );
};

export default RelatedProducts;

const Container = styled.div`
  padding-block: 3em;
  margin: 0 auto;
  max-width: var(--max-width);
`;

const Wrapper = styled.div``;

const Card = styled.div``;

const ImgContainer = styled.div`
  :hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }
`;

const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.05rem;
  color: ${(props) => props.theme.textColor};
  text-transform: capitalize;
`;

const Price = styled.p`
  font-weight: 400;
  font-size: 0.95rem;
  color: ${(props) => props.theme.subTextColor};
`;

const RatingWrapper = styled.div`
  display: flex;
`;

const Rating = styled.div`
  color: gold;
`;

const ProductContainer = styled.div`
  margin-top: 2em;
`;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Header from "./Header";
import dynamic from "next/dynamic";

import { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { tabletUp } from "../responsive";

const TopCard = ({ img, title, price }) => (
  <CardWrapper>
    <Card>
      <CardImgContainer>
        <Image src={img} alt="product" height={300} width={300} />
      </CardImgContainer>
      <Link href="/product/553">
        <a>
          <Btn>Shop Now</Btn>
        </a>
      </Link>
    </Card>
    <CardTitle>{title}</CardTitle>
    <Price>${price}</Price>
  </CardWrapper>
);

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} pagination">${index}</span>`;
  },
};

const TopCategories = ({ products }) => {
  return (
    <Container>
      <Wrapper>
        <Header text="top categories" />
        <SliderContainer>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            loop={true}
            pagination={pagination}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              840: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {products &&
              JSON.parse(products)
                .filter(
                  (filterProducts) => filterProducts.category === "top"
                )
                .map((item) => (
                  <SwiperSlide key={item.id}>
                    <TopCard
                      img={item.img}
                      title={item.name}
                      price={item.price}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </SliderContainer>
      </Wrapper>
    </Container>
  );
};

export default TopCategories;

const Container = styled.div`
  padding-block: 3em;
  padding-left: 1em;
  padding-right: 1em;
  position: relative;
  background-color: ${(props) => props.theme.secondaryBg};
  transition: all 0.3s ease-in;

  ${tabletUp({ paddingBlock: "5em" })}
`;

const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Btn = styled.button`
  background-color: var(--primary-color);
  outline: none;
  border: 1px solid var(--primary-color);
  padding: 0.9em 1em;
  border-radius: 5px;
  cursor: pointer;
  color: var(--white);
  opacity: 0;

  :hover {
    background-color: var(--white);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgMain};
  transition: all 0.3s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  position: relative;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  :hover ${Btn} {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  a {
    position: absolute;
  }
`;

const CardImgContainer = styled.div``;

const SliderContainer = styled.div`
  margin-top: 3em;

  .swiper {
    padding-bottom: 4em !important;
  }

  .swiper-pagination {
    position: absolute;
    top: 95%;
    z-index: 100 !important;
  }

  .pagination {
    width: 10px !important;
    height: 10px !important;
    border-radius: 100px;
    color: transparent;
    background-color: ${(props) => props.theme.primaryColor} !important;
    padding: 0.3em;
    margin-right: 0.5em;
  }
`;

const CardTitle = styled.h4`
  margin-block: 0.5em;
  font-size: 1rem;
  color: ${(props) => props.theme.subTextColor};
`;

const Price = styled.p`
  font-size: 0.9rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
`;

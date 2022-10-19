import React from "react";
import Image from "next/image";

import { A11y, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../data";
import styled from "styled-components";
import { tabletUp } from "../responsive";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} pagination">${index}</span>`;
  },
};

const Testimonials = () => {
  return (
    <Container>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={pagination}
        autoplay={{
          disableOnInteraction: false,
          delay: 5000,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <Wrapper>
              <Image src={item.src} alt="testimonial" />
              <Title>{item.name}</Title>
              <Position>{item.position}</Position>
              <Quote>{item.quote}</Quote>
            </Wrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;

const Container = styled.div`
  padding-top: 1em;
  max-width: var(--max-width);
  margin: 0 auto;
  color: ${(props) => props.theme.textColor};

  .swiper {
    padding-bottom: 4em !important;
  }

  .swiper-pagination {
    position: absolute;
    top: 95%;
    z-index: 100 !important;
  }

  .pagination {
    width: 30px !important;
    height: 5px !important;
    color: transparent;
    border-radius: 0;
    background-color: ${(props) => props.theme.primaryColor} !important;
    margin-right: 0.5em;
  }
`;

const Wrapper = styled.div`
  img {
    width: 100px !important;
    height: 100px !important;
    object-fit: cover;
    border-radius: 5px !important;
    margin-bottom: 0.5em !important;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h4`
  margin-bottom: 0.3em;
  font-size: 1.2rem;
  color: ${(props) => props.theme.subTextColor};
  text-transform: capitalize;

  ${tabletUp({ fontSize: "1.5rem" })}
`;

const Position = styled.p`
  margin-bottom: 1em;
  font-size: 0.9rem;
  color: ${(props) => props.theme.subTextColor};

  ${tabletUp({ fontSize: "1rem" })}
`;

const Quote = styled.p``;

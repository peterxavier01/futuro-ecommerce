import Image from "next/image";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { cartItems } from "../data";
import { tabletUp } from "../responsive";

const Favorites = ({ handleCloseClick }) => {
  return (
    <Overlay>
      <Wrapper>
        <Header>
          <Title>Your saved items</Title>
          <AiOutlineCloseCircle onClick={handleCloseClick} />
        </Header>
        <CartWrapper>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ColOne>
                  <ImgContainer>
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                  </ImgContainer>
                  <Content>
                    <Name>{item.name}</Name>
                    <Price>{item.price}</Price>
                  </Content>
                </ColOne>
                <ColTwo>
                  <Btn>Add to cart</Btn>
                </ColTwo>
              </CartItem>
            ))}
          </CartItems>
        </CartWrapper>
      </Wrapper>
    </Overlay>
  );
};

export default Favorites;

const Overlay = styled.div`
  width: 100%;
  z-index: 300;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  width: 95%;
  height: 100vh;
  position: absolute;
  right: 0;
  padding-left: 1em;
  padding-right: 1em;
  color: var(--medium-gray);
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /** IE and Edge */
  scrollbar-width: none; /** Firefox */

  ${tabletUp({ width: "400px" })}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  position: sticky;
  top: 0;
  z-index: 100;
  padding-block: 1em;
  background-color: ${(props) => props.theme.secondaryBg};

  svg {
    font-size: 1.2rem;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
  }
`;

const Title = styled.h4`
  font-size: 1.3rem;
  color: ${(props) => props.theme.textColor};
  text-transform: capitalize;
`;

const CartWrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5em;
  border-bottom: 2px solid var(--light-gray);
`;

const ColOne = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ColTwo = styled.div``;

const Content = styled.div``;

const ImgContainer = styled.div`
  img {
    border-radius: 5px;
  }
`;

const Name = styled.p`
  font-weight: 600;
  margin-bottom: 0.3em;
  text-transform: capitalize;
  color: ${(props) => props.theme.textColor};
`;

const Price = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.subTextColor};
`;

const Btn = styled.button`
  border: 1px solid ${(props) => props.theme.primaryColor};
  padding: 0.5em;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
  text-transform: capitalize;

  :hover {
    background-color: var(--white);
    color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
    transition: all 0.3s ease-in-out;
  }
`;

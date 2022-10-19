import Image from "next/image";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { cartItems } from "../data";
import { tabletUp } from "../responsive";

const Cart = ({ handleCloseClick }) => {
  return (
    <Overlay>
      <Wrapper>
        <Header>
          <Title>Your shopping cart</Title>
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
                    <Color>Color - {item.color}</Color>
                    <SizeWrapper>
                      <SizeTitle>Size -</SizeTitle>
                      <Size>{item.size}</Size>
                    </SizeWrapper>
                  </Content>
                </ColOne>
                <ColTwo>
                  <Price>{item.price}</Price>
                </ColTwo>
              </CartItem>
            ))}
          </CartItems>
          <SubtotalWrapper>
            <Subtotal>
              <h4>Subtotal</h4>
              <p>$533.00</p>
            </Subtotal>
            <Total>
              <h4>Total</h4>
              <p>$593.99</p>
            </Total>
            <Shipping>
              <Dot />
              <ShippingText>
                Shipping rates and taxes are calculated at checkout
              </ShippingText>
            </Shipping>
            <Btn>Proceed to checkout</Btn>
          </SubtotalWrapper>
        </CartWrapper>
      </Wrapper>
    </Overlay>
  );
};

export default Cart;

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
  text-transform: capitalize;
  color: ${(props) => props.theme.textColor};
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

const LightColor = styled.p`
  font-weight: 400;
  color: var(--light-gray);
  text-transform: capitalize;
  font-size: 0.9rem;
`;

const Color = styled(LightColor)`
  margin-bottom: 0.5em;
`;

const SizeWrapper = styled.div`
  display: flex;
  gap: 0.3em;
  align-items: center;
`;

const Size = styled(LightColor)`
  text-transform: uppercase;
`;

const SizeTitle = styled.span`
  text-transform: capitalize;
  font-weight: 400;
  color: var(--light-gray);
`;

const Price = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.subTextColor};
`;

const SubtotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgMain};
  border-radius: 5px;
  padding: 1em;
  padding-block: 2em;
  margin-block: 2em;
  gap: 2em;
  color: ${(props) => props.theme.textColor};
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 0.5em;

  p {
    font-weight: 600;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 0.5em;

  p {
    font-weight: 600;
  }
`;

const Btn = styled.button`
  border: 1px solid var(--primary-color);
  padding: 1em 0.5em;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  background-color: var(--primary-color);
  font-weight: 600;
  text-transform: capitalize;

  :hover {
    background-color: var(--white);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

const Shipping = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

const Dot = styled.span`
  background-color: var(--primary-color);
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 100px;
`;

const ShippingText = styled.p`
  font-size: 0.95rem;
`;

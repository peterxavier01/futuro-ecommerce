import styled from "styled-components";
import { motion } from "framer-motion";
import { tabletUp } from "../responsive";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
`;

export const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1em;
  border-top: 1px solid var(--text-color-dark);
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;

  ${tabletUp({
    gridTemplateColumns: "repeat(4, 1fr)",
  })}
`;

const Col = styled(motion.div)`
  background-color: ${(props) => props.theme.bgInverse};
  padding: 1em;
  transition: all 0.3s ease-in;
  border-radius: 5px;
`;

export const ColOne = styled(Col)`
  ${tabletUp({
    gridColumn: "1/3",
  })}
`;

export const ColTwo = styled(Col)`
  height: fit-content;
  ${tabletUp({
    gridColumn: "3/-1",
  })};
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1em;
  color: ${(props) => props.theme.textColor};
  padding-bottom: 1em;
  border-bottom: 1px solid var(--text-color-dark);

  img {
    border-radius: 5px;
  }
`;

export const Name = styled.h4`
  margin-bottom: 1em;
  text-transform: capitalize;
`;

export const Price = styled.p`
  color: ${(props) => props.theme.subTextColor};
`;

export const Category = styled(Price)`
  text-transform: capitalize;
  margin-top: 0.5em;
  font-style: italic;
  font-weight: 500;
  text-decoration: underline;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 2em;

    svg {
      font-size: 1.3rem;
      color: ${(props) => props.theme.textColor};
      cursor: pointer;
    }
  }

  > div:first-child input {
    display: none;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 1.7rem;
  margin-block: 1em;
`;

export const ImgContainer = styled.div`
  background-color: ${(props) => props.theme.bgTertiary};
  border-radius: 5px;
  display: flex;
  padding: 0.5em;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 150px !important;
  }

  :hover {
    background-color: ${(props) => props.theme.primaryColor};
    transition: all 0.3s ease-in-out;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid ${(props) => props.theme.textColorDarker};
  background-color: ${(props) => props.theme.bgInverse};
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};

  :focus {
    border-color: transparent;
    outline: 2px solid ${(props) => props.theme.primaryColor};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  min-height: 150px;
  resize: vertical;
  border: 1px solid ${(props) => props.theme.textColorDarker};
  background-color: ${(props) => props.theme.bgInverse};
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};

  :focus {
    border-color: transparent;
    outline: 2px solid ${(props) => props.theme.primaryColor};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1em;
  border-radius: 5px;
  margin-bottom: 1em;
  border: 1px solid ${(props) => props.theme.textColorDarker};
  background-color: ${(props) => props.theme.bgInverse};
  color: ${(props) => props.theme.textColorDarker};

  :focus {
    border-color: transparent;
    outline: 2px solid ${(props) => props.theme.primaryColor};
  }
`;

export const Btn = styled.button`
  width: 200px;
  padding: 1em;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryColor};
  color: var(--white);
  margin-bottom: 2em;
  font-weight: 600;
  text-transform: uppercase;

  :hover {
    border: 1px solid ${(props) => props.theme.primaryColor};
    background-color: transparent;
    color: ${(props) => props.theme.primaryColor};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Label = styled.label``;

export const InputContainer = styled.div``;

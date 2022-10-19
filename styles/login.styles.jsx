import styled from "styled-components";
import { tabletUp } from "../responsive";

export const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgInverse};
  border-bottom: 1px solid var(--text-color-dark);
`;

export const Wrapper = styled.div`
  padding-block: 3em;
  display: flex;
  padding-left: 1em;
  padding-right: 1em;
  justify-content: center;

  ${tabletUp({ paddingBlock: "5em" })}
`;

export const FormContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1em;
  padding-block: 2em;
  width: 400px;
  border-radius: 5px;

  > h2,
  > p {
    text-align: center;
  }

  ${tabletUp({ padding: "2em" })}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  > a {
    font-size: 0.9rem;
    color: ${(props) => props.theme.textColor};
    width: fit-content;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    text-transform: capitalize;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  border: 2px solid var(--light-gray);
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.bgInverse};
  color: ${(props) => props.theme.textColorDarker};

  :focus {
    border: 2px solid transparent;
    outline: 2px solid ${(props) => props.theme.primaryColor};
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 0.2em;
`;

export const Subtitle = styled.p`
  margin-bottom: 2em;
`;

export const Create = styled.a`
  color: var(--primary-color);
  font-weight: 600;
`;

export const Btn = styled.button`
  padding: 0.8em;
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: capitalize;

  :hover {
    background-color: var(--white);
    border: 2px solid ${(props) => props.theme.primaryColor};
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

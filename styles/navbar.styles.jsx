import styled from "styled-components";
import { tabletUp } from "../responsive";

export const Container = styled.div`
  padding: 0.5em 2em;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: ${(props) =>
    props.isScrolled ? props.theme.bgNavScrolled : props.theme.bgHero};
`;

export const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  a {
    font-size: 1.3rem;
    color: var(--medium-gray);
    font-weight: 700;
  }
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${tabletUp({ display: "none" })}
`;

export const MobileIcon = styled.span`
  display: flex;

  ${tabletUp({ display: "none" })}
`;

export const NavLinks = styled.div`
  ul {
    width: 100%;
    padding: 1em 2em;
    text-align: left;

    ${tabletUp({
      position: "relative",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2em",
      padding: "0em",
    })}
  }

  li {
    list-style: none;
    text-decoration: none;
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0.5em;
    color: ${(props) => props.theme.textColor};

    ${tabletUp({ padding: 0 })}

    :hover {
      font-weight: 600;
      background-color: var(--primary-color);
      padding: 0.5em;
      color: var(--white);
      border-radius: 5px;
      transition: all 0.3s ease-in-out;

      ${tabletUp({
        backgroundColor: "transparent",
        padding: "0em",
        color: "var(--medium-gray)",
      })}
    }

    :hover svg {
      color: ${(props) => props.theme.navIconScrolled};
    }

    :hover a {
      color: var(--white);

      ${tabletUp({ color: "var(--primary-color)" })}
    }
  }

  .active-link {
    color: var(--white);
    font-weight: 600;
    background-color: var(--primary-color);
    padding: 0.5em;
    color: var(--white);
    border-radius: 5px;

    ${tabletUp({
      backgroundColor: "transparent",
      padding: 0,
      fontWeight: 600,
    })}
  }

  .active-link svg {
    color: ${(props) => props.theme.navIconScrolled};
  }

  .active-link a {
    color: var(--white);

    ${tabletUp({
      color: "var(--primary-color)",
    })}
  }

  a {
    color: ${(props) => props.theme.subTextColor};
    width: 100%;
  }
`;

export const Nav = styled.div`
  position: fixed;
  right: 0;
  top: 60px;
  background-color: ${(props) =>
    props.isScrolled ? props.theme.bgNavScrolled : props.theme.bgHero};
  width: 0%;
  height: 100vh;
  z-index: 10;
  padding: 2em 0em;
  transition: all 0.3s linear !important;

  ${tabletUp({
    width: "0% !important",
    position: "absolute",
    top: "-10px",
    right: "60%",
  })}
`;
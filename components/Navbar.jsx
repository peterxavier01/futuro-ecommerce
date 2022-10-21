import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import {
  Container,
  Wrapper,
  LogoContainer,
  NavLinks,
  Nav,
  MobileIcon,
  Menu,
} from "../styles/navbar.styles";
import Tooltip from "rc-tooltip";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Logo from "../public/logo.png";
import "rc-tooltip/assets/bootstrap_white.css";
import { navLinks } from "../data";
import styled from "styled-components";
import { tabletUp } from "../responsive";

// Context
import { useAuthContext } from "../context/AuthContext";

const initialState = {
  cart: false,
  favorites: false,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTabletView, setIsTabletView] = useState(null);
  const [isClicked, setIsClicked] = useState(initialState);

  const { currentUser } = useAuthContext();
  const admin = currentUser && currentUser.email === "admin@futuro.com";

  const router = useRouter();
  const theme = useTheme();

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const handleCloseClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };

  const handleNavToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const isNavScrolled = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 10) {
      setIsScrolled(true);
    }

    if (scrolled <= 0) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isNavScrolled);

    () => window.removeEventListener("scroll", isNavScrolled);
  });

  useEffect(() => {
    const handleResize = () => setIsTabletView(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsTabletView]);

  useEffect(() => {
    if (isTabletView <= 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTabletView, setIsOpen]);

  return (
    <Container
      isScrolled={isScrolled}
      style={{
        transition: ".3s ease-in",
      }}
      className={isScrolled ? "box-shadow-sm" : ""}
      id="nav-container"
    >
      <Wrapper>
        <LogoContainer>
          <Link href="/">
            <a>
              <Image src={Logo} alt="futuro logo" height={40} width={100} />
            </a>
          </Link>
        </LogoContainer>
        <NavLinks>
          <Nav isScrolled={isScrolled} style={{ width: isOpen ? "80%" : "0%" }}>
            {isOpen && (
              <ul>
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      if (isTabletView <= 768) {
                        handleNavToggle();
                      }
                    }}
                    className={
                      router.pathname === `${item.path}` ? "active-link" : ""
                    }
                    style={{
                      color: isScrolled && theme.textColor,
                      display:
                        item.path === "/new-product" && !admin
                          ? "none"
                          : "flex",
                    }}
                  >
                    <MobileIcon>{item.icon}</MobileIcon>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Nav>
        </NavLinks>

        <IconContainer isScrolled={isScrolled}>
          <Tooltip
            placement="bottom"
            trigger={["hover"]}
            overlay={<span>Your Cart</span>}
            overlayInnerStyle={{
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "5px",
            }}
          >
            <AiOutlineShoppingCart onClick={() => handleClick("cart")} />
          </Tooltip>
          <Tooltip
            placement="bottom"
            trigger={["hover"]}
            overlay={<span>Saved items</span>}
            overlayInnerStyle={{
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "5px",
            }}
          >
            <AiOutlineHeart onClick={() => handleClick("favorites")} />
          </Tooltip>

          {!currentUser && (
            <Link href="/login">
              <Tooltip
                placement="bottom"
                trigger={["hover"]}
                overlay={<span>Login to account</span>}
                overlayInnerStyle={{
                  backgroundColor: "#333",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                <a>
                  <FiLogIn />
                </a>
              </Tooltip>
            </Link>
          )}

          <Menu onClick={handleNavToggle}>
            {isOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
          </Menu>
        </IconContainer>

        {isClicked.cart && <Cart handleCloseClick={handleCloseClick} />}
        {isClicked.favorites && (
          <Favorites handleCloseClick={handleCloseClick} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  font-size: 1.2rem;
  width: 100%;
  cursor: pointer;
  color: ${(props) =>
    props.isScrolled ? props.theme.textColor : props.theme.textColor};

  svg:nth-of-type(2) {
    margin-right: auto;
  }

  a {
    color: ${(props) => props.theme.textColor};
  }

  ${tabletUp({ fontSize: "1.35rem", width: "fit-content" })}

  @media screen and (min-width: 768px) {
    svg:nth-of-type(2) {
      margin-right: 0;
    }
  }
`;

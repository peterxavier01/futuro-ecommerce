import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStateContext } from "../context/StateContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TopBar, DarkMode, Footer, Navbar } from "../components/index";

const lightTheme = {
  bgMain: "var(--bg-main)",
  bgHero: "var(--bg-hero)",
  secondaryBg: "var(--white)",
  bgTertiary: "var(--bg-main)",
  textColor: "var(--medium-gray)",
  textColorDarker: "var(--dark-gray)",
  subTextColor: "var(--medium-gray)",
  primaryColor: "var(--primary-color)",
  bgInverse: "var(--white)",
  bgImg: "var(--light-img-bg)",
  bgFooterLight: "var(--light-gray)",
  bgFooterDark: "var(--lighter-gray)",
  bgNavScrolled: "var(--white)",
  navIconScrolled: "var(--white)",
  bgTopBar: "var(--primary-color)",
  topBarTextColor: "var(--white)",
};

const darkTheme = {
  bgMain: "var( --bg-dark-main)",
  bgHero: "var(--bg-dark-main)",
  secondaryBg: "var(--secondary-dark-bg)",
  bgTertiary: "var(--secondary-dark-bg)",
  textColor: "var(--text-color-dark)",
  textColorDarker: "var(--text-color-dark)",
  subTextColor: "var(--lighter-gray)",
  primaryColor: "var(--primary-color-dark)",
  bgInverse: "var(--bg-dark-main)",
  bgImg: "var(--dark-img-bg)",
  bgFooterLight: "var(--bg-dark-main)",
  bgFooterDark: "var(--secondary-dark-bg)",
  bgNavScrolled: "var(--dark-gray)",
  navIconScrolled: "var(--text-color-dark)",
  bgTopBar: "var(--primary-color-dark)",
  topBarTextColor: "var(--white)",
};

const Layout = ({ children }) => {
  const { isDarkTheme } = useStateContext();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ToastContainer />
      <TopBar />
      <Navbar />
      <DarkModeWrapper>
        <DarkMode />
      </DarkModeWrapper>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

const DarkModeWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 100;
  cursor: pointer;
`;

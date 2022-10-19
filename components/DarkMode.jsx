import React, { useState } from "react";
import styled from "styled-components";
import { BsSunFill, BsMoon } from "react-icons/bs";
import Tooltip from "rc-tooltip";
import { useStateContext } from "../context/StateContext";

const DarkMode = () => {
  // Dark theme state
  const { toggleTheme, isDarkTheme } = useStateContext();

  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onThemeToggle = () => {
    setIsToggled((prev) => !prev);
    toggleTheme();
  };

  return (
    <Tooltip
      placement="bottom"
      trigger={["hover"]}
      overlay={<span>Dark mode toggle</span>}
      overlayInnerStyle={{
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "5px",
      }}
    >
      <DarkModeBtn>
        {isToggled ? (
          <BsSunFill onClick={onThemeToggle} style={{ color: "gold" }} />
        ) : (
          <BsMoon onClick={onThemeToggle} />
        )}
      </DarkModeBtn>
    </Tooltip>
  );
};

export default DarkMode;

const DarkModeBtn = styled.div`
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 100px;
  background-color: ${(props) => props.theme.bgInverse};
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 0.95rem;
    color: ${(props) => props.theme.textColor};
  }
`;

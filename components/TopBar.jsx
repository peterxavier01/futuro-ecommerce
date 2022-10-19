import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const TopBar = () => {
  const { currentUser, dispatch } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    if (
      currentUser &&
      router.pathname === "/new-product" &&
      currentUser.email !== "admin@futuro.com"
    ) {
      router.push("/");
    }
    if (!currentUser && router.pathname === "/new-product") {
      router.push("/");
    }
  }, [currentUser]);

  return (
    currentUser && (
      <Container>
        <Wrapper>
          <User>
            <AiOutlineUser />
            {currentUser && currentUser.email}
          </User>
          <Logout onClick={handleLogout}>
            <FiLogOut />
            <p>Logout</p>
          </Logout>
        </Wrapper>
      </Container>
    )
  );
};

export default TopBar;

const Container = styled.div`
  padding: 0.5em 1em;
  background-color: ${(props) => props.theme.bgTopBar};
  color: ${(props) => props.theme.topBarTextColor};
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

const User = styled(Flex)``;

const Logout = styled(Flex)`
  cursor: pointer;
`;

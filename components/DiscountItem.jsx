import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { tabletUp } from "../responsive";

import Header from "./Header";
import TabItemOne from "./TabItemOne";
import TabItemTwo from "./TabItemTwo";
import TabItemThree from "./TabItemThree";
import { fadeIn, fadeInLeft } from "../utils/animations";

const tabs = [
  { title: "Lamps", index: "one" },
  { title: "Sofas", index: "two" },
  { title: "Watches", index: "three" },
];

const TabNavItem = ({ index, title, activeIndex, setActiveIndex }) => {
  const handleTabChange = () => {
    setActiveIndex(index);
  };

  return (
    <p
      className={activeIndex === index ? "active-tab" : "inactive-tab"}
      onClick={handleTabChange}
    >
      {title}
    </p>
  );
};

const TabContent = ({ index, activeIndex, children }) => {
  return activeIndex === index && <div>{children}</div>;
};

const DiscountItem = () => {
  const [activeIndex, setActiveIndex] = useState("one");

  return (
    <Container>
      <Wrapper>
        <Header text="discounted items" />

        <TabContainer
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TabHeader>
            {tabs.map((item, idx) => (
              <TabNavContainer key={idx} style={{ cursor: "pointer" }}>
                <TabNavItem
                  index={item.index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  title={item.title}
                />
                {activeIndex === item.index && <Dot></Dot>}
              </TabNavContainer>
            ))}
          </TabHeader>
          <TabOutlet>
            <TabContent index="one" activeIndex={activeIndex}>
              <TabItemOne />
            </TabContent>
            <TabContent index="two" activeIndex={activeIndex}>
              <TabItemTwo />
            </TabContent>
            <TabContent index="three" activeIndex={activeIndex}>
              <TabItemThree />
            </TabContent>
          </TabOutlet>
        </TabContainer>
      </Wrapper>
    </Container>
  );
};

export default DiscountItem;

const Container = styled.div`
  padding-block: 3em;
  padding-left: 1em;
  padding-right: 1em;

  ${tabletUp({ paddingBlock: "5em" })}
`;

const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const TabNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .active-tab {
    text-decoration: underline;
    color: ${(props) => props.theme.primaryColor};
  }

  .inactive-tab {
    color: ${(props) => props.theme.subTextColor};
  }
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  display: block;
  background-color: var(--primary-color);
  border-radius: 100px;
`;

const TabOutlet = styled.div`
  margin-top: 2em;
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const TabContainer = styled(motion.div)``;

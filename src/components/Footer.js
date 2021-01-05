import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

export default function Footer() {
  const [element, controls] = useScroll();
  const FooterAnim = {
    hidden: {
      scale: 0.6,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <StyledFooter>
      <motion.h4
        variants={FooterAnim}
        ref={element}
        initial="hidden"
        animate={controls}
      >
        Made with 💖 by <span>Yaduveera.</span>
      </motion.h4>
    </StyledFooter>
  );
}

const StyledFooter = styled(motion.div)`
  color: #cccccc;
  background: #282828;
  height: 10vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  h4 {
    margin: auto;
    font-size: 1.2rem;
  }
  span {
    color: #23d997;
    font-size: 1.3rem;
  }
`;

import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, photoAnim } from "../animation";
import Wave from "./Wave";

export default function AboutSection() {
  // const titleAnimation = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };

  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       ease: "easeOut",
  //       staggerChildren: 1,
  //       when: "afterChildren",
  //     },
  //   },
  // };
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amzing skills
        </motion.p>
        <motion.button variants={fadeAnim}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="a guy with camera" />
      </Image>
      <Wave />
    </About>
  );
}

import "./HeroHome.scss";
import React from "react";

import Button from "../../utils/Button/Button";
import Container from "../../utils/Container/Container";
import ArrowLeft from "../../../assets/patterns/right-arrow.svg?react";
import Line from "../../../assets/patterns/line.svg?react";
import AnimatedSvgArrow from "../../animated/AnimatedSvgArrow/AnimatedSvgArrow";

import { motion } from "framer-motion";
import AnimatedSvgCircles from "../../animated/AnimatedSvgCircles/AnimatedSvgCircles";

const HeroHome: React.FC = () => {
  return (
    <section className="heroHome">
      <Container type="narrow">
        <div className="heroHome__content">
          <motion.h1
            className="heroHome__title"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            Scooter sharing made simple
          </motion.h1>
          <motion.div
            className="heroHome__content-part"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <p className="heroHome__text">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you're away!
            </p>
            <Button to="" text="Get Scootin" />
          </motion.div>
          <div className="heroHome__arrow arrow">
            <AnimatedSvgArrow svgComponent={<ArrowLeft />} />
          </div>
          <div className="heroHome__circles">
            <AnimatedSvgCircles />
          </div>
          <Line className="heroHome__line line" />
        </div>
      </Container>
    </section>
  );
};

export default HeroHome;

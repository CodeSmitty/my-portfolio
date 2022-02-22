import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "@sanity/block-content-to-react";

import Slider from "./Slider";

import "../styles/global.css";

var title = "iRODGRIGUEZ WEB DESIGN";

const Heading = styled.section`
  position: absolute;
  fonst-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 0;
  height: 750px;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9281156310180322) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(5, 1fr) 0;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  perspective: 1000px;

  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
`;

const HeaderIntro = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 1rem;
  grid-area:4/1/5/6;
`;

const SliderBody = styled.div`
  z-index: -1;
  grid-area:2/2/3/5;
`;

const HeaderIntroContainer = styled.div`
 margin:0 auto;
`;

const HeaderTitle = styled.h1`
  font-size: 4rem;
  color: #d6fffc;
  &:before {
    content: "iRODGRIGUEZ WEB DESIGN";
    position: absolute;
    transform-origin: bottom;
    transform: rotateX(180deg);
    line-height: 0.9em;
    background: linear-gradient(0deg, #bbfff4 0, transparent 85%);
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.6;
  }
`;

const PortfolioButtonWrapper = styled.div`
grid-area:2/1/3/2;
`;

const AboutButtonWrapper = styled.div`
width:100%;
grid-area:2/5/3/6;
`
const PortofolioButton = styled.button`
  margin:0;
  width:80%;
  background:transparent;
  border:none;
  color:white;
  box-shadow:1px 3px 4px white;
`;

function Header() {
  return (
    <Heading>
      <PortfolioButtonWrapper>
        <PortofolioButton>Portfolio</PortofolioButton>
      </PortfolioButtonWrapper>
      <SliderBody>
        <Slider />
      </SliderBody>
      <AboutButtonWrapper>
        <PortofolioButton>Portfolio</PortofolioButton>
      </AboutButtonWrapper>
      <HeaderIntro>
        <HeaderIntroContainer>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderIntroContainer>
      </HeaderIntro>
    </Heading>
  );
}

export default Header;

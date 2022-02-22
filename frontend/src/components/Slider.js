import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "@sanity/block-content-to-react";

import rphconstruction from "../images/rphconstruction.png";
import rphomesolutions from "../images/rphomesolutions.png";
import pom from "../images/pom.png";
import bcCustomsSc from "../images/bcCustomsSc.png"

import "../styles/global.css";

const SliderWrapper = styled.div``;

const SliderContainer = styled.div``;

const Reflection = styled.div``;
function Slider() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
      //340
    let radius = 140;
    let autoRotate = true;
    let rotateSpeed = -80;
    let imgWidth = 190;
    let imgHeight = 190;

    setTimeout(init, 1000);

    let onDrag = document.getElementById("img-corousal-wrapper");
    let onSpin = document.getElementById("img-corousal-container");
    let aImg = onSpin.getElementsByTagName("img");
    var aEle = [...aImg];

    onSpin.style.width = imgWidth + "px";
    onSpin.style.height = imgHeight + "px";

    var ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${
          i * (360 / aEle.length)
        }deg) translateZ(${radius}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    function applyTransform(obj) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      obj.style.transformation = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    }

    function playSpin(yes) {
      onSpin.style.animationPlayState = yes ? "running " : "paused";
    }

    var desX = 0;

    var desY = 0;
    var tX = 0;
    var tY = 10;

    if (autoRotate) {
      var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      onSpin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s  infinite linear`;
    }

    document.onpointerdown = function (e) {
      var sY = 0;
      var sX = 0;
      var tY = 10;
      clearInterval(onDrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;

        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;

        applyTransform(onDrag);

        sX = nX;
        sY = nY;
      };

      this.onpointerup = function (e) {
        onDrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;

          applyTransform(onDrag);

          playSpin(false);

          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(onDrag.timer);

            playSpin(true);
          }
        }, 17);

        this.onpointermove = this.onpointerup = null;
      };
      return false;
    };
  });

  return (
    <div className="slider-body">
      <SliderWrapper id="img-corousal-wrapper">
        <SliderContainer id="img-corousal-container">
          <img
            id="port-screenshots pscst"
            src={rphconstruction}
            alt="portfolio image"
          /> 
          <img className="port-screenshots pscst" src={rphomesolutions} />
          <img className="port-screenshots pscst" src={bcCustomsSc} />
          <img className="port-screenshots pscst" src={pom} />
        </SliderContainer>
        <Reflection id="ground" />
      </SliderWrapper>
    </div>
  );
}

export default Slider;

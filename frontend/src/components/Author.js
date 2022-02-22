import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "@sanity/block-content-to-react";
import "../styles/global.css";



function Author({ data }) {
  const { name, _rawBio, headshot } = data.sanityAuthor;

  return (
  <div>hola</div>
  );
}

Author.proptype = {
  name: PropTypes.string.isRequired,
  headshot: PropTypes.object.isRequired,
  _rawBio: PropTypes.array.isRequired,
};

Author.defaultProps = {
  name: "",
  headshot: "",
  _rawBio: "",
};

export default Author;

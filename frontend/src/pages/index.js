import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import "../styles/global.css"
import {  graphql } from "gatsby";
import Author from "../components/Author";
import Header from "../components/Header"
import Slider from "../components/Slider"


// markup
const IndexPage = ({data}) => {
  
  return (
    <Layout>
   <Header />
    </Layout>
  );
}

export default IndexPage


export const query = graphql`
  {
    sanityAuthor {
      name
      _rawBio
      headshot {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;
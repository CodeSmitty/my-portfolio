import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import ServiceItems from "../components/ServiceItems";


const Wrapper = styled.div`
  margin:100px 0; 
  `

const services = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <ServiceItems data={data} />
      </Wrapper>
    </Layout>
  );
};

export default services;

export const query = graphql`
  {
    allSanityService {
      nodes {
        _id
        _key
        tier
        priceRange
        _rawTierDescription
        tierFeature
      }
    }
  }
`;

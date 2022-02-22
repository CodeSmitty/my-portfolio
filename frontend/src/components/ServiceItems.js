import React from 'react';
import Layout from "./Layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  width:90%;
  margin:50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* [1] */
  margin:auto;
  background-color:red;
`;

const Container = styled.div`
  margin:0 auto;
`;

const TierFeatures = styled.li`
text-decoration:none;
list-style-type:none;
padding:5px 0;
`

export default function ServiceItems({data}) {


  return(
      <Wrapper>
        {data.allSanityService.nodes.map(
          (
            { _id, _key, tier, priceRange, _rawTierDescription, tierFeature },
            i
          ) => (
            <Container key={_id}>
              <h2>{tier}</h2>
              <h4>${priceRange} </h4>
              {tierFeature.map((feature, i )=>(<TierFeatures key={i}>{feature.toUpperCase()}</TierFeatures>))}
            </Container>
          )
        )}
      </Wrapper>
  );
}

import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

const Wrapper = styled.section``;

const Title = styled.h1``;

const project = ({ data }) => {
  return (
    <Layout>
      <Title>Project Page</Title>
      {data.allSanityProject.nodes.map(({ myProjectName, slug, id }) => (
        <Link to={`/project/${slug.current}`} key={id}>
          <Title>{myProjectName}</Title>
        </Link>
      ))}
    </Layout>
  );
};

export default project;

export const query = graphql`
  {
    allSanityProject {
      nodes {
        myProjectName
        slug {
          _key
          _type
          current
        }
        graphic {
          asset {
            gatsbyImageData
          }
        }
        projectLink
      }
    }
  }
`;

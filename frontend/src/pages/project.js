import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/project.css"

const Wrapper = styled.section`
  margin: 100px auto;
  padding: 15px;
  width: 90%;
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense; /* [2] */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* [1] */
  justify-content: space-evenly;
`;

const Container = styled.div`

`;

const Title = styled.h1`
text-decoration:none;
`;

const project = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        {data.allSanityProject.nodes.map(
          ({ myProjectName, slug, _id, projectLink, graphic }, i) => (
            <Container key={_id}>
              <Link className="project-link" to={`/project/${slug.current}`}>
                <GatsbyImage
                  className="project-img"
                  image={graphic.asset.gatsbyImageData}
                  alt="random image"
                />
              </Link>
            </Container>
          )
        )}
      </Wrapper>
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
        _id
        _rawProjectDescription
        projectDescription {
          children {
            text
            marks
            _type
            _key
          }
        }
      }
    }
  }
`;

import styled from "styled-components";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "./Layout";
import PortableText from "@sanity/block-content-to-react";


const Wrapper = styled.div`
  width: 60%;
  margin:  auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: column nowrap;
`;

const ProjectTitle = styled.h2``;
const Imageholder = styled.div``;

const ProjectLink = styled.a`
  text-decoration: none;
`;

const ProjectDetails = ({ pageContext }) => {
  const { myProjectName, graphic, projectLink, projectDescription, _rawProjectDescription } = pageContext;
  return (
    <div>
      <Layout>
        <Wrapper>
          <ProjectLink href={projectLink}>{myProjectName}</ProjectLink>
          <ProjectTitle>{myProjectName}</ProjectTitle>
          <Imageholder></Imageholder>
          <GatsbyImage
            image={graphic.asset.gatsbyImageData}
            alt="random image"
          />
          <PortableText blocks={_rawProjectDescription} />
        </Wrapper>
      </Layout>
    </div>
  );
};

export default ProjectDetails;

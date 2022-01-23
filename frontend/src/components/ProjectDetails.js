import styled from "styled-components"
import React from 'react';
import {GatsbyImage} from "gatsby-plugin-image"
import Layout from "./Layout";

const Wrapper = styled.div`
  `

const ProjectTitle = styled.h2`
  `
const Imageholder = styled.div``

const ProjectDetails = ({pageContext}) => {
    const {myProjectName, graphic, projectLink } = pageContext

    return ( <div>
        <Layout>
            <Wrapper>
                <a href={projectLink}>{myProjectName}</a>
                <ProjectTitle>{myProjectName}</ProjectTitle>
                <Imageholder></Imageholder>
                <GatsbyImage image={graphic.asset.gatsbyImageData} alt="random image" />
            </Wrapper>
        </Layout>
        
    </div>);
}
 
export default ProjectDetails;
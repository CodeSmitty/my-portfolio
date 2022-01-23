const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
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
        }
      }
    }
  `);

  const projectTemplate = path.resolve(`src/components/ProjectDetails.js`);

  result.data.allSanityProject.nodes.forEach((node) => {
    createPage({
      path: `/project/${node.slug.current}`,
      component: projectTemplate,
      context: node,
    });
  });
};

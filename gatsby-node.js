/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulProduct {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
    }
    // Resolve the paths to our template
    const productTemplate = path.resolve("./src/components/productPage.js");
    // Then for each result we create a page.
    result.data.allContentfulProduct.edges.forEach(edge => {
      createPage({
        path: `/products/${edge.node.slug}/`,
        component: slash(productTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id
        }
      });
    });
  })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};
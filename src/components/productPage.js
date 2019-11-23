import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const ProductPage = ({ data }) => {
  const { name, id } = data.contentfulProduct;
  return (
    <Layout>
      <h1>{name}</h1>
      <span>{id}</span>
    </Layout>
  );
};
export default ProductPage;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      slug
      id
    }
  }
`;
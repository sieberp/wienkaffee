import React, { useContext } from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { CartContext } from './cartProvider';

const SingleProductGrid = styled.div`
  display: grid;
  grid-template: 
  "pic pic desc desc"
  "pic pic buy buy";
`


const ProductImage = styled(Img)`
  width: 300px;
  display: inline-block;
  grid-area: pic;
`

const Description = styled.article`
  display: inline-block;
  grid-area: desc;
`

const CartButton = styled.button`
  grid-area: buy;
  max-height: 50px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 5px #333;
  :hover {
    color: #fff;
    background-color: #333;
  }
`

const ProductPage = ({ data }) => {
  const { name, id, picture, description } = data.contentfulProduct;
  const { add } = useContext(CartContext);

  return (
    <Layout>
      <Link to="/shop">Go back</Link>
      <h1>{name}</h1>
      <span>{id}</span>
      <SingleProductGrid>
        <ProductImage sizes={picture.sizes}></ProductImage>
        <Description>
          {description}
        </Description>
        <CartButton>
          In den Warenkorb
        </CartButton>
      </SingleProductGrid>
    </Layout>
  );
};

export default ProductPage;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      description
      id
      name
      picture {
        sizes(maxWidth: 960) {
          ...GatsbyContentfulSizes
        }
          }
      price
      slug
      roaster
      roasttype
    }
  }
`;
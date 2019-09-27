import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"

const ShopGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const ProductCard = styled.div`
  margin: 20px 40px;
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-kerning: 1px;
  font-weight: lighter;
  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 0.2rem;
  }
  p {
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: lighter;
  }
  .price {
    :before {
      content: "€";
      margin-right: 1.5px;
    }
  }
  :hover {
    cursor: pointer;
    color: darkred;
  }
`

const Shop = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        products: allContentfulProduct {
          edges {
            node {
              name
              price
              description
              picture {
                sizes(maxWidth: 150) {
                  ...GatsbyContentfulSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <ShopGrid>
          {data.products.edges.map(product => (
            <ProductCard>
              <Img sizes={product.node.picture.sizes}></Img>
              <h3>{product.node.name}</h3>
              <p class="price">{product.node.price.toFixed(2)}</p>
            </ProductCard>
          ))}
        </ShopGrid>
      </Layout>
    )}
  />
)

export default Shop

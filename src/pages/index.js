import React from "react"
// import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery } from "gatsby"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        allFile(
          filter: { id: { eq: "074082e1-fb83-5dbe-b25c-c5bf5bdbea49" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <Layout>
          <SEO title="Home" />
          <Img
            style={{
              height: "300px",
            }}
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            imgStyle={{
              objectPosition: "50% 95%",
            }}
          ></Img>
          <p style={{ margin: "1rem auto", maxWidth: "500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            vel porro amet saepe esse accusamus placeat sapiente ad in, facere
            ipsa quaerat quas, est, nostrum animi adipisci perspiciatis sint
            ducimus.
          </p>
          <p style={{ margin: "1rem auto", maxWidth: "500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            vel porro amet saepe esse accusamus placeat sapiente ad in, facere
            ipsa quaerat quas, est, nostrum animi adipisci perspiciatis sint
            ducimus.
          </p>
          <p style={{ margin: "1rem auto", maxWidth: "500px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            vel porro amet saepe esse accusamus placeat sapiente ad in, facere
            ipsa quaerat quas, est, nostrum animi adipisci perspiciatis sint
            ducimus.
          </p>
        </Layout>
      )
    }}
  />
)

export default IndexPage

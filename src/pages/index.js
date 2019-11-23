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
        file(name: {eq: "nathan-dumlao-etkmWcqtZzg-unsplash"}) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
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
            fluid={data.file.childImageSharp.fluid}
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

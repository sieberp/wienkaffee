import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

export const ProductsContext = React.createContext(null)

const ProductsProvider = ({ children }) => (
  <StaticQuery
    query={productsQuery}
    render={data => <Provider data={data}>{children}</Provider>}
  />
)

ProductsProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

const Provider = ({ data, children }) => {
  const initialProducts = formatGatsbyData(data)
  const [products, setProducts] = useState(initialProducts)
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

Provider.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
}

const formatGatsbyData = data => {
  let products = []
  data.allContentfulProduct.edges.forEach(product => products.push(product))
  return products
}

// export const skuFragment = graphql`
//   fragment Sku on StripeSku {
//     id
//     price
//     image
//     localFiles {
//       childImageSharp {
//         fluid(maxWidth: $maxWidth, quality: $quality) {
//           ...GatsbyImageSharpFluid_withWebp_tracedSVG
//         }
//       }
//     }
//     fields {
//       slug
//     }
//     inventory {
//       type
//     }
//     product {
//       id
//       name
//       # description
//       active
//       # caption
//       created
//       updated
//     }
//   }
// `

const productsQuery = graphql`
  query productsQuery {
    allContentfulProduct {
      edges {
        node {
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
    }
  }
`

export default ProductsProvider

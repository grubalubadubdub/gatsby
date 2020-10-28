import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { TestWrapper } from "../../components/test-wrapper"
import Layout from "../../components/layout"

const Page = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cornwall.jpg" }) {
        childImageSharp {
          gatsbyImage(maxWidth: 1024, layout: CONSTRAINED) {
            imageData
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Constrained</h1>
      <TestWrapper>
        <GatsbyImage
          image={getImage(data.file)}
          loading="eager"
          alt="cornwall"
        />
      </TestWrapper>
    </Layout>
  )
}

export default Page

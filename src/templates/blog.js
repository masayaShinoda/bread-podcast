import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
//styles import
import blogStyles from "../styles/styles.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <Helmet>
        <title>{props.data.markdownRemark.frontmatter.title}</title>
      </Helmet>
      <div className="blogTemplate">
        <h1 className="blogPostTitle">
          {props.data.markdownRemark.frontmatter.title}
        </h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default Blog

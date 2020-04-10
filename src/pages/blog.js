import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import blogStyles from "../styles/styles.css"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="blogContainer"></div>
  </Layout>
)

export default BlogPage

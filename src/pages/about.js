import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import aboutStyles from "../styles/styles.css"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="aboutContainer"></div>
  </Layout>
)

export default AboutPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//images import
import imgHomepage from "../images/homepage-BP.png"
import indexStyles from "../styles/styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homepageContainer">
      <img src={imgHomepage} alt="Coming soon" className="homePageImage"></img>
    </div>
  </Layout>
)

export default IndexPage

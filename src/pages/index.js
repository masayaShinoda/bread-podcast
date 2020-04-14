import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import indexStyles from "../styles/styles.css"

//images import
import imgHomepage from "../images/homepage-BP.png"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script
        src={
          "https://cdn.jsdelivr.net/gh/masayaShinoda/bread-podcast@master/static/script.js"
        }
        type="text/javascript"
      />
    </Helmet>
    <SEO title="Home" />
    <div className="homepageContainer">
      <img src={imgHomepage} alt="Coming soon" className="homePageImage"></img>
    </div>
  </Layout>
)

export default IndexPage

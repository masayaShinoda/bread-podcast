import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import indexStyles from "../styles/styles.css"

//images import
import imgHomepage from "../images/homepage-BP.png"
//icons import
import homeIcon from "../assets/home-icon.png"
import podcastsIcon from "../assets/podcasts-icon.png"
import blogIcon from "../assets/blog-icon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="pageContainer">
      <section className="specialNav">
        <Link to="/">
          <img src={homeIcon} title="Home"></img>
        </Link>
        <Link to="/about">
          <img src={podcastsIcon} title="Podcasts"></img>
        </Link>
        <Link to="/blog">
          <img src={blogIcon} title="Blog"></img>
        </Link>
      </section>
      <img src={imgHomepage} alt="Coming soon" className="homePageImage"></img>
    </div>
  </Layout>
)

export default IndexPage

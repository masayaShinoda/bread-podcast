import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//images import
import imgHomepage from "../images/homepage-BP.png"
import introAnimationGif from "../gifs/intro-animation.gif"

import cosha from "cosha"

cosha({ className: "cool-shadow" })

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homePageContainer">
      <img src={imgHomepage} alt="Coming soon" className="homePageImage"></img>
    </div>
  </Layout>
)

export default IndexPage

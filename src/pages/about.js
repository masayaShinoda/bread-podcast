import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import aboutStyles from "../styles/styles.css"

//cosha
import cosha from "cosha"

cosha({
  className: "colorful-shadow",
  blur: "10px",
  brightness: "125%",
  saturation: "110%",
  x: "2px",
  y: "6px",
})

const AboutPage = () => {
  //declare data variable, which is dynamic in order to change the <h1> of about.js
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <div className="aboutContainer">
        <div className="flexAbout">
          <h1>About {data.site.siteMetadata.title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img
            className="colorful-shadow"
            src="https://images.unsplash.com/photo-1560885036-3adb13b6308c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1982&q=80"
          ></img>
        </div>
        <div className="flexContact">
          <h2>Contact:</h2>
          <a
            href="mailto:info@breaddesignstudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
            <p>info@breaddesignstudio.com</p>
          </a>
          <span>
            <i className="fa fa-map-pin"></i>
            <p>Phnom Penh, Cambodia.</p>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

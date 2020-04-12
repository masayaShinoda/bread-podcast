/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { withPrefix, Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import layoutStyles from "../styles/styles.css"
import lightAndDarknessStyles from "../styles/light-and-darkness.css"

// import favicons
import "../assets/css/font-awesome.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <div className="parent light">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            ©{" "}
            <a href="https://www.breaddesignstudio.com">Bread Design Studio </a>
            {new Date().getFullYear()}
            <a
              className="fa fa-moon-o"
              id="goDark"
              style={{ marginLeft: `1.25vmax`, cursor: `pointer` }}
            ></a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

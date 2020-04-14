/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withPrefix, Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import layoutStyles from "../styles/styles.css"
import lightAndDarknessStyles from "../styles/light-and-darkness.css"

// import favicons
import "../assets/css/font-awesome.min.css"

// import themtoggler
import { ThemeToggler } from "gatsby-plugin-dark-mode"

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
    <div className="parent">
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
          © <a href="https://www.breaddesignstudio.com">Bread Design Studio </a>
          {new Date().getFullYear()}
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                  style={{ visibility: `hidden` }}
                />{" "}
                <i
                  className="fa fa-moon-o"
                  style={{
                    display: `flex`,
                    cursor: `pointer`,
                    padding: `.5vmax`,
                  }}
                  title="Enable/Disable Dark Mode"
                ></i>
              </label>
            )}
          </ThemeToggler>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

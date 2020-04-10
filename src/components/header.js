import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import headerLogo from "../images/icon-horizontal.png"

const Header = ({ siteTitle }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <header>
      <div>
        <div className="headerNavSection">
          <Navbar className="navbarConfig" color="faded" light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="navbarTogglerDropdown" navbar>
                <NavItem>
                  <NavLink href="/podcasts">Podcast</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/blog">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <Link to="/" className="headerLogo">
          <img src={headerLogo} alt="Logo"></img>
        </Link>
      </div>
    </header>
  )
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

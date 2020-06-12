import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { COMMUNITY, DOCS, PRICING, ENTERPRISE } from "../utils/links";

import SocialNetworks from "../utils/social-networks";
import styles from "./navbar.module.scss";

function NavBar() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "src/imgs/logo-totalcross.png" }) {
        childImageSharp {
          fixed(width: 180, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={styles.navbarContainer}
    >
      <Navbar.Brand href="/">
        <Img fixed={data.logo.childImageSharp.fixed} alt="TotalCross logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navContainer}>
          <Link className={styles.navItem} to={PRICING}>
            pricing
          </Link>
          <Link className={styles.navItem} to={DOCS}>
            docs
          </Link>
          <Link className={styles.navItem} to={COMMUNITY}>
            community
          </Link>
          <a
            className={styles.navItem}
            target="_blank"
            rel="noopener noreferrer"
            href={ENTERPRISE}
          >
            ENTERPRISE
          </a>
        </Nav>
        <SocialNetworks />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

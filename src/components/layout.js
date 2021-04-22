/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Divider from "@material-ui/core/Divider";

const disclaimer =
  "The author is not liable for any damages arising in contract, tort or otherwise from the use of or inability to use this site or any material contained in it, or from any action or decision taken as a result of using this site. The materials and information available on this site are approximations and comprise the Author's views. They do not constitute legal or other professional advice. If you need specific advice please seek a professional who is licensed or knowledgeable in that area.";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <div style={{ minHeight: "100vh", backgroundColor: "#FFF" }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 100,
            }}
          >
            <main>{children}</main>
            <Divider />
            <footer style={{ paddingTop: 10 }}>
              <p>
                <b>Disclaimer</b>: {disclaimer}
              </p>
              <p>
                <b>Author</b>: Ashish Goyal
              </p>
            </footer>
          </div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

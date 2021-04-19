import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "gatsby";

/*
 * This components creates a link for embedding in the header
 */

const HeaderLink = ({ link, heading, icon }) => {
  return (
    <Link to={link}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{heading}</ListItemText>
      </ListItem>
    </Link>
  );
};

HeaderLink.propTypes = {
  link: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default HeaderLink;

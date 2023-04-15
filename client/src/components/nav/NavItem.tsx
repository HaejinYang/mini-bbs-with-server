import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavItemProps {
  linkPath: string;
  children: React.ReactNode;
}

const LinkStyle = styled(Link)`
  padding: 10px;
  font-weight: bold;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const NavItem: FC<NavItemProps> = (props) => {
  return (
    <div>
      <LinkStyle to={props.linkPath}>{props.children}</LinkStyle>
    </div>
  );
};

export default NavItem;

import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

interface NavItemProps {
    linkPath: string;
    text: string;
}

const LinkStyle = styled(Link)`
  padding: 10px;
  font-weight: bold;
  text-decoration: none;
  
  &:focus, &:hover, &:visited, &:link, &:active {
    color: black;
    text-decoration: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const NavItem: FC<NavItemProps> = ({linkPath, text}) => {
    return (
        <div>
            <LinkStyle to={linkPath}>{text}</LinkStyle>
        </div>
    );
}

export default NavItem;
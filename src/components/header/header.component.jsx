import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  Background,
  Search,
  SearchIcon,
  SearchInput,
  ButtonLink,
  Feature,
  Logo,
} from "./header.style";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({ ...restProps }) {
  return (
    <Search {...restProps}>
      <SearchIcon>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput />
    </Search>
  );
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

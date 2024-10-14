import React, { useRef } from "react";
import { Footer, HeaderNav, HeaderTop, Nav } from "..";
import { useAuth, useCategories } from "@/hooks";

export function MainLayout(props) {
  const {
    children,
    search,
    setSearch,
    showSearchBar = false,
    searchFocus = false,
  } = props;
  const { user } = useAuth();
  return (
    <>
      <HeaderTop />
      <Nav
        user={user}
        search={search}
        setSearch={setSearch}
        showSearchBar={showSearchBar}
        searchFocus={searchFocus}
      />
      <div className="children-container">{children}</div>
      <Footer />
    </>
  );
}

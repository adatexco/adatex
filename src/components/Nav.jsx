import React, { useState } from "react";
import Link from "next/link";
import { CartIcon, LoginSignin, Menu, SearchBar, SideMenu } from ".";
import { useRouter } from "next/router";
import { IconButton } from "@material-tailwind/react";
import {
  UserCircleIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/20/solid";
import { useCategories } from "@/hooks";

export function Nav({
  user,
  search,
  setSearch,
  showSearchBar = false,
  searchFocus = false,
}) {
  const [showLoginSignIn, setShowLoginSignIn] = useState(false);
  const [needToLogin, setNeedToLogin] = useState(true);
  const router = useRouter();
  const { categories } = useCategories();

  const handleLoginSignInOrProfilePage = () => {
    if (user == null) {
      setShowLoginSignIn(true);
    } else {
      setShowLoginSignIn(false);
      router.push("/profile");
    }
  };
  return (
    <div id="nav" className="nav border-b border-gray-200 py-4  bg-white z-40">
      <div
        className={`container flex lg:flex-row ${
          showSearchBar ? "flex-col" : "flex-row"
        } lg:justify-between justify-center  items-center align-middle`}
      >
        {/** CATELY LOGO */}
        <Link
          href={"/"}
          className="font-bold text-4xl text-center text-secondary"
        >
          <img src="/logo-horizontal.png" className="max-w-56 w-40" />
        </Link>

        {/** NAVIGATION MENU */}
        <div className="flex lg:flex-col flex-row flex-grow align-middle lg:justify-center lg:w-auto w-full lg:mt-0 mt-5 justify-between">
          <Menu categories={categories} />
          {/** SEARCH BAR */}
          {router.pathname !== "/" && showSearchBar && (
            <>
              <SearchBar
                searchFocus={searchFocus}
                search={search}
                setSearch={setSearch}
              />
              <SideMenu categories={categories} />
            </>
          )}
        </div>

        {/** ICONS */}
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px] ">
          {/** PROFILE */}
          <IconButton
            variant="outlined"
            className="hover:text-primary hover:border-primary text-secondary"
            onClick={handleLoginSignInOrProfilePage}
          >
            <UserCircleIcon className="h-6 w-6" />
          </IconButton>
          {/** SEARCH */}
          {router.pathname === "/" && (
            <IconButton
              variant="outlined"
              className="hover:text-primary hover:border-primary text-secondary"
              onClick={() =>
                router.push({
                  pathname: "/products/",
                  query: { search: true },
                })
              }
            >
              <MagnifyingGlassCircleIcon className="h-6 w-6" />
            </IconButton>
          )}
          {/** CART */}
          <CartIcon largeScreen />
        </div>
        {!showSearchBar && (
          <SideMenu
            categories={categories}
            handleLoginSignInOrProfilePage={handleLoginSignInOrProfilePage}
          />
        )}
      </div>
      <LoginSignin
        open={showLoginSignIn}
        setOpen={setShowLoginSignIn}
        needToLogin={needToLogin}
        setNeedToLogin={setNeedToLogin}
      />
    </div>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import { LoginSignin, Navbar } from ".";
import { useRouter } from "next/router";
import { Badge, IconButton } from "@material-tailwind/react";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";

export function HeaderNav(props) {
  const {
    normalNav = false,
    user,
    search,
    setSearch,
    hideSearchBar = false,
  } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [showLoginSignIn, setShowLoginSignIn] = useState(false);
  const [needToLogin, setNeedToLogin] = useState(true);
  const router = useRouter();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLoginSignInOrProfilePage = () => {
    if (!user) {
      setShowLoginSignIn(true);
    } else {
      setShowLoginSignIn(false);
      router.push("/profile");
    }
  };

  return (
    <div
      id="nav"
      className={`nav ${
        normalNav && "nav-less-padding"
      } border-b border-gray-200 py-6  bg-white z-40`}
    >
      <LoginSignin
        open={showLoginSignIn}
        setOpen={setShowLoginSignIn}
        needToLogin={needToLogin}
        setNeedToLogin={setNeedToLogin}
      />
      <div className="container sm:flex justify-between items-center">
        <Link
          href={"/"}
          className="font-bold text-4xl text-center pb-4 sm:pb-0 text-secondary lg:w-[15%] w-[20%] less:w-[30%] lg:m-0 m-auto"
        >
          <img src="/logo-horizontal.png" className="object-fill m-auto" />
        </Link>
        <div className="w-full sm:w-[300px] md:w-[70%] relative less:flex less:flex-row less:justify-between">
          {!hideSearchBar && (
            <>
              <input
                className=" border-gray-200 border p-2 px-4 rounded-lg w-full less:w-[85%]"
                type="text"
                placeholder="Busca cualquier producto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <MagnifyingGlassIcon
                className="absolute right-0 top-0 mr-3 less:mr-[80px] mt-3 text-gray-400"
                height={20}
                width={20}
              />
            </>
          )}
          <IconButton
            className=" hover:text-primary text-secondary p-2 mr-1 flex sm:hidden"
            variant="text"
          >
            <Bars3Icon onClick={handleMenu} className="w-[30px] h-[30px]" />
          </IconButton>
        </div>
        <IconButton
          className="hidden hover:text-primary text-secondary px-4 p-2 sm:flex lg:hidden"
          variant="text"
        >
          <Bars3Icon onClick={handleMenu} className="w-[30px] h-[30px]" />
        </IconButton>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <div className="m-0 p-0 self-center flex">
            <IconButton
              variant="outlined"
              data-dialog-target="sign-in-dialog"
              className="hover:text-primary hover:border-primary text-secondary"
              onClick={handleLoginSignInOrProfilePage}
            >
              <UserCircleIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <Link href={"/cart"} className="m-0 p-0 self-center flex">
            <Badge content="6" withBorder>
              <IconButton
                variant="outlined"
                className=" hover:text-primary hover:border-primary text-secondary"
              >
                <ShoppingBagIcon className="h-6 w-6" />
              </IconButton>
            </Badge>
          </Link>
        </div>
      </div>
      <Navbar
        openMenu={openMenu}
        normal={hideSearchBar ? true : normalNav}
        hideSearchBar={hideSearchBar}
      />
    </div>
  );
}

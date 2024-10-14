import React, { useState, useEffect } from "react";
import {
  Typography,
  IconButton,
  List,
  ListItem,
  Menu as MaterialMenu,
  MenuHandler,
  MenuList,
  MenuItem,
  Drawer,
  Card,
  Accordion,
  AccordionHeader,
  ListItemPrefix,
  AccordionBody,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { CartIcon } from "@/components";
import { useAuth } from "@/hooks";

function NavListMenu({ categories = [] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = categories.map(({ name, description, slug }, key) => (
    <Link
      href={{
        pathname: "/products/",
        query: { category: slug },
      }}
      key={key}
    >
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className=" font-alegreya flex items-center text-sm font-bold"
          >
            {name}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs font-alegreya !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <MaterialMenu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover
      >
        <MenuHandler>
          <div className="font-medium font-alegreya">
            <ListItem
              className="flex items-center font-medium text-gray-900 p"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              PRODUCTOS
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`ml-1 hidden h-3 w-3 transition-transform lg:block self-center ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </MaterialMenu>
    </>
  );
}

export function Menu({ categories = [] }) {
  return (
    <List className="lg:flex-row lg:flex hidden self-center align-middle justify-center">
      <Link href={"/"}>
        <ListItem className=" font-alegreya">HOME</ListItem>
      </Link>
      <Link href={"/products"}>
        <NavListMenu categories={categories} />
      </Link>
      {/**
         *   <Link href={"/blog"}>
              <ListItem className="font-alegreya">BLOG</ListItem>
              </Link>
         */}
      <Link href={"/about-us"}>
        <ListItem className=" font-alegreya">NOSOTROS</ListItem>
      </Link>
      <Link href={"/contact-us"}>
        <ListItem className=" font-alegreya">CONTACTANOS</ListItem>
      </Link>
    </List>
  );
}

export function SideMenu(props) {
  const { categories = [], handleLoginSignInOrProfilePage } = props;
  const [open, setOpen] = useState(0);
  const [productsIsOpened, setProductsIsOpened] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user } = useAuth();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setProductsIsOpened(!productsIsOpened);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    if (!isDrawerOpen) {
      setProductsIsOpened(false);
    }
  }, [isDrawerOpen]);
  return (
    <div className="flex flex-row lg:hidden md:gap-2 gap-1">
      <CartIcon largeScreen={false} />
      <IconButton
        variant="text"
        className="hover:text-primary"
        size="lg"
        onClick={openDrawer}
      >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2 hover:border-primary text-secondary" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2 hover:border-primary mt-[5px] text-secondary" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4 flex justify-between align-middle">
            <Link
              href={"/"}
              className="font-bold text-4xl text-center text-secondary self-center"
            >
              <img src="/logo-horizontal.png" className="w-24" />
            </Link>
            <IconButton
              onClick={() => closeDrawer()}
              variant="text"
              className="text-secondary hover:text-primary"
            >
              <XMarkIcon className="w-5 h-5 text-secondary hover:text-primary" />
            </IconButton>
          </div>
          <List className="font-alegreya border-b">
            <Link href={productsIsOpened ? "/products" : {}}>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3 font-alegreya  text-base font-bold"
                  >
                    Productos
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0 font-alegreya">
                    {categories.map((category) => (
                      <Link
                        href={{
                          pathname: "/products/",
                          query: { category: category.slug },
                        }}
                        key={category.id}
                      >
                        <ListItem
                          className="font-alegreya last:border-b"
                          key={category.id}
                        >
                          {category.name}
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            </Link>
            {/**
               *    <Link href={"/blog"}>
              <ListItem className="font-alegreya">Blog</ListItem>
            </Link>
               * 
               */}

            <Link href={"/about-us"}>
              <ListItem className=" font-alegreya">Nosotros</ListItem>
            </Link>
            <Link href={"/contact-us"}>
              <ListItem className=" font-alegreya">Contáctanos</ListItem>
            </Link>
          </List>
          <List className="font-alegreya">
            <ListItem onClick={handleLoginSignInOrProfilePage}>
              <ListItemPrefix>
                <UserCircleIcon strokeWidth={3} className="h-6 w-6" />
              </ListItemPrefix>
              {user
                ? `Usuario - ${user.firstname}`
                : "Iniciar sesión / Registrarse"}
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
}

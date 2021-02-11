import React, { useState, useEffect } from "react";
import { MobileDevice } from "./NavBar.styles";
import { IconButton } from "../IconButton/IconButton";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(0);
  const pathname = useLocation().pathname;

  useEffect(() => {
    pathname === "/" && setToggleMenu(4);
    pathname === "/shop" && setToggleMenu(3);
    pathname === "/catalog" && setToggleMenu(2);
    pathname === "/adjustment" && setToggleMenu(1);
  }, [pathname]);

  return (
    <MobileDevice>
      <IconButton
        color={toggleMenu === 1 ? "#dc3545" : ""}
        icon="fa fa-cog"
        label="تنظیمات"
        path="/adjustment"
      />
      <IconButton
        color={toggleMenu === 2 ? "#dc3545" : ""}
        icon="fas fa-images"
        label="کاتالوگ ها"
        path="/catalog"
      />
      <IconButton
        color={toggleMenu === 3 ? "#dc3545" : ""}
        icon="fa fa-shopping-basket"
        label="نمایشگاه ها"
        path="/shop"
      />
      <IconButton
        color={toggleMenu === 4 ? "#dc3545" : ""}
        icon="fa fa-qrcode"
        label="اسکن"
        path="/"
      />
    </MobileDevice>
  );
};

export { NavBar };

import React, { useState } from "react";
import { MobileDevice } from "./NavBar.styles";
import { IconButton } from "../IconButton/IconButton";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(0);

  return (
    <MobileDevice>
      <IconButton
        color={toggleMenu === 1 ? "#dc3545" : ""}
        SelectedIcon={() => setToggleMenu(1)}
        icon="fa fa-cog"
        label="تنظیمات"
        path="/adjustment"
      />
      <IconButton
        color={toggleMenu === 2 ? "#dc3545" : ""}
        SelectedIcon={() => setToggleMenu(2)}
        icon="fas fa-images"
        label="کاتالوگ ها"
        path="/catalog"
      />
      <IconButton
        color={toggleMenu === 3 ? "#dc3545" : ""}
        SelectedIcon={() => setToggleMenu(3)}
        icon="fa fa-shopping-basket"
        label="نمایشگاه ها"
        path="/shop"
      />
      <IconButton
        color={toggleMenu === 4 ? "#dc3545" : ""}
        SelectedIcon={() => setToggleMenu(4)}
        icon="fa fa-qrcode"
        label="اسکن"
        path="/"
      />
    </MobileDevice>
  );
};

export { NavBar };

import React from "react";
import HeaderItem from "./HeaderItem";
import Image from "next/image";
// import Logo from "../public/logo.png";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <>
      <header>
        header
        {/* <Image className="object-contain" src={Logo} width={150} height={50} /> */}
        {/* <HeaderItem title="Home" Icon={HomeIcon} /> */}
        <HeaderItem title="home" Icon={BadgeCheckIcon} />
      </header>
    </>
  );
};

export default Header;

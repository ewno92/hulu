import React from "react";
import HeaderItem from "./HeaderItem";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import Router from "next/router";
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
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <Link href="/">
            <a>
              <HeaderItem title="HOME" Icon={HomeIcon} />
            </a>
          </Link>

          <Link href="/trending">
            <a>
              <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            </a>
          </Link>
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem
            title="SEARCH"
            Icon={SearchIcon}
            onClick={() => console.log("search")}
          />

          <Link href="/signin">
            <a>
              <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </a>
          </Link>
        </div>

        <Link href="/">
          <a>
            <Image
              className="object-contain"
              src={Logo}
              width={150}
              height={50}
            />
          </a>
        </Link>
      </header>
    </>
  );
};

export default Header;

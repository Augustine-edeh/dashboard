"use client";

import Image from "next/image";
import Navbar from "../Navbar";
import User from "../ui/UserCard";
import Logo from "../ui/Logo";
import MobileNav from "../MobileNav";

import useMobileNavStore from "@/store/useMobileNavStore";
import SettingsIcon from "../ui/SettingsIcon";
import MenuIcon from "../ui/MenuIcon";
import NavTab from "../NavTab";

const Header = () => {
  const isOpen = useMobileNavStore((state) => state.isOpen);

  return (
    <header className="">
      <div className="flex items-center justify-between px-5 md:px-8 h-[72px] bg-unnamed-color-ffffff lg:rounded-[70px]">
        <Logo />
        <Navbar />
        <div className="flex divide-x-2">
          <User />
          <section className="flex gap-x-3 pl-3">
            <SettingsIcon />
            <MenuIcon />
          </section>
        </div>

        {isOpen && <MobileNav />}
      </div>

      <NavTab />
    </header>
  );
};

export default Header;

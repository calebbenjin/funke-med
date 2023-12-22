import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button } from "./ui/button";
import LogoImg from "/public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[--accent] p-10">
      <MaxWidthWrapper>
        <div className="flex lg:flex-row flex-col justify-between pb-10 border-b border-dashed">
          <div className="logo-content">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CHOEXA</span>
              <Image
                src={LogoImg}
                alt="choexa logo"
                width={250}
                height={250}
                className="w-40"
              />
            </Link>
          </div>
          <div className="nav-content mt-10">
            <nav className="lg:flex lg:flex-row text-[--primary] lg:items-center lg:justify-between items-start lg:space-x-6 lg:space-y-0 space-y-6 flex flex-col">
              <Link
                href="/"
                className="lg:text-md text-md transition-all ">
                Resources
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md transition-all ">
                Publication
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md transition-all ">
                Press
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md transition-all ">
                Contact us
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md transition-all ">
                Careers
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md transition-all ">
                Socials
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex pt-4">
          <p className="text-white opacity ">&copy; 2023 powered by Bojalabs</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

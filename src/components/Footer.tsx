import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 p-10">
      <MaxWidthWrapper>
        <div className="flex lg:flex-row flex-col justify-between pb-10 border-b border-dashed">
          <div className="logo-content">
            <h1 className="lg:text-7xl text-4xl text-orange-600 font-bold">
              Cohexa
            </h1>
          </div>
          <div className="nav-content mt-10">
            <nav className="lg:flex lg:flex-row text-white lg:items-center lg:justify-between items-start lg:space-x-6 lg:space-y-0 space-y-6 flex flex-col">
              <Link
                href="/"
                className="lg:text-md text-md hover:text-orange-500 transition-all ">
                Resources
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md hover:text-orange-500 transition-all ">
                Publication
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md hover:text-orange-500 transition-all ">
                Press
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md hover:text-orange-500 transition-all ">
                Contact us
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md hover:text-orange-500 transition-all ">
                Careers
              </Link>
              <Link
                href="/"
                className="lg:text-md text-md hover:text-orange-500 transition-all ">
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

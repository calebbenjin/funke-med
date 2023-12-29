import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button } from "./ui/button";
import LogoImg from "/public/logo.png";
import Image from "next/image";
import appleStoreImg from "/public/appstore.png";
import googleStoreImg from "/public/googleplay.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <div className="flex">
              <div className="btns flex items-center lg:justify-start justify-center space-x-4">
                <a href="/">
                  <Image
                    src={appleStoreImg}
                    alt="Apple Store"
                    width={100}
                    height={100}
                    priority
                  />
                </a>
                <a target="_blank" href="/">
                  <Image
                    src={googleStoreImg}
                    alt="Apple Store"
                    width={100}
                    height={100}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="nav-content mt-10">
            <nav className="lg:flex lg:flex-row text-[--primary] lg:items-center lg:justify-between items-start lg:space-x-6 lg:space-y-0 space-y-6 flex flex-col">
              <Link href="/" className="lg:text-md text-md transition-all ">
                Resources
              </Link>
              <Link href="/" className="lg:text-sm text-lg transition-all ">
                Contact us
              </Link>
              <Link href="/" className="lg:text-sm text-lg transition-all ">
                Careers
              </Link>
            </nav>
            <div className="flex gap-10 mt-4">
              <Link href="/" className="lg:text-sm text-lg transition-all ">
                <FaFacebook className="text-3xl text-[--secondary] " />
              </Link>
              <Link href="/" className="lg:text-sm text-lg transition-all ">
                <FaXTwitter className="text-3xl text-[--secondary] " />
              </Link>
              <Link href="/" className="lg:text-sm text-lg transition-all ">
                <FaInstagramSquare className="text-3xl text-[--secondary] " />
              </Link>
              <Link href="/" className="lg:text-sm text-lg transition-all ">
                <FaLinkedin className="text-3xl text-[--secondary] " />
              </Link>
            </div>
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

"use client";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import LogoImg from "/public/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[--background] ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:pt-8 p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">CHOEXA</span>
            <Image
              src={LogoImg}
              alt="choexa logo"
              width={150}
              height={150}
              className="w-28"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[primary] "
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-md leading-6 text-[--primary] ">
            Home
          </Link>
          <Link href="/" className="text-md leading-6 text-[--primary]">
            How it works
          </Link>
          <Link href="/" className="text-md leading-6 text-[--primary]">
            About
          </Link>
          <Link href="/" className="text-md leading-6 text-[--primary]">
            Our Team
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[--background] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CHOEXA</span>
              <Image
                src={LogoImg}
                alt="choexa logo"
                width={100}
                height={100}
                className="w-28"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[--primary] "
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-[--primary] hover:bg-gray-50">
                  Home
                </Link>
                <Link
                  href="/properties"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-[--primary]  hover:bg-gray-50">
                  Properties
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-[--primary]  hover:bg-gray-50">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-[--primary]  hover:bg-gray-50">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

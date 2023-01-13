"use client";

import "./globals.css";
import { Inter } from "@next/font/google";
import { Disclosure } from "@headlessui/react";
import {
  SparklesIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";

const inter = Inter({ subsets: ["latin"] });
const navigation = [{ name: "Home", href: "/", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>rinse.io | Wash Trade Inspect0r</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-full">
          <div className="bg-indigo-600 hidden">
            <Disclosure
              as="nav"
              className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
            >
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                      <div className="flex items-center px-2 lg:px-0">
                        <div className="flex-shrink-0">
                          <SparklesIcon className="ml-3 h-6 w-6 text-white" />
                        </div>
                        <div className="hidden lg:ml-10 lg:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-indigo-700 text-white"
                                    : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                                  "rounded-md py-2 px-3 text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex lg:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="lg:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-700 text-white"
                              : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                            "block rounded-md py-2 px-3 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <main className="-mt-16">
            <div className="mt-20 bg-white pb-24">
              <Header />
              <main className="">{children}</main>
            </div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

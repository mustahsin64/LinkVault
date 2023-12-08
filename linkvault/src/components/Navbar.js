import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { addDoc } from "firebase/firestore";

import React from "react";

import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AddLinkModal from "./AddLinkModal";


// const navigationList = [
//   { name: "Dashboard", href: "/dashboard", current: true },
//   { name: "Topics", href: "/topics", current: false },
//   { name: "Links", href: "/links", current: false },
//   { name: "Favorites", href: "/favorites", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  // @ts-ignore
  const { currentUser, logout } = useAuth();

  const [navigationList, setNavigationList] = useState([
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Topics", href: "/topics", current: false },
    { name: "Links", href: "/links", current: false },
    { name: "Favorites", href: "/favorites", current: false },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {}, [navigationList]);

  const handleItemClick = (selectedItem) => {
    const updatedNavigationList = navigationList.map((item) => ({
      ...item,
      current: item === selectedItem,
    }));
    console.log(
      "updatedNavigationList" + JSON.stringify(updatedNavigationList)
    );
    setNavigationList(updatedNavigationList);
    console.log("navigationList" + JSON.stringify(navigationList));
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="LinkVault"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationList.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-secondary text-white rounded-md px-3 py-2 text-sm font-medium"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        }
                        onClick={() => handleItemClick(item)}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute space-x-1 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="justify-center text-center">
                  {/* <p className="text-sm text-white">
                    {currentUser && currentUser.displayName}
                  </p> */}
                  <p className="text-sm text-white">
                    {currentUser && currentUser.email}
                  </p>
                </div>

                {!currentUser && (
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium relative bg-secondary p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Log In</span>
                    Log In
                  </button>
                )}

                {/* Profile dropdown */}
                {currentUser && (
                  <Menu as="div" className="relative ml-3">
                    <div className="ml-2">
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src={currentUser.photoURL}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <
// @ts-ignore
                            Link
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <
// @ts-ignore
                            Link
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                            // @ts-ignore
                            onClick={logout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
                {currentUser && (
                  <>
                  <button
                    type="button"
                    className="text-white"
                    onClick={() => setModalOpen(true)}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Add Link</span>
                    <PlusIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  
                  {isModalOpen && (
            <AddLinkModal onClose={handleModalToggle} />
          )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationList.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}

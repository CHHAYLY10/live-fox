/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { StateProps } from "@/shared/types";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "@/utils/nextSlice";

interface Props {
  img?: string;
}

export default function ProfileDetail({ img }: Props) {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
    dispatch(removeUser());
  };

  const { data: session } = useSession();
  const [allData, setAllData] = useState([]);
  const { userInfo, allProducts } = useSelector(
    (state: StateProps) => state.next
  );
  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  return (
    <div className="flex text-xs items-center gap-1">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <img
            className="w-8 h-8 mb-1 object-cover border-2 flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            src={img}
            alt=""
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="help_and_feedback">
            <div className="flex items-center justify-center bg-gray-100">
              <div className="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200">
                <div
                  aria-label="header"
                  className="flex space-x-4 items-center p-4"
                >
                  <div
                    aria-label="avatar"
                    className="flex mr-auto items-center space-x-4"
                  >
                    <img
                      src={userInfo.image}
                      alt="avatar Evan You"
                      className="w-14 h-14 shrink-0 rounded-full"
                    />
                    <div className="space-y-2 flex flex-col flex-1 truncate">
                      <div className="font-medium relative text-xl leading-tight text-gray-900">
                        <span className="flex">
                          <span className="truncate relative pr-8">
                            {userInfo.name}
                            <span
                              aria-label="verified"
                              className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="w-6 h-6 ml-1 text-cyan-400"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <path
                                  d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                  stroke-width="0"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </div>
                      <p className="font-normal text-base leading-tight text-gray-500 truncate">
                        {userInfo.email}
                      </p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 9l4 -4l4 4"></path>
                    <path d="M16 15l-4 4l-4 -4"></path>
                  </svg>
                </div>
                <div aria-label="navigation" className="py-2">
                  <nav className="grid gap-1">
                    <a className="flex items-center leading-6 space-x-3 py-2 px-2 w-full text-[15px] text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-7 h-7"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      </svg>
                      <span>Account Settings</span>
                    </a>
                    <a className="flex items-center leading-6 space-x-3 py-2 px-2 w-full text-[15px] text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-7 h-7"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      </svg>
                      <span>Settings</span>
                    </a>
                    <a className="flex items-center leading-6 space-x-3 py-2 px-2 w-full text-[15px] text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-7 h-7"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                        <path d="M9 17h6"></path>
                        <path d="M9 13h6"></path>
                      </svg>
                      <span>Guide</span>
                    </a>
                    <a className="flex items-center leading-6 space-x-3 py-2 px-2 w-full text-[15px] text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-7 h-7"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                        <path d="M12 16v.01"></path>
                        <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
                      </svg>
                      <span>Helper Center</span>
                    </a>
                  </nav>
                </div>
                <div aria-label="account-upgrade" className="px-2 py-6">
                  <div className="flex items-center space-x-1">
                    <div className="mr-auto space-y-2">
                      <p className="font-medium text-[15px] text-gray-900 leading-none">
                        Free Plan
                      </p>
                      <p className="font-normal text-[10px] text-gray-500 leading-none">
                        12,000 views
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex px-2 leading-6 py-1 rounded-md bg-indigo-50 hover:bg-indigo-50/80 transition-colors duration-200 text-indigo-500 font-medium text-xs"
                    >
                      Upgrade
                    </button>
                  </div>
                </div>
                <div aria-label="footer" className="pt-2">
                  <button
                    onClick={handleSignOut}
                    type="button"
                    className="flex items-center space-x-3 py-2 px-2 w-full leading-6 text-[15px] text-gray-600 focus:outline-none hover:bg-gray-100 hover:text-red-600 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-7 h-7"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M9 12h12l-3 -3"></path>
                      <path d="M18 15l3 -3"></path>
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

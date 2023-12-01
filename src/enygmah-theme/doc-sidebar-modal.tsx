import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { CommonGithubStarButton } from "./common-github-star-button";
import { EnygmahLogo } from "./common-enygmah-logo";
import { CommonHamburgerIcon } from "./common-hamburger-icon";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const DocSidebarModal = ({ isOpen, onClose }: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-modal" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-50 dark:bg-gray-800" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel
                className={clsx(
                  "w-full h-screen",
                  "flex flex-col",
                  "py-2 sm:py-3",
                  "px-2 sm:px-6",
                )}
              >
                <div
                  className={clsx(
                    "w-full h-8 sm:h-10",
                    "px-2 sm:px-0",
                    "flex items-center justify-between",
                  )}
                >
                  <EnygmahLogo />
                  <div
                    className={clsx(
                      "flex items-center gap-4",
                    )}
                  >
                    <CommonHamburgerIcon
                      onClick={onClose}
                      active={true}
                    />
                  </div>
                </div>

                <div
                  className={clsx(
                    "flex items-center justify-between",
                    "mt-2",
                    "px-2 sm:px-0",
                    "pb-6 sm:pb-3",
                  )}
                >
                  <CommonGithubStarButton />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

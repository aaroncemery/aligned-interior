"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const getFooterHeight = () => {
      const footer = document.querySelector("footer");
      console.log("footer", footer);
      return footer ? footer.clientHeight : 0;
    };
    setFooterHeight(getFooterHeight());
  }, []);

  const pageHeightMinusFooter = `calc(100vh - ${footerHeight}px)`;

  console.log("pageHeightMinusFooter", pageHeightMinusFooter);

  return (
    <>
      <div
        style={{ minHeight: pageHeightMinusFooter }}
        className="grid grid-cols-1 grid-rows-[1fr_auto_1fr] bg-white lg:grid-cols-[max(50%,36rem)_1fr]"
      >
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base/8 font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Page not found
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <a href="#" className="text-sm/7 font-semibold text-indigo-600">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

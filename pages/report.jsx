import Boxes from "@/components/shared/Boxes";
import Link from "next/link";
import React from "react";

const report = () => {
  return (
    <div>
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="relative pt-32 ml-auto">
          <div class="lg:w-2/3 text-center mx-auto">
            <div class="flex justify-center mb-8"></div>
            <h1 class="text-primary  font-bold text-5xl md:text-5xl xl:text-5xl">
              Generate Report <br />
            </h1>
            <div class="mt-8">
              <div class="p-4 w-5/5 md:w-4/5 mx-auto text-left border border-gray-400 rounded-2xl">
                <div class="mb-4 flex flex-col">
                  <p class="font-bold">Fill the details below</p>
                </div>
          
                <div class="mb-4 flex flex-col">
                  <label for="domain" class="text-white font-bold mb-1 text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    id="domain"
                    class="w-full p-2 border rounded-md text-sm"
                    placeholder="Email"
                    value=""
                  />
                  <p class="text-xs text-white">
                  </p>
                </div>
                <div class="mb-4">
                  <label
                    for="numArticles"
                    class="block text-white font-bold mb-1 text-sm"
                  >
                    Url-of website
                  </label>

                  <input
                    type="text"
                    id="numArticles"
                    class="w-full p-2 border rounded-md text-sm"
                    placeholder="Url-1"
                    value=""
                  />

                  <p class="text-xs text-white">
                    The Website on which u faced Dark Patterns.
                  </p>
                </div>
                <div class="mb-4">
                  <label
                    for="numArticles"
                    class="block text-white font-bold mb-1 text-sm"
                  >
                    Url2-of website
                  </label>

                  <input
                    type="text"
                    id="numArticles"
                    class="w-full p-2 border rounded-md text-sm"
                    placeholder="Url-1"
                    value=""
                  />

                  <p class="text-xs text-white">
                    The Inner page of Website on which u faced Dark Patterns.
                  </p>
                </div>
                <div class="mb-4">
                  <label
                    for="numArticles"
                    class="block text-white font-bold mb-1 text-sm"
                  >
                    File
                  </label>

                  <input
                    type="file"
                    id="numArticles"
                    class="w-full p-2 border rounded-md text-sm"
                    placeholder="Attach website photo"
                    value=""
                  />

                  <p class="text-xs text-white">
                  Screenshot of the Website.
                  </p>
                </div>
                <div class="mb-4">
                  <label
                    for="numArticles"
                    class="block text-white font-bold mb-1 text-sm"
                  >
                    Query
                  </label>

                  <input
                    type="text"
                    id="numArticles"
                    class="w-full p-2 border rounded-md text-sm"
                    placeholder="Query"
                    value=""
                  />

                  <p class="text-xs text-white">
                    Your query about Website.
                  </p>
                </div>
              
                <Link href="/sucess">
                <button class="bg-primary hover:bg-blue-600 mt-10 text-white font-bold py-2 px-4 btn rounded-lg text-sm">
                 Submit Report
                </button>
                </Link>
               
                <div class="border-t border-gray-300 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default report;

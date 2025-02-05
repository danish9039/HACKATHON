import Link from "next/link";
import React from "react";
const sucess = () => {
  return (
    <div>
      <section class="p-8 overflow-hidden">
        
        <div class="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:py-40 w-full bg-gradientdown rounded-[3rem]">
          
          <div class="max-w-xl text-center mx-auto">
            
            <div class="justify-center">
              
              <span class="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/10">
                Confiramtion
              </span>
              <h1 class="text-3xl mt-6 tracking-tighter font-light lg:text-6xl text-white">
                <span class="block text-zinc-400">Report Success ✔️
                YOUR REPORT HAS BEEN SUBMITTED TO GOVERNMENT OF INDIA </span>
              </h1>
              <p class="text-white mt-6 md:w-1/2 mx-auto"></p>
            </div>
            <div class="mt-6">
              
              <div class="inline-flex flex-wrap items-center mt-8">
                
                <Link
                  href="/"
                  type="a"
                  class="text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent"
                >
                  Shadow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default sucess;

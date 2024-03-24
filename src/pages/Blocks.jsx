import React, { useState } from 'react';
import logo from '../assets/image/building.png';
import logos from '../assets/image/house.png';
import logoes from '../assets/image/loan.png';
import mission from '../assets/image/mission.png';
import vision from '../assets/image/vision.png';
import abouttuss from '../assets/image/abouttuss.png';
 
 export default function Blocks(){
    return(
        <div>
            
          <div class="py-16">
            <div class="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
         
          
    <div>
      <h2 class="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        A Realtor You Can <br class="sm:block" hidden />
        Trust
      </h2>
    </div>
    <div class="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
      <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="space-y-12 text-center">
          <img
            src={logos}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
              House
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
            Embark on Your Homeownership Journey with Confidence: Our Dedicated Realtors Offer Expert Guidance to Help You Find Your Dream Home. Trust Us to Navigate the Real Estate Market Together. Welcome Home!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScbj-rnYEp7ZP6AfTlHnf7_CZ_lfvEqW9WY3mu2UfMTjdEdAA/viewform?usp=pp_url"
              class="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
              </svg>                
            </a>
          </div>
        </div>
      </div>
      <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="space-y-12 text-center">
          <img
            src={logo}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
              Lands
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
            Seize Your Opportunity: Explore Vast Possibilities with Our Premier Land Listings. Whether You Seek a Place to Build Your Dreams or Expand Investments, Let Us Guide You to Your Perfect Parcel. Welcome to Your Future!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScbj-rnYEp7ZP6AfTlHnf7_CZ_lfvEqW9WY3mu2UfMTjdEdAA/viewform?usp=pp_url"
              class="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
              </svg>                
            </a>
          </div>
        </div>
      </div>
      <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="space-y-12 text-center">
          <img
            src={logoes}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
              Real Estate Investment
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
            Unlocking Wealth through Real Estate: Join Our Investment Firm in Maximizing Returns and Diversifying Portfolios. With Expertise in Property Acquisition, Management, and Growth Strategies, We're Your Partner in Building Financial Success. Welcome to Your Path to Prosperity!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScbj-rnYEp7ZP6AfTlHnf7_CZ_lfvEqW9WY3mu2UfMTjdEdAA/viewform?usp=pp_url"
              class="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
              </svg>                
            </a>
           </div>
           </div>
           </div>
            {/* the mission, vision and about us page */}

       <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="space-y-12 text-center">
          <img
            src={mission}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
              Our Mission
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
            We're on the quest of helping smart investors invest in our reliable real estate investments, acquire their dream properties in choice locations without breaking the bank. We partner with the best developers to secure your future through our Real Estate Investments.
            We STANDOUT. Talk to us TODAY
            </p>
            </div>
           </div>
           </div>

         <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="space-y-12 text-center">
          <img
            src={vision}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
              Our Vision
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
            Is to raise 10,000 Landlords and Landowners here in Lagos and some other parts of Nigeria.
             </p>
            </div>
           </div>
           </div>

           <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="space-y-12 text-center">
          <img
            src={abouttuss}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
              What We Do
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
            We at STANDOUT ABODE offer Investors the best Real Estate deals in Strategic locations in Lagos, Abuja and some other locations here in Nigeria; our properties are titled, genuine, safe and secure properties that are prone to fast appreciation.             </p>
            </div>
           </div>
           </div>

           </div>
           </div>
           </div>
                                    
            {/* for the slider of the other companies that he works with                         */}

        </div>
    );
}
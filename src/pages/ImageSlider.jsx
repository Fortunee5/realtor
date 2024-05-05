import React, { useState } from 'react';
import logo from '../assets/image/trust.jpg';
import logo1 from '../assets/image/trust1.jpg';
import logo2 from '../assets/image/trust2.jpg';
import logo3 from '../assets/image/trust3.jpg';
import logo4 from '../assets/image/trust4.jpg';

 export default function ImageSlider(){
    return(
        <div>
            
          <div class="py-3">
            <div class="xl:container overflow-auto m-auto space-y-12 px-6 md:px-12 lg:px-20">
         
     
    <div class="mt-1 grid gap-0 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-5 md:-mx-8 lg:grid-cols-5">
      <div class="">
        <div class="space-y-1 text-center">
          <img
            src={logo}
            class="w-16 mx-auto"
            width="50"
            height="50"
            alt="burger illustration"
          />
         
        </div>
      </div>
      <div class="">
        <div class="space-y-12 text-center">
          <img
            src={logo1}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          
        </div>
      </div>
      <div class="">
        <div class="space-y-12 text-center">
          <img
            src={logo2}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          
           </div>
           </div>
           <div class="">
            <div class="space-y-12 text-center">
          <img
            src={logo3}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          
           </div>
           </div>
           <div class="">
            <div class="space-y-12 text-center">
          <img
            src={logo4}
            class="w-16 mx-auto"
            width="512"
            height="512"
            alt="burger illustration"
          />
          
           </div>
           </div>
           

       </div>
           </div>
           </div>
                                    
            {/* for the slider of the other companies that he works with                         */}

        </div>
    );
}
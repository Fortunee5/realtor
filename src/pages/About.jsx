import React, { useState } from 'react';
import logo from '../assets/image/about.jpg';
import Footer from './Footer'   
export default function About() {
  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1710962184944-71cab934b562?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D')]">
      
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
      CEO/FOUNDER STANDOUT ABODE
      </h1>
      {/* <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div> */}

      <div className="flex flex-row min-h-screen justify-center items-center">
      
           
            <div
              // key={author._id}
              className="flex justify-center relative aspect-square ">
                   <img
                    src={logo}
                    // alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                  
              </div>
           
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert border-spacing-1 md:border-spacing-8">
      <h1 className="text-white underline decoration-single text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
      KAYODE SOLARIN
      </h1>
        <p className="text-white-800  font-bold font-style: italic">
        Kayode Solarin is a certified professional Realtor, he was born in the 1980s in Somolu area of Lagos State to the family of Taiwo Solarin and the late Francis Solarin. He attended Odunlade Primary School where he had his First School Leaving Certificate and proceed to Angus Memorial High School. He is an indigene of Iperu Remo of Ikenne Local Govt. Area of Ogun State. He believes moving out from where he was born will have a positive impact on his life. He studied Accounting at Lagos State Polytechnic. He worked in different establishment firms to garner experience. He married Titilayo Solarin back in 2012.
        </p>
        <p className="text-white  font-bold font-style: italic">
        Kayode Solarin is the CEO/Founder of STANDOUT ABODE a real estate consultancy firm registered under the law as STANDOUT ASSET ASSET HOMES INVESTMENT LTD (RC1760786). He's the President of Standout Realtors / Undefeatable Realtors Group. He has successfully put numerous realtors on the map to make them independent and realized their potential. He has been in the corridor of real estate industry right since 2015; but joined the industry fully 4years ago. He's an outstanding realtor. 
        </p>
        <p className="text-black  font-bold font-style: italic">
        Being in the industry for 7years, he discovered that there are lots of abnormalities in the industry, He came to this industry to sanitise and curb the hoax by some dubious agents out there. He has been one of the top-selling realtors to be reckoned with, winning multiple awards and incentives. He's a goal getter, he's a selfless and dedicated realtor, he is your go-to Realtor for all your Real Estate needs and he's always ready to guide you through the seamless acquisition of it. 
        </p>
        <p className="text-black  font-bold font-style: italic">
        He has successfully made 197 happy clients proud house owners and landowners within a short period of time. When he is not on-site, he's strengthening his existing relationships, he's closing deals, building new ones, or giving Real Estate investment advisory. 
        </p>
        <p className="text-black font-bold font-style: italic">
        He's loved by the clients, that's what makes the customers keeps coming back and giving him referrals because of his integrity and transparency.  Kayode Solarin he's building a legacy that will last for life. 
        </p>
        <p className="text-black font-bold font-style: italic">
        Welcome to Kayode Solarin's world. He will love to hear from you. Follow him on social media @KayodeSolarin
        </p>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
      About Us
      </h1>
      <p className="text-black font-bold font-style: italic">
      Standout Abode is a subsidiary of Standout Asset Homes Investment Ltd duly registered RC: 1760786. The company join the real estate industry officially 4 years ago but has been in existence for years. We are a full-fledged Real Estate Brokerage Firm in Lagos Nigeria, offering top-notch Consultancy and advisory services to Nigerians home and abroad as well as foreign investors.
        </p>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        ABOUT THE CEO/FOUNDER
      </h1>
      <p className="text-white  font-style: italic">
        Kayode Solarin is the CEO/Lead Consultant, the brain behind Standout Abode, he has over 7 years of experience in the Real Estate industry (2018 till date), he came to this industry to sanitise and curb the hoax by some dubious agents out there. He has been one of the top-selling realtors to be reckoned with, winning multiple awards and incentives. He's a goal getter, he's a selfless and dedicated realtor, he is your go-to Realtor for all your Real Estate needs and he's always ready to guide you through the seamless obtainment of it. 

        when he is not on-site, he's strengthening his existing relationships, he's closing deals, building new ones, or giving Real Estate investment advisory. 
        </p>

        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        OUR MISSION
      </h1>
      <p className="text-white   font-style: italic">
        We're on the quest of helping smart investors invest in our reliable real estate investments, acquire their dream properties in choice locations without breaking the bank. We partner with the best developers to secure your future through our Real Estate Investments.
        We STANDOUT. Talk to us TODAY
      </p>

      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
      OUR VISION
      </h1>
      <p className="text-black font-bold font-style: italic">
      Is to raise 10,000 Landlords and Landowners here in Lagos and some other parts of Nigeria.
      </p>

      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
      WHAT WE DO
      </h1>
      <p className="text-black font-bold font-style: italic">
      We at STANDOUT ABODE offer Investors the best Real Estate deals in Strategic locations in Lagos, Abuja and some other locations here in Nigeria; our properties are titled, genuine, safe and secure properties that are prone to fast appreciation.
      </p>

      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
      RESULT
      </h1>
      <p className="text-black font-bold font-style: italic">
        We have helped close to 203 Clients make smart moves in Real Estate wise which they are grateful for, after beholding the value appreciation they have gotten from various investments and home offers. 

        At STANDOUT ABODE (Standout Asset Homes Investment Ltd) we are Relationship, Value, and Result Driven. 

        Let us help you retain and grow your wealth through the best  Real Estate Investment offers available. 

        Talk to us today!
        </p>

      </div>
      <Footer/>
    </div>
  );
}

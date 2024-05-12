import {
    collection,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    where,
  } from "firebase/firestore";
  import { useEffect } from "react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import ListingItem from "../components/ListingItem";
  import Slider from "../components/Slider";
  import { db } from "../firebase";
  import Footer from "./Footer";
  import Blocks from "./Blocks";
   import ContactCards from "./ContactCards";
   import logo from '../assets/image/trust.jpg';
  import logo1 from '../assets/image/trust1.jpg';
  import logo2 from '../assets/image/trust2.jpg';
  import logo3 from '../assets/image/trust3.jpg';
  import logo4 from '../assets/image/trust4.jpg';
  import ImageSlider from "./ImageSlider";

export default function Sales() {
    const [offerListings, setOfferListings] = useState(null);
    useEffect(() => {
      async function fetchListings() {
        try {
          // get reference
          const listingsRef = collection(db, "listings");
          // create the query
          const q = query(
            listingsRef,
            where("offer", "==", true),
            orderBy("timestamp", "desc"),
            limit(4)
          );
          // execute the query
          const querySnap = await getDocs(q);
          const listings = [];
          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setOfferListings(listings);
        } catch (error) {
          console.log(error);
        }
      }
      fetchListings();
    }, []);
    // Places for rent
    const [rentListings, setRentListings] = useState(null);
    useEffect(() => {
      async function fetchListings() {
        try {
          // get reference
          const listingsRef = collection(db, "listings");
          // create the query
          const q = query(
            listingsRef,
            where("type", "==", "rent"),
            orderBy("timestamp", "desc"),
            limit(4)
          );
          // execute the query
          const querySnap = await getDocs(q);
          const listings = [];
          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setRentListings(listings);
        } catch (error) {
          console.log(error);
        }
      }
      fetchListings();
    }, []);
    // Places for rent
    const [saleListings, setSaleListings] = useState(null);
    useEffect(() => {
      async function fetchListings() {
        try {
          // get reference
          const listingsRef = collection(db, "listings");
          // create the query
          const q = query(
            listingsRef,
            where("type", "==", "sale"),
            orderBy("timestamp", "desc"),
            limit(4)
          );
          // execute the query
          const querySnap = await getDocs(q);
          const listings = [];
          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setSaleListings(listings);
        } catch (error) {
          console.log(error);
        }
      }
      fetchListings();
    }, []);
  
  return (
    <div>
         <div>
           
           <div class="py-16 bg-orange-300">
               <div class="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20 ">
                           
                   <div>
                           <h2 class="mt-4 text-center underline text-2xl font-bold text-white dark:text-white md:text-4xl">
                             My Properties
                           </h2>
                   </div>
             </div>
           </div>
       </div>
    
   <div className="max-w-6xl mx-auto pt-4 space-y-6">
      {saleListings && saleListings.length > 0 && (
          <div className="m-2 mb-6">
                       
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {saleListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="m-2 mb-6">
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {rentListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
   </div>
   </div>
  );
}

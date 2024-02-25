import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import blog  from '../assets/image/blog.png';

function CreateBlog (){

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
          title,
          postText,
        //   author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/blogbackend");
      };
    return(
      <div className="max-w-6xl mx-auto flex justify-center items-center flex-col">          
      <div class="py-16">
      <div class="xl:container m-auto  px-6 md:px-12 lg:px-20">
<div>
<h2 class="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
  Write a blog <br class="sm:block" hidden />
</h2>
</div>
<div class="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
<div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
  <div class="space-y-12 text-center">
    <img
      src={blog}
      class="w-16 mx-auto"
      width="512"
      height="512"
      alt="burger illustration"
    />
    <div class="space-y-6">
    <p className="text-lg mt-6 font-semibold">Title</p>
      
      <input placeholder="Title..." onChange={(event) => {
        setTitle(event.target.value);
      }} className="w-full px-4 py-2 text-xl text:gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out  focus:text-gray-700 focus:bg-white
focus:border-slate-600 mb-6"
/>

 <p className="text-lg mt-6 font-semibold"> Post </p>
   <textarea placeholder="Post..."  onChange={(event) => {
        setPostText(event.target.value);
      }}
className="w-full px-4 py-2 text-xl text:gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out  focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
/>
      <button onClick={createPost} className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Post Blog</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    );
}
export default CreateBlog
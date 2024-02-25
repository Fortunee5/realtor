import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import blog  from '../assets/image/blogging.png';


 function BlogPost() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, );

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="max-w-6xl px-3 mt-6 mx-auto">
      
          <>
            <h2 className="text-2xl text-center font-semibold mb-6">
              My Blog Post
            </h2>
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
            <ul className="">
              <div>
              <h3 className="md:font-bold uppercase">{post.title}</h3>
              <h2 className="italic mb-2 mt-0 text-base font-medium leading-tight text-primary "> {post.postText}</h2>
            
                  </div>
            </ul>
            </div>
            </div>
            </div>
            </div>
          </>
    
      </div>

        );
      })}
       
    </div>
    
  );
}

export default BlogPost;

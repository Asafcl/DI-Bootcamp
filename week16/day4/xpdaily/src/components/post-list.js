// import React from "react";
// import posts from "./../data/data.json";

// export class PostList extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("posts:", posts);
//     }

//     render() {
//         const allPosts = posts.map((post) => (
//             <div >
//             <h1>{post.title}</h1>
//             <h2>{post.content}</h2>
//             <p>{post.date}</p>
//         </div>
//         ));
//         return allPosts;
//     }
// }


// functional component, ahora se usa asi sin class component

import React from "react";
import posts from "./../data/data.json";

export const PostList = () => {

  const allPosts = posts.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
      <p>{post.date}</p>
    </div>
  ));

  return allPosts;
};
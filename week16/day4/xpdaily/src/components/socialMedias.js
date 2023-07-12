// import React from "react";
// import posts from "../data/data2.json";

// export class SocialMedias extends React.Component{
//     constructor(props){
//         super(props)
//         console.log('props: ', props)
//     }

//     render(){
//         const media = posts.SocialMedias.map((media) =><li>{media}</li> )
//         return media
//     }

// }

// // FUNCTIONAL COMPONENT

import React from "react";
import posts from "./../data/data2.json";

export const SocialMedias = () => {

  const media = posts.SocialMedias.map((media) => <li key={media}>{media}</li>);

  return <ul>{media}</ul>;
};

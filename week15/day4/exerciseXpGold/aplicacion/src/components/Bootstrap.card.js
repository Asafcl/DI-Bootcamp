import React from "react";
import { celebrities } from "./BootstrapInfo";
import "./bootstrap.card.css";

export const BootstrapCard = () => {
  return (
    <div className="card-m-5" style={{ width: "30rem" }}>
      {celebrities.map((celebrity, index) => (
        <div className="oneCard" key={index}>
          <img
            className="card-img-top"
            src={celebrity.imageUrl}
            alt="Card img"
          />

          <div className="card-body">
            <h5 className="card-title">{celebrity.title}</h5>
            <p className="card-text">{celebrity.description}</p>
            <a href={celebrity.buttonUrl} className="btn btn-primary">
              {celebrity.buttonLabel}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

//   return (
//     <div className="card-m-5" style={{ width: "30rem" }}>
//       <div className="oneCard">
//         <img
//           className="card-img-top"
//           src={celebrities[0].imageUrl}
//           alt="Card img"
//         />

//         <div className="card-body">
//           <h5 className="card-title">{celebrities[0].title}</h5>
//           <p className="card-text">{celebrities[0].description}</p>
//           <a href={celebrities[0].buttonUrl} className="btn btn-primary">
//             {celebrities[0].buttonLabel}
//           </a>
//         </div>
//       </div>

//       <img
//         className="card-img-top"
//         src={celebrities[1].imageUrl}
//         alt="Card img"
//       />

//       <div className="card-body">
//         <h5 className="card-title">{celebrities[1].title}</h5>
//         <p className="card-text">{celebrities[1].description}</p>
//         <a href={celebrities[1].buttonUrl} className="btn btn-primary">
//           {celebrities[1].buttonLabel}
//         </a>
//       </div>
//     </div>
//   );
// };

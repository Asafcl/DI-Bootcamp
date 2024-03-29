  // old mode
  
  // import { StrictMode } from "react";
  // import ReactDOM from "react-dom";
  // import { Provider } from "react-redux";
  // import App from "./App";
  // import store from "./redux/store";



  // const rootElement = document.getElementById("root");
  // ReactDOM.render(
  //   <StrictMode>
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   </StrictMode>,
  //   rootElement
  // );


  import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

  const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);



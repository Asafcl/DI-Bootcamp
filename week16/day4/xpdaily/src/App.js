import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import {PostList} from './components/post-list'
import {SocialMedias} from './components/socialMedias'
import {Skills} from './components/Skills'
import {Experiences} from './components/Experiences'
import { Button } from "bootstrap";

// const routes = (
//   <Routes>
//     <Route path="/" element={<HomeScreen />}></Route>
//     <Route path="/profile" element={<ProfileScreen />}></Route>
//     <Route path="/shop" element={<ShopScreen />}></Route>
//   </Routes>
// );
// export default class App extends React.Component {
//   render(){
//     return (
//       <ErrorBoundary>
//         <BrowserRouter>
//         <Navbar/>
//         {routes}
//         </BrowserRouter>
//       </ErrorBoundary>
//     )
//   }
// }

// function Navbar() {
//   return (
//     <div>
//     {/* <h1>Welcome to React Router & Bootstrap!</h1> */}
//     <nav className="nav nav-pills">
//       <NavLink className="nav-link" to="/">Home</NavLink>
//       <NavLink className="nav-link" to="/profile">Profile</NavLink>
//       <NavLink className="nav-link" to="/shop">Shop</NavLink>
//     </nav>
//     </div>
//   )
// }

// function HomeScreen() {
//   return <h1>Home</h1>;
// }
// function ProfileScreen() {
//   return <h1>Profile</h1>;
// }
// function ShopScreen() {
//   // throw new Error("Oh no!");
//   return <h1>Shop</h1>;
// }



// otra forma de hacer ejercicio 1

// Con esto ya no tenemos que crear el error boundary component o file por nuestra cuenta ya que viene integrado dentro del npm install error boundary que instalamos en la terminal


// const routes = (
//   <Routes>
//     <Route path="/" element={<HomeScreen />} />
//     <Route path="/profile" element={<ProfileScreen />} />
//     <Route path="/shop" element={<ShopScreen />} />
//   </Routes>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };

// function Navbar() {
//   return (
//     <div>
//       {/* <h1>Welcome to React Router & Bootstrap!</h1> */}

//       <nav className="nav nav-pills flex-column">
//         <NavLink className="nav-link" to="/">
//           Home
//         </NavLink>
//         <NavLink className="nav-link" to="/profile">
//           Profile
//         </NavLink>
//         <NavLink className="nav-link" to="/shop">
//           Shop
//         </NavLink>
//       </nav>
//     </div>
//   );
// }

// function HomeScreen() {
//   return <h1>Home</h1>;
// }

// function ProfileScreen() {
//   return <h1>Profile</h1>;
// }

// function ShopScreen() {
//   throw new Error("Oh no!");
//   // return <h1>Shop</h1>;
// }

// function ErrorFallback() {
//   return <h1>An error has occurred.</h1>;
// }

// export default App;



// exercise 2

// const routes = (
//   <Routes>
//     <Route path="/" element={<PostList />} />
//     <Route path="/profile" element={<ProfileScreen />} />
//     <Route path="/shop" element={<ShopScreen />} />
//   </Routes>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };

// function Navbar() {
//   return (
//     <div>
//       <h1>Welcome to React Router & Bootstrap!</h1>

//       <nav className="nav nav-pills flex-column">
//         <NavLink className="nav-link" to="/">
//           Posts
//         </NavLink>
//         <NavLink className="nav-link" to="/profile">
//           Profile
//         </NavLink>
//         <NavLink className="nav-link" to="/shop">
//           Shop
//         </NavLink>
//       </nav>
//     </div>
//   );
// }



// function ProfileScreen() {
//   return <h1>Profile</h1>;
// }

// function ShopScreen() {
//   return <h1>Shop</h1>;
// }

// function ErrorFallback() {
//   return <h1>An error has occurred.</h1>;
// }

// export default App;

// exercise 3

// const routes = (
//   <Routes>
//     <Route path="/" element={<SocialMedias />} />
//     <Route path="/Experiences" element={<Experiences />} />
//     <Route path="/Skills" element={<Skills />} />
//   </Routes>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         {routes}
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };

// function Navbar() {
//   return (
//     <div>
//       <h1>Welcome to React Router & Bootstrap!</h1>

//       <nav className="nav nav-pills flex-column">
//         <NavLink className="nav-link" to="/">
//           Social Media
//         </NavLink>
//         <NavLink className="nav-link" to="/Experiences">
//           Experiences
//         </NavLink>
//         <NavLink className="nav-link" to="/Skills">
//           Skills
//         </NavLink>
//       </nav>
//     </div>
//   );
// }

// function ErrorFallback() {
//   return <h1>An error has occurred.</h1>;
// }

// export default App;

// exercise 4

// export class App extends  React.Component{
//   handleClick = async()=>{
//     const url = "https://webhook.site/58de1c78-828f-4606-bbf4-f548880ec347"
//     try{
//       const body ={
//         key1: 'myusername',
// email: 'mymail@gmail.com',
// name: 'Isaac',
// lastname: 'Doe',
// age: 27
//       }
//       const option ={
//         method:'POST',
//         headers:{
//           'content-type':'aplication:json'
//         },
//         body: JSON.stringify(body)

//       }
//       const res = await fetch(url,option)
//       console.log('res:',res)
//     } catch(err){
//       console.error(err)
//     }
//   }
//   render(){
//     return (<button onClick={this.handleClick}>Post data</button>)
//   }
// }
// export default App

// functional component del ejercicio anterior number 4

// const App = () => {
//   const handleClick = async () => {
//     const url = "https://webhook.site/58de1c78-828f-4606-bbf4-f548880ec347";
//     try {
//       const body = {
//         key1: 'myusername',
//         email: 'mymail@gmail.com',
//         name: 'Isaac',
//         lastname: 'Doe',
//         age: 27
//       };
//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//       };
//       const res = await fetch(url, options);
//       console.log('res:', res);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <button onClick={handleClick}>Post data</button>
//   );
// };

// export default App;
